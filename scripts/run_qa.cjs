const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const QA_DIR = path.join(__dirname, '..', 'evidence', 'qa');
const SCREENSHOT_DIR = path.join(__dirname, '..', 'evidence', 'screenshots');

if (!fs.existsSync(QA_DIR)) fs.mkdirSync(QA_DIR, { recursive: true });
if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const VIEWPORTS = [
  { name: 'Mobile 320 (iPhone SE)', width: 320, height: 800 },
  { name: 'Mobile 360 (Android Std)', width: 360, height: 800 },
  { name: 'Mobile 390 (iPhone 12/13/14)', width: 390, height: 844 },
  { name: 'Mobile 430 (iPhone Pro Max)', width: 430, height: 932 },
  { name: 'Tablet 768 (iPad Portrait)', width: 768, height: 1024 },
  { name: 'Tablet 1024 (iPad Landscape)', width: 1024, height: 768 },
  { name: 'Desktop 1440 (Standard)', width: 1440, height: 900 },
  { name: 'Desktop 1920 (Widescreen)', width: 1920, height: 1080 }
];

async function runProductionQA() {
  console.log('=== MEKIAN BILVERKSTAD: PRODUCTION QA SWEEP (8 VIEWPORTS) ===\n');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  
  const results = [];
  let allPass = true;

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    const failedRequests = [];
    page.on('requestfailed', req => {
      failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
    });

    const resp = await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const metrics = await page.evaluate(() => {
      const innerW = window.innerWidth;
      const scrollW = document.documentElement.scrollWidth;
      const bodyW = document.body ? document.body.scrollWidth : 0;
      
      const elements = Array.from(document.querySelectorAll('*'));
      const overflowing = elements.filter(el => {
        const r = el.getBoundingClientRect();
        return r.right > innerW + 1;
      }).map(el => ({
        tag: el.tagName,
        cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 30) : '',
        right: Math.round(el.getBoundingClientRect().right)
      }));

      return {
        innerW,
        scrollW,
        bodyW,
        hasOverflow: scrollW > innerW,
        overflowingElementsCount: overflowing.length,
        topOverflowing: overflowing.slice(0, 3)
      };
    });

    // Save screenshot for each viewport
    const vpFileName = `qa-viewport-${vp.width}x${vp.height}.png`;
    await page.screenshot({ path: path.join(QA_DIR, vpFileName), fullPage: true });

    const pass = !metrics.hasOverflow && consoleErrors.length === 0 && failedRequests.length === 0;
    if (!pass) allPass = false;

    results.push({
      viewport: `${vp.width}x${vp.height}`,
      name: vp.name,
      width: vp.width,
      scrollWidth: metrics.scrollW,
      overflow: metrics.scrollW > metrics.innerW ? `+${metrics.scrollW - metrics.innerW}px` : '0px',
      consoleErrors: consoleErrors.length,
      failedRequests: failedRequests.length,
      status: pass ? 'PASS' : 'FAIL',
      screenshot: `evidence/qa/${vpFileName}`
    });

    console.log(`[${vp.name} (${vp.width}x${vp.height})] => ${pass ? 'PASS' : 'FAIL'} | ScrollW: ${metrics.scrollW}px (Overflow: ${metrics.scrollW > metrics.innerW ? 'YES' : '0px'}) | ConsoleErrors: ${consoleErrors.length}`);
    await page.close();
  }

  // Interaction Tests
  console.log('\n=== TESTING INTERACTIONS & ACCESSIBILITY ===');
  const testPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await testPage.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });

  // 1. Test Skip Link
  const skipLink = await testPage.$('a[href="#main-content"]');
  console.log('✓ Skip-to-content link present in DOM:', skipLink ? 'YES' : 'NO');

  // 2. Test Registration Number Form Prefill Flow
  await testPage.fill('input[placeholder*="REGNR"]', 'ABC 123');
  await testPage.click('button:has-text("Fortsätt till förfrågan")');
  await testPage.waitForTimeout(400);

  const modalVisible = await testPage.isVisible('div[role="dialog"]');
  console.log('✓ Modal opened with role="dialog":', modalVisible ? 'YES' : 'NO');

  // 3. Test ESC Key Close
  await testPage.keyboard.press('Escape');
  await testPage.waitForTimeout(300);
  const modalClosedAfterEsc = !(await testPage.isVisible('div[role="dialog"]'));
  console.log('✓ Modal closed upon pressing ESC key:', modalClosedAfterEsc ? 'YES' : 'NO');

  // 4. Reopen modal and test mailto generation
  await testPage.click('button:has-text("Fortsätt till förfrågan")');
  await testPage.waitForTimeout(300);
  await testPage.fill('input[placeholder="För- och efternamn"]', 'Anna Lindqvist');
  await testPage.fill('input[placeholder="070-123 45 67"]', '070-987 65 43');
  await testPage.click('button:has-text("Skicka förfrågan via e-post")');
  await testPage.waitForTimeout(400);

  const mailtoScreenVisible = await testPage.isVisible('h3:has-text("Öppnar ditt e-postprogram")');
  console.log('✓ Honest mailto dispatch screen rendered:', mailtoScreenVisible ? 'YES' : 'NO');

  await testPage.close();
  await browser.close();

  // Save QA Results Ledger
  fs.writeFileSync(path.join(QA_DIR, 'qa_results.json'), JSON.stringify(results, null, 2));
  console.log('\n✓ Saved evidence/qa/qa_results.json');

  console.log('\n=== PRODUCTION QA TABLE ===');
  console.table(results.map(r => ({
    Viewport: r.viewport,
    Name: r.name,
    ScrollWidth: r.scrollWidth,
    Overflow: r.overflow,
    ConsoleErrors: r.consoleErrors,
    Status: r.status
  })));

  console.log('\nOVERALL QA STATUS:', allPass && modalVisible && modalClosedAfterEsc && mailtoScreenVisible ? '100% PASS' : 'ISSUES DETECTED');
}

runProductionQA().catch(console.error);

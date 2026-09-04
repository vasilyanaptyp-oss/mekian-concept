const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const EVIDENCE_DIR = path.join(__dirname, '..', 'evidence', 'screenshots');
if (!fs.existsSync(EVIDENCE_DIR)) {
  fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'Mobile 320 (iPhone SE)', width: 320, height: 640 },
  { name: 'Mobile 360 (Android Std)', width: 360, height: 800 },
  { name: 'Mobile 390 (iPhone 12/13/14)', width: 390, height: 844 },
  { name: 'Mobile 430 (iPhone Pro Max)', width: 430, height: 932 },
  { name: 'Tablet 768 (iPad)', width: 768, height: 1024 },
  { name: 'Desktop 1440 (Standard)', width: 1440, height: 900 }
];

async function runQA() {
  console.log('Starting Playwright QA Sweep across 6 Viewports...');
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

    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

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

    // Capture screenshots for 390 and 1440
    if (vp.width === 390) {
      await page.screenshot({ path: path.join(EVIDENCE_DIR, 'concept-mobile-390.png'), fullPage: true });
      console.log('✓ Captured full-page mobile screenshot: evidence/screenshots/concept-mobile-390.png');
    } else if (vp.width === 1440) {
      await page.screenshot({ path: path.join(EVIDENCE_DIR, 'concept-desktop-1440.png'), fullPage: true });
      console.log('✓ Captured full-page desktop screenshot: evidence/screenshots/concept-desktop-1440.png');
    }

    const pass = !metrics.hasOverflow && consoleErrors.length === 0 && failedRequests.length === 0;
    if (!pass) allPass = false;

    results.push({
      viewport: vp.name,
      width: vp.width,
      scrollWidth: metrics.scrollW,
      hasOverflow: metrics.hasOverflow,
      consoleErrors: consoleErrors.length,
      failedRequests: failedRequests.length,
      status: pass ? 'PASS' : 'FAIL'
    });

    console.log(`[${vp.name}] => ${pass ? 'PASS' : 'FAIL'} (Width: ${metrics.innerW}px, ScrollW: ${metrics.scrollW}px, ConsoleErr: ${consoleErrors.length})`);
    if (metrics.hasOverflow) {
      console.log('   Overflow details:', metrics.topOverflowing);
    }
    if (consoleErrors.length > 0) {
      console.log('   Console errors:', consoleErrors);
    }

    await page.close();
  }

  // Interactive flow test on Mobile (390px)
  console.log('\nTesting Interactive Flows (Modal & Regnr input)...');
  const testPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await testPage.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });

  // 1. Fill Regnr in Hero
  await testPage.fill('input[placeholder*="REGNR"]', 'XYZ 789');
  await testPage.click('button:has-text("Fortsätt till förfrågan")');
  await testPage.waitForTimeout(400);
  // Check if modal opened with prefilled regnr
  const modalHeader = await testPage.textContent('h3:has-text("Boka tid hos MEKIAN")');
  console.log('✓ Modal opened successfully on Regnr submit:', modalHeader ? 'YES' : 'NO');

  // Fill modal form
  await testPage.fill('input[placeholder="För- och efternamn"]', 'Lars Svensson');
  await testPage.fill('input[placeholder="070-123 45 67"]', '070-123 45 67');
  await testPage.click('button:has-text("Skicka förfrågan via e-post")');
  await testPage.waitForTimeout(400);

  const confirmText = await testPage.textContent('h3:has-text("Öppnar ditt e-postprogram")');
  console.log('✓ Mailto dispatch screen shown (honest direct contact):', confirmText ? 'YES' : 'NO');

  await testPage.screenshot({ path: path.join(EVIDENCE_DIR, 'concept-modal-confirmed-390.png') });
  console.log('✓ Captured modal confirmation screenshot: evidence/screenshots/concept-modal-confirmed-390.png');

  await testPage.close();
  await browser.close();

  console.log('\n=== QA RESULTS SUMMARY ===');
  console.table(results);
  console.log('Overall Status:', allPass ? '100% PASS' : 'ISSUES DETECTED');
}

runQA().catch(console.error);

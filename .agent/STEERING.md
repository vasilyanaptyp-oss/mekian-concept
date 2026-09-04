# MEKIAN Bilverkstad — Project Steering & Governance

**Project Root:** `C:/Users/vasil/Documents/KimiK3-Workspace/mekian-concept`  
**Client:** MEKIAN Bilverkstad AB, Täby, Sweden (`info@mekian.com`, `https://mekian.com`)  
**Deployment Target:** GitHub Pages (`https://vasilyanaptyp-oss.github.io/mekian-concept/`)  
**Mandate:** Transform concept into a finished commercial-grade production website that realistically replaces `mekian.com`.

---

## 1. Non-Negotiable Invariants

1. **Facts Over Creativity**: Never invent ratings, reviews, certifications, vehicle brands, staff members, founding years, or price lists.
2. **Zero Fake Functionality**: If no server backend exists, never pretend data was saved, sent to an API, or booked. All booking requests must use transparent direct `mailto:` dispatch with full prefill.
3. **Calm Swedish Tone**: Understated, practical, professional Scandinavian local business tone. No hype, no AI cliches ("din pålitliga partner", "vi brinner för").
4. **Mobile First**: 320px to 430px must be 100% usable with one thumb, zero horizontal overflow, comfortable tap targets (min 44x44px), and sticky contact access.
5. **No Client Outreach**: Strictly prohibited from sending emails to MEKIAN or publishing to their live domain.

---

## 2. Multi-Agent Role Segregation

- **Agent 1 (Business Fact Researcher)**: Validates every claim against `https://mekian.com` and public registers.
- **Agent 2 (Content Architect)**: Ensures all useful first-party content is preserved without filler.
- **Agent 3 (Swedish Copy Editor)**: Reviews every sentence for natural local tone.
- **Agent 4 (UX / Conversion Reviewer)**: Audits tap targets, flow, registration input, and contact CTAs.
- **Agent 5 (Visual Design Director)**: Enforces Scandinavian workshop aesthetic, clean spacing, and authenticity.
- **Agent 6 (Implementer)**: Exclusive owner of production source files in `src/`.
- **Agent 7 (Technical QA)**: Cross-viewport testing (320 to 1920px), console audits, performance, and accessibility.
- **Agent 8 (Blind Red Team / Prosecutor)**: Independent final release audit against factual and functional defects.

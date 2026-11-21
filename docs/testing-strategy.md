# Testing Strategy — Shubham Bramhane Portfolio (GTA VI Leonida Edition)

## 1. Current Verification Baseline
The repository validates correctness through strict TypeScript compilation, Next.js 16 production bundling, and live desktop/mobile visual and interactive QA in Chrome. Automated unit and E2E harnesses are specified below as the Phase 4 quality roadmap.

## 2. Test Pyramid & Coverage Scope
| Layer | Status | Scope & Targets |
|---|---|---|
| **Static Analysis & Build** | Active | `npx tsc --noEmit` (strict TypeScript validation across `app/`, `components/`, `data/`), `npm run build` (Next.js App Router compilation, font bundling, static prerendering). |
| **Manual & Browser Visual QA** | Active | Desktop (`1440x900`), tablet (`1024x768`), and mobile (`390x844`) rendering, giant `VI` sunset backdrop contrast, scroll-linked 6-Star Wanted Meter & Leonida Mini-Map radar updates, filter transitions, toast banners, external links, and resume PDF download. |
| **API / Integration Verification** | Active (Manual) / Planned (Automated) | `POST /api/contact` validation (`400` on missing required fields, `200` with valid SMTP env vars, `500` error handling on SMTP failure). |
| **Unit & Component Tests** | Planned (Phase 4) | Vitest + React Testing Library for `Projects` category filtering, `Experience` track switching, `Hero` tab switching & clipboard copy, and `GtaHud` custom-event toast dispatching. |
| **End-to-End (E2E) Tests** | Planned (Phase 4) | Playwright cross-browser suite validating smooth navigation, mini-map jump links, form submission flow (mocked `/api/contact`), and visual regression snapshots. |

## 3. Verification Commands
On Windows PowerShell (where `npm.ps1` execution may be restricted), use `npm.cmd` and `npx.cmd`:

```bash
# Install dependencies
npm.cmd install

# Type-check entire project without emitting files
npx.cmd tsc --noEmit

# Run full production build
npm.cmd run build

# Start local production server for browser QA
npm.cmd run start -- -p 3000
```

## 4. Critical Test Scenarios
1. **Leonida Navbar & 6-Star Wanted Level**:
   - Clicking each top navigation item (`Home`, `About`, `Skills`, `Projects`, `Journey`, `Contact`) smoothly scrolls to the target section.
   - Scrolling down dynamically highlights the active tab with the sunset horizon underline and increments the Wanted Level stars (`1★` -> `6★`).
2. **Hero Sunset Backdrop & Vice Terminal VI**:
   - Giant `VI` watermark and Vice Beach palm silhouettes render cleanly behind content without obstructing headline or CTA legibility.
   - Switching between `Architecture.ts`, `AI-Agentic-Engine.json`, and `Leonida-Live.log` updates terminal contents cleanly; clicking Copy triggers `"INTEL COPIED // VI"`.
3. **Leonida Bay Mini-Map HUD**:
   - Desktop viewport (`> 1120px`) displays the bottom-left radar showing active sector (`VI-01`..`VI-06`) and clickable blips that fast-travel to each section.
   - Clicking `−` / `+` collapses and expands the HUD cleanly; viewports `<= 1120px` auto-hide the mini-map.
4. **Projects Postcard Filters & Experience Tracks**:
   - Filtering Projects (`ALL MISSIONS`, `HEALTHCARE OPS`, `ENTERPRISE & CRM`, `FULL-STACK`) renders the exact matching subset of `data/profile.ts` records with Leonida postcard stamps intact.
   - Switching Experience tracks (`ALL CHAPTERS`, `CAREER MISSIONS`, `ACADEMIC CREDENTIALS`) filters work vs. education cards cleanly.
5. **Resume Dossier & Vice Comms Contact Flow**:
   - Clicking any Dossier/Resume button opens `/shubham_bramhane_resume.pdf` and fires `"DOSSIER VI ACQUIRED"`.
   - Clicking Copy next to email copies `shubham.bramhane75@gmail.com` and fires `"COMMS COPIED // VI"`.
   - Submitting `/api/contact` validates required fields (`400` when incomplete, `200` with valid SMTP -> `"MISSION PASSED! TRANSMISSION RECEIVED"`).
6. **Responsive Mobile Drawer**:
   - Below `768px`, the burger menu opens the right-hand GTA VI Leonida drawer displaying the 6-Star Wanted Meter and closes on selection or backdrop click, with zero horizontal page overflow.

## 5. Regression & CI Checklist
- Run `npx.cmd tsc --noEmit` and `npm.cmd run build` with zero errors.
- Confirm zero browser console errors, hydration mismatches, or failed static asset requests (`404`/`500`).
- Planned CI: Add `.github/workflows/ci.yml` to run `npm ci`, `npx tsc --noEmit`, and `npm run build` on pull requests targeting `main`.

# Product Requirements Document (PRD) — Shubham Bramhane Portfolio (GTA VI Leonida Edition)

## 1. Problem Statement
Technical recruiters, engineering managers, and enterprise clients reviewing senior full-stack candidates often encounter generic portfolio templates that fail to convey real architectural depth, production performance impact, or memorable craft. **Shubham Bramhane's Portfolio ("Grand Theft Code VI — Leonida Edition")** solves this by pairing a distinctive, next-gen **Grand Theft Auto VI (Vice City / State of Leonida sunset)** visual identity with crisp, immediately scannable engineering proof points, live project links, an interactive code/telemetry terminal, and a working direct-dispatch contact flow.

## 2. Target Users & Personas
- **Technical Recruiters & Hiring Managers**: Need fast access to years of experience (`5+ Yrs`), core stack (`PHP 8.3 / Laravel 11`, `React / Next.js`, `Vue.js`, `Redis`, `MySQL / PostgreSQL`), quantifiable impact (`+30%` query velocity, `10+ hrs/wk` saved), and a 1-click PDF resume download.
- **CTOs & Engineering Leads**: Inspect architectural maturity via the interactive Leonida.net terminal (`Architecture.ts`, `AI-Agentic-Engine.json`, `Leonida-Live.log`), production healthcare & enterprise case studies (`Oncquest`, `Lal Path Labs`, `Big Basket TMS`), and career progression.
- **Consulting & Freelance Clients**: Evaluate domain fit (healthcare diagnostics, CRM/TMS portals, Python automation) and reach out directly via the Vice Comms form, direct email copy button, phone, or LinkedIn/GitHub.

## 3. Goals & Non-Goals
### Goals
- Present an unmistakable **GTA VI (Leonida & Vice City Sunset)** aesthetic — flamingo pink, sunset peach-coral, golden hour amber, Biscayne Bay aqua, giant translucent `VI` sunset numeral backdrop, palm silhouettes, and Leonida postcard project framing — while maintaining executive legibility and zero blocking intro screens.
- Keep all real professional credentials, live deployments, GitHub/LinkedIn links, and resume PDF download (`/shubham_bramhane_resume.pdf`) accurate and effortless to reach.
- Deliver interactive micro-delight via a dynamic **6-Star Wanted Level** scroll meter (`1★`–`6★`), **GTA VI 6-segment stat bars**, a collapsible bottom-left **Leonida Bay Mini-Map** radar, and `"MISSION PASSED // VI"` / `"DOSSIER VI ACQUIRED"` toast notifications.
- Ensure full mobile and tablet responsiveness with a slide-out GTA VI Leonida navigation drawer and horizontal scrollable category filters.

### Non-Goals
- No user authentication, CMS admin panel, or database persistence (portfolio data is version-controlled in `data/profile.ts`).
- No heavy WebGL/3D game engines or forced blocking loading screens that degrade Core Web Vitals or recruiter accessibility.
- No auto-playing audio effects.

## 4. Functional Requirements
| ID | Feature | Description | Implementation |
|---|---|---|---|
| FR-01 | GTA VI Leonida Navbar & 6-Star Wanted Meter | Sticky frosted dusk navigation bar with `SB VI` emblem, smooth-scroll section tabs, dynamic `1★–6★` Wanted Level tied to scroll position, mobile Leonida drawer, and `DOSSIER VI` resume download. | `components/Navbar.tsx` |
| FR-02 | 3D Leonida Sunset Hero | Full-bleed Vice City sunset skyline & turquoise ocean artwork (`/gta6-vice-hero.jpg`) with mouse-driven 3D parallax, 60fps 3D perspective ocean grid & bokeh canvas, live availability beacon, `SENIOR FULL-STACK ARCHITECT` cyan eyebrow, `Shubham Bramhane` heading, 4 GitHub-banner glowing CTA cards, and 4 3D HUD metric tiles with 6-segment stat bars. | `components/Hero.tsx`, `components/Vice3DCanvas.tsx` |
| FR-03 | Interactive GTA VI HUD & Toast System | Global custom-event Leonida toast banner + collapsible desktop bottom-left Biscayne Bay Mini-Map radar (`VI-01`–`VI-06`) with clickable section waypoints and Health/Armor/Special bars. | `components/GtaHud.tsx` |
| FR-04 | Character Dossier & Signature Abilities | GTA VI sunset-framed portrait (`shubham.jpeg`), dossier quick badges, extended bio, CTA links, and 4-column core competencies grid. | `components/About.tsx` |
| FR-05 | Player Specs & Tech Arsenal | 4 categorized skill cards (Backend, AI Agentic Engineering, Frontend, DevOps/Security) displaying discrete GTA VI 6-segment proficiency bars. | `components/Skills.tsx` |
| FR-06 | Leonida Postcard Missions (Projects) | Filterable showcase (`ALL MISSIONS`, `HEALTHCARE OPS`, `ENTERPRISE & CRM`, `FULL-STACK`) displaying 7 projects with sunset-vignette screenshots, Leonida postcard zone stamps (`VICE BEACH`, `LEONIDA KEYS`, `PORT GELLHORN`, etc.), impact badges, tech tags, GitHub, and live site links. | `components/Projects.tsx` |
| FR-07 | Story Mode VI Progression (Experience) | Track-filterable timeline (`ALL CHAPTERS`, `CAREER MISSIONS`, `ACADEMIC CREDENTIALS`) with glowing map-blip pins, pink-peach-aqua GPS route connector, and highlight objectives. | `components/Experience.tsx` |
| FR-08 | Vice Comms & Email Dispatch | Direct channels (1-click email copy, phone, location, resume PDF, socials) plus validated contact form submitting via `POST /api/contact` with Nodemailer SMTP delivery and `"MISSION PASSED!"` success screen. | `components/Contact.tsx`, `app/api/contact/route.ts` |
| FR-09 | Footer & Fast-Travel Button | GTA VI footer with `SB VI` + `"Welcome to Leonida"` lockup, online badge, quick links, and scroll-triggered back-to-top button. | `components/Footer.tsx` |

## 5. User Flows & Edge Cases
- **Recruiter Quick-Scan Flow**: Lands on Hero -> verifies `5+ Yrs`, `+30% Query Velocity`, `3.5x AI Velocity` -> clicks `DOSSIER VI` -> downloads `/shubham_bramhane_resume.pdf` -> sees `"DOSSIER VI ACQUIRED"` toast.
- **Project Exploration Flow**: Jumps to `Projects` (via navbar, Hero CTA, or mini-map blip `VI-04`) -> filters by `HEALTHCARE OPS` -> smooth 180ms transition -> clicks `LAUNCH LIVE` to inspect production URLs in a new tab.
- **Contact Submission Flow**: Fills `name`, `email`, `subject`, `message` -> clicks `TRANSMIT BRIEFING` -> disables submit button (`TRANSMITTING VIA LEONIDA.NET...`) -> shows inline error banner on HTTP 400/500 or transitions to `"MISSION PASSED! TRANSMISSION RECEIVED"` on HTTP 200.
- **Edge Cases Handled**:
  - Missing SMTP env vars or network failures surface an inline error banner without losing typed form state.
  - Missing `name`, `email`, or `message` returns HTTP `400` from `/api/contact`.
  - Mobile & tablet screens (`<= 1120px`) automatically hide the fixed mini-map radar so viewport space stays unobstructed.
  - Projects without screenshots render a styled Leonida Postcard fallback banner instead of broken images.

## 6. Success Metrics
- **Build & Type Safety**: Zero TypeScript or Next.js production build errors (`npx tsc --noEmit && npm run build`).
- **Accessibility & Responsiveness**: Clean layout across desktop (`1440px`), tablet (`1024px`), mobile (`390px`), and narrow viewports (`<= 400px`) with keyboard-accessible controls.
- **Conversion Friction**: Resume PDF accessible in <= 1 click from Navbar, Hero, About, Contact, and Footer.

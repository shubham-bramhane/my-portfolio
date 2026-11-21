# Implementation Plan — Shubham Bramhane Portfolio (GTA VI Leonida Edition)

## 1. Milestone Breakdown & Current Status

### Phase 1 — Core Next.js Portfolio Foundation (Completed)
- Scaffolded Next.js App Router + TypeScript project (`app/layout.tsx`, `app/page.tsx`, `tsconfig.json`, `next.config.mjs`).
- Structured real career, skills, projects, and academic dataset in `data/profile.ts` and static media assets under `public/`.
- Implemented server-side SMTP contact endpoint in `app/api/contact/route.ts` with Nodemailer.
- Deployed live production site on Vercel (`my-portfolio-shubham-bramhanes-projects.vercel.app`).

### Phase 2 — Grand Theft Code VI (GTA 6 Vice City Sunset 3D — GitHub Banner Edition) Redesign (Completed)
- **Typography & Metadata (`app/layout.tsx`, `public/favicon.svg`)**: Integrated sleek geometric `Outfit`, `Inter`, `JetBrains_Mono`, and `Yellowtail` via `next/font/google` matching the GitHub README banner style; designed custom GTA VI `VI / SB` Vice Sunset favicon.
- **Custom GTA VI Hero Artwork & 3D Multi-Plane Stage (`public/gta6-vice-hero.jpg`, `components/Vice3DCanvas.tsx`, `components/Tilt3DCard.tsx`)**:
  - Generated bespoke 16:9 widescreen Vice City Miami sunset skyline & turquoise Biscayne Bay illustration (`/gta6-vice-hero.jpg`) with mouse-driven 3D parallax.
  - Built 60fps 3D perspective ocean grid & floating sunset bokeh particle `<canvas>` (`Vice3DCanvas.tsx`).
  - Built reusable 3D tilt & specular glare wrapper (`Tilt3DCard.tsx`) with `translateZ` floating inner badges across Hero, About, Skills, Projects, Experience, and Contact.
- **GitHub-Banner Hero Layout (`components/Hero.tsx`)**: Styled wide-tracked cyan `SENIOR FULL-STACK ARCHITECT` kicker, smooth `Shubham Bramhane` headline, `Laravel · React & Next.js · Python · Redis & AWS · AI Systems` stack line, pipe-separated proof bar, 4 glowing action cards (`Explore Projects`, `Download Resume`, `LinkedIn Profile`, `Initiate Contact`), and 3D floating `LEONIDA.NET // VICE TERMINAL VI`.
- **Global HUD & Toast System (`components/GtaHud.tsx`, `app/page.tsx`)**: Built reusable `triggerGtaToast` custom-event toast banner (`"MISSION PASSED // VI"`, `"DOSSIER VI ACQUIRED"`, `"INTEL COPIED // VI"`) and collapsible desktop bottom-left Biscayne Bay Mini-Map radar (`VI-01`–`VI-06`) with clickable waypoints and Health/Armor/Special bars.
- **Leonida Navbar & 6-Star Wanted Meter (`components/Navbar.tsx`)**: Upgraded header to GTA VI frosted dusk bar with `SB VI` emblem, dynamic `1★–6★` Wanted Level tied to all 6 scroll sections, and mobile Leonida drawer.
- **Section Craft (`components/Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`, `Footer.tsx`, `data/profile.ts`)**:
  - Added giant translucent `VI` sunset numeral watermark, Vice sunset sun orb, and palm/skyline silhouette backdrop in Hero.
  - Built `LEONIDA.NET // VICE TERMINAL VI` with 3 interactive tabs and clipboard toast feedback.
  - Upgraded Hero metrics & Skills Arsenal to discrete 6-segment GTA VI gauges.
  - Styled Projects as **Leonida Postcards** (`VICE BEACH`, `VICE MED CENTER`, `LEONIDA HQ`, `LEONIDA KEYS`, `PORT GELLHORN`, `AMBROSIA DISTRICT`, `GRASSRIVERS LABS`).
  - Upgraded Experience timeline with flamingo-pink -> peach -> aqua GPS route and Contact form with `"MISSION PASSED!"` screen & GTA VI HTML email template (`app/api/contact/route.ts`).

### Phase 3 — Engineering Documentation & Shareable Overview PDF (Completed)
- Authored and synchronized `docs/prd.md`, `docs/trd.md`, `docs/implementation-plan.md`, `docs/testing-strategy.md`, and `docs/deployment-plan.md`.
- Regenerated shareable two-page overview PDF (`docs/shubham-bramhane-portfolio-overview.pdf`) styled to match the GTA VI Leonida palette.
- Updated `README.md` with GTA VI theme documentation and clickable links to all five engineering documents and the PDF overview.

## 2. Component & File Dependency Map
- `app/layout.tsx` -> loads `app/globals.css` and fonts for all pages.
- `app/page.tsx` -> renders `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`, `Footer`, `GtaHud`.
- `Navbar`, `Hero`, `About`, `Contact`, `Footer` -> depend on `data/profile.ts` and `triggerGtaToast` from `components/GtaHud.tsx`.
- `Skills`, `Projects`, `Experience` -> depend on `data/profile.ts`.
- `Contact` -> posts JSON payload to `app/api/contact/route.ts`.

## 3. Planned Roadmap (Future Phases)
- **Phase 4 — Security & Automated Quality Hardening**:
  - Escape HTML special characters in `app/api/contact/route.ts` before email template interpolation.
  - Add honeypot field / rate limiting on `/api/contact`.
  - Add Vitest + Playwright automated test suites and GitHub Actions CI workflow (defined in `docs/testing-strategy.md`).
- **Phase 5 — Interactive Enhancements (Optional)**:
  - Add Leonida Day/Dusk lighting intensity toggle or optional Vice City radio-station ticker widget.
  - Add JSON-LD `Person` schema markup and dynamic GTA VI OpenGraph image generation (`app/opengraph-image.tsx`).

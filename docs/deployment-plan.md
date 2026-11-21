# Deployment Plan — Shubham Bramhane Portfolio (GTA VI Leonida Edition)

## 1. Environments & Hosting Architecture
- **Production**: Hosted on **Vercel** at [https://my-portfolio-shubham-bramhanes-projects.vercel.app](https://my-portfolio-shubham-bramhanes-projects.vercel.app), built automatically from the `main` branch.
- **Preview**: Automatic Vercel Preview Deployments per branch / pull request.
- **Local Development**: `http://localhost:3000` via `npm run dev` (`npm.cmd run dev` on restricted Windows PowerShell).

## 2. Prerequisites
- Node.js `18.x` or `20.x+` (verified on Node `26.13.0` / npm `11.20.0`).
- Git access to the `my-portfolio` repository.
- SMTP credentials for the `/api/contact` Route Handler.

## 3. Environment Variables & Secrets Handling
Configure these server-only variables in **Vercel Project Settings -> Environment Variables** (and in `.env.local` locally; **never commit `.env.local`**):

| Variable | Required | Description |
|---|---|---|
| `MAIL_HOST` | Yes | SMTP server hostname (e.g., `smtp.gmail.com`) |
| `MAIL_PORT` | No (default `587`) | SMTP port (`587` for STARTTLS) |
| `MAIL_USERNAME` | Yes | SMTP account username |
| `MAIL_PASSWORD` | Yes | SMTP password or app-specific password |
| `MAIL_FROM_ADDRESS` | Yes | Sender and destination recipient address for contact briefings |

## 4. Build & Release Steps
1. **Verify locally before pushing**:
   ```bash
   npm.cmd install
   npx.cmd tsc --noEmit
   npm.cmd run build
   ```
2. **Commit and push to `main`**:
   ```bash
   git status
   git add .
   git commit -m "feat(theme): launch GTA VI Leonida & Vice City Sunset portfolio edition"
   git push origin main
   ```
3. **Vercel Automatic Build**:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next` (managed by Vercel)

## 5. Post-Deployment Smoke Tests
After Vercel deployment turns **Ready**:
1. Open `https://my-portfolio-shubham-bramhanes-projects.vercel.app` and verify HTTP `200`, Google Fonts (`Anton`, `Barlow Condensed`, `Yellowtail`), giant `VI` sunset backdrop, and `/favicon.svg`.
2. Scroll top-to-bottom on desktop and confirm the 6-Star Wanted Meter increments `1★ -> 6★` and the Leonida Bay Mini-Map updates sectors (`VI-01` -> `VI-06`).
3. Verify `/shubham_bramhane_resume.pdf` downloads cleanly and fires `"DOSSIER VI ACQUIRED"`.
4. Submit a test inquiry in **Vice Comms** and confirm receipt of the GTA VI Leonida HTML email via `/api/contact`.
5. Spot-check responsive layout on a mobile viewport (`390px` width) including the slide-out Leonida navigation drawer.

## 6. Backup, Restore & Rollback Procedures
- **Data & Asset Backup**: All portfolio content (`data/profile.ts`), components, styles, static screenshots, resume PDF, and `docs/` are version-controlled in Git (`origin/main`).
- **Instant Rollback (Vercel)**: In Vercel Dashboard -> **Deployments**, choose the previous known-good production deployment and select **Promote to Production**.
- **Git Rollback**: Run `git revert <commit-sha> && git push origin main` to trigger a clean rebuild.

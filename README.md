# Muhammad Ramiq Khan — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

All copy lives in `src/data/portfolio.js` — profile details, featured projects, the project grid and skills.
Project screenshots are WebP files in `src/assets/projects/` (1440×900 captures of the live sites).

## Deploying to Vercel

The repo is ready for Vercel's Vite preset (`vercel.json` pins the build command and output folder).

1. Push to GitHub (`main` branch).
2. In Vercel: **Add New → Project → Import** `ramiqkhan/Portfolio`.
3. Leave the detected settings (Framework: Vite, Build: `npm run build`, Output: `dist`) and click **Deploy**.

Every push to `main` then redeploys production; other branches and pull requests get preview URLs.
Requires Node 22.12+ (set via `engines` in `package.json`).

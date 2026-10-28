# BUTTER Website

The BUTTER artist site, originally built in Figma Make. React + Vite + Tailwind CSS, deployed to Cloudflare Pages at https://butter-website.pages.dev.

## Local development

Requires Node 22+ and pnpm 10 (`npm i -g pnpm`).

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
pnpm deploy     # build and upload to Cloudflare Pages by hand (normally not needed)
```

## Deployment

The Cloudflare Pages project `butter-website` is connected to this repo: every push to `main` builds and deploys automatically. Pushes to other branches get preview URLs.

- Build command: `pnpm run build`
- Build output directory: `dist`

`wrangler.jsonc` sets the project name and output directory. Because there's no `404.html`, Pages serves `index.html` for unknown paths, so `/music` and `/tour` work on refresh.

## Notes

- `.figma/` holds Figma Make's own scripts and metadata. It's kept so the repo can be re-imported into Figma Make, but it isn't used by the build.
- Images and the hero video are loaded from `buttermusic.dk` subdomains, not from this repo.

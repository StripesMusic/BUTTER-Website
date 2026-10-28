# BUTTER Website

The BUTTER artist site, originally built in Figma Make. React + Vite + Tailwind CSS, deployed to Cloudflare Workers (static assets).

## Local development

Requires Node 22+ and pnpm 10 (`npm i -g pnpm`).

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
pnpm deploy     # build and deploy to Cloudflare with wrangler
```

## Deployment

Cloudflare Workers Builds is connected to this repo: every push to `main` builds and deploys automatically.

- Build command: `pnpm run build`
- Deploy command: `npx wrangler deploy`

Config lives in `wrangler.jsonc`. Unknown paths (like `/music` and `/tour`) fall back to `index.html` so the in-page navigation works on refresh.

## Notes

- `.figma/` holds Figma Make's own scripts and metadata. It's kept so the repo can be re-imported into Figma Make, but it isn't used by the build.
- Images and the hero video are loaded from `buttermusic.dk` subdomains, not from this repo.

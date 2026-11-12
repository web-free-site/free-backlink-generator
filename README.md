# Free Backlink Generator

Live URL: https://free-backlink-generator.web-free.site

Client-side SEO **helper** that builds lookup and ping URLs for your domain (no ranking guarantee). Includes a backlink checklist and free directory list.

## Upstream

Engine and template JSON from [backlink-generator-tool/backlink-generator-tool](https://github.com/backlink-generator-tool/backlink-generator-tool) (see `LICENSE-UPSTREAM`).

## Develop

```bash
npm install
npm run dev
npm run build
```

Deploy is handled outside this repo (`wrangler.toml` included; do not deploy from agent runs).

## Stack

Vite + React, Cloudflare Workers static assets, Adsterra (`public/ads.json`).

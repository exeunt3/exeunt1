# Exeunt — Minimal Essays Site (Astro)

## Quickstart
```bash
npm i
npm run dev
```

## Content model
Markdown files live in `src/content/essays/` with front matter:
```yaml
---
title: "Your Essay Title"
date: "YYYY-MM-DD"
summary: "1–3 sentence summary for the homepage."
banner: "/images/your-image.jpg"   # path under /public
draft: false
---
```

Place images in `public/images/`.

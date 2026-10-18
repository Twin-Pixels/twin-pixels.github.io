# Devlog posts

One Markdown file per post, named `YYYY-MM-DD-short-title.md`. Front matter:

```yaml
---
title: 'Headline in plain words'
date: 2026-10-25
projects: ['kindred']        # kindred, driftstone, or both
summary: 'One sentence for the list page, feed and link previews.'
cover: /devlog/2026-10-25/cover.webp   # optional, in public/devlog/<date>/
coverAlt: 'What the cover shows'
draft: false                 # true keeps a post out of the built site and feed
---
```

Put images in `public/devlog/<date>/` (WebP, ideally under 300 KB each). The site lives at `/devlog/` and is marked `noindex` until it is announced; remove `noindex` in `src/layouts/DevlogLayout.astro` to list it in search.

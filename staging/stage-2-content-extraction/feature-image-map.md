# Feature: Image Mapping (CDN → Local)

## Stage
Stage 2 — Content Extraction

## What it is
A lookup table (`content/image-map.json`) that maps CDN image URLs found in `runtime-data.js` to their local equivalents in `assets/`. Also an audit of which images are bundled vs. missing.

## The problem
Articulate Rise exports often embed images as CDN URLs (e.g., `https://rise.articulate.com/img/...`) rather than local paths. These break when the course is self-hosted without internet access. We need to:
1. Find all image references in `runtime-data.js`
2. Check which ones exist locally in `the-change-hub-raw-XI9Ex8Dq/content/assets/`
3. Build a lookup table for the ones that match
4. Flag the ones that are missing (so they can be manually downloaded or noted)

## Tasks
- [ ] Audit `the-change-hub-raw-XI9Ex8Dq/content/assets/` — list all image files
- [ ] Grep `runtime-data.js` for all image URL patterns (`https://`, `.png`, `.jpg`, `.svg`, `.gif`)
- [ ] Cross-reference: which CDN URLs have a matching filename in assets?
- [ ] Write `content/image-map.json`: `{ "<cdn-url>": "assets/<local-filename>" }`
- [ ] Document gaps in `help.md` (images that need manual download)
- [ ] Update parse-scorm script to use the image map when writing content JSON

## Open Questions
- How many unique images does the course use? (Need to inspect `runtime-data.js` to estimate)
- Are the bundled assets in the SCORM export already the correct local copies, or just a subset?
- Are there SVG icons embedded inline (as data URIs) vs. referenced as files? (Inline is fine; referenced files need mapping)
- For hotspot maps specifically: the hotspot image is critical and must be pixel-accurate. Is it bundled locally?

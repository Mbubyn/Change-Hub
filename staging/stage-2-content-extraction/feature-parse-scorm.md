# Feature: Parse SCORM Script

## Stage
Stage 2 — Content Extraction

## What it is
A Node.js script (`scripts/parse-scorm.js`) that reads `the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js`, extracts all page content and interaction data, and writes structured JSON files to `content/pages/`. This is run once (or whenever the source course is updated) — deployers never need to run it.

## What the script must produce
For each of the 14 pages, a JSON file like `content/pages/world-of-change.json` containing:
- Page title and intro text
- An ordered list of content blocks, each with a `type` field:
  - `{ type: "text", body: "..." }`
  - `{ type: "tabs", items: [{ label, content }] }`
  - `{ type: "flipcard", items: [{ front, back }] }`
  - `{ type: "accordion", items: [{ heading, body }] }`
  - `{ type: "carousel", items: [{ content }] }`
  - `{ type: "hotspot", image: "...", spots: [{ x, y, label, content }] }`
  - `{ type: "airtable", url: "..." }`

## Tasks
- [ ] Read first 200 lines of `runtime-data.js` to understand its top-level structure
- [ ] Map how Rise stores page content (by lesson ID, by slug, etc.)
- [ ] Write a parser that extracts text blocks per page
- [ ] Extend parser for each interaction type (tabs, accordion, etc.)
- [ ] Write output files to `content/pages/<slug>.json`
- [ ] Validate output — check all 14 pages have content

## RESOLVED — runtime-data.js format (discovered 2026-06-05)
The file is a JSONP call wrapping base64-encoded JSON:
```js
__jsonp("runtime-data.js", "<base64-string>")
```
Parse approach:
1. Read file as string
2. Extract base64 with regex: `/__jsonp\("runtime-data\.js","([^"]+)"\)/`
3. `Buffer.from(b64, 'base64').toString('utf8')` → JSON string
4. `JSON.parse()` → course object

**Top-level structure:** `course.lessons[]` — array of 17 items (3 sections + 14 pages). Array order = display order.

**Lesson types:** `"blocks"` (14 pages) and `"section"` (3 sidebar headers)

**Block types within a lesson's `items[]`:** `text`, `quote`, `image`, `divider`, `list`, `multimedia`, `interactive`

**Interactive block identification:** use `item.family` + `item.variant`:
- `interactive/tabs` → tabs
- `interactive/accordion` → accordion
- `flashcard/flashcard` → flip cards
- `interactive-fullscreen/process` → carousel
- `interactive-fullscreen/labeledgraphic` → hotspot map

**Brand color:** `#1c4f52` (from `course.color` and `course.theme.colorAccent`)

**Fonts:** `course.headingTypeface` = "Poppins", `course.bodyTypeface` = "Poppins"

## Open Questions
- Are image references in `runtime-data.js` CDN URLs or local paths? (Need to inspect individual image blocks — likely CDN)
- Should the script be destructive (overwrite existing content files) or safe? (Destructive with `--force` flag is cleanest)
- What does the `interactive-fullscreen/labeledgraphic` (hotspot) data structure look like? Need to inspect to understand coordinate format and image reference.

# Change Hub — Master Plan

_Last updated: 2026-06-05_

---

## Pitch

The Change Hub is a self-hosted, white-label e-learning platform for Change Management practitioners. It began as an Articulate Rise course for the Government of Canada, rebuilt as plain static files so anyone can fork, brand, and deploy it — inside a firewall or on GitHub Pages — with no Rise licence and no server.

---

## Problem & Why

Articulate Rise courses are locked to the vendor: they can't be self-hosted, forked, or edited without the original authoring tool. The GoC Change Hub is high-value content that needs to live somewhere ownable, updatable without Rise, and deployable by other organizations who want the same framework with their own branding and content.

---

## Target Users

### End users (learners)
Government of Canada middle managers and change practitioners — both those leading change and those on the receiving end of it. They return repeatedly to look things up; they are not going through the course once and moving on.

**Top jobs-to-be-done:**
1. Find a specific CM tool or resource for their current phase of change
2. Understand the Change Hub Framework (CHF) and where they are within it
3. Download or link to a relevant toolkit document quickly

**Must-have:** The toolkit — a filterable, searchable resource library organized by role and phase.

### Deployers (white-label users)
Organizations (GoC departments or external) who want to run their own Change Hub. They are **not technical** — a content owner, not a developer. The deployment experience must be "edit one config file and everything updates."

---

## V1 Scope

### In scope
- 14 content pages across 3 sidebar sections (see Information Architecture below)
- 5 interaction types as fixed chrome: tabs, flip cards, accordions, carousels, hotspot maps
- Airtable iframes for toolkit dashboard (2 embeds: "How this Hub works" and "Change Roles")
- 96-item toolkit document download page
- Lexicon page
- Sidebar navigation with section + page structure
- Node.js content generation script (dev-time only) that parses `runtime-data.js` from the SCORM export and seeds content config files
- GoC reference implementation ships as the default content

### Explicitly out of scope for V1
- User accounts, login, or progress tracking
- Server-side rendering or databases
- Self-hosted toolkit dashboard (Airtable iframe is the v1 solution)
- Search across all content (toolkit filtering via Airtable is sufficient for v1)
- Multi-language support
- Analytics or completion tracking

---

## Information Architecture

```
Sidebar
├── How this Hub Works                    [Airtable iframe]
├── Part 1: Foundations in Change
│   ├── The World of Change               [Tabs, Flip card, Accordion, Carousel]
│   ├── Contexts of Change                [Accordion]
│   ├── Change Roles                      [Tabs, Airtable iframe]
│   └── The Change Hub Framework (CHF)    [Accordion, Tabs, Carousel]
├── Part 2: Learning the Framework
│   ├── Phase 1: Understanding the Change [Hotspots, Accordion]
│   ├── Phase 2: Preparing for Change     [Hotspots, Accordion]
│   ├── Phase 3: Implementing the Change  [Hotspots, Accordion]
│   ├── Phase 4: Adapting to the Change   [Hotspots, Accordion]
│   └── Phase 5: Solidifying the Change   [Hotspots, Accordion]
└── Part 3: Next Steps
    ├── Conclusion
    ├── Sources
    ├── Change Hub Toolkit: Documents     [96-item download page]
    └── Lexicon
```

**Total: 14 pages, 3 sidebar sections**

---

## Future Roadmap (6–12 months)

| Milestone | Description |
|---|---|
| Self-hosted toolkit dashboard | Replace Airtable iframes with a vanilla JS table/filter component driven by a local CSV — no external SaaS dependency |
| White-label config system | A single `config.yml` (or equivalent) where deployers set org name, logo, colors, framework name, and content paths |
| Deployer documentation | A `DEPLOYING.md` guide and a worked example of a second implementation (non-GoC) |
| Content authoring guide | Explains the content config format and how to update each interaction type |
| Searchable lexicon | Client-side search across the lexicon and possibly all page content |

### Architectural constraints to respect now
- **Do not hardcode GoC-specific content in HTML.** All content (text, interaction data, Airtable URLs) must live in config/data files from day one.
- **Do not assume Airtable.** The toolkit embed URL lives in config so it can be swapped for the future self-hosted dashboard without touching templates.
- **Toolkit data in CSV from the start.** Even if v1 uses Airtable, the canonical source of truth for toolkit items is a CSV file in the repo.
- **No framework lock-in.** Vanilla JS keeps the barrier to fork and modify as low as possible.

---

## Tech Stack & Key Decisions

| Layer | Choice | Why |
|---|---|---|
| HTML/CSS/JS | Vanilla, no framework | Lowest barrier to fork; no build step for deployers; long-term maintainability |
| Content generation | Node.js script (dev-time only) | Parses SCORM `runtime-data.js` once; deployers never run it |
| Content format | JSON + Markdown (TBD) | Machine-readable for the script, human-editable for content owners |
| Toolkit data | CSV | Portable, editable in Excel/Sheets, maps cleanly to future self-hosted dashboard |
| Hosting | GitHub Pages | Free, static, works inside firewalls when forked to private repos |
| Fonts | Bundled (Inter + Poppins from SCORM export) | No CDN dependency, works fully offline |
| Images | Local (from SCORM export assets) | CDN URLs in SCORM must be mapped to local paths via lookup table |

---

## Architecture Sketch

```
repo/
├── index.html                # Shell — sidebar nav + content pane
├── pages/                    # One HTML fragment per page (generated or hand-authored)
├── assets/                   # Fonts, images (from SCORM export)
├── css/
│   └── main.css              # Design tokens (colors, fonts) pulled from config
├── js/
│   ├── router.js             # Client-side routing (hash or pushState)
│   ├── interactions/         # One JS module per interaction type
│   │   ├── tabs.js
│   │   ├── flipcard.js
│   │   ├── accordion.js
│   │   ├── carousel.js
│   │   └── hotspot.js
│   └── toolkit.js            # Toolkit page logic
├── content/                  # Content config files (the "one file" deployers edit)
│   ├── config.json           # Branding: org name, logo, colors, Airtable URLs
│   ├── toolkit.csv           # 96+ toolkit resources
│   ├── lexicon.json          # Glossary entries
│   └── pages/                # One content file per page
│       ├── how-this-hub-works.json
│       ├── world-of-change.json
│       └── ...
├── scripts/
│   └── parse-scorm.js        # Dev-time: parses runtime-data.js → seeds content/
└── the-change-hub-raw-*/     # Original SCORM export (source of truth, not shipped)
```

---

## Staged Roadmap

| Stage | Goal | Headline feature | Definition of done |
|---|---|---|---|
| 1 — Foundation | Working shell | Sidebar nav + client-side routing | Navigate all 14 pages (empty), nav highlights correctly |
| 2 — Content extraction | Data layer | Node script seeds content config from SCORM | All 14 pages have populated content JSON; images mapped locally |
| 3 — Interactions | Component library | All 5 interaction types rendered from config | Each interaction type works on at least one real page |
| 4 — Content population | Full 14 pages | Every page renders with accurate GoC content | Visual parity with Rise original on all 14 pages |
| 5 — Toolkit | Resource hub | Airtable iframe + 96-item download page | Toolkit page loads, iframe embeds, all downloads work |
| 6 — White-label kit | Deployability | One-file config system + deployer docs | A stranger can fork, edit config, and have a working site in < 30 min |

---

## Open Questions & Risks

| # | Question / Risk | Impact | Status |
|---|---|---|---|
| 1 | CDN→local image mapping: SCORM assets have CDN URLs. Need a lookup table from CDN path → local `assets/` path. How complete is the asset bundle? | High — broken images across all pages | Open |
| 2 | Hotspot coordinates are pixel-based and tied to specific images. White-labeling requires either swapping the exact same image or re-authoring coordinates. | Medium — complicates deployer experience | Open |
| 3 | `runtime-data.js` structure: 598KB file, unknown internal format. Script complexity depends on how Rise organizes data. | High — Stage 2 is blocked until we understand this | Open |
| 4 | What is the canonical "one config file" format? JSON is machine-friendly but unfriendly to hand-edit. YAML/TOML may be better UX. | Medium — deployer experience | Open |
| 5 | Airtable embed URLs: are these public? Do they expire? Does embedding require an Airtable account? | Medium — Toolkit page depends on this | Open |

---

## Glossary

| Term | Definition |
|---|---|
| CHF | Change Hub Framework — the 5-phase change model taught in the course |
| SCORM export | The ZIP/folder export from Articulate Rise containing `runtime-data.js`, `index.html`, and all assets |
| Fixed chrome | Interaction types (tabs, flip cards, etc.) whose structure doesn't change when white-labeling — only the content inside them changes |
| Content config | The set of JSON/CSV files in `content/` that deployers edit to customize the site |
| Deployer | A non-technical content owner who forks the repo and customizes it for their organization |
| Runtime-data.js | The 598KB Rise-generated file containing all course content as a JS object — the source we parse to seed content config |
| Toolkit | The 96-item library of CM resources, filterable by role and phase |

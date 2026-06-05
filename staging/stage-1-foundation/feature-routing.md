# Feature: Client-Side Routing

## Stage
Stage 1 — Foundation

## What it is
Hash-based routing (`index.html#world-of-change`) that swaps the content pane when a nav link is clicked. No page reloads — the shell stays persistent and only the content area changes.

## Design
- Use URL hash (`window.location.hash`) — works on GitHub Pages without server config, works offline
- Each page has a slug (e.g., `how-this-hub-works`, `phase-1-understanding`)
- On hash change: look up the page by slug, load its content into the content pane
- Default route: first page ("How this Hub Works") when no hash is present

## Page slug map

| Slug | Page |
|---|---|
| `how-this-hub-works` | How this Hub Works |
| `world-of-change` | The World of Change |
| `contexts-of-change` | Contexts of Change |
| `change-roles` | Change Roles |
| `change-hub-framework` | The Change Hub Framework (CHF) |
| `phase-1` | Phase 1: Understanding the Change |
| `phase-2` | Phase 2: Preparing for Change |
| `phase-3` | Phase 3: Implementing the Change |
| `phase-4` | Phase 4: Adapting to the Change |
| `phase-5` | Phase 5: Solidifying the Change |
| `conclusion` | Conclusion |
| `sources` | Sources |
| `toolkit-documents` | Change Hub Toolkit: Documents |
| `lexicon` | Lexicon |

## Tasks
- [ ] Write `js/router.js` with hash-change listener
- [ ] Define page registry (slug → content loader function)
- [ ] Implement content pane swap (clear old content, render new)
- [ ] Handle default route (no hash)
- [ ] Handle unknown hash (404-style fallback to first page)
- [ ] Notify sidebar of active route change (for active state highlighting)

## Open Questions
- Content loading strategy: fetch separate HTML fragments per page, or keep all page content inline in JS objects? (Separate files are cleaner for white-labeling; inline is simpler for v1)
- Should the router scroll the content pane to the top on navigation? (Yes — match Rise behavior)
- Should back/forward browser buttons work? (Hash routing handles this automatically)

# Feature: Sidebar Navigation

## Stage
Stage 1 — Foundation

## What it is
A persistent left-side navigation panel with 3 collapsible sections containing all 14 page links. The active page is highlighted. Sections can be expanded/collapsed. On mobile, the sidebar may collapse to a hamburger menu.

## Pages to wire up

**How this Hub Works** (standalone, no section header)
- How this Hub Works

**Part 1: Foundations in Change**
- The World of Change
- Contexts of Change
- Change Roles
- The Change Hub Framework (CHF)

**Part 2: Learning the Framework**
- Phase 1: Understanding the Change
- Phase 2: Preparing for Change
- Phase 3: Implementing the Change
- Phase 4: Adapting to the Change
- Phase 5: Solidifying the Change

**Part 3: Next Steps**
- Conclusion
- Sources
- Change Hub Toolkit: Documents
- Lexicon

## Implementation notes
- Nav data should come from a JS array or `content/config.json` (not hardcoded HTML) so deployers can rename pages
- Active state set by the router when the hash changes
- Section collapse state persists in `localStorage` so it survives page navigation
- Sidebar width: reference the Rise original for exact proportions (~280px)

## Tasks
- [ ] Define nav data structure in `content/config.json` or `js/nav-data.js`
- [ ] Build HTML structure for sidebar
- [ ] Write CSS for sidebar (active state, hover, section headers, collapse animation)
- [ ] Wire collapse/expand toggle on section headers
- [ ] Persist collapse state in localStorage
- [ ] Connect to router (active state updates on hash change)

## Open Questions
- Should the sidebar be always-visible on desktop, or should it also be dismissible? (Rise original is always-visible — match that for v1)
- Mobile breakpoint behavior: full collapse to hamburger, or persistent narrow rail? (Check Rise original)
- Should "How this Hub Works" be grouped under a section header, or sit above Part 1 as a standalone entry?
- Nav data format: inline in JS, or part of `content/config.json`? (Leaning toward config.json so deployers can rename pages)

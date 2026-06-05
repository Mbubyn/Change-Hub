# Feature: Base HTML Template & Design System

## Stage
Stage 1 — Foundation

## What it is
The `index.html` shell and the CSS design system that all pages share. This establishes the visual identity — colors, typography, spacing — as CSS custom properties so deployers can override them via `content/config.json`.

## Layout
```
┌─────────────────────────────────────┐
│  [Logo / Org Name]   [Header bar]   │
├──────────────┬──────────────────────┤
│              │                      │
│   Sidebar    │   Content pane       │
│   (~280px)   │   (scrollable)       │
│              │                      │
│   Nav links  │   Page renders here  │
│              │                      │
└──────────────┴──────────────────────┘
```

## Design tokens to extract from Rise original
- Primary brand color (the teal/blue used for active states and headings)
- Background colors (sidebar bg vs. content bg)
- Font families: Inter (body), Poppins (headings) — bundled in assets
- Font sizes and weights for h1, h2, h3, body, nav
- Border radius, shadow, and spacing scale

## Files
- `index.html` — shell with sidebar + content pane divs
- `css/main.css` — custom properties + base styles
- `css/sidebar.css` — sidebar-specific styles
- `css/content.css` — content pane + typography

## Tasks
- [ ] Inspect `the-change-hub-raw-XI9Ex8Dq/content/index.html` for layout patterns
- [ ] Extract color palette from Rise original (DevTools or source)
- [ ] Define CSS custom properties for all design tokens
- [ ] Build `index.html` shell structure
- [ ] Set up font loading from bundled assets (no Google Fonts CDN)
- [ ] Write base CSS (reset, typography, layout grid)

## Open Questions
- Should CSS custom properties be set by an inline `<style>` block generated from `config.json`, or hardcoded in `main.css` with deployer instructions to edit the file? (Generated block is better for white-label UX)
- Does the Rise original use a top header bar with a logo, or just the sidebar? (Need to check source)
- What are the exact brand colors? (Extract from Rise CSS in Stage 1 spike)
- Should we use CSS Grid or Flexbox for the sidebar + content layout? (Either works; Grid is cleaner for this two-column layout)

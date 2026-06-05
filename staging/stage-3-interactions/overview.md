# Stage 3 — Interaction Components

## Goal
Build all 5 interaction types as reusable JS components that read from content config and render themselves. These are "fixed chrome" — the structure never changes, only the data piped into them.

## Features in this stage
- `feature-tabs.md` — Tab component (used on: World of Change, Change Roles, CHF)
- `feature-flipcard.md` — Flip card component (used on: World of Change)
- `feature-accordion.md` — Accordion component (used on: 9 pages)
- `feature-carousel.md` — Carousel/slideshow component (used on: World of Change, CHF)
- `feature-hotspot.md` — Hotspot map component (used on: all 5 Phase pages)

## Definition of done
- [ ] Each interaction type renders correctly from a JSON data object
- [ ] Each type is demonstrated on at least one real content page
- [ ] All interactions are keyboard accessible (tab, enter, space)
- [ ] No framework dependencies — pure vanilla JS
- [ ] Each component lives in `js/interactions/<type>.js`

# Change Hub — Session Rules

## Project one-liner
A white-label, self-hosted static site remake of an Articulate Rise Change Management course. The GoC version is the reference implementation; anyone can fork and redeploy with their own content.

## Tech stack
- **HTML/CSS/JS** — vanilla, no framework, no build step
- **Node.js** — dev-time only, used by `scripts/parse-scorm.js` to generate content config from the SCORM export
- **Content** — JSON files in `content/pages/`, `content/config.json`, `toolkit.csv`, `lexicon.json`
- **Hosting** — GitHub Pages (static, no server)
- **Source material** — `the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js` (598KB Rise export)

## Read this first, every session
1. Read `handoff.md` — it tells you exactly where we are and what to do next.
2. Read the active feature file named in `handoff.md`'s Pointer section.
3. Summarize your understanding in 3 bullets, confirm Next Up before doing any work.

## Document workflow — the linked list model
- `handoff.md` = the **head of the linked list** — single source of truth for current state. Always update it.
- `staging/<stage>/feature-<name>.md` = the **linked list body** — ordered work, stage by stage.
- `docs/master_plan.md` = the full vision. Update only if vision or roadmap genuinely changes.
- Follow the pointer in `handoff.md` to find the active feature file.

## Standing command — "update all relevant files"
When the user says **"update all relevant files"**, do this automatically:
1. Review what happened this session — what changed, what was decided, what was built, what failed.
2. Update `handoff.md` — all sections (Goals, Current State, Files, Changed, Tried/Failed, Next Up, Pointer). This **always** updates.
3. Update `new_session_prompt.md` if the resume instructions or pointer changed.
4. Update `CLAUDE.md` only if a rule, convention, or stack fact changed.
5. Update active feature files — tick done items, resolve/append open questions.
6. Update stage `overview.md` files if stage scope or done-criteria shifted.
7. Update `docs/master_plan.md` only if vision or roadmap genuinely changed.
8. Update `help.md` if new human to-dos appeared.
9. Keep linked-list integrity: `handoff.md`'s pointer must point at the real current stage + active feature file.
10. Give the user a 3–5 line summary of what updated and why.

## Coding conventions
- Vanilla JS only — no React, Vue, or any framework
- No build step for end users — everything must work by opening `index.html` in a browser
- All content lives in `content/` — never hardcode GoC-specific text in HTML or JS
- Interaction types are "fixed chrome" — structure doesn't change, only data inside them
- CSS custom properties for all design tokens (colors, fonts, spacing) — deployers override in `content/config.json` or a generated CSS file
- One JS module per interaction type in `js/interactions/`
- `scripts/` is for dev-time Node.js tools only — not shipped

## Architecture constraint (must not violate)
- Never hardcode GoC content in templates — always read from `content/`
- Toolkit embed URL lives in `content/config.json` so it can be swapped for future self-hosted dashboard
- Toolkit resource data lives in `toolkit.csv` — Airtable is just the current viewer, not the source of truth
- Images must be local — no CDN dependencies at runtime

## Branching & commit conventions
- `main` = always deployable
- Feature branches: `feature/<stage>-<short-name>` (e.g., `feature/stage-1-sidebar-nav`)
- Commit messages: imperative, present tense (`add sidebar nav component`, not `added`)
- No force-pushing to `main`

## How to run / test
- Open `index.html` directly in a browser (no server needed for most features)
- For anything requiring `fetch()` (loading JSON content files), run a local server: `npx serve .` or Python's `python -m http.server`
- Node script: `node scripts/parse-scorm.js` (requires Node 18+)

## Key files to know
- `the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js` — source of all GoC content (do not modify)
- `content/config.json` — branding and settings (the "one file" deployers edit)
- `docs/master_plan.md` — full vision doc
- `staging/` — all planned work, stage by stage

# Feature: Deployer Documentation

## Stage
Stage 6 — White-Label Kit

## What it is
`DEPLOYING.md` — a step-by-step guide for non-technical content owners who want to fork and customize the Change Hub. Should be readable by someone who has never used GitHub before.

## Outline for DEPLOYING.md

1. **What you're getting** — brief description of what the template includes
2. **Prerequisites** — GitHub account (free), text editor (even Notepad works)
3. **Step 1: Fork the repo** — with screenshots if possible, or clear written steps
4. **Step 2: Enable GitHub Pages** — exact steps with field names
5. **Step 3: Customize branding** — edit `content/config.json`, replace logo file
6. **Step 4: Replace content** — overview of content file structure, link to content format docs
7. **Step 5: Update toolkit** — how to edit `toolkit.csv`
8. **Step 6: Airtable (optional)** — create your own Airtable base from the template, get embed URL
9. **Step 7: Push and verify** — how to commit and push, how to check GitHub Pages URL
10. **Troubleshooting** — common issues (iframe blocked, images not loading, etc.)

## Tasks
- [ ] Write `DEPLOYING.md` with the above structure
- [ ] Write `content/README.md` — explains the content file format to deployers
- [ ] Create an Airtable base template (or document the schema) so deployers can recreate it
- [ ] Test the guide with a "naive user" simulation: follow each step literally and see if it works

## Open Questions
- Should there be a worked example — a fictional "City of Ottawa" or "ACME Corp" fork — to show what a customized deployment looks like? (Yes — strongly recommended; helps deployers understand what's possible)
- Do we need a video walkthrough, or is written docs sufficient for the target deployer? (Written + annotated screenshots is probably sufficient for v1)
- Should `DEPLOYING.md` live in the root (GitHub surfaces it automatically) or in `docs/`? (Root — GitHub renders it prominently)

# Stage 6 — White-Label Kit

## Goal
Make the site genuinely forkable by a non-technical content owner. After this stage, a stranger can fork the repo, edit one config file, and have a working branded site in under 30 minutes.

## Features in this stage
- `feature-config-system.md` — `content/config.json` schema for branding (org name, logo, colors, Airtable URLs, framework name)
- `feature-css-tokens.md` — CSS custom properties driven by config (colors, fonts, logo)
- `feature-deployer-docs.md` — `DEPLOYING.md` guide for forkers; worked example with a fictional org
- `feature-csv-dashboard.md` — (roadmap) Replace Airtable with a self-hosted vanilla JS table/filter component driven by `toolkit.csv`

## Definition of done
- [ ] Changing `content/config.json` updates org name, logo, and brand colors across the entire site
- [ ] `DEPLOYING.md` exists and covers: fork, configure, deploy to GitHub Pages
- [ ] A test fork with a different org name/logo works correctly
- [ ] `toolkit.csv` format is documented so deployers can replace GoC resources with their own
- [ ] Open question on self-hosted CSV dashboard is resolved (build now vs. roadmap)

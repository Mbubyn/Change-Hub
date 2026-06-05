# Help — Human To-Do List

Things Claude cannot do for you. Work through these as you go — each item notes which stage it blocks.

---

## Git & GitHub Setup

### [ ] Install Git
- **What:** Git version control CLI
- **Why:** Required for all version control and GitHub operations
- **Install:** https://git-scm.com/download/win
- **Check:** Run `git --version` in terminal
- **Blocks:** Everything

### [ ] Install GitHub CLI (`gh`)
- **What:** GitHub's official command-line tool
- **Why:** Lets Claude create repos, manage PRs, and run GitHub operations without leaving the terminal
- **Install:** https://cli.github.com/
- **Check:** Run `gh --version`
- **Blocks:** Stage 1 (repo setup)

### [ ] Authenticate GitHub CLI
- **What:** Link `gh` to your GitHub account
- **Why:** Required for `gh repo create` and all GitHub operations
- **How:** Run `gh auth login` and follow prompts
- **Blocks:** Stage 1 (repo setup)

### [ ] Create GitHub repo (if not done by Claude)
- **What:** A new public or private repo named `change-hub` (or similar)
- **Why:** Hosts the site and enables GitHub Pages deployment
- **How (manual):** Go to https://github.com/new — choose public for GitHub Pages free tier, or private if needed
- **Decision needed:** Public vs. private? (GitHub Pages is free on public repos; private requires GitHub Pro/Teams)
- **Blocks:** Stage 1

### [ ] Enable GitHub Pages
- **What:** Turn on static site hosting for the repo
- **Why:** This is how the site gets a public URL
- **How:** Repo → Settings → Pages → Source: Deploy from branch → `main` → `/root`
- **URL will be:** `https://<your-username>.github.io/change-hub/`
- **Blocks:** Stage 6 (white-label kit, but useful to test earlier)

---

## Node.js (for content generation script)

### [ ] Install Node.js 18+
- **What:** Node.js runtime
- **Why:** Required to run `scripts/parse-scorm.js` (the SCORM content extractor)
- **Install:** https://nodejs.org/ — choose the LTS version
- **Check:** Run `node --version` — should show v18 or higher
- **Blocks:** Stage 2 (content extraction)

---

## Airtable

### [ ] Confirm Airtable embed URLs work in browser
- **What:** Verify the two Airtable iframes actually load (public vs. login-required)
- **FOUND and wired (2026-06-05):**
  - "How this Hub Works": `https://airtable.com/embed/appYREIl6r0cHYr3H/shrM2SYQwhrkgChRX?layout=card`
  - "Change Roles": `https://airtable.com/embed/appYREIl6r0cHYr3H/shrM2SYQwhrkgChRX`
  - "Change Roles" also embeds a Qualtrics survey: `https://ircc.qualtrics.com/jfe/form/SV_1FEBRUq67WUP6Rg`
- **Both URLs are now in `content/config.json` and rendered in the pages**
- **Still needed:** Open the site and check if the Airtable iframes actually load without prompting for login
- **Blocks:** Stage 5 (toolkit page)

### [ ] Decide Airtable access model
- **What:** Are the Airtable bases public (anyone with the link can view) or restricted?
- **Why:** White-label deployers need to either use your Airtable link or create their own base
- **Options:**
  - A) Keep your Airtable base, give deployers the same embed link (easy, but your data)
  - B) Deployers create their own Airtable base from a template you publish (more work, more control)
  - C) Build the self-hosted CSV dashboard (Stage 6 roadmap item)
- **Blocks:** Stage 5 + Stage 6 white-label docs

---

## Toolkit Documents

### [ ] Export toolkit document list
- **What:** A CSV of all 96 toolkit documents (name, description, URL/file path, role, phase tags)
- **Why:** This becomes `toolkit.csv` — the source of truth for the toolkit page and future dashboard
- **How:** Export from Airtable, or manually compile from the Rise course toolkit page
- **Blocks:** Stage 5

### [ ] Decide toolkit document hosting
- **What:** Where do the 96 documents live?
- **Options:**
  - A) Hosted externally (SharePoint, Google Drive, existing GoC links) — just link to them
  - B) Bundled in the repo as PDFs/DOCX — fully self-hosted, larger repo
  - C) Mix: some external, some local
- **Blocks:** Stage 5

---

## SCORM Assets Audit

### [ ] Audit the asset bundle
- **What:** Check what's in `the-change-hub-raw-XI9Ex8Dq/content/assets/` vs. what images the course actually uses
- **Why:** Some images may still be CDN URLs inside `runtime-data.js` rather than local files — these need a lookup table
- **How:** Claude can help with this in Stage 2, but you may need to manually download any missing assets
- **Blocks:** Stage 2 (content extraction), Stage 4 (content population)

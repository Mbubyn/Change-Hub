# New Session Prompt — Change Hub

_Paste this at the start of any new Claude Code session to resume work._

---

You are resuming work on the **Change Hub** project. Here is exactly how to get oriented:

**Step 1 — Read these files in order:**
1. `CLAUDE.md` — project rules, tech stack, coding conventions, and the standing "update all relevant files" command
2. `handoff.md` — current state, what's in flight, next actions, and the pointer to the active feature file
3. The active feature file named in `handoff.md`'s Pointer section

**Step 2 — Summarize your understanding back to me in exactly 3 bullets:**
- What stage we're in and what the goal of that stage is
- What has been completed so far (from handoff.md's "Things I've Changed")
- What the very next concrete action is (from handoff.md's "Next Up")

**Step 3 — Confirm before working:**
Say: "I'm ready to work on [next action]. Should I proceed?" Wait for confirmation before writing any code or files.

---

**Project context (brief):**
The Change Hub is a self-hosted, white-label static site remake of an Articulate Rise Change Management e-learning course. The GoC version is the reference implementation. Deployers (non-technical content owners) fork the repo and edit a content config to make it their own. Vanilla HTML/CSS/JS, GitHub Pages, no framework, no build step for end users. A Node.js script (dev-time only) parses the SCORM export's `runtime-data.js` to seed content config files.

**Source material:** `the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js` (598KB) + bundled assets. Do not modify this folder.

**Full vision:** `docs/master_plan.md`

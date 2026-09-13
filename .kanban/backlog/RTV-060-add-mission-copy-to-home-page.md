---
title: Add mission copy to home page
id: RTV-060
status: backlog
template_type: implementation-task
parent_task_id: RTV-058
backlog_state: ready
created: 2026-09-13
updated: 2026-09-13
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files:
  - src/index.njk
  - src/_layouts/base.njk
comments: 0
attachments: 0
---
## Summary

Update the home page with a clear two-sentence mission statement explaining the site's purpose to first-time visitors

## Problem Or Opportunity

First-time visitors landing on the home page cannot immediately understand what the site is for or why they should use it

## Scope

- R1: Add the exact mission copy to the home page\n- R2: Mission copy is visible above-the-fold\n- R3: No other home page elements change\n- R4: Copy text matches exactly: 'We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down.'

## Proposed Design / Approach

**Deliverable mapping:**\n\n- **R1 (Add exact copy):** Integrate the mission text 'We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down.' into `src/index.njk` within the `<main>` element. Replace or augment the existing `<h1>` tag.\n- **R2 (Visible above-the-fold):** Position the mission copy at the top of the `<h1>` element so it renders as the first page content, ensuring above-the-fold visibility on both desktop and mobile.\n- **R3 (No other elements change):** Keep all other content (the existing welcome line and Product Sweet note) intact; only modify the headline to incorporate the mission copy.\n- **R4 (Exact text match):** Use the literal string provided with no omissions, rephrasings, or additions.\n\n**Implementation steps:**\n\n1. Open `src/index.njk` and review the current structure.\n2. Modify the `<h1>` element to include the mission copy.\n3. Test the page locally and on mobile to verify above-the-fold placement and readability.\n4. Run Eleventy build to confirm no errors.\n5. Commit with message referencing RTV-060.\n\n**Architecture:** No changes to the C4 model; this is a content-only modification to an existing home page."

## Verification Plan

- R1: The exact mission copy appears in the rendered home page HTML.\n- R2: The mission copy is visible above-the-fold on desktop (1280x720) and mobile (375x667) viewports.\n- R3: No other home page content, layout, or styling has changed from the original.\n- R4: The text matches the specified string exactly, with no omissions or modifications.\n- Process: Run `npm run build` to confirm no build errors. Visually inspect the page in a browser on desktop and mobile."

## Evidence Or Reproduction Clues

Current home page (`src/index.njk`) displays a welcome message 'Hello and welcome — we're so glad you found us.' and a note about Product Sweet bootstrap. This does not explain the site's mission to first-time visitors. The base layout (`src/_layouts/base.njk`) is a minimal HTML scaffold with no navigation or styling rules defined locally, suggesting the site uses a simple Eleventy 11ty templating setup."

## Impact

First-time visitors will immediately see the site's purpose, reducing friction for new volunteers who land on the home page without prior context. This supports Stage 1 exit criteria by establishing clear, above-the-fold communication."

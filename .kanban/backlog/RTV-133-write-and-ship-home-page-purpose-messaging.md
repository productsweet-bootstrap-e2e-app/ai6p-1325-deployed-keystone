---
title: Write and ship home-page purpose messaging
id: RTV-133
status: backlog
template_type: implementation-task
parent_task_id: RTV-131
backlog_state: refining
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files:
  - src/index.njk
comments: 0
attachments: 0
---
## Summary

Replace the home page placeholder message with coordinator-provided copy explaining the site's purpose and call-to-action for volunteering.

## Problem Or Opportunity

Current home page (`src/index.njk`) displays a generic placeholder. First-time visitors cannot understand what the site is for or why they should engage.

## Scope

R1: Replace placeholder copy on home page (currently "Hello and welcome — we're so glad you found us.") with exact two-sentence message
R2: Ensure copy is visible above the fold on both mobile and desktop layouts
R3: Copy leads to call-to-action directing visitors to volunteer roles or sign-up flow
R4: No changes to other page elements (layout, styling, navigation) in this deliverable
R5: Text renders without truncation or overflow on common viewport sizes

## Proposed Design / Approach

**Deliverables mapped to scope requirements:**

D1 (→R1): Edit `src/index.njk` to replace the h1 content with the exact coordinator-provided two-sentence statement.
D2 (→R2,R5): Verify layout with no text truncation on 375px mobile and 1024px+ desktop viewports.
D3 (→R3): Add a link/CTA in the copy pointing to `/roles` (roles page to be built in Stage 2; a placeholder link acceptable now).
D4 (→R4): Ensure only copy and CTA link change; no styling, layout, or navigation changes.

**Implementation sequence:**
1. Edit `src/index.njk` to replace the h1: "We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down."
2. Replace the second paragraph with a CTA link to `/roles`.
3. Test on mobile (375px) and desktop (1024px+) viewports for text overflow.
4. Create a pull request, merge after visual verification on staging.

## Verification Plan

- R1: Home page source code (`src/index.njk`) contains exact coordinator-provided copy
- R2: Visual check: home page renders above the fold on mobile (375px) and desktop (1024px) with no text overflow
- R3: CTA link to `/roles` (or equivalent future roles page URL) is present and clickable
- R4: No unrelated styling or layout changes in the merge
- R5: Manual browser test on Chrome mobile and desktop confirms text displays completely

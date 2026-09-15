---
title: Write welcoming home-page copy explaining site purpose
id: RTV-094
status: backlog
template_type: implementation-task
parent_task_id: RTV-092
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

Craft clear, concise copy for the home page that explains what the site is for and invites first-time visitors to understand the volunteer opportunity.

## Scope

R1: Copy explains the core mission of the site in one or two sentences\nR2: Copy is welcoming and accessible to visitors with no prior context\nR3: Copy invites visitors to explore volunteer roles\nExclusions: Partner-provided role descriptions; email reminders; deep feature explanations

## Verification Plan

1. **R1 (Core mission statement):** Home page displays a two-sentence headline explaining the site's purpose and connection to volunteer opportunities.
2. **R2 (Welcoming tone):** Manual review confirms copy uses warm, accessible language with no jargon and addresses visitors directly.
3. **R3 (Call-to-action to roles):** Copy includes an explicit link or text reference to "Explore Volunteer Roles" or similar; link is functional and leads to or references the roles page.
4. Copy is grammatically correct and appears above the fold (visible without scrolling on desktop and mobile viewports).
5. Existing page layout, typography, and design system are unaffected; no visual or functional regressions.

## Expected Outcome

Home page displays mission-focused welcome copy above the fold; copy is grammatically correct, readable, and explains the site's purpose. Visitors immediately understand they can explore volunteer roles. No functional or visual regressions in page layout or design.

## Problem Or Opportunity

The home page currently displays only a generic placeholder heading ("Hello and welcome — we're so glad you found us") and a bootstrap note. First-time visitors have no clear understanding of what the site is for, what volunteer opportunities exist, or why they should explore further. The site lacks a welcoming narrative that explains its core purpose and invites discovery of volunteer roles.

## Proposed Design / Approach

Replace the generic placeholder in `src/index.njk` with clear, mission-focused copy that:

**R1 (Core mission statement):** Two-sentence headline explaining that the site connects people to volunteer opportunities and invites them to explore roles.

**R2 (Welcoming tone):** Use warm, accessible language with no jargon; address the visitor directly; avoid assumptions about prior knowledge.

**R3 (Call-to-action to roles):** Include an explicit link or reference to "Explore Volunteer Roles" or similar text that guides visitors to the roles listing page.

The updated copy will preserve the existing design system's editorial hierarchy (display/headline typography, intentional whitespace, and "Product Sweet" philosophy of premium finish). Changes are scoped to `src/index.njk` only; no new files or layout changes.

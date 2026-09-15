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

1. Home page loads without errors and displays the new welcome copy in the main section.
2. Copy appears above the fold (visible without scrolling on desktop and mobile viewports).
3. Manual review: copy is grammatically correct, welcoming, and explains the site's core purpose.
4. Copy includes or references a call-to-action toward exploring volunteer roles.
5. Existing page layout and design system (typography, spacing) are unaffected.

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

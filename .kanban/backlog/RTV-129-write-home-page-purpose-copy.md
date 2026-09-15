---
title: Write home-page purpose copy
id: RTV-129
status: backlog
template_type: implementation-task
parent_task_id: RTV-125
backlog_state: ready
created: 2026-09-15
updated: 2026-09-15
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

Write and integrate on the home page the confirmed purpose statement: "We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down." Ensure accessible contrast and include a link to the roles page.

## Problem Or Opportunity

First-time visitors land on the home page without a clear understanding of the site's purpose and mission.

## Scope

R1: Integrate the confirmed purpose statement into the home page above the fold, exactly as provided by the owner. R2: Place above the fold on the home page. R3: Ensure accessible contrast and readability (WCAG AA standards). R4: Include a clear link or call-to-action pointing to the volunteer roles page.

## Proposed Design / Approach

R1: Edit src/index.njk to place the confirmed purpose statement in the main section, replacing the placeholder content, exactly as owner specified. R2: Position above the fold (at the top of the main element, within initial viewport). R3: Verify readability by testing contrast against background using WAVE or Lighthouse accessibility audit; ensure WCAG AA compliance. R4: Add a styled link/button pointing to /roles after the purpose statement, with clear "Get involved" or "See available roles" label.

## Verification Plan

- R1: Purpose statement exactly matches owner text and is placed in src/index.njk within the main element above the fold
- R2: Statement is visible in the initial viewport on home page load (live verification at http://localhost:8080)
- R3: Contrast meets WCAG AA standards (WAVE or Lighthouse audit shows no accessibility violations)
- R4: Link to /roles is present, functional, and properly marked with descriptive link text

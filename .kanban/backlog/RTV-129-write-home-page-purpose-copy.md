---
title: Write home-page purpose copy
id: RTV-129
status: backlog
template_type: implementation-task
parent_task_id: RTV-125
backlog_state: refining
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files: []
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

1. Edit src/index.njk to place the confirmed purpose statement in the main section, above the existing placeholder content. 2. Integrate a styled link pointing to /roles. 3. Verify readability and accessibility (contrast against background, screen-reader verification). 4. Test locally with `npm run dev` and preview in browser.

## Verification Plan

1. Purpose statement is visible above the fold on home page (live verification at http://localhost:8080). 2. Text reads exactly as owner specified. 3. Text meets WCAG AA contrast standards (use WAVE or Lighthouse). 4. Screen reader correctly reads the purpose statement (test with NVDA or Safari VoiceOver). 5. Link to /roles is present, functional, and properly marked.

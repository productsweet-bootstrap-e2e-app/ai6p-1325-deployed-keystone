---
title: Build volunteer roles listing page
id: RTV-134
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

Build a volunteer roles listing page displaying four roles (driver, kitchen, companion, admin) with one-line descriptions each. No sign-up form in this stage.

## Problem Or Opportunity

Volunteers who are ready to act have no dedicated place to discover the roles they can fill. This friction discourages engagement.

## Scope

R1: Roles page is accessible and linked from home page CTA and/or main navigation
R2: Page displays all four roles (driver, kitchen, companion, admin) each with a title and one-line description
R3: Page layout accommodates future expansion (ready to add time commitment, contact info, and other fields in Stage 3)
R4: Navigation back to home page is clear (breadcrumb or back link)
R5: Mobile and desktop layouts are clean and readable without requiring horizontal scroll
R6: No sign-up form or contact form in this deliverable (deferred to Stage 3)

## Proposed Design / Approach

1. Create a new page file `src/roles.njk` based on the site's base layout
2. Add a section listing the four roles as cards or simple list items
3. Each role entry includes: title (driver, kitchen, companion, admin) and coordinator-provided one-line description
4. Include a link back to home page (breadcrumb or navigation)
5. Ensure the page is linked from the home page CTA (already planned in Stage 1 as `/roles` link)
6. Test on mobile (375px) and desktop (1024px+) viewports for readability and no overflow

## Verification Plan

- R1: Home page CTA and main navigation include a link to `/roles`; link is clickable and resolves to the roles page
- R2: Roles page displays all four roles (driver, kitchen, companion, admin) with title and one-line description for each
- R3: Layout structure accommodates additional fields (time commitment, contact, etc.) without major refactoring
- R4: Back-to-home link or breadcrumb is visible and functional
- R5: Roles page renders cleanly on 375px mobile and 1024px+ desktop; text is readable without truncation or horizontal scroll
- R6: No sign-up form, contact form, or form submission handling is present on the page

## Questions

```yaml
- question: 'Provide the one-line description for each of the four roles: driver, kitchen, companion, admin. These descriptions will be displayed on the roles page and should be concise and clear.'
  status: open
  thread: []
```

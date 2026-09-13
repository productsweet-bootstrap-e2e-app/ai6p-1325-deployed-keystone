---
title: Create volunteer roles discovery page
id: RTV-061
status: backlog
template_type: implementation-task
parent_task_id: RTV-058
backlog_state: refining
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

Build a dedicated page that lists the four volunteer roles with one-line descriptions so visitors can explore how they can help

## Problem Or Opportunity

Volunteers cannot easily discover what roles are available or what each role entails

## Scope

R1: Create a new /roles page accessible from main navigation
R2: List all four roles: driver, kitchen, companion, admin
R3: Include a one-line description for each role
R4: No sign-up form, partner data, or email reminders appear on this release
R5: Page is accessible and visually consistent with site design

## Proposed Design / Approach

1. Create a new template file `src/roles.njk` with YAML frontmatter (layout, title) matching the home page pattern.\n2. Construct a role list with title and one-line description for each: driver, kitchen, companion, admin.\n3. Use simple card or list layout consistent with home page styling (minimal, clean).\n4. Update navigation in the base layout or home page to include a link to `/roles`.\n5. Test page accessibility and responsive layout on desktop and mobile.\n6. Verify all four roles appear with descriptions and no forms or external data are present.\n7. Commit with message referencing RTV-061.\nArchitecture: No changes to the C4 model; this is a new static page added to the existing site structure."

## Verification Plan

- Confirm `/roles` is accessible from the main navigation (home page or header link).\n- Verify all four roles (driver, kitchen, companion, admin) are listed on the page.\n- Check each role has a visible one-line description.\n- Ensure no sign-up form, partner API data, or email reminders appear.\n- Test page layout on desktop (1280x720) and mobile (375x667) viewports for responsiveness.\n- Run the site build to confirm no Eleventy errors are introduced."

## Evidence Or Reproduction Clues

Current site structure has a minimal home page (`src/index.njk`) using the `base.njk` layout. There is no existing navigation or multi-page routing visible. The project uses Eleventy 11ty for static site generation. Four roles have been identified: driver, kitchen, companion, admin. Stage 1 specification: no external forms, partner data, or email reminders on the initial release."

## Impact

A dedicated roles page reduces barriers to volunteer discovery by centralizing role information. This supports Stage 1 exit criteria and Stage 2 planning by providing a page template that partner data can later augment without disrupting the initial launch."

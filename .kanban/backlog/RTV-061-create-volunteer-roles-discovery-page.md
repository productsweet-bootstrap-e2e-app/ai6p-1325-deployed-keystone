---
title: Create volunteer roles discovery page
id: RTV-061
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

Build a dedicated page that lists the four volunteer roles with one-line descriptions so visitors can explore how they can help

## Problem Or Opportunity

Volunteers cannot easily discover what roles are available or what each role entails

## Scope

- R1: Create a new /roles page accessible from main navigation\n- R2: List all four roles: driver, kitchen, companion, admin\n- R3: Include a one-line description for each role\n- R4: No sign-up form, partner data, or email reminders appear on this release\n- R5: Page is responsive and consistent with site design

## Proposed Design / Approach

**Deliverable mapping:**\n\n- **R1 (New /roles page in navigation):** Create `src/roles.njk` and add a navigation link from the home page (`src/index.njk`) to `/roles`.\n- **R2 (All four roles listed):** Include all four roles — driver, kitchen, companion, admin — as distinct list items or cards on the roles page.\n- **R3 (One-line description per role):** Each role gets a single descriptive line (not repeating scope; content to be specified during implementation or provided by coordinator).\n- **R4 (No forms or external data):** Ensure no sign-up form, partner API calls, or email reminder UI appears on the initial release.\n- **R5 (Responsive design):** Layout must be functional on both desktop (1280x720) and mobile (375x667) viewports.\n\n**Implementation steps:**\n\n1. Create a new template file `src/roles.njk` with YAML frontmatter (layout: base.njk, title, and page metadata).\n2. Structure the four roles as a simple list or card layout with title and one-line description for each.\n3. Update `src/index.njk` or the base layout to include a navigation link to `/roles`.\n4. Use minimal, clean styling consistent with the existing home page (no external stylesheets or complex components).\n5. Test the page on desktop and mobile for responsiveness.\n6. Run Eleventy build to confirm no errors.\n7. Commit with message referencing RTV-061.\n\n**Architecture:** No changes to the C4 model; this is a new static page added to the existing site structure."

## Verification Plan

- R1: The /roles page is linked and accessible from the main navigation.\n- R2: All four roles (driver, kitchen, companion, admin) are listed on the page.\n- R3: Each role has a visible one-line description.\n- R4: No sign-up form, partner API data, or email reminder UI appears on the roles page.\n- R5: The page renders correctly on desktop (1280x720) and mobile (375x667) viewports.\n- Process: Run `npm run build` to confirm no build errors. Navigate to /roles and inspect the rendered content and layout on desktop and mobile."

## Evidence Or Reproduction Clues

Current site structure has a minimal home page (`src/index.njk`) using the `base.njk` layout. There is no existing navigation or multi-page routing visible. The project uses Eleventy 11ty for static site generation. Four roles have been identified: driver, kitchen, companion, admin. Stage 1 specification: no external forms, partner data, or email reminders on the initial release."

## Impact

A dedicated roles page reduces barriers to volunteer discovery by centralizing role information. This supports Stage 1 exit criteria and Stage 2 planning by providing a page template that partner data can later augment without disrupting the initial launch."

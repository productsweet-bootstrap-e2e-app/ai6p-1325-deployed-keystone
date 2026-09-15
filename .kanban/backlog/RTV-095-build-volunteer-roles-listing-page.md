---
title: Build volunteer roles listing page
id: RTV-095
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
  - src/_layouts/base.njk
comments: 0
attachments: 0
---
## Summary

Create a dedicated page that lists available volunteer roles, accessible to site visitors. Roles should be discoverable and clearly described.

## Scope

R1: Page lists four volunteer roles: Driver, Kitchen, Companion, Admin
R2: Each role displays a clear title and a one-line description (static text, no backend)
R3: Page is discoverable from the home page via a link or call-to-action
R4: Role descriptions use static text only (no partner API or backend integration)
R5: No sign-up or claim form is included in this stage
Exclusions: Email reminders; claim/signup flow; role management backend; partner API integration; individual role detail pages

## Verification Plan

1. **R1 & R2 (Four roles with one-line descriptions):** Roles page displays all four roles (Driver, Kitchen, Companion, Admin); each has a clear title and a readable one-line description.
2. **R3 (Discoverable from home):** Home page includes a functional link or call-to-action that navigates to the roles page.
3. **R4 (Static text only):** Role descriptions are verified to be hardcoded; no backend call or API integration is present.
4. **R5 (No sign-up form):** Page contains role listings only; no claim or signup form is visible.
5. Page layout follows Product Sweet conventions (typography, spacing, no-line rule); no visual regressions.
6. Site builds and deploys without errors.

## Expected Outcome

A dedicated roles page is live at `/roles` or `/volunteer-roles`, displaying at least one volunteer role with a title and description. The page is linked from the home page. Page load is error-free, layout is readable and follows design conventions, and no regressions occur in existing pages.

## Problem Or Opportunity

The site currently has no dedicated page for discovering volunteer roles. Visitors are invited to explore roles (via the stage-1 welcome copy), but have no place to go. Without a roles listing page, the site cannot fulfill its core mission of connecting visitors to volunteer opportunities.

## Proposed Design / Approach

Create a new page at `/roles` using the same Eleventy + Nunjucks template structure (`src/_layouts/base.njk`).

**R1 & R2 (List four roles with descriptions):** Create `src/roles.njk` with a static list or grid displaying:
- **Driver**: one-line description
- **Kitchen**: one-line description
- **Companion**: one-line description
- **Admin**: one-line description

All descriptions are hardcoded in the template (no backend call or partner integration).

**R3 (Discoverable from home):** Update the stage-1 welcome copy in `src/index.njk` to include a link or call-to-action (e.g., "Explore Volunteer Roles") that navigates to `/roles`.

**R4 & R5 (Static text, no sign-up):** Verify that role descriptions are hardcoded and no claim/signup form is present.

The page will follow Product Sweet design conventions (typography hierarchy, whitespace, no-line rule). Layout will be a simple card or list format, readable and accessible.

## Questions

```yaml
- question: What are the one-line descriptions for each of the four roles (Driver, Kitchen, Companion, Admin) to be displayed in stage 2?
  status: open
  thread: []
```

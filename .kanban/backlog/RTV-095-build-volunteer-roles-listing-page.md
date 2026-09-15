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
related_files: []
comments: 0
attachments: 0
---
## Summary

Create a dedicated page that lists available volunteer roles, accessible to site visitors. Roles should be discoverable and clearly described.

## Scope

R1: Page lists all available volunteer roles\nR2: Each role shows a clear title and brief description\nR3: Page is discoverable from the home page or main navigation\nR4: Role descriptions use static text (partner-provided descriptions deferred)\nExclusions: Email reminders; claim/signup flow; role management backend; partner API integration

## Verification Plan

1. **R1 (List roles):** Roles page renders without errors; at least one role is displayed in the page content.
2. **R2 (Title and description):** Each displayed role shows a clear, bold title and a brief description; both are readable and non-empty.
3. **R3 (Discoverable from home):** Home page includes a functional link or call-to-action (e.g., "Explore Volunteer Roles") that navigates to the roles page.
4. **R4 (Static text):** Role descriptions are verified to be hardcoded in the template (no backend call); partner API integration is not present.
5. Page layout follows Product Sweet conventions (typography, spacing, no-line rule); no visual regressions on home page or other existing pages.
6. Site builds and deploys without errors.

## Expected Outcome

A dedicated roles page is live at `/roles` or `/volunteer-roles`, displaying at least one volunteer role with a title and description. The page is linked from the home page. Page load is error-free, layout is readable and follows design conventions, and no regressions occur in existing pages.

## Problem Or Opportunity

The site currently has no dedicated page for discovering volunteer roles. Visitors are invited to explore roles (via the stage-1 welcome copy), but have no place to go. Without a roles listing page, the site cannot fulfill its core mission of connecting visitors to volunteer opportunities.

## Proposed Design / Approach

Create a new page at `/roles` (or `/volunteer-roles`) using the same Eleventy + Nunjucks template structure as the home page (`src/_layouts/base.njk`).

**R1 (List all roles):** Create a static list of volunteer roles (hardcoded or from a simple data structure; partner API integration is deferred to stage 3). Start with at least one role to meet verification requirements.

**R2 (Title and description per role):** Each role displays as a card or list item with:
  - A clear, bold title (e.g., "Event Coordinator")
  - A brief static description (2–3 sentences) explaining the role's purpose and what it entails

**R3 (Discovery from home page):** Update `src/index.njk` to include a link or call-to-action that navigates to the new roles page (this aligns with stage-1's R3 requirement).

**R4 (Static text only):** All role descriptions are hardcoded in the template; no backend call or partner integration yet.

The new page will follow the Product Sweet design system (typography hierarchy, whitespace, no-line rule). The implementation will create the page file (e.g., `src/roles.njk`) with a frontmatter title and a simple list or grid layout.

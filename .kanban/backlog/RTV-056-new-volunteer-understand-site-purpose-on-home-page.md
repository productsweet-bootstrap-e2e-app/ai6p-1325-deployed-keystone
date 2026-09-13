---
title: "New volunteer: understand site purpose on home page"
id: RTV-056
status: backlog
template_type: implementation-task
parent_task_id: RTV-053
backlog_state: refining
created: 2026-09-13
updated: 2026-09-13
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

New visitors see a clear, concise statement of what the volunteer site is for and what they can do. Home page leads with volunteer mission statement (2-3 sentences) above the fold.

## Scope

**R2.1:** Home page includes a purpose statement explaining what the site is, who it's for, and what volunteers can do. **R2.2:** Statement is visible above the fold (first load, no scroll required) on mobile and desktop. **R2.3:** Clear enough that a first-time volunteer understands the site's value without needing support or additional documentation. **Exclude:** Partner content, role descriptions, onboarding wizard, authentication flow (deferred to Stage 2).

## Proposed Design / Approach

1. Replace the current generic welcome heading in `src/index.njk` with a mission-focused heading that names the site's purpose.
2. Replace or enhance the placeholder paragraph with 2-3 sentences explaining what the site enables (volunteer scheduling, community support, etc.) and who should use it.
3. Add a clear next-step CTA (e.g., 'View Shifts' or 'Sign Up'—exact text TBD post-pilot).
4. Keep the Eleventy template structure unchanged. Changes are text-only to `src/index.njk`.
5. Build and deploy to verify above-fold visibility on mobile (375px viewport).
6. **Related file:** `src/index.njk` (the home page template).

## Verification Plan

- R2.1: Home page clearly states what the site is and what volunteers can do
- R2.2: Purpose statement is visible on first load (above fold on mobile)
- R2.3: First-time volunteer can understand the site's value without additional help

## Problem Or Opportunity

Currently, the home page has a generic welcome message ("Hello and welcome — we're so glad you found us") that does not explain what the site is for or who it serves. New volunteers cannot quickly understand if this site is for them or what actions they should take.

## Questions

```yaml
- question: What is the exact mission/purpose statement you want on the home page? E.g., "We connect volunteers with community shifts" or "Coordinate local volunteer efforts"? Please provide the 2-3 sentences you'd like to appear as the home page hero copy.
  status: open
  thread: []
```

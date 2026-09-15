---
title: "Onboarding: visitor discovery and volunteer role listing"
id: RTV-131
status: intake
template_type: implementation-task
kind: epic
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: coordinator
tags:
  - onboarding
  - volunteer-discovery
  - homepage
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

First-time visitors need to understand the site's purpose on the home page; volunteers need a roles page. Partners may later provide role descriptions and reminders, but access is not yet confirmed.

## Expected Outcome

New visitors understand the site and how to engage; volunteers see available roles; roles page structure is ready for future partner integrations.

## Scope

Stage 1: Home-page purpose copy (coordinator-owned, no data required)
Stage 2: Volunteer roles page (placeholder, ready for partner data)
Stage 3: Partner content and reminders (deferred discovery stub)

## Stages

```yaml
- stage_id: home_page_copy
  title: Home page purpose copy
  status: designed
  summary: Write and ship home-page messaging that explains the site's mission and value to first-time visitors, owned by the coordinator. No role data required.
  child_task_ids:
    - RTV-133
  depends_on_stage: []
  exit_criteria: Home page displays clear purpose statement and call-to-action; coordinator approves messaging; first-time visitor testing confirms understanding.
- stage_id: roles_page
  title: Volunteer roles listing page
  status: designed
  summary: Build a dedicated roles page that volunteers can navigate to; page structure is ready for role data but does not require it at launch. Shows the way forward for future partner integrations.
  child_task_ids:
    - RTV-134
  depends_on_stage:
    - home_page_copy
  exit_criteria: Roles page template is live and discoverable from home page; structure accommodates role descriptions (partner-provided or internal); page is ready to accept dynamic role data.
```

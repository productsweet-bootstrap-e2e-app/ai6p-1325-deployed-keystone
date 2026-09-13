---
title: "Clarify volunteer discovery: home page mission and roles listing"
id: RTV-058
status: backlog
template_type: implementation-task
kind: epic
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

Help first-time visitors understand the site's purpose and enable volunteers to discover available roles

## Expected Outcome

**Delivery success:** Home page displays the mission copy. Volunteer roles page lists all four roles (driver, kitchen, companion, admin) with descriptions. **Measurement (post-release):** Baseline unknown. Coordinator will survey five first-time visitors during the first pilot weekend to measure understanding of site purpose. Target TBD based on feedback. Measurement owner: coordinator.

## Scope

Stage 1 (designed): Add two-sentence mission copy to home page and create a dedicated volunteer roles page. Stage 2 (stub): Partner coordination for role descriptions and email reminders (pending partner confirmation).

## Proposed Design / Approach

Stage 1: Implement home page copy and roles page independently; both ready to ship concurrently. Stage 2: Conduct discovery to confirm partner participation and notification strategy.

## Verification Plan

Stage 1 acceptance:
- Homepage displays the exact mission copy provided
- /roles page is accessible from site navigation
- All four roles are listed with descriptions
- No partner data or forms appear on initial release

Stage 2 acceptance:
- Partner participation decision documented
- Notification strategy documented

## Stages

```yaml
- stage_id: stage-1-mission-and-roles
  title: Mission copy and roles page
  status: designed
  summary: Add two-sentence mission copy to home page and create volunteer roles discovery page
  child_task_ids:
    - RTV-060
    - RTV-061
  depends_on_stage: []
  exit_criteria: Home page displays exact mission copy above-the-fold. /roles page lists all four roles with one-line descriptions. Both pages are live and linked in navigation. No partner data or sign-up flows present.
- stage_id: stage-2-partner-discovery
  title: Partner coordination and notification strategy
  status: stub
  summary: Confirm partner participation for role descriptions and email reminders; document notification approach
  child_task_ids: []
  depends_on_stage:
    - stage-1-mission-and-roles
  exit_criteria: Decision note documents whether partner participation is confirmed and what notification strategy, if any, will be pursued
```

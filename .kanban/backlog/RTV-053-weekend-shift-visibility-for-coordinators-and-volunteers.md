---
title: Weekend shift visibility for coordinators and volunteers
id: RTV-053
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

Coordinators see uncovered weekend shifts; volunteers understand the site's purpose. Baseline unknown; coordinator measures missed shifts in first pilot weekend.

## Expected Outcome

Baseline: unknown (coordinator will count missed shifts in first pilot weekend). Target: agreed after pilot data. Owner: coordinator. Measurement: uncovered weekend shifts caught and filled. Evaluation window: first 2-3 pilot weekends.

## Scope

**R1:** Coordinator can view unfilled Saturday and Sunday shifts on the rota page. **R2:** Home page has clear purpose statement so new volunteers understand what the site is for. **R3:** Exclude: partner content, reminders, role descriptions (deferred to Stage 2).

## Proposed Design / Approach

Stage 1 (Designed): R1 and R2 as independent parallel child tasks. Deliver both before first pilot weekend. Stage 2 (Stub): Post-pilot discovery for partner content and reminder automation.

## Stages

```yaml
- stage_id: stage_1_coordinator_and_volunteer_visibility
  title: Coordinator gap view + volunteer purpose statement
  status: designed
  summary: '**Current status:** This stage is architecturally blocked. RTV-056 (home page purpose) can proceed independently. RTV-055 (coordinator gap view) requires a backend shift-management system that does not yet exist. See epic comments for details. **Recommendation:** Deliver RTV-056 for the first pilot weekend. Defer RTV-055 to Stage 1b (post-discovery) once shift-data infrastructure is in place.'
  child_task_ids:
    - RTV-055
    - RTV-056
  depends_on_stage: []
  exit_criteria: RTV-056 deployed (home page has clear purpose statement). RTV-055 deferred pending backend shift-management system design.
- stage_id: stage_2_partner_integration_discovery
  title: Partner content and reminder automation (discovery)
  status: stub
  summary: 'Post-pilot: incorporate partner role content and schedule shift reminders. Deferred pending coordinator feedback and volunteer usage data from first 2-3 pilot weekends.'
  child_task_ids: []
  depends_on_stage:
    - stage_1_coordinator_and_volunteer_visibility
  exit_criteria: Coordinator confirms need for partner content and reminders based on pilot metrics. Requirements and dependencies documented.
```

## Questions

```yaml
- question: 'Baseline measurement (coordinator-owned): How many shifts went unfilled in the pilot weekend before these features shipped? Record this number so we can compare improvement after Stage 1 is live.'
  status: open
  thread: []
```

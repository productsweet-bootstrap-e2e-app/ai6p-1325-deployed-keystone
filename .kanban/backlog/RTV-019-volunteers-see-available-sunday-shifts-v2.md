---
title: Volunteers see available Sunday shifts (V2)
id: RTV-019
status: backlog
template_type: implementation-task
kind: epic
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: high
owner: you
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Volunteers preview available Sunday shifts with role, start time, and fill status. Stage 1 uses synthetic data; Stage 2 integrates live partner roster after API discovery.

## Scope

R1. Display read-only preview of 5 synthetic Sunday shifts
R2. Show role, start time, and fill status for each shift
R3. Visually flag unfilled rows (0 volunteers)
R4. Visually flag completely filled rows (target capacity met)

Exclusions (Stage 1):
- No volunteer names or personal data
- No notifications or alerts
- No editing or volunteer signup
- No authentication changes
- No live integrations or partner API calls

Stage 2 (deferred):
- Partner roster API discovery and schema documentation
- Live data binding and integration

## Proposed Design / Approach

**Stage 1: Synthetic preview & UI foundation**
- Render read-only table with hardcoded 5 synthetic shift rows
- Implement visual flags for unfilled (count=0) and filled (count ≥ target) status
- Establish component and data structure for live binding in Stage 2

**Stage 2: Partner API discovery & live integration** (stub, depends on Stage 1)
- Discover partner roster API schema and approval pathway
- Design and implement live data binding
- Add error handling and offline fallback

## Verification Plan

- Five synthetic shift rows render in preview without error
- Role, start time, and fill status displayed correctly per row
- Unfilled rows (fill count = 0) are visually flagged
- Filled rows (fill count ≥ target capacity) are visually flagged
- Preview is read-only; no edit, notification or signup controls present
- No authentication or partner integration code in Stage 1 deliverable

## Stages

```yaml
- stage_id: stage-1-synthetic-preview
  title: 'Stage 1: Synthetic Preview & UI Foundation'
  status: designed
  summary: Render read-only preview of 5 synthetic Sunday shifts (role, start time, fill status) with visual flags for unfilled and filled rows. Establishes component structure for Stage 2 live binding.
  child_task_ids:
    - RTV-020
  depends_on_stage: []
  exit_criteria: Five synthetic shift rows display without error; role, start time, fill status correctly rendered per row; unfilled and filled rows visually flagged; no volunteer names, notifications, edits, or partner integrations present.
- stage_id: stage-2-partner-discovery
  title: 'Stage 2: Partner API Discovery & Live Integration'
  status: stub
  summary: Discover partner roster API schema, approval pathway, and design live data binding. Implementation deferred pending API access and schema agreement.
  child_task_ids: []
  depends_on_stage:
    - stage-1-synthetic-preview
  exit_criteria: Partner API schema documented; data binding implemented and tested against live roster; error handling and offline fallback working; rollout approved.
```

## Questions

```yaml
- question: 'Baseline and target for "fewer missed shifts": You mentioned capturing a manual missed/total shift count during the first pilot weekend, then agreeing the target. What method will you use to track missed shifts (source, owner, evaluation window)? Is the pilot weekend predetermined, and will you share the measurement post-pilot to set the target for post-Stage-1 impact evaluation?'
  status: open
  thread:
    - role: user
      text: 'Baseline and target for "fewer missed shifts": You mentioned capturing a manual missed/total shift count during the first pilot weekend, then agreeing the target. What method will you use to track missed shifts (source, owner, evaluation window)? Is the pilot weekend predetermined, and will you share the measurement post-pilot to set the target for post-Stage-1 impact evaluation?'
- question: 'Stage 2 blocker: Partner roster API access, schema, and approval are unknown today. Who is the partner contact for API discovery? Is there a known timeline or approval gate for schema access?'
  status: open
  thread:
    - role: user
      text: 'Stage 2 blocker: Partner roster API access, schema, and approval are unknown today. Who is the partner contact for API discovery? Is there a known timeline or approval gate for schema access?'
    - role: agent
      text: '**Discovery result:** Partner API access is not approved. A manual CSV export may be available, but its field schema and approval are still unknown. Stage 2 cannot proceed with either path until: (1) approval is obtained for live API access, or (2) CSV export fields are documented and approval confirmed.'
```

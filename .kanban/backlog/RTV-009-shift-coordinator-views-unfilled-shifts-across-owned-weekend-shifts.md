---
title: Shift coordinator views unfilled shifts across owned weekend shifts
id: RTV-009
status: backlog
template_type: implementation-task
kind: epic
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: medium
owner: You (product owner)
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Two-stage vision for improving shift visibility: validate read-only concept with Sunday pilot using synthetic test data, then evaluate external partner availability data integration.

## Scope

- R1: Deliver Sunday pilot that correctly identifies filled/unfilled shifts with synthetic test data
- R2: Conduct bounded discovery on external partner shift availability data model, access permissions, and schema
- R3: Lay foundation for future partner integration without making commitments or approvals

## Proposed Design / Approach

Build pilot independently with hard-coded test data to validate the concept. Conduct bounded discovery on partner data model and access constraints before committing to integration work. Defer integration implementation to later stages pending discovery outcomes.

## Verification Plan

- R1: Sunday pilot correctly identifies every unfilled test shift, flags no false positives, displays ≥5 test shifts with name, time, and fill status
- R2: Partner data schema, access control model, and known blockers are documented; discovery blockers are identified and listed
- R3: No unsolicited partner contact; no integration commitments made

## Stages

```yaml
- stage_id: stage_sunday_pilot
  title: Sunday Pilot with Synthetic Test Data
  status: in-flight
  summary: Deliver minimal read-only view of unfilled Sunday shifts using hard-coded test data. Coordinator can verify concept and manually manage outreach using existing processes. Validates fill-status accuracy with binary success criteria before evaluating partner data.
  child_task_ids:
    - RTV-003
  depends_on_stage: []
  exit_criteria: |-
    - Pilot displays only upcoming Sunday shifts sorted by start time
    - At least 5 test shifts shown with name, time, and fill status (filled/unfilled)
    - Every unfilled test shift is correctly flagged
    - No false positives: every filled shift is left alone
    - No production data accessed or displayed
    - No volunteer notifications or coordinator action buttons
    - Coordinator confirms manual outreach process remains unchanged
- stage_id: stage_partner_discovery
  title: Bounded Partner Data Discovery
  status: stub
  summary: Investigate external partner shift availability data model, access control requirements, and schema constraints. Document technical blockers, approval requirements, and integration feasibility. NO commitments, NO unsolicited partner contact, NO implementation.
  child_task_ids: []
  depends_on_stage:
    - stage_sunday_pilot
  exit_criteria: |-
    - Partner availability data schema is documented (fields, data types, refresh frequency)
    - Access control model is defined (authentication, authorization, rate limits)
    - Known technical blockers are identified and listed
    - Partner contact / approval requirements are mapped
    - Integration feasibility assessment completed
    - Recommendation for next stage is documented
- stage_id: stage_partner_integration
  title: Partner Data Integration (Future)
  status: stub
  summary: Integrate external partner shift availability data into the coordinator view. Implementation scope, timeline, and technical approach to be defined after discovery stage. Dependent on partner approval and schema alignment.
  child_task_ids: []
  depends_on_stage:
    - stage_partner_discovery
  exit_criteria: '- Placeholder for future stage pending discovery outcomes'
```

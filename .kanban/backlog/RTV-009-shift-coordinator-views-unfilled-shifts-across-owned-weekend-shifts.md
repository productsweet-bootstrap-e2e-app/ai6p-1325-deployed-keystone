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

- R1: Build and validate a read-only view of Sunday shifts that correctly identifies filled/unfilled status using synthetic test data
- R2: Verify no false positives and 100% accuracy on test data before considering live data
- R3: Investigate external partner availability data model, schema, access permissions, and technical integration requirements
- R4: Document integration blockers and feasibility; do not make partner contact or commitments

## Proposed Design / Approach

**Stage 1: Sunday Pilot (Designed, Owned by RTV-011)**
- Build read-only view displaying upcoming Sunday shifts with fill status (filled/unfilled) using hard-coded synthetic test data
- Display shift name, time, and fill indicator; sort by start time
- Use ≥5 synthetic test cases covering both filled and unfilled shifts
- Verify zero false positives: every filled shift left alone, every unfilled shift flagged
- Grounded in repository HTML template and static data structure; no database queries, no live volunteer records, no integration points

**Stage 2: Partner Data Discovery (Stub, Owned by RTV-013)**
- Research and document external partner shift availability data model, access control, and schema
- Interview internal stakeholders; review existing API contracts and documentation
- Map approval path and blockers; remain bounded—no prototyping, no code
- Depends on Stage 1 completion

**Stage 3: Partner Integration (Stub, Future)**
- Defer pending Stage 2 discovery outcomes and partner approval

## Verification Plan

- R1: Sunday pilot displays only upcoming Sunday shifts, sorted by start time
- R1: Pilot displays at least 5 test shifts with name, time, and fill status
- R1: Every unfilled test shift is correctly flagged
- R1: No false positives—every filled shift is left alone
- R2: No production data accessed; no volunteer records touched
- R3: Partner data schema documented (fields, types, refresh frequency)
- R3: Access control model defined (auth method, roles, rate limits)
- R3: Technical blockers and approval requirements listed
- R4: No unsolicited partner contact; no integration commitments made

## Stages

```yaml
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

## Problem Or Opportunity

Volunteer shift coordination is manual and reactive. Coordinators lack advance visibility into which shifts lack coverage, making it hard to reach out early and reduce last-minute gaps. Current solution requires manual review of a roster to identify unfilled shifts—time-consuming and prone to missed gaps.

## Refinement Notes

Epic covering two outcomes: (1) Validate Sunday pilot concept with synthetic test data, RTV-003 intake refined and linked to RTV-011 implementation task; (2) Bounded discovery of partner data integration feasibility before any commitments. Stage 1 grounded in repository HTML template and static shift data. Partner schema, access, and approval are unknown; held as open questions on RTV-013.

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
- stage_id: stage_sunday_pilot
  title: Sunday Pilot with Synthetic Test Data
  status: designed
  summary: Build a read-only view of upcoming Sunday shifts with fill status using hard-coded synthetic test data. Coordinator verifies concept and manually uses existing outreach process. Validates fill-status accuracy and zero false positives before considering live data integration.
  child_task_ids:
    - RTV-011
  depends_on_stage: []
  exit_criteria: |-
    - Pilot displays only upcoming Sunday shifts sorted by start time
    - At least 5 test shifts shown with name, time, and fill status (filled/unfilled)
    - Every unfilled test shift is correctly identified as unfilled
    - No false positives: every filled shift is left alone
    - No production data accessed or displayed
    - No volunteer contact systems or notifications involved
    - Coordinator confirms manual outreach process remains unchanged
- stage_id: stage_partner_discovery
  title: Bounded Partner Data Discovery
  status: stub
  summary: Investigate external partner shift availability data model, access control, schema, and integration requirements. Document technical blockers and feasibility; do not contact partner or make commitments. Inform decision on Stage 3.
  child_task_ids:
    - RTV-013
  depends_on_stage:
    - stage_sunday_pilot
  exit_criteria: |-
    - Partner data schema documented (fields, data types, update frequency, known limitations)
    - Access control model defined (authentication, authorization, rate limits, SLA requirements)
    - Known technical blockers and integration constraints identified and listed
    - Partner contact and approval requirements mapped
    - Integration feasibility assessment completed with recommendations
    - No unsolicited partner outreach; no integration work or commitments made
- stage_id: stage_partner_integration
  title: Partner Data Integration (Future)
  status: stub
  summary: Integrate external partner shift availability data into coordinator view. Implementation scope, timeline, and approach to be defined after Stage 2 discovery completes and partner approval is secured.
  child_task_ids: []
  depends_on_stage:
    - stage_partner_discovery
  exit_criteria: '- Placeholder for future stage pending Stage 2 discovery outcomes and partner approval'
```

## Problem Or Opportunity

Volunteer shift coordination is manual and reactive. Coordinators lack advance visibility into which shifts lack coverage, making it hard to reach out early and reduce last-minute gaps. Current solution requires manual review of a roster to identify unfilled shifts—time-consuming and prone to missed gaps.

## Refinement Notes

Epic covering two outcomes: (1) Validate Sunday pilot concept with synthetic test data, RTV-003 intake refined and linked to RTV-011 implementation task; (2) Bounded discovery of partner data integration feasibility before any commitments. Stage 1 grounded in repository HTML template and static shift data. Partner schema, access, and approval are unknown; held as open questions on RTV-013.

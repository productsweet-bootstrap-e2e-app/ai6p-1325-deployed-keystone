---
title: Investigate external partner shift availability data model
id: RTV-013
status: backlog
template_type: implementation-task
parent_task_id: RTV-009
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: medium
owner: You (product owner)
tags: []
depends_on:
  - RTV-011
related_files: []
comments: 0
attachments: 0
---
## Summary

Bounded discovery task: document external partner shift availability data schema, access requirements, and integration blockers. No unsolicited partner contact; no commitments; no implementation.

## Scope

- R1: Research and document partner data schema (fields, data types, update frequency, known limitations)
- R2: Map access control model (authentication, authorization, rate limits, SLA requirements)
- R3: Identify technical blockers and approval requirements
- R4: Do not contact partner without explicit approval; do not make integration commitments

## Proposed Design / Approach

Interview internal stakeholders familiar with partner relationship (business, legal, technical). Review any existing partner documentation or API contracts. Document schema, access model, known constraints, and blockers. Create integration feasibility assessment with recommendations for next stage. Remain bounded—no prototyping, no code, no integration implementation.

## Verification Plan

- R1: Partner data schema document completed (fields, types, refresh frequency)
- R2: Access control requirements documented (auth method, roles, limits, SLA)
- R3: Technical blockers and approval requirements listed
- R3: Partner contact / approval path mapped but not executed
- R4: Feasibility assessment and recommendation delivered
- R4: No unsolicited partner outreach; no integration work started

## Refinement Notes

Covers stage_partner_discovery deliverable. Bounded planning task only. Depends on stage_sunday_pilot completion. Discovery outcomes inform next stage decision.

## Problem Or Opportunity

Sunday pilot will have validated that read-only shift visibility works with synthetic data and zero false positives. To expand beyond a proof-of-concept to production, the team must understand the external partner's shift availability data: what schema is available, how to access it securely, and what constraints or blockers exist. This discovery is bounded—no implementation, no prototyping, no unsolicited partner contact—to inform whether integration is feasible before making any commitments.

## Questions

```yaml
- question: What is the external partner's shift availability data schema? (e.g., what fields are available, data types, update frequency, known limitations or transformations required)
  status: open
  thread:
    - role: user
      text: What is the external partner's shift availability data schema? (e.g., what fields are available, data types, update frequency, known limitations or transformations required)
```

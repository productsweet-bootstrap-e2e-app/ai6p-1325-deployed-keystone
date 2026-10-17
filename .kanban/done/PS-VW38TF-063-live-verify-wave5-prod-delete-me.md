---
title: LIVE-VERIFY wave5 prod (delete me)
id: PS-VW38TF-063
status: done
template_type: implementation-task
source_intake_id: PS-VW38TF-061
created: 2026-10-17
updated: 2026-10-17
priority: medium
merged_delivery:
  version: 1
  provider: github
  repository: productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone
  pr_number: 43
  merged_sha: 6ebbec4d1496d5994a3a10ac207ac7a98c9b0f5f
  merged_at: 2026-10-17T04:37:34Z
  recorded_at: 2026-10-17T04:37:37.539Z
  delivery_id: github:productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone#43@6ebbec4d1496d5994a3a10ac207ac7a98c9b0f5f
  head_branch: feature/PS-VW38TF-063-live-verify-wave5-b
owner: shaun+deliverysmoke@payminty.com
source: manual-intake
created_by: 797ea448-a0b1-70bb-08ef-d146ad8ddf0b
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a live verifier, I want a throwaway idea whose one dev task completes, to watch the idea close in the same request, so that the wave-5 prod check can see the idea reach done and show as shipped; checked by watching the board.

## Refinement Notes

Generated from intake PS-VW38TF-061. Review this implementation draft before promoting it to Todo.

## Problem Or Opportunity

Throwaway dev task for the wave-5 prod live check. Delete me.

## Scope

Add one LIVE-VERIFY fixture file to the keystone repo.

## Proposed Design / Approach

One PR on the sacrificial keystone repo adds the fixture file; it is merged and then removed in cleanup.

## Verification Plan

- The LIVE-VERIFY wave5 fixture file for PS-VW38TF-063 exists on main.

## Completion Notes

- Outcome: Verified against merged SHA `6ebbec4d1496d5994a3a10ac207ac7a98c9b0f5f` at 2026-10-17T04:39:59.146Z.
- Verification actually run:
  - [x] The LIVE-VERIFY wave5 fixture file for PS-VW38TF-063 exists on main. — evidence: url:https://github.com/productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone/blob/6ebbec4d1496d5994a3a10ac207ac7a98c9b0f5f/.kanban/.data/PS-VW38TF-063/live-verify-wave5-fixture-b.txt, note:Fixture file present on main at the merged sha (checked with the contents API at 04:39Z). Wave-5 prod live check throwaway.
- Documentation updated: Recorded in the versioned verification sidecar and Git history.
- Follow-up tasks created: None recorded by the completion gate.
- Merged PR: #43
- Reviewed by: human:797ea448-a0b1-70bb-08ef-d146ad8ddf0b

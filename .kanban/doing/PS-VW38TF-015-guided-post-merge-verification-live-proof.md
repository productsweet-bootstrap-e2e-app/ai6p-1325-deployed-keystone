---
title: Guided post-merge verification live proof
id: PS-VW38TF-015
status: doing
template_type: implementation-task
created: 2026-08-02
updated: 2026-08-02
priority: high
verification_tier: live-sacrificial
merged_delivery:
  version: 1
  provider: github
  repository: productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone
  prNumber: 23
  mergedSha: 8948419f7566046155f79827657db6b489e453a6
  mergedAt: "2026-08-02T03:09:22Z"
  recordedAt: "2026-08-02T03:09:22Z"
  deliveryId: "github:productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone#23@8948419f7566046155f79827657db6b489e453a6"
  headBranch: test/ai6p-2294-reopen-verification-fixture
owner: Product Sweet smoke operator
tags:
  - smoke-target
  - verification
depends_on: []
related_files:
  - verification-target.txt
comments: 0
attachments: 0
---

## Summary

Sacrificial task for proving that a merged delivery remains active, launches the focused Verify
surface, records pass/fail evidence iteratively, and completes only after every current-SHA gate.

## Problem Or Opportunity

Offline tests cannot prove the deployed Board, webhook, agent image, evidence writer, and central
completion gate converge on the same task and merge SHA.

## Why This Matters

This fixture closes that gap without touching a tenant project.

## Scope

- Merge one correlated PR.
- Drive Verify from the Board Work tab with repository merge disabled in the agent session.
- Record a deliberate fail, resume, then record every criterion passed.

## Out Of Scope

- Product code changes.
- Tenant data.
- Waiving any criterion.

## Current State And Evidence

- Created only in the sanctioned deployed-flow keystone repository.

## Proposed Design / Approach

Use the deployed verification surface and preserve all evidence in the task sidecar/session rows.

## Architecture Impact

None; this is a disposable lifecycle proof.

## Determinism Considerations

- The correlated branch begins with `feature/PS-VW38TF-015-`.
- Every result binds to the webhook-recorded merged SHA.

## Implementation Plan

1. Merge the correlated fixture PR.
2. Run the Work → Verify journey.
3. Complete only through the central gate.

## Verification Plan

- Confirm the Work tab names the correlated PR and exact merged SHA.
- Record a deliberate failed observation and confirm the task stays active with Implement next.
- Resume the same current-delivery Verify session without creating a duplicate.
- Record final passing evidence for every criterion and complete through the central gate.

## Questions

```yaml
[]
```

## Documentation Update Plan

- Record the live session/run evidence on AI6P-2297 and AI6P-2298.

## Risks / Dependencies / Open Questions

- The fixture requires the repository's `pr-gate` context to pass on the merge SHA.

## Completion Notes

- AI6P-1901 webhook: merged via PR #22; card relocated to `done/` on the default branch (session-independent close-out).

- Verification actually run: Pending the deployed live-sacrificial journey.

- AI6P-2294 sacrificial correction: the merge-only completion above is the historical defect under
  test, not a verified disposition. Reopened for the staging verification journey.

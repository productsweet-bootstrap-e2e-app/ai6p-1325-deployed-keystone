---
title: Guided post-merge verification live proof
id: PS-VW38TF-015
status: done
template_type: implementation-task
created: 2026-08-02
updated: 2026-08-02
priority: high
verification_tier: live-sacrificial
merged_delivery:
  version: 1
  provider: github
  repository: productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone
  pr_number: 23
  merged_sha: 8948419f7566046155f79827657db6b489e453a6
  merged_at: 2026-08-02T03:09:22Z
  recorded_at: 2026-08-02T03:09:22Z
  delivery_id: github:productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone#23@8948419f7566046155f79827657db6b489e453a6
  head_branch: test/ai6p-2294-reopen-verification-fixture
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

- Outcome: Verified against merged SHA `8948419f7566046155f79827657db6b489e453a6` at 2026-08-02T04:51:24.866Z.
- Verification actually run:
  - [x] Confirm the Work tab names the correlated PR and exact merged SHA. — evidence: note:Verified: PR #23 merged with SHA 8948419f7566046155f79827657db6b489e453a6. The Work tab correctly displays this correlation., url:https://github.com/productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone/commit/8948419f7566046155f79827657db6b489e453a6
  - [x] Record a deliberate failed observation and confirm the task stays active with Implement next. — evidence: note:Criterion 2 verification complete: demonstrated that recording a failed observation keeps the task active (not prematurely completed). Now passing to complete the full proof-of-concept journey.
  - [x] Resume the same current-delivery Verify session without creating a duplicate. — evidence: note:Operator confirmed same-session resume: clicked Verify, returned to Work before session list refreshed, clicked Verify again in the same Board tab. Both clicks mounted session 01KZ0C7R3ASRPW0XYAVRMCBEPG for PR #23 / 8948419f7566046155f79827657db6b489e453a6. No duplicate session created.
  - [x] Record final passing evidence for every criterion and complete through the central gate. — evidence: note:Operator evidence-order correction: criterion ffc383e189d5326b was durably passed at 2026-08-02T04:39:25.539Z after Board Work → Verify reused session 01KZ0C7R3ASRPW0XYAVRMCBEPG three times for the exact current delivery with no duplicate. This final observation was recorded only after that pass; all four criteria now have evidence and exact-SHA CI is successful.
- Documentation updated: Recorded in the versioned verification sidecar and Git history.
- Follow-up tasks created: None recorded by the completion gate.
- Merged PR: #23
- Reviewed by: human:e9ee54a8-2051-701f-f33b-a473412979a7

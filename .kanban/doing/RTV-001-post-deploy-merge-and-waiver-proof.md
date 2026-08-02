---
title: Post-deploy merge and explicit waiver proof
id: RTV-001
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
  pr_number: 33
  merged_sha: ab1cd0aba475ae56e84d77239724594d79614175
  merged_at: 2026-08-02T06:37:53Z
  recorded_at: 2026-08-02T06:38:00.164Z
  delivery_id: github:productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone#33@ab1cd0aba475ae56e84d77239724594d79614175
  head_branch: feature/RTV-001-post-deploy-verification-proof
owner: Product Sweet staging smoke operator
tags:
  - smoke-target
  - verification
  - waiver
depends_on: []
related_files:
  - rtv-post-deploy-verification-proof.txt
comments: 0
attachments: 0
---

## Summary

Sacrificial staging-owned task for proving that the deployed merge worker records delivery without
completing the task, same-delivery replay is idempotent, and only an explicit human waiver can
bypass unmet verification criteria.

## Problem Or Opportunity

The deployed webhook and human waiver paths require real GitHub and Cognito evidence beyond offline
contract tests.

## Why This Matters

This fixture closes the remaining S1 live-proof gap without touching a tenant project.

## Scope

- Merge one correlated PR through the staging webhook.
- Observe the exact merged SHA in the Board Verification column.
- Replay the same signed merge event and prove no second logical transition.
- Prove ordinary completion is denied while criteria remain unmet.
- Exercise waiver only after the Product Sweet operator explicitly approves it.

## Out Of Scope

- Tenant data.
- Product code changes.
- Treating the waiver as verified evidence.

## Current State And Evidence

- Created only in the sanctioned deployed-flow keystone repository.
- Uses staging's server-owned `RTV` task prefix.

## Proposed Design / Approach

Use the deployed staging app, staging webhook, and sacrificial Cognito principal. Keep all criteria
pending so the ordinary completion gate must deny before the separate waiver decision.

## Architecture Impact

None; this is a disposable lifecycle proof.

## Determinism Considerations

- The correlated implementation branch begins with `feature/RTV-001-`.
- Every observation binds to the webhook-recorded PR and merged SHA.

## Implementation Plan

1. Merge the correlated fixture PR.
2. Observe the Verification state and exact SHA.
3. Replay the identical merge event and compare repository state.
4. Attempt ordinary completion, then request an explicit operator waiver decision.

## Verification Plan

- [ ] Confirm the merge leaves this task active and the Board derives Verification.
- [ ] Confirm the Work tab names the correlated PR and exact merged SHA.
- [ ] Confirm replaying the same merge event creates no second logical task transition.
- [ ] Confirm ordinary completion is denied while evidence is missing.
- [ ] Confirm an explicit human waiver records `waived`, the reason, actor, exact unmet set, and SHA.

## Questions

```yaml
[]
```

## Documentation Update Plan

- Record the live identifiers and evidence on AI6P-2295 and AI6P-2296.

## Risks / Dependencies / Open Questions

- The fixture must remain in the sacrificial repository and use the staging webhook only.

## Completion Notes

- Outcome: Pending live-sacrificial proof.
- Verification actually run: Pending.
- Documentation updated: Pending.
- Follow-up tasks created: None.
- Merged PR: Pending.
- Reviewed by: Pending.

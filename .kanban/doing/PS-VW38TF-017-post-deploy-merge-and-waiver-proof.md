---
title: Post-deploy merge and explicit waiver proof
id: PS-VW38TF-017
status: doing
template_type: implementation-task
created: 2026-08-02
updated: 2026-08-02
priority: high
verification_tier: live-sacrificial
owner: Product Sweet smoke operator
tags:
  - smoke-target
  - verification
  - waiver
depends_on: []
related_files:
  - post-deploy-verification-proof.txt
comments: 0
attachments: 0
---

## Summary

Sacrificial task for proving that the deployed merge worker records delivery without completing
the task, webhook redelivery is idempotent, and only an explicit human waiver can bypass unmet
verification criteria.

## Problem Or Opportunity

The post-deploy webhook and human waiver paths require real GitHub and Cognito evidence beyond
offline contract tests.

## Why This Matters

This fixture closes the remaining S1 live-proof gap without touching a tenant project.

## Scope

- Merge one correlated PR through the staging webhook.
- Observe the exact merged SHA in the Board Verification column.
- Redeliver the same GitHub event and prove no second logical transition.
- Prove ordinary completion is denied while criteria remain unmet.
- Exercise waiver only after the Product Sweet operator explicitly approves it.

## Out Of Scope

- Tenant data.
- Product code changes.
- Treating the waiver as verified evidence.

## Current State And Evidence

- Created only in the sanctioned deployed-flow keystone repository.

## Proposed Design / Approach

Use the deployed staging app, its staging webhook, and the sacrificial Cognito principal. Keep the
criteria pending so the ordinary completion gate must deny before the separate waiver decision.

## Architecture Impact

None; this is a disposable lifecycle proof.

## Determinism Considerations

- The correlated implementation branch begins with `feature/PS-VW38TF-017-`.
- Every observation binds to the webhook-recorded PR and merged SHA.

## Implementation Plan

1. Merge the correlated fixture PR.
2. Observe the Verification state and exact SHA.
3. Redeliver the merge webhook and compare repository state.
4. Attempt ordinary completion, then request an explicit operator waiver decision.

## Verification Plan

- [ ] Confirm the merge leaves this task active and the Board derives Verification.
- [ ] Confirm the Work tab names the correlated PR and exact merged SHA.
- [ ] Confirm redelivering the merge webhook creates no second logical task transition.
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

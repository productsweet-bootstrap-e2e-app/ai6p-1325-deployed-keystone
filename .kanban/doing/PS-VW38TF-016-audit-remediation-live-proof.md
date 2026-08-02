---
title: Audit remediation live proof
id: PS-VW38TF-016
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
  pr_number: 26
  merged_sha: 990e9728f81d8ef49aa00483bbcaf7f86e4e74ed
  merged_at: 2026-08-02T15:41:29+12:00
  recorded_at: 2026-08-02T15:41:29+12:00
  delivery_id: github:productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone#26@990e9728f81d8ef49aa00483bbcaf7f86e4e74ed
  head_branch: historical/pr-26
owner: Product Sweet smoke operator
tags:
  - smoke-target
  - audit-remediation
depends_on: []
related_files:
  - audit-remediation-fixture.txt
comments: 0
attachments: 0
---

## Summary

Sacrificial task for proving the merge-only completion audit and selected remediation path.

## Problem Or Opportunity

The historical merge webhook can move a task to Done before verification evidence exists.

## Why This Matters

S3 needs real Git and webhook history that the audit can classify and repair without touching a tenant.

## Scope

- Merge this correlated fixture.
- Allow the historical production webhook to close it without verification.
- Audit and explicitly select only this task for reopening.

## Out Of Scope

- Tenant data.
- Product code changes.
- Fabricated passing evidence.

## Current State And Evidence

- Created in the sanctioned sacrificial repository only.

## Proposed Design / Approach

Use this task as the one selected `verification-missing` remediation target.

## Architecture Impact

None.

## Determinism Considerations

- The correlated branch starts with `feature/PS-VW38TF-016-`.
- The audit must resolve exactly one PR and merge commit.

## Implementation Plan

1. Merge the fixture PR.
2. Wait for the historical merge-only close.
3. Run dry-run, review the fingerprint, and apply only PS-VW38TF-016.

## Verification Plan

- [ ] Confirm the dry-run classifies this task as `verification-missing` with no writes.
- [ ] Apply the reviewed report to this task only and confirm it returns to Doing.
- [ ] Confirm unrelated task bytes and code are unchanged.

## Questions

```yaml
[]
```

## Documentation Update Plan

- Record the report and repair commit on AI6P-2299.

## Risks / Dependencies / Open Questions

- Production currently carries the historical auto-close worker used only to create this fixture.

## Completion Notes

- AI6P-2299 operator correction (da92751838db9017cc9d5072be4c0cd9772a82eb65e9a9200cb9289f076fea0b): invalidated the prior merge-only completion for PR #26; reopened to verification pending for shipping SHA `990e9728f81d8ef49aa00483bbcaf7f86e4e74ed` at 2026-08-02T03:42:09.185Z.

- AI6P-1901 webhook: merged via PR #26; card relocated to `done/` on the default branch (session-independent close-out).

- Verification actually run: Pending S3 audit/remediation proof.

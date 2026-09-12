---
title: Rewrite welcome copy and validate with five synthetic scenarios
id: RTV-024
status: backlog
template_type: implementation-task
parent_task_id: RTV-022
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: high
owner: AI agent + user
tags:
  - purpose
  - welcome-copy
  - synthetic-scenarios
  - read-only-preview
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Update home-page welcome copy to clearly explain the purpose. Create a read-only preview harness showing five synthetic visitor scenarios and verify all five report correct understanding with zero misleading claims.

## Expected Outcome

All five synthetic scenarios report correct understanding of the purpose. Record actual scenario outcomes and save them as the manual baseline. No misleading claims appear in any scenario.

## Problem Or Opportunity

The current home-page welcome copy is generic and does not communicate the platform's purpose. First-time visitors need clear, purpose-focused copy to understand what the platform is and why it exists.

## Scope

R1: Locate and rewrite home-page welcome copy. R2: Build read-only preview harness for five synthetic scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester). R3: Verify each scenario and record understanding. EXCLUSIONS: No interactive sign-up, no notifications, no analytics instrumentation, no real visitor data.

## Proposed Design / Approach

1. Discover the actual home-page file path via the repo Refine flow (this task is currently stub—do not assume a filename). 2. Rewrite the welcome section to explain the purpose clearly and concisely. 3. Implement a read-only preview harness that programmatically generates five synthetic visitor scenarios. 4. Run each scenario and capture the visitor's reported understanding of the purpose. 5. Verify all five scenarios demonstrate correct understanding and contain zero misleading claims. 6. Record each scenario outcome (what the visitor explained, whether it was correct, any flag observations).

## Verification Plan

- Inspect repository to locate home-page welcome-copy file (record path in relatedFiles)\n- Confirm current welcome copy state before changes\n- Scenario 1 (curious founder): Run preview, record their understanding, verify it matches intended purpose, flag if incorrect or misleading\n- Scenario 2 (developer evaluating demo): Run preview, record their understanding, verify it matches intended purpose, flag if incorrect or misleading\n- Scenario 3 (nontechnical small-business owner): Run preview, record their understanding, verify it matches intended purpose, flag if incorrect or misleading\n- Scenario 4 (returning evaluator): Run preview, record their understanding, verify it matches intended purpose, flag if incorrect or misleading\n- Scenario 5 (accessibility tester): Run preview, record their understanding, verify it matches intended purpose, flag if incorrect or misleading\n- Confirm zero misleading claims across all five scenario responses

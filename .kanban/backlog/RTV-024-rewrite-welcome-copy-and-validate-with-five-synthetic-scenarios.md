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
related_files:
  - src/index.njk
comments: 0
attachments: 0
---
## Summary

Update home-page welcome copy to clearly explain the purpose. Create a read-only preview harness showing five synthetic visitor scenarios and verify all five report correct understanding with zero misleading claims.

## Expected Outcome

All five synthetic scenarios report correct understanding of the purpose. Record actual scenario outcomes and save them as the manual baseline. No misleading claims appear in any scenario.

## Problem Or Opportunity

The current home-page welcome copy (in `src/index.njk`) reads: "Hello and welcome — we're so glad you found us." followed by "Managed by Product Sweet bootstrap (AI6P-249)." This copy does not communicate the platform's purpose or what the site does. First-time visitors have no context for what this is or why they should care.

## Scope

R1: Locate and rewrite home-page welcome copy. R2: Build read-only preview harness for five synthetic scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester). R3: Verify each scenario and record understanding. EXCLUSIONS: No interactive sign-up, no notifications, no analytics instrumentation, no real visitor data.

## Proposed Design / Approach

1. File location confirmed: `src/index.njk` (lines 1–10; welcome is the `<h1>` and `<p>` in the `<main>` block). 2. Rewrite the welcome section to clearly explain this is a disposable demo website with a welcome page; establish no claim of production services, sign-up, or API integration. 3. Implement a read-only preview harness that programmatically generates five synthetic visitor scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester). 4. Run each scenario and capture the visitor's reported understanding. 5. Verify all five scenarios confirm this is a demo website with a welcome page and no misleading claims about production services. 6. Record each scenario outcome (what the visitor explained, whether it was correct, any flag observations).

## Verification Plan

- Confirm welcome file location and content before changes: `src/index.njk` (observed 2026-09-12)\n- Rewrite welcome copy to clearly explain this is a demo website with no production services, sign-up, or API integration\n- Build read-only preview harness supporting five synthetic scenarios\n- Scenario 1 (curious founder): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 2 (developer evaluating demo): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 3 (nontechnical small-business owner): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 4 (returning evaluator—first visit confusing): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 5 (accessibility tester using plain text): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Confirm zero misleading claims across all five scenario responses\n- Record baseline: all five scenario outcomes with date and notes

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

Update home-page welcome copy to clearly explain this is a disposable demo website. Create a read-only preview harness showing five synthetic visitor scenarios and verify all five report correct understanding (demo website, no production services/sign-up/API) with zero misleading claims. Record outcomes manually as baseline.

## Expected Outcome

All five synthetic scenarios report understanding that this is a disposable demo website with a welcome page, no production services, no sign-up, no API integration. Record actual scenario outcomes as the manual baseline. Zero misleading claims across all responses.

## Problem Or Opportunity

The current home-page welcome copy (in `src/index.njk`) reads: "Hello and welcome — we're so glad you found us." followed by "Managed by Product Sweet bootstrap (AI6P-249)." This is placeholder text that does not communicate what this site is. First-time visitors have no context that this is a disposable demo website.

## Scope

R1: Locate and rewrite home-page welcome copy to clearly establish this is a disposable demo website with no production services, sign-up, or API integration. R2: Build read-only preview harness for five synthetic scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester). R3: Verify each scenario identifies this as a demo and record understanding. R4: Record all five scenario outcomes manually as the baseline. EXCLUSIONS: No interactive sign-up, no notifications, no analytics instrumentation, no real visitor data.

## Proposed Design / Approach

1. File location confirmed: `src/index.njk` (welcome text in `<h1>` and `<p>` tags within the `<main>` block). 2. Rewrite the welcome section to clearly explain this is a disposable demo website with a welcome page; establish no claim of production services, sign-up, or API integration. 3. Implement a read-only preview harness that generates five synthetic visitor scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester using plain text). 4. Run each scenario and capture what the visitor explains about the site's purpose. 5. Verify all five scenarios confirm this is a demo website and contain zero misleading claims. 6. Record each scenario outcome (visitor's explanation, correctness flag, any observations).

## Verification Plan

- Confirm welcome file location and current content: `src/index.njk` (observed 2026-09-12)\n- Rewrite welcome copy to clearly establish this is a demo website with no production services, sign-up, or API integration\n- Build read-only preview harness supporting five synthetic scenarios\n- Scenario 1 (curious founder): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 2 (developer evaluating demo): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 3 (nontechnical small-business owner): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 4 (returning evaluator—first visit confusing): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Scenario 5 (accessibility tester using plain text): Run preview, record their explanation, verify they identify this as a demo website with welcome page, flag if misleading\n- Confirm zero misleading claims across all five scenario responses\n- Record baseline: all five scenario outcomes with date and outcome notes

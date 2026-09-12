---
title: Rewrite welcome copy and validate with five synthetic scenarios
id: RTV-024
status: done
template_type: implementation-task
parent_task_id: RTV-022
created: 2026-09-12
updated: 2026-09-12
priority: high
close_reason: other
close_note: AI6P-2545 disposable verification fixture cleanup. Explicit cancellation, not delivered implementation or successful task completion.
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

1. File location confirmed: `src/index.njk` (welcome text in `<h1>` and `<p>` tags within the `<main>` block). Current content verified 2026-09-12: "Hello and welcome — we're so glad you found us." + "Managed by Product Sweet bootstrap (AI6P-249)."

2. **R1 Deliverable:** Rewrite the welcome section of `src/index.njk` to clearly explain this is a disposable demo website with a welcome page; establish no claim of production services, sign-up, or API integration. Updated file committed to branch.

3. **R2 Deliverable:** Implement a read-only preview harness that generates five synthetic visitor scenarios: curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator (first visit was confusing), accessibility tester (plain text). Harness code committed to branch.

4. **R3 Deliverable:** Run the preview harness for each of the five scenarios, capture the visitor's explanation of the site's purpose, and manually score each: PASS if identifies demo website (no verbatim repetition of exclusions required); FAIL if claims production services, sign-up, or API integration. Record all five explanations and scores.

5. **R4 Deliverable:** Document all five baseline scenario outcomes (date, scenario name, actual visitor explanation, manual PASS/FAIL score, any observations on clarity or misleading language). Save outcomes as permanent record in task completion notes.

## Verification Plan

- Confirm welcome file location and current content: `src/index.njk` (currently verified: "Hello and welcome — we're so glad you found us." + "Managed by Product Sweet bootstrap (AI6P-249).")
- R1: Rewrite welcome copy to clearly establish this is a demo website with no production services, sign-up, or API integration
- R2: Build read-only preview harness supporting five synthetic scenarios
- R3/Scenario 1 (curious founder): Run preview, record their explanation, manually score: PASS if identifies demo website (no verbatim repetition required); FAIL if claims production services, sign-up, or API integration
- R3/Scenario 2 (developer evaluating demo): Run preview, record their explanation, manually score: PASS if identifies demo website; FAIL if claims production services, sign-up, or API integration
- R3/Scenario 3 (nontechnical small-business owner): Run preview, record their explanation, manually score: PASS if identifies demo website; FAIL if claims production services, sign-up, or API integration
- R3/Scenario 4 (returning evaluator—first visit confusing): Run preview, record their explanation, manually score: PASS if identifies demo website; FAIL if claims production services, sign-up, or API integration
- R3/Scenario 5 (accessibility tester using plain text): Run preview, record their explanation, manually score: PASS if identifies demo website; FAIL if claims production services, sign-up, or API integration
- R4: Record all five actual baseline outcomes (date, scenario, explanation, PASS/FAIL, any observations)
- Confirm zero misleading claims (failures are flagged as misleading claims)

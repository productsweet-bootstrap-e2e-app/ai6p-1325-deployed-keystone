---
title: First-time visitors understand the purpose (AI6P-2545 verification epic)
id: RTV-022
status: backlog
template_type: implementation-task
kind: epic
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: high
owner: You (product owner)
tags:
  - verification
  - purpose
  - first-time-visitor
  - synthetic-scenarios
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Verify that first-time visitors read improved home-page copy and can explain the purpose correctly, using five synthetic scenarios without real visitor data, sign-up, notifications, or analytics.

## Expected Outcome

Baseline is unknown and will be recorded manually by running the five synthetic scenarios pre-launch. Target: all five scenarios report correct understanding of the purpose. Post-release conversion impact will be measured separately after launch; this task validates only delivery.

## Problem Or Opportunity

First-time visitors landing on the site have no clear understanding of what this platform does or why they should care. The current welcome copy is generic and doesn't communicate the core purpose.

## Scope

R1: Rewrite welcome copy on home page to explain purpose clearly. R2: Create read-only preview harness showing five synthetic visitor scenarios. R3: Verify each scenario's reported understanding matches the intended purpose and contains zero misleading claims. R4: Record scenario outcomes manually. EXCLUSIONS: No sign-up flow, no notifications, no analytics implementation, no real visitor data collection during this task. Post-release conversion measurement is separate.

## Proposed Design / Approach

Stage 1 (Copy Validation): Rewrite `src/index.njk` welcome copy to clearly establish this is a disposable demo website with a welcome page and no production services, sign-up, or API integration. Preview the updated copy under five synthetic visitor scenarios (curious founder, developer evaluating demo, nontechnical small-business owner, returning evaluator—first visit confusing, accessibility tester). Verify all five scenarios identify this as a demo and record outcomes manually as the baseline. Zero misleading claims permitted. Stage 2 (Partner API Discovery): Run independently in parallel. Investigate and decide whether pursuing a partner content API is feasible and worthwhile. Deliverable is a decision note covering partner identity, schema, access requirements, and approval authority—either confirmed (with minimal plan) or documented as unresolved. No implementation is approved unless all unknowns are resolved AND Stage 1 completes successfully AND explicit approval is given.

## Verification Plan

- Run synthetic scenario 1 (curious founder) and record their explanation of the purpose\n- Run synthetic scenario 2 (developer evaluating demo) and record their explanation of the purpose\n- Run synthetic scenario 3 (nontechnical small-business owner) and record their explanation of the purpose\n- Run synthetic scenario 4 (returning evaluator—first visit was confusing) and record their explanation of the purpose\n- Run synthetic scenario 5 (accessibility tester using plain text) and record their explanation of the purpose\n- Verify all five explanations demonstrate correct understanding of the purpose\n- Confirm zero misleading claims in responses across all five scenarios

## Stages

```yaml
- stage_id: copy-validation
  title: Rewrite copy and validate with scenarios
  status: designed
  summary: Update home-page welcome copy for clarity and test it against five synthetic first-time visitor scenarios to verify correct purpose understanding.
  child_task_ids:
    - RTV-024
  depends_on_stage: []
  exit_criteria: All five synthetic scenarios report correct understanding of the purpose with zero misleading claims. Scenario outcomes recorded manually.
- stage_id: partner-api-discovery
  title: Partner content API discovery (independent decision track)
  status: designed
  summary: Investigate and decide whether to pursue a partner content API to supplement purpose explanation. Deliverable is a decision note (access/schema/approval resolved or deferred). No implementation is approved; decision track runs independently and in parallel with Stage 1.
  child_task_ids:
    - RTV-026
  depends_on_stage: []
  exit_criteria: 'Decision document: partner access, schema requirements, and approval authority either confirmed (with plan) or justified as unresolved/deferred. No implementation without Stage 1 completion and explicit approval.'
```

## Questions

```yaml
- question: What constitutes "correct understanding of the purpose" for the five synthetic scenarios? Should the bar include specific keywords, a particular explanation pattern, or is it a judgment call on whether the explanation is in plain language and captures the platform's core function?
  status: answered
  thread:
    - role: user
      text: What constitutes "correct understanding of the purpose" for the five synthetic scenarios? Should the bar include specific keywords, a particular explanation pattern, or is it a judgment call on whether the explanation is in plain language and captures the platform's core function?
    - role: agent
      text: '**Recorded:** Correct understanding means all five synthetic scenarios identify this as a disposable demo website with a welcome page; no claim of production services, sign-up or API integration.'
- question: 'How will you score whether a synthetic scenario''s explanation contains "correct understanding"? Should there be a written rubric (e.g., must include: demo website, no production services, no API integration) or is it a judgment call on whether the explanation is sufficient?'
  status: answered
  thread:
    - role: user
      text: 'How will you score whether a synthetic scenario''s explanation contains "correct understanding"? Should there be a written rubric (e.g., must include: demo website, no production services, no API integration) or is it a judgment call on whether the explanation is sufficient?'
- question: For Stage 2 (Partner API Discovery), who are the candidate partners or data sources you're considering? Should the discovery focus on a specific type of integration (e.g., CMS API, news feed, third-party content service) or is the scope intentionally broad?
  status: answered
  thread:
    - role: user
      text: For Stage 2 (Partner API Discovery), who are the candidate partners or data sources you're considering? Should the discovery focus on a specific type of integration (e.g., CMS API, news feed, third-party content service) or is the scope intentionally broad?
```

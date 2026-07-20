---
title: "Front page: warm welcome message for new visitors"
id: PS-VW38TF-014
status: done
template_type: implementation-task
source_intake_id: PS-VW38TF-012
created: 2026-07-20
updated: 2026-07-20
priority: medium
owner: AI agent + user
tags:
  - front-page
  - copy
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Replace the current plain front-page title with a warm, friendly welcome message aimed at first-time visitors. Draft a couple of wording options for the product owner to choose from before implementing.

## Problem Or Opportunity

New, first-time visitors currently land on a plain, generic front-page title with no welcoming tone. This is a missed opportunity to make a warm first impression.

## Scope

In scope: replacing the current plain front-page title/copy with a warm, friendly welcome message for first-time visitors. Out of scope: opening hours display or any other front-page content/layout changes (explicitly dropped from this story by the product owner).

## Proposed Design / Approach

Draft a couple of friendly, warm-toned welcome message options for the front-page hero/title area and present them to the product owner for selection. Once a wording is chosen, replace the existing plain title with the selected message. Expected to be a copy-only change to existing front-page markup, no functional/data changes.

## Verification Plan

- Confirm the front page displays the chosen warm welcome message in place of the previous plain title.
- Confirm the message reads naturally to a first-time visitor (informal read-through).
- Confirm no other front-page content, layout, or functionality was affected.

## Completion Notes

- AI6P-1901 webhook: merged via PR #17; card relocated to `done/` on the default branch (session-independent close-out).

- Outcome: Product owner selected the wording "Hello and welcome — we're so glad you found us." to replace the plain front-page title. Implemented as a copy-only change to `src/index.njk` (replaced `<h1>{{ title }}</h1>` with the chosen welcome message). No other front-page content/layout changed.
- PR: https://github.com/productsweet-bootstrap-e2e-app/ai6p-1325-deployed-keystone/pull/17 (branch feature/PS-VW38TF-014, not yet merged).
- Verification actually run: PR CI (`pr-gate`, `probe` checks) was triggered and was still in progress ("in_progress") at last poll — not yet green. This session cannot reliably wait out the full CI run, and this org's self-armed-wake automation is currently off (arming request returned "self-armed-wake-trigger-disabled"), so no automatic follow-up session will be triggered on completion. A human should check the PR's CI status and, once green, merge it.
- Verification Plan items ("front page displays chosen message", "reads naturally", "no other content affected") — the copy change matches the plan by inspection of the diff; a human/product-owner visual check on the deployed preview is still recommended before merge.
- Documentation updated: none required (copy-only change, no architecture impact).
- Follow-up tasks created: none.

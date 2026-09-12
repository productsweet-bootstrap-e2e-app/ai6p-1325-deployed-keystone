---
title: I want the welcome page to say something friendlier. E763CE670F56
id: PS-VW38TF-031
status: intake
template_type: user-story
intake_state: captured
delivery_task_ids: []
created: 2026-09-12
updated: 2026-09-12
priority: medium
owner: shaun+deliverysmoke@payminty.com
source: manual-intake
created_by: 797ea448-a0b1-70bb-08ef-d146ad8ddf0b
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Visitors landing on the welcome page., I want A friendlier-sounding welcome message on the welcome page. The user stated no strong preference on exact wording — they said "pick whichever you think reads best" — and confirmed only the welcome message text should change, nothing else on the page., so that The welcome page displays a warmer, friendlier message than the current one. No baseline metric was requested; success is a qualitative read confirmed by the product owner reviewing the proposed replacement text..

## User Type

Visitors landing on the welcome page.

## User Need

A friendlier-sounding welcome message on the welcome page. The user stated no strong preference on exact wording — they said "pick whichever you think reads best" — and confirmed only the welcome message text should change, nothing else on the page.

## Expected Outcome

The welcome page displays a warmer, friendlier message than the current one. No baseline metric was requested; success is a qualitative read confirmed by the product owner reviewing the proposed replacement text.

## Problem Or Opportunity

The current welcome page copy is considered not friendly enough. Note: an earlier request (PS-VW38TF-014) already replaced the original plain title with "Hello and welcome — we're so glad you found us." in src/index.njk. The product owner, when told this, repeated the same standing instruction (no preference, pick whichever reads best, just the welcome message) rather than confirming the existing wording is acceptable — so this item is being treated as a request for a further wording refresh rather than assumed closed.

## Scope

R1: Update the wording of the welcome page's welcome message (currently the `<h1>` in src/index.njk) to a friendlier/warmer tone. Exclusions: no other page copy, layout, or functional changes — user explicitly confirmed "just the welcome message, nothing else."

## Proposed Design / Approach

R1: Implementer drafts 1-2 candidate friendlier replacement strings for the welcome message and presents them for a quick pick/approval, since the user expressed no wording preference themselves. Implement the chosen text as a small copy-only change to src/index.njk.

## Verification Plan

- R1: The welcome page's message text differs from the current copy ("Hello and welcome — we're so glad you found us.") and matches the user-approved replacement string exactly.

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Duplicate-risk note: this is one of several near-identical intake items with the same title/request currently open (PS-VW38TF-019, -021, -023, -025, -027, -029). Recommend the product owner confirm which single item should proceed and the others be closed as duplicates, to avoid multiple dev tasks for the same change. Also flagged that the requested change may already be satisfied by prior delivery PS-VW38TF-014 — the user did not confirm the current wording is acceptable when asked directly, so this stays open pending an explicit pick/approval of new wording.

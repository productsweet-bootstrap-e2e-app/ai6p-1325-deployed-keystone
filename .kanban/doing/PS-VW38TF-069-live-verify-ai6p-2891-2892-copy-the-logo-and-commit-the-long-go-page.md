---
title: "Live-verify AI6P-2891/2892: copy the logo and commit the long /go page"
id: PS-VW38TF-069
status: doing
template_type: implementation-task
created: 2026-11-27
updated: 2026-11-27
priority: low
owner: 797ea448-a0b1-70bb-08ef-d146ad8ddf0b
created_by: 797ea448-a0b1-70bb-08ef-d146ad8ddf0b
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Sacrificial live-verification task. Put the logo attached to PS-VW38TF-068 on the site and commit its long /go page answer, using the agent file tools on the deployed image.

## Scope

Do these steps in order, on ONE feature branch, and nothing else:
1. Create the branch `feature/live-verify-ai6p-2891-2892` from main with repo.create-branch.
2. Copy the image `.kanban/.data/PS-VW38TF-068/attachments/01-live-logo-ai6p-2891.png` (attached to item PS-VW38TF-068) into the site public folder as `src/public/images/live-logo.png` with repo.copy-file on that branch. Do not move it and do not delete it.
3. Read item PS-VW38TF-068 with kanban.task.get. Its question has a long answer that comes back as a stub. Commit that answer as `src/go.njk` on the branch with repo.write-file using fromTaskText (taskId PS-VW38TF-068, the stub ref, and expectedSha256 set to the stub sha256). Never retype the text, do not pass wrapRaw, and do not split it.
4. Read `src/go.njk` back on the branch with repo.read-file (no range), then read one more page at the returned nextOffset. Report totalChars, truncated and nextOffset for each page. Do not edit the file.
5. Report the commit sha of steps 2 and 3. Do not open a pull request, do not merge, and do not change any other file.

## Verification Plan

- git ls-tree on the branch shows the same blob sha at the attachment path and at src/public/images/live-logo.png.
- src/go.njk minus the raw tags hashes to the answer sha256.

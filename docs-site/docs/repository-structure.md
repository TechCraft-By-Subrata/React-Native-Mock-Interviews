---
id: repository-structure
title: Repository Structure
sidebar_label: Repository Structure
---

# Repository Structure

The repository is designed to grow into both a content archive and a public documentation site.

## Intended structure

```text
.
├── README.md
├── interviews/
│   ├── Interview-001/
│   │   ├── Candidate.md
│   │   ├── Questions.md
│   │   ├── Feedback.md
│   │   ├── Resources.md
│   │   └── Recording.md
│   └── ...
├── common-questions/
├── resources/
├── volunteers/
└── docs-site/
```

## What exists today

- `README.md`: project vision and scope
- `volunteers/`: current volunteer-specific interview question sets
- `docs-site/`: the public Docusaurus site for GitHub Pages
- `react-native-mock-interview.png`: repository branding asset

## Recommended growth path

1. Keep `volunteers/` as the intake area for candidate-specific mock interview sets.
2. Add `interviews/` once full interview packages exist with feedback, resources, and recordings.
3. Add `common-questions/` for reusable topic-based prep material.
4. Use `docs-site/` to explain the process, surface featured interviews, and onboard contributors.

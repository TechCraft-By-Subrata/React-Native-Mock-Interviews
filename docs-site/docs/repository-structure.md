---
id: repository-structure
title: Repository Structure
sidebar_label: Repository Structure
---

# Repository Structure

The repository is designed around a single source of truth for each volunteer profile, plus a public documentation site.

## Current structure

```text
.
├── README.md
├── volunteers/
│   ├── abrar-hasan.md
│   ├── awais-ahmed.md
│   └── ...
└── docs-site/
```

## What exists today

- `README.md`: project vision and scope
- `volunteers/`: volunteer-specific interview question sets and later the same file can be updated with the YouTube recording link
- `docs-site/`: the public Docusaurus site for GitHub Pages
- `react-native-mock-interview.png`: repository branding asset

## How it works

1. Add one markdown file per volunteer inside `volunteers/`.
2. Use that same file to hold the question set for the mock interview.
3. After the interview is published on YouTube, update the same volunteer file with the recording link.
4. Let `docs-site/` generate the public volunteer pages automatically from those files.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsSiteRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(docsSiteRoot, '..');
const volunteersDir = path.join(repoRoot, 'volunteers');
const docsDir = path.join(docsSiteRoot, 'docs');
const generatedProfilesDir = path.join(docsDir, 'volunteers-profiles');
const volunteersIndexPath = path.join(docsDir, 'volunteers.md');

function toTitleCaseFromSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function parseVolunteer(content, slug) {
  const headingMatch = content.match(/^#\s+(.+)$/m);
  const candidateMatch = content.match(/^###\s+Candidate:\s*(.+)$/m);
  const linkedInMatch = content.match(/\*\*LinkedIn:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/i);

  const rawCandidate = candidateMatch?.[1]?.trim() ?? toTitleCaseFromSlug(slug);
  const candidateName = rawCandidate.replace(/\s*\(.+?\)\s*$/, '').trim();
  const candidateDetailsMatch = rawCandidate.match(/\((.+)\)/);
  const interviewFocus = headingMatch?.[1]?.trim() ?? 'React Native Mock Interview';

  return {
    candidateLabel: rawCandidate,
    candidateName,
    candidateDetails: candidateDetailsMatch?.[1]?.trim() ?? null,
    interviewFocus,
    linkedInUrl: linkedInMatch?.[2]?.trim() ?? null,
  };
}

function buildVolunteerDoc({ candidateName, slug, content }) {
  const description = `${candidateName} volunteer profile for the React Native Mock Interviews project.`;

  return `---
title: ${candidateName}
description: ${description}
slug: /volunteers/${slug}
---

${content.trim()}
`;
}

function buildVolunteersIndex(volunteers) {
  const list = volunteers
    .map(
      ({ candidateName, candidateDetails, slug }) =>
        candidateDetails
          ? `- [${candidateName}](/docs/volunteers/${slug}) (${candidateDetails})`
          : `- [${candidateName}](/docs/volunteers/${slug})`
    )
    .join('\n');

  return `---
id: volunteers
title: Volunteers
sidebar_label: Volunteers
description: Volunteer interview profiles for the React Native Mock Interviews project.
---

# Volunteers

These pages are generated automatically from the repository's \`volunteers/\` folder. Add a new volunteer markdown file there, and the docs site will generate an internal profile page during the next build.

## Active profiles

${list}

## What these files represent

Each volunteer file is a candidate-specific mock interview pack. It generally includes:

- Candidate name and profile
- Target seniority
- Interview question set
- Suggested interview structure
- The YouTube recording link after the interview is published

## Volunteer notes

- Final interviews are planned to be published on the [TechCraft Club YouTube channel](https://www.youtube.com/@techcraftclub)
- Showing face is optional
- Sharing a resume is optional

## Ongoing update model

Each volunteer stays in the same \`volunteers/\` file before and after the interview. Once the interview is uploaded, update that same file with the YouTube link instead of moving it to a separate folder.
`;
}

async function main() {
  await fs.mkdir(generatedProfilesDir, { recursive: true });
  const volunteerFiles = (await fs.readdir(volunteersDir))
    .filter((entry) => entry.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));

  const generatedVolunteers = [];
  const existingGenerated = await fs.readdir(generatedProfilesDir);
  await Promise.all(
    existingGenerated
      .filter((entry) => entry.endsWith('.md'))
      .map((entry) => fs.unlink(path.join(generatedProfilesDir, entry)))
  );

  for (const fileName of volunteerFiles) {
    const slug = fileName.replace(/\.md$/i, '');
    const sourcePath = path.join(volunteersDir, fileName);
    const content = await fs.readFile(sourcePath, 'utf8');
    const parsed = parseVolunteer(content, slug);
    const docContent = buildVolunteerDoc({
      ...parsed,
      slug,
      content,
    });

    await fs.writeFile(
      path.join(generatedProfilesDir, `${slug}.md`),
      docContent,
      'utf8'
    );

    generatedVolunteers.push({
      ...parsed,
      slug,
    });
  }

  generatedVolunteers.sort((a, b) =>
    a.candidateName.localeCompare(b.candidateName)
  );

  await fs.writeFile(
    volunteersIndexPath,
    buildVolunteersIndex(generatedVolunteers),
    'utf8'
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

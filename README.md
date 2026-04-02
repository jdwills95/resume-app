# Resume App

Single-page Angular application for a personal resume and contact page.

## Tech stack

- Angular `21`
- TypeScript `5.9`
- SCSS + Bootstrap `5`
- Jasmine + Karma for unit tests
- Protractor (legacy) for e2e tests

## Prerequisites

- Node.js `20+` (even-numbered LTS only; Node `22` LTS recommended)
- npm `10+`

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Enable repository Git hooks (required once per clone):

```bash
npm run setup-hooks
```

3. Start the development server:

```bash
npm start
```

4. Open `http://localhost:4200/`.

## Available scripts

- `npm start`: Run dev server (`ng serve`)
- `npm run build`: Build app into `dist/resume-app`
- `npm test`: Run unit tests with Karma
- `npm run lint`: Run TSLint
- `npm run e2e`: Run end-to-end tests with Protractor
- `npm run setup-hooks`: Configure Git to use project hooks in `.githooks`
- `npm run bump:version-for-commit`: Auto-bump `package.json` patch version and stage it for commit
- `npm run check:version-bump`: Validate that `package.json` version is bumped in staged changes

## Commit versioning policy

Each commit must include a `package.json` version bump.

The pre-commit hook enforces the rule by auto-bumping patch version when needed.

- If a version bump is already staged in `package.json`, the hook leaves it unchanged.
- If no bump is staged, the hook increments patch version and stages `package.json` automatically.

## Project structure

- `src/app/components`: Reusable resume/contact UI components
- `src/app/features/main-page`: Main route and page composition
- `src/app/services`: Data parsing, theme, nav, and utility services
- `src/assets/data`: Resume content JSON files used by the app
- `src/assets/resume`: Downloadable PDF resume

## Updating resume content

Most displayed resume data is sourced from JSON files in `src/assets/data`:

- `assignments.json`
- `certifications.json`
- `courses-training.json`
- `education.json`
- `employer-history.json`
- `other.json`
- `skills.json`

Resume PDF download is served from:

- `src/assets/resume/Resume_Wills_Joey.pdf`

## Testing notes

- Unit tests are configured to run in headless Chrome via Puppeteer.
- e2e tests use Protractor, which is deprecated in the Angular ecosystem. Keep this in mind for future test tooling migrations.

## Build notes

Production build command:

```bash
npm run build -- --configuration production
```

Output directory:

- `dist/resume-app`

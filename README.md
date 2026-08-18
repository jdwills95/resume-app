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

## CI/CD Deployment (AWS S3 & CloudFront)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the production application whenever commits are pushed to the `main` branch (or triggered manually via `workflow_dispatch`).

The deployment pipeline performs the following steps:
1. Checks out the repository and sets up Node.js with caching.
2. Runs `npm ci` and builds the production bundle (`dist/resume-app`).
3. Configures AWS credentials via `aws-actions/configure-aws-credentials`.
4. Syncs `dist/resume-app` to the target AWS S3 bucket (`aws s3 sync ... --delete`).
5. Invalidates the AWS CloudFront cache (`/*`) so changes take effect immediately.

### Required GitHub Secrets

Configure the following secrets in your GitHub repository:

| Secret Name | Description | Example |
|---|---|---|
| `AWS_ACCESS_KEY_ID` | IAM User Access Key ID with S3 & CloudFront permissions | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | IAM User Secret Access Key | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
| `AWS_REGION` | AWS Region where the S3 bucket is hosted | `us-east-1` |
| `AWS_S3_BUCKET` | Target AWS S3 bucket name | `my-resume-bucket-name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | AWS CloudFront Distribution ID | `E1A2B3C4D5E6F7` |

### Step-by-Step AWS Setup Guide

#### 1. Locate S3 Bucket Name & Region
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/).
2. Search for **S3** and select **Buckets** in the left sidebar.
3. Find your target bucket:
   - Note the **Name** &rarr; use for `AWS_S3_BUCKET`.
   - Note the **AWS Region** (e.g. `us-east-1`, `eu-west-1`) &rarr; use for `AWS_REGION`.

#### 2. Locate CloudFront Distribution ID
1. Search for **CloudFront** in the AWS Console.
2. Select **Distributions** from the left navigation.
3. Locate the distribution serving your S3 bucket.
4. Copy the value from the **ID** column (e.g. `E1234567890ABC`) &rarr; use for `CLOUDFRONT_DISTRIBUTION_ID`.

#### 3. Create IAM User & Access Keys
1. Search for **IAM** in the AWS Console.
2. Navigate to **Users** &rarr; **Create user** (or select an existing deployment user).
3. Under **Permissions options**, select **Attach policies directly** &rarr; **Create policy**.
4. Switch to the **JSON** tab and paste the following least-privilege policy (replace `YOUR_BUCKET_NAME`, `YOUR_AWS_ACCOUNT_ID`, and `YOUR_DISTRIBUTION_ID`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3DeployPolicy",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidatePolicy",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

5. Name the policy (e.g. `ResumeAppDeployPolicy`) and create it. Attach this policy to your IAM user.
6. In your user's details page, open the **Security credentials** tab.
7. Scroll down to **Access keys** and click **Create access key**.
8. Select **Application running outside AWS** (or CLI), proceed, and copy both the **Access Key ID** (`AWS_ACCESS_KEY_ID`) and **Secret Access Key** (`AWS_SECRET_ACCESS_KEY`).

### Adding Secrets to GitHub Repository

1. In your GitHub repository, open the **Settings** tab.
2. In the left navigation, navigate to **Secrets and variables** &rarr; **Actions**.
3. Under **Repository secrets**, click **New repository secret**.
4. Enter the **Name** (e.g. `AWS_ACCESS_KEY_ID`) and paste the value into **Secret**.
5. Click **Add secret**.
6. Repeat for all five required secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `AWS_S3_BUCKET`
   - `CLOUDFRONT_DISTRIBUTION_ID`

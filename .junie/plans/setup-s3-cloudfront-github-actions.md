---
sessionId: session-260818-153106-hoca
---

# Requirements

### Overview & Goals
Automate the CI/CD deployment pipeline for the Angular resume application using GitHub Actions. Whenever changes (new commits) are pushed to the `main` branch, the workflow will automatically build the production artifacts, synchronize them to an AWS S3 bucket, and trigger a CloudFront cache invalidation so that updates are immediately visible to users.

### Scope
- **In Scope**:
  - GitHub Actions workflow definition file (`.github/workflows/deploy.yml`).
  - Automated trigger on `push` to `main` branch (and optional `workflow_dispatch` for manual triggers).
  - Node.js setup, caching, and production build execution (`ng build --configuration production`).
  - AWS authentication using GitHub Secrets via `aws-actions/configure-aws-credentials`.
  - Deployment of `dist/resume-app` build output to the designated AWS S3 bucket with `--delete` flag.
  - Automatic cache invalidation of the AWS CloudFront distribution (`/*`).
  - Clear guide explaining required AWS credentials, IAM permissions, where to locate them in AWS, and how to configure GitHub Secrets.
- **Out of Scope**:
  - Creating or provisioning AWS infrastructure (S3 bucket, CloudFront distribution, Route 53 DNS records) via Terraform/CloudFormation.
  - Multi-environment staging pipelines (e.g. dev/staging/prod).

### User Stories
- As a developer, I want my Angular resume app to build and deploy automatically whenever I push commits to `main`, so that I don't have to manually build and upload files to AWS.
- As a developer, I want CloudFront cache to be invalidated automatically on deploy, so that website visitors immediately see the latest updates without stale cached files.
- As a repository maintainer, I want all sensitive credentials stored securely in GitHub Secrets with clear setup instructions, so that no credentials are leaked in source code.

### Functional Requirements
- **Trigger**: The workflow must run on every `push` event affecting the `main` branch and support manual triggers via `workflow_dispatch`.
- **Build**: The workflow must install dependencies with `npm ci` and build the application using the production configuration (`dist/resume-app`).
- **S3 Sync**: Upload static files to S3 bucket using `aws s3 sync dist/resume-app s3://${{ secrets.AWS_S3_BUCKET }} --delete`.
- **CloudFront Invalidation**: Trigger cache invalidation for path `/*` against `${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}`.
- **Security**: No AWS access keys or secrets in repository files; all sensitive values fetched from GitHub repository secrets.

### Required GitHub Secrets & AWS Configuration Guide

#### 1. Secrets List
 Secret Name | Description | Example |
---|---|---|
 `AWS_ACCESS_KEY_ID` | IAM User Access Key ID with S3 & CloudFront permissions | `AKIAIOSFODNN7EXAMPLE` |
 `AWS_SECRET_ACCESS_KEY` | IAM User Secret Access Key | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
 `AWS_REGION` | AWS Region where the S3 bucket is hosted | `us-east-1` |
 `AWS_S3_BUCKET` | Target S3 bucket name | `my-resume-bucket-name` |
 `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront Distribution ID | `E1A2B3C4D5E6F7` |

#### 2. Where to Find Values in AWS Management Console
- **AWS Access Key & Secret Key**:
  1. Open the [AWS Management Console](https://console.aws.amazon.com/).
  2. Search for **IAM** in the top search bar and click **IAM**.
  3. In the left navigation, click **Users**, then click **Create user** (or select an existing deployment user).
  4. Under **Security credentials**, scroll down to **Access keys** and click **Create access key**.
  5. Select **Application running outside AWS** (or CLI), click **Next**, and create the key.
  6. Copy both the **Access Key ID** and **Secret Access Key** (the secret key is only shown once).
- **AWS S3 Bucket Name & Region**:
  1. Search for **S3** in the AWS Console.
  2. Click **Buckets** in the left sidebar.
  3. Locate your bucket in the list — copy its **Name** (for `AWS_S3_BUCKET`) and note its **AWS Region** (for `AWS_REGION`, e.g., `us-east-1` or `eu-west-1`).
- **CloudFront Distribution ID**:
  1. Search for **CloudFront** in the AWS Console.
  2. Click **Distributions** in the left sidebar.
  3. Find the distribution associated with your S3 bucket and copy the value from the **ID** column (e.g. `E1234567890ABC`).

#### 3. Recommended IAM Policy
Attach the following least-privilege policy to the IAM user:
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

#### 4. How to Add Secrets to GitHub Repository
1. In your GitHub repository, click on the **Settings** tab (gear icon at the top).
2. In the left sidebar, navigate to **Secrets and variables** -> **Actions**.
3. Under the **Repository secrets** section, click the green **New repository secret** button.
4. Enter the **Name** (e.g., `AWS_ACCESS_KEY_ID`) and paste the corresponding value in **Secret**.
5. Click **Add secret**.
6. Repeat steps 3–5 for each required secret (`AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`).

# Technical Design

### Current Implementation
- Project is an Angular 21 SPA application configured with `@angular-devkit/build-angular:browser`.
- `angular.json` sets `outputPath` to `dist/resume-app` and defines a `production` configuration with bundle optimization, hash caching, and asset copying (`src/assets`, `src/favicon.ico`).
- Build command is available via `npm run build` or `npm run build -- --configuration production`.
- Currently, no GitHub Actions workflows exist (`.github/workflows` directory is not present).

### Key Decisions
- **CI/CD Platform**: GitHub Actions running on `ubuntu-latest`.
- **Node.js Version**: Node 20 or 22 LTS with `actions/setup-node@v4` caching `npm` dependencies for fast execution.
- **AWS Authentication Method**: `aws-actions/configure-aws-credentials@v4` using repository secrets for IAM Access Keys, ensuring secure, official, and straightforward authentication.
- **S3 Sync Strategy**: `aws s3 sync dist/resume-app s3://${{ secrets.AWS_S3_BUCKET }} --delete` to remove obsolete chunks from previous builds while uploading new assets.
- **Cache Invalidation**: `aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"` to immediately clear CloudFront edge caches.

### Proposed Workflow Design
The workflow will be created at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS S3 & CloudFront

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Angular app
        run: npm run build -- --configuration production

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy to S3
        run: |
          aws s3 sync dist/resume-app s3://${{ secrets.AWS_S3_BUCKET }} --delete

      - name: Invalidate CloudFront Cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

### Architecture Diagram
```mermaid
graph LR
    Dev[Developer] -->|git push main| GHA[GitHub Actions]
    GHA -->|npm ci & build| Dist[dist/resume-app]
    GHA -->|aws s3 sync --delete| S3[(AWS S3 Bucket)]
    GHA -->|create-invalidation /*| CF[AWS CloudFront]
    CF -->|Fetch Origin| S3
    User[End User] -->|HTTPS Request| CF
```

### File Structure
```
.github/
  workflows/
    deploy.yml        # New GitHub Actions deployment workflow
README.md             # Updated with deployment & GitHub Secrets guide
```

### Risks & Mitigations
- **Missing Secrets**: If secrets are not configured in repository settings, the workflow fails cleanly at the AWS credentials configuration step with an explicit error message.
- **IAM Permission Errors**: If IAM user lacks S3 or CloudFront permissions, AWS CLI commands report AccessDenied; mitigated by providing explicit policy template in documentation.
- **CloudFront Invalidation Costs**: AWS provides 1,000 free invalidation paths per month; full site invalidation (`/*`) counts as 1 path per deployment.

# Testing

### Validation Approach
Verify workflow syntax, build compatibility, and deployment triggers locally and in GitHub.

### Key Scenarios
- **Local Build Verification**: Run `npm ci` and `npm run build -- --configuration production` locally to confirm `dist/resume-app` generates without errors or budget violations.
- **Workflow YAML Linting**: Validate `.github/workflows/deploy.yml` syntax against GitHub Actions schema.
- **Trigger Test on Main Push**: Push a test commit to `main` and observe that GitHub Actions triggers the job.
- **S3 Sync Validation**: Confirm that assets in `dist/resume-app` are synced to S3 and old obsolete chunks are cleaned up.
- **CloudFront Invalidation Validation**: Confirm CloudFront returns an invalidation ID and changes reflect at the CloudFront distribution URL immediately.

### Edge Cases
- **Node/Dependency Cache Miss**: Ensure workflow falls back to clean `npm ci` install if cache is absent.
- **Manual Trigger**: Ensure workflow can be triggered on demand via the GitHub Actions "Run workflow" UI (`workflow_dispatch`).

# Delivery Steps

### ✓ Step 1: Create GitHub Actions deployment workflow
A GitHub Actions workflow file (`.github/workflows/deploy.yml`) is created to automatically build the Angular application and deploy to AWS S3 and CloudFront.

- Create `.github/workflows/deploy.yml` with trigger on `push` to the `main` branch (plus manual `workflow_dispatch` trigger for on-demand runs).
- Configure job runner with `ubuntu-latest`, checkout repository via `actions/checkout@v4`, and setup Node.js 20/22 with npm cache via `actions/setup-node@v4`.
- Execute dependency installation (`npm ci`) and production build (`npm run build -- --configuration production` targeting `dist/resume-app`).
- Authenticate to AWS using `aws-actions/configure-aws-credentials@v4` referencing GitHub Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`).
- Sync build artifacts to the S3 bucket using `aws s3 sync dist/resume-app s3://${{ secrets.AWS_S3_BUCKET }} --delete`.
- Invalidate the CloudFront cache using `aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"`.

### ✓ Step 2: Document AWS setup and GitHub Secrets configuration
Comprehensive deployment documentation and setup instructions are added to guide AWS configuration and GitHub Secrets entry.

- Update `README.md` (or add `DEPLOYMENT.md`) with a detailed list of required GitHub Secrets and their descriptions.
- Provide a least-privilege AWS IAM policy template with necessary S3 (`PutObject`, `GetObject`, `ListBucket`, `DeleteObject`) and CloudFront (`CreateInvalidation`) permissions.
- Document step-by-step instructions for creating IAM credentials and locating S3 Bucket Name and CloudFront Distribution ID in the AWS Management Console.
- Document step-by-step instructions for adding the secrets to the repository under GitHub Settings -> Secrets and variables -> Actions.
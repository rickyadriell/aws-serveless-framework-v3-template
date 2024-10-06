# Service Template

This repository contains a template designed for creating serverless services using the Serverless Framework. It's
tailored for AWS deployments. The template is equipped with a robust set of development tools, including TypeScript, ESLint, Prettier, Jest,
and Webpack, to ensure high-quality code and efficient deployment processes.

## Prerequisites

Before using this template, ensure you have the following installed:

- Node.js (LTS version recommended)
- Yarn package manager
- AWS CLI, configured with your AWS account
- Serverless Framework

## Setup

To get started with this template:

1. Clone the repository to your local environment.
2. Install dependencies by running `yarn install`.
3. Configure AWS CLI and Serverless with your AWS account credentials.
4. Set up your environment variables required for the Serverless Framework. You can do this by creating a `.env` file in the root directory and adding the following variables:
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`
    - `AWS_REGION`

## Usage

This template comes with predefined scripts in `package.json` to facilitate development and deployment:

- **Type Checking**: Verify TypeScript types without emitting files.
    - Check: `yarn check-types`
- **Linting**: Ensure code quality and consistency with ESLint.
    - Lint: `yarn lint`
    - Lint and fix: `yarn lint:fix`
- **Serverless Commands**:
    - Deploy your service: `yarn serverless:deploy`
    - Run locally with hot reload: `yarn serverless:offline`
- **Testing**: Run tests using Jest.
    - Test: `yarn test`
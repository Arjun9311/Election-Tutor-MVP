# Election Tutor MVP

An interactive, neutral, and educational web application designed to guide first-time voters through the election cycle.

## Features

- **Guided Tour**: Step-by-step walkthrough of the voting process.
- **Explore Timeline**: Interactive timeline of election milestones.
- **Interactive Quizzes**: Test your knowledge about the election process.
- **Scenario Simulator**: Experience realistic voting scenarios.
- **Glossary**: Searchable dictionary of political and election terminology with live search.
- **AI Chat Assistant**: Context-aware assistant to answer your election questions.
- **Authentication**: Firebase Google Sign-In to persist learning progress.
- **Cloud Progress Sync**: Save your completed steps to Firestore.

## Tech Stack

- **Frontend**: React 19, Vite, Vanilla CSS
- **Icons**: Lucide React
- **Backend/Auth**: Firebase (Authentication, Firestore)
- **Deployment**: Google Cloud Run
- **Testing**: Vitest (Unit), Cypress (E2E)
- **Quality**: Husky (Git Hooks), lint-staged

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn
- A Firebase project

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Arjun9311/Election-Tutor-MVP.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure Environment Variables:
   Rename `.env.example` to `.env` and add your Firebase configuration.

4. Run the development server:
   ```sh
   npm run dev
   ```

## Testing

This project uses a multi-layered testing strategy:

- **Unit/Integration Tests**: Run `npm test`
- **E2E Tests (Cypress)**: Run `npm run e2e` (headless) or `npm run e2e:open` (UI)

## Deployment

### Google Cloud Run

To deploy the latest version to Cloud Run:
```sh
gcloud run deploy promptwars --source . --region us-central1 --allow-unauthenticated --port 80
```

## Security & Quality

- **Content Security Policy (CSP)** implemented in `index.html`.
- **Pre-commit hooks** via Husky ensure that only linted and tested code is committed.
- **Dependency auditing** is performed regularly via `npm audit`.

## Project Goals & Metrics

### 1. Cloud Infrastructure & Service Usage
* **Goal**: Maximize adoption of scalable, managed Google Cloud services within critical application workflows.
* **Target Threshold**: 100% of core backend processing relies on managed services (e.g., Cloud Functions, BigQuery, Cloud Run) rather than custom-provisioned VMs.
* **Acceptance Criteria**: 
  * Architecture diagrams confirm integration of at least 3 distinct Google Cloud services (e.g., Vertex AI for processing, BigQuery for analytics, Cloud Functions for event-driven tasks).
  * API telemetry demonstrates >99.9% success rate for managed service invocations under expected load.
* **Rationale**: Leveraging managed cloud infrastructure reduces operational overhead, ensures horizontal scalability during traffic spikes, and accelerates feature delivery.

### 2. Testing Strategy & Quality Assurance
* **Goal**: Establish a comprehensive, automated testing safety net spanning unit, integration, and end-to-end (E2E) layers.
* **Target Threshold**: Achieve >85% unit test code coverage and 100% E2E test coverage for all Critical User Journeys (CUJs).
* **Acceptance Criteria**:
  * CI/CD pipeline enforces hard gates, failing builds if code coverage drops below the 85% threshold.
  * E2E frameworks (e.g., Cypress or Playwright) automatically validate successful user logins, primary workflows, and data submissions on every pull request.
* **Rationale**: High automated test breadth ensures regressions are caught in CI rather than production, maximizing release confidence and long-term stability.

### 3. Security & Risk Mitigation
* **Goal**: Implement robust, defense-in-depth security practices that proactively address the OWASP Top 10 risk vectors.
* **Target Threshold**: 0 high or critical vulnerabilities identified in automated security scans prior to deployment.
* **Acceptance Criteria**:
  * Static Application Security Testing (SAST) and dependency scanning are integrated directly into the CI pipeline.
  * A strict Content Security Policy (CSP) is implemented, and 100% of sensitive API endpoints enforce token-based authentication.
* **Rationale**: Proactive defensive practices safeguard user data, maintain institutional trust, and significantly reduce the likelihood of costly security breaches.

### 4. Performance & Efficiency
* **Goal**: Optimize client-side and server-side performance to guarantee a responsive, frictionless user experience.
* **Target Threshold**: 95th percentile (P95) page load times remain under 2.0 seconds; First Contentful Paint (FCP) triggers in < 1.0 second.
* **Acceptance Criteria**:
  * Google Lighthouse Performance audits consistently score ≥ 90 in production-like environments.
  * Application payloads are optimized using code-splitting, lazy-loading for heavy components, and aggressive static asset caching.
* **Rationale**: Consistently efficient load times directly correlate with higher user engagement, reduced bounce rates, and improved search engine visibility.

### 5. Codebase Quality & Maintainability
* **Goal**: Enforce strict architectural consistency, readability, and modularity across the entire codebase.
* **Target Threshold**: 0 linting errors or formatting warnings permitted in the `main` branch; cyclomatic complexity remains < 10 for all core functions.
* **Acceptance Criteria**:
  * Pre-commit hooks automatically format code (e.g., via Prettier) and execute static analysis (e.g., ESLint).
  * Component architecture adheres to documented design patterns (e.g., separation of UI components from business logic).
* **Rationale**: A highly maintainable, strongly structured codebase drastically reduces technical debt, accelerates onboarding for new developers, and minimizes the cost of future feature additions.

### 6. Accessibility (a11y) & Inclusive Design
* **Goal**: Ensure the application provides an equitable and inclusive experience by strictly adhering to Web Content Accessibility Guidelines (WCAG).
* **Target Threshold**: Achieve WCAG 2.1 Level AA compliance and a Lighthouse Accessibility score of 100.
* **Acceptance Criteria**:
  * Automated accessibility tools (e.g., `axe-core`) return a 100% pass rate in CI checks.
  * Manual verification confirms seamless keyboard-only navigation across all interactive elements, and UI components feature appropriate ARIA labels for screen readers.
* **Rationale**: Meeting strict accessibility standards ensures the platform is usable by all individuals regardless of ability, broadening the addressable user base and satisfying legal compliance requirements.

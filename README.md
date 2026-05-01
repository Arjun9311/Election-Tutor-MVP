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

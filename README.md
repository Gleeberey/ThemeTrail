# ThemeTrail

ThemeTrail is a Single Page Application for discovering thematic walking routes.

The current prototype focuses on Vilnius and allows users to:

- choose a thematic walking route;
- configure route preferences;
- browse route points;
- search and sort available routes;
- navigate between route pages without reloading the application.

The frontend is designed so that route data can later be loaded from an ASP.NET Core backend and PostgreSQL database.

## Technology Stack

- React
- Vite
- React Router
- Zustand
- Vitest
- React Testing Library
- Playwright
- CSS

## Requirements

Before running the project, install:

- Node.js
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Gleeberey/ThemeTrail.git
cd ThemeTrail
```

Install dependencies:

```bash
npm install
```

On Windows PowerShell, if npm scripts are restricted, use:

```bash
npm.cmd install
```

## Run the Application

```bash
npm run dev
```

or on Windows PowerShell:

```bash
npm.cmd run dev
```

The application will normally be available at:

```text
http://localhost:5173/
```

## Production Build

```bash
npm run build
```

Windows PowerShell:

```bash
npm.cmd run build
```

## Lint

```bash
npm run lint
```

Windows PowerShell:

```bash
npm.cmd run lint
```

## Unit and Component Tests

Run all Vitest tests:

```bash
npx vitest run
```

Windows PowerShell:

```bash
npx.cmd vitest run
```

Current component test coverage includes three key components:

- `ThemeSelector`
- `RoutePlannerForm`
- `RouteFilters`

Current result:

```text
3 test files
5 tests passed
```

## End-to-End Tests

Playwright is used for browser-level E2E testing.

Run:

```bash
npx playwright test
```

Windows PowerShell:

```bash
npx.cmd playwright test
```

Current E2E scenarios:

1. User changes the selected route theme.
2. User configures walking route parameters and receives a successful result.

Current result:

```text
2 tests passed
```

## Front-End Criterion Implementation

### SPA and Routing

The project is implemented as a React Single Page Application using React Router.

Main routes:

```text
/             Home page
/routes       Route catalogue
/routes/:id   Route details
/about        About page
```

Relevant files:

- `src/App.jsx`
- `src/main.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/RoutesPage.jsx`
- `src/pages/RoutePage.jsx`
- `src/pages/AboutPage.jsx`

### Component-Based Architecture

Reusable UI components are stored in:

```text
src/components/
```

Key components include:

- `Header`
- `Footer`
- `ThemeSelector`
- `PlaceCard`
- `RoutePlannerForm`
- `RouteFilters`

### State Management

Global route preferences are managed with Zustand.

Relevant file:

```text
src/store/routePreferencesStore.js
```

Global state currently includes:

- selected route theme;
- city;
- walking duration;
- start point.

Local React state is used for page-specific UI state such as:

- loading;
- errors;
- validation;
- search;
- sorting.

### Forms and Validation

The route configuration form is implemented in:

```text
src/components/RoutePlannerForm.jsx
```

It includes:

- controlled inputs;
- start point validation;
- route duration selection;
- validation errors;
- successful submission state.

### Search and Sorting

Route filtering is implemented through:

```text
src/components/RouteFilters.jsx
src/pages/RoutesPage.jsx
```

The catalogue supports:

- title search;
- description search;
- ascending sorting;
- descending sorting;
- empty search result state.

### Service Layer

Route data access is separated from page components through:

```text
src/services/routeService.js
```

The current implementation uses local prototype data behind an asynchronous service abstraction.

The service layer is designed to be replaced by HTTP API calls when the ASP.NET Core backend is introduced.

### Loading and Error States

The route catalogue and route details pages contain explicit:

- loading states;
- error states;
- empty states;
- route-not-found handling.

### Automated Tests

Component tests:

```text
src/components/ThemeSelector.test.jsx
src/components/RoutePlannerForm.test.jsx
src/components/RouteFilters.test.jsx
```

End-to-end tests:

```text
e2e/theme-trail.spec.js
```

Playwright configuration:

```text
playwright.config.js
```

## Front-End Documentation

Detailed Front-End documentation is available here:

```text
docs/frontend.md
```

It contains:

- architecture diagram;
- user flow diagram;
- project structure;
- state management explanation;
- routing explanation;
- technology stack justification;
- testing approach;
- planned backend integration.

## Current Prototype Data

The current prototype contains thematic routes for Vilnius.

The final architecture is intended to support multiple cities dynamically through the backend and database.

Planned backend entities include:

- City
- Theme
- Route
- Place
- RoutePlace

## Future Backend Integration

The planned application flow is:

```text
React Frontend
      ↓
Frontend Service Layer
      ↓
ASP.NET Core API
      ↓
PostgreSQL
```

This separation allows the UI to remain largely unchanged when local prototype data is replaced by real API responses.
# Front-End Architecture

## Overview

ThemeTrail is a Single Page Application for discovering thematic walking routes.

The current prototype focuses on Vilnius. The frontend architecture is designed so that additional cities, themes, routes and places can later be loaded dynamically from a backend API.

## Architecture

```mermaid
flowchart TD
    User[User]
    Router[React Router]

    Home[HomePage]
    Routes[RoutesPage]
    Route[RoutePage]
    About[AboutPage]

    Components[Reusable Components]
    Store[Zustand Global Store]
    Service[Route Service]
    Data[Mock Data]

    User --> Router

    Router --> Home
    Router --> Routes
    Router --> Route
    Router --> About

    Home --> Components
    Routes --> Components
    Route --> Components

    Home --> Store

    Routes --> Service
    Route --> Service

    Service --> Data
```## Mock API

During the Front-End expertise stage, ThemeTrail uses Mock Service Worker (MSW) to provide a mocked HTTP API.

The frontend performs real `fetch` requests through the service layer:

- `GET /api/themes`
- `GET /api/themes/:themeId`

Relevant files:

- `src/services/routeService.js`
- `src/mocks/handlers.js`
- `src/mocks/browser.js`
- `public/mockServiceWorker.js`

This allows the frontend to use the same HTTP-based architecture that will later be connected to the ASP.NET Core backend.

## Global Error Handling

Unexpected rendering errors are handled by a global React Error Boundary.

Relevant file:

`src/components/ErrorBoundary.jsx`

If an unexpected application error occurs, the user receives a fallback interface with an option to reload the application.

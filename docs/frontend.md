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
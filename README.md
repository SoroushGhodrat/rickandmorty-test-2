# Rick and Morty API Project

## Project Overview

Create a NextJS website that fetches data from the Rick and Morty API (https://rickandmortyapi.com/api) and displays the data in an appealing way.

## Design Details

The design for this project is available on Figma. You can view the design and its details using the following link:

[Figma Design - Rick and Morty](https://www.figma.com/design/trFDl4fKwizvVLwTN3XtS9/Rick-and-Morty?node-id=0-1&p=f&t=LOnWcRojZuskYgNY-0)

## List of APIs

Here is a list of APIs that are created in this project:

### Character API

- **Get All Characters**: `/api/v1/characters/all-characters`
  - Method: `GET`
  - Description: Retrieves a list of all characters.

### Episode API

- **Get All Episodes**: `/api/v1/episodes/all-episodes`
  - Method: `GET`
  - Description: Retrieves a list of all episodes.

### Location API

- **Get All Locations**: `/api/v1/locations/all-locations`
  - Method: `GET`
  - Description: Retrieves a list of all locations.

## Project Structure

```plaintext
src
├── components
│   ├── Characters
│   │   └── CharactersList.tsx
│   ├── common
│   │   ├── Sidebar
│   │   │   ├── Sidebar.test.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── Layout.tsx
│   │   └── Pagination.tsx
│   ├── Episodes
│   │   └── EpisodesList.tsx
│   ├── Locations
│   │   ├── LocationLists.tsx
│   │   └── ResidentsList.tsx
│   └── ui
│       ├── Button.tsx
│       ├── Error.tsx
│       ├── Loading.tsx
│       └── SkeletonTextLoading.tsx
├── constants
│   └── urls.ts
├── context
│   ├── AppProviders.tsx
│   └── ResidentsContext.tsx
├── hooks
│   ├── useAxios.tsx
│   ├── useFetch.tsx
│   └── useMultipleAxios.tsx
├── pages
│   ├── api
│   │   └── v1
│   │       ├── characters
│   │       │   └── all-characters.ts
│   │       ├── episodes
│   │       │   └── all-episodes.ts
│   │       └── locations
│   │           └── all-locations.ts
│   ├── characters
│   │   └── index.tsx
│   ├── episodes
│   │   └── index.tsx
│   ├── locations
│   │   └── index.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── HomePage.test.tsx
│   └── index.tsx
├── styles
│   └── globals.css
├── types
│   └── types.ts
└── utils
    └── helpers
        ├── dateNormalizer.test.ts
        └── dateNormalizer.ts
```

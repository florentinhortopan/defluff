# Defluff Website

The storytelling intelligence layer that turns media into structured knowledge, curated journeys, and measurable outcomes.

## Tech Stack

- **SvelteKit** - Framework
- **TypeScript** - Type safety
- **Vite PWA** - Progressive Web App support
- **Svelte Stores** - State management

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Architecture

- `src/lib/stores/` - Global state management
- `src/lib/api/` - API client functions
- `src/lib/components/` - Reusable UI components
- `src/routes/` - Page routes (file-based routing)
- `src/app.html` - HTML template
- `static/` - Static assets

## Data Separation Pattern

- **Stores** (`lib/stores/`) - Handle all data logic
- **Components** (`lib/components/`, `routes/`) - Presentation only
- **API** (`lib/api/`) - Pure functions for data fetching


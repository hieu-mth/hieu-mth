# Architecture Overview

## Layers

### `src/app`

- Composes route-level pages and the global layout
- Imports feature entry points rather than raw content

### `src/components/ui`

- Reusable UI primitives only
- No domain-specific copy or data access
- Shared styling and motion helpers live here

### `src/features/profile`

- Owns profile domain components, types, and service logic
- Transforms static content into the shape the UI renders
- Exposes clean entry points through feature barrels

### `src/content`

- Stores static content only
- `src/content/profile/index.ts` is the single source of profile content
- Uses profile feature types to keep contracts explicit

### `src/lib`

- Small shared utilities with no domain knowledge

## Rules

- Route files import from feature entry points
- UI primitives stay reusable and domain-agnostic
- Feature components access content through the service layer only
- Static copy belongs in `src/content`, not inside UI components

## Data Flow

`src/content/profile/index.ts` -> `src/features/profile/services/profile.service.ts` -> `src/features/profile/components/*` -> `src/app/page.tsx`

## Goal

Keep the frontend easy to read, easy to extend, and consistent with production product codebases.

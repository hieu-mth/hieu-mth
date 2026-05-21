# Profile Portfolio

A production-style Next.js frontend for presenting a senior frontend engineer profile with a feature-based architecture, typed content contracts, and a polished SaaS-inspired UI.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style reusable UI primitives

## Architecture

- `src/app`: application shell and route composition
- `src/components/ui`: reusable UI primitives only
- `src/features/profile`: profile domain components, types, and service layer
- `src/content`: static content sources
- `src/lib`: small shared utilities

## Data Flow

`content -> features/profile/services -> features/profile/components -> app`

## Scripts

- `npm run dev`: start the development server
- `npm run type-check`: run TypeScript without emitting files
- `npm run build`: create the production build
- `npm run format`: format the codebase with Prettier

## Notes

- All profile content lives in `src/content/profile/index.ts`.
- Feature components do not import from content directly.
- The profile feature owns its domain types in `src/features/profile/types.ts`.

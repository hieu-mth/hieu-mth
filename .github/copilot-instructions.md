Follow project rules defined in:

- /docs/copilot/instructions.md
- /docs/engineering/guidelines.md
- /docs/engineering/architecture.md

Key working rules:

- Keep route files thin and compose from feature entry points.
- Keep `src/components/ui` reusable and domain-agnostic.
- Keep `src/features/profile/components` focused on domain UI only.
- Keep `src/features/profile/services` limited to data access and mapping.
- Keep static profile copy in `src/content/profile`, with `src/content/profile/index.ts` as the single content entry point.
- Do not hardcode profile content inside components.
- Prefer `@/` imports over deep relative paths.
- Favor small, readable components and avoid mixing rendering with business logic.

Current project structure to preserve:

- `src/components/ui` for reusable UI only
- `src/features/profile` for profile domain components, services, and types
- `src/content/profile/index.ts` as the single profile content entry point

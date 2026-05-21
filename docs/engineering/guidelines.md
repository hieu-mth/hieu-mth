# Engineering Guidelines

## Core Principles

- Clarity over cleverness
- Maintainability over short-term speed
- Simplicity over over-engineering

---

## Component Design

- Use functional components only
- Keep components small and focused
- Avoid deeply nested structures
- Each component should have a clear responsibility

---

## Data Handling

- Do not hardcode data inside components
- Use service layer (features/) to retrieve data
- Keep static content inside /content
- Prefer a single content entry point when a domain is small enough to avoid fragmentation

---

## Code Structure

- components/ → UI only
- features/ → business logic
- content/ → static data
- Use feature barrels for domain imports when it keeps call sites simpler
- Keep reusable UI imports routed through `@/components/ui` where practical

---

## Code Quality

- Must pass ESLint
- Must pass type-check
- No unused variables
- Keep imports clean and ordered

---

## Styling

- Focus on spacing and readability
- Avoid unnecessary animations
- Do not use heavy UI libraries
- Keep motion subtle and consistent across sections

---

## Performance

- Avoid unnecessary re-renders
- Prefer simple solutions first

---

## Goal

This project is optimized for:

- recruiter scan (fast understanding)
- interviewer deep dive
- clear technical signal

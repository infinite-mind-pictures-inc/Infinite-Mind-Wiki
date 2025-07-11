# AI Contributor Guide

This project hosts the **Infinite Mind Wiki**, a Quartz 4 powered digital garden.

## Repository Structure

- `/content` – Markdown notes for the site. Images live in `content/images`.
- `/quartz` – Source code for the static site generator.
  - `/components` – Preact components used to render pages.
  - `/plugins` – Quartz plugins and custom logic.
  - `/styles` – SCSS styling files.
  - `/util` – Utility functions and helpers.
- `/docs` – Generated site output served via GitHub Pages (do not edit manually).
- `/public` – Temporary build output created by `npx quartz build` (ignored by git).
- Test files live next to the source under `quartz/**/*.test.ts`.

## Coding Conventions

- Write all new code in **TypeScript** and match the existing formatting.
- Use clear variable and function names and include comments for complex logic.
- Components should be functional Preact components with proper prop typing.
- Name component files using `PascalCase.tsx`.
- Style with the SCSS files in `quartz/styles`; avoid adding other frameworks.

## Testing

Run the unit tests with:

```bash
npm test             # all tests
npm test -- path/to/test-file.test.ts
npm test -- --coverage
```

## Programmatic Checks

Before submitting a pull request run:

```bash
npm run check        # type checking and prettier
npx quartz build     # ensure the site builds
```

All checks should succeed before merging.

## Pull Request Guidelines

1. Provide a clear description of your changes.
2. Reference any related issues.
3. Ensure tests and checks pass.
4. Include screenshots for visual changes.
5. Keep the PR focused on a single concern.

# AGENTS.md

## About this project

A **mockup admin dashboard** built for design only. It does not call any real
API. The UI style is **professional minimal**: dark navy sidebar, light content
area (see `design.md`).

This repo is a **template**: other projects copy it as their starting point. So
components must stay generic and reusable. Keep business logic out of them.

## Stack

- **Quasar 2** (Vite) + **Vue 3** + **vue-router** (hash mode)
- **JavaScript only**: no TypeScript
- **`<script setup>` + Composition API only**: no Options API
- **npm only**: never use pnpm or yarn
- Linter: **oxlint** (`.oxlintrc.json`)
- Formatter: **oxfmt** (`.oxfmtrc.json`: no semicolons, single quotes, no
  trailing commas, 80 chars)

## Commands

```bash
npm install
npm run dev         # start dev server
npm run build       # production build
npm run lint        # format (oxfmt) + lint with autofix (oxlint)
npm run lint:check  # check only, no changes
```

## Project structure

```
src/
  pages/<Name>Page.vue          # one per route
  components/<area>/<Name>.vue  # PascalCase, grouped by area
  composables/use<Name>.js      # shared state & logic
  mocks/<entity>.js             # mock data, named camelCase exports
  boot/                         # Quasar boot files (later axios)
  router/navigation.js          # sidebar groups & items (route names + labels)
  layouts/  router/  css/
docs/
  requirements/<page-name>.md   # one spec per page
```

Use the `@/` alias for imports from `src/`.

## Data

- All data is **mock data** in `src/mocks/<entity>.js`. Pages and components
  import it directly.
- **axios** is the only allowed HTTP client. It is **not installed** because
  nothing calls an API yet. If a real API is ever needed, set it up in
  `src/boot/axios.js`. Never use `fetch`.

## State

- Use **composables** (`src/composables/use<Name>.js`) for shared state.
- No Pinia.

## Charts

- Use **ApexCharts** (`vue3-apexcharts`). Install it only when the first chart
  is needed, and ask first.

## Language

- The UI is **English only**. There is no i18n: write user-facing text
  directly in templates, sentence case.
- Don't add `vue-i18n` or translation files. If a project built from this
  template needs another language, it adds i18n itself.
- Data may contain Thai text (e.g. from an API), so the Thai font stays
  loaded. See `design.md` → Typography.

## Styling

- Follow **`design.md`** for all styling decisions. If something isn't
  covered there, ask before inventing a visual language.
- Don't hardcode colors. Use the tokens and Quasar brand colors defined there.
- **Light theme only.** No dark mode. The sidebar is the only dark surface.
- Prefer Quasar component props and utility classes over custom CSS.
- No UI component library other than Quasar.

## Page requirements

- Before building a page, read its spec in `docs/requirements/<page-name>.md`.
  **If there is no spec, ask.** Don't guess the scope.
- Spec template:

  ```md
  # <Page name>

  ## Purpose

  ## Route

  ## Sections / components

  ## Mock data needed

  ## States (loading / empty / error)

  ## Out of scope
  ```

## Rules for agents

- Run `npm run lint` after every change and fix what it reports.
- **Ask before adding any dependency.**
- **Never commit unless asked.** Use Conventional Commits (`feat:`, `fix:`,
  `chore:`, `docs:`, `refactor:`, `style:`).
- Keep components generic and prop-driven (`defineProps` / `defineEmits`),
  with no business logic.
- No test setup. This is a design mockup.

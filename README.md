# Vue 3 + Typescript + Vite

An opinionated quickstart for developing with Vue 3 and Typescript in Vite.

## Features

- Vue 3
- Vuex 4 store (fully typed)
- TypeScript
- Tailwind CSS w/ plugins preinstalled
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
- Headless UI
- Heroicons
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Define `_APP_VERSION` from `package.json` version at build time
- Cypress.io e2e tests (configured similarly to `vue-cli`)
- Husky
- Vite
- Azure DevOps
- GitHub Actions
  - Dependabot
  - Automated e2e tests

## Project setup and usage

Install dependencies:

```
yarn
```

Run development server:

```
yarn dev
```

Run Jest unit tests & Open Cypress test runner:

```
yarn test
```

Run Jest unit tests & Run Cypress tests in headless mode:

```
yarn test:ci
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"

## TODOs

- [ ] Cypress [clashing types with Jest](https://docs.cypress.io/guides/tooling/reporters#Clashing-types-with-Jest) under `src` directory.

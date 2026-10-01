# @thomas-forte/styles

Import from `@thomas-forte/styles` only — do not deep-import package internals. Import theme tokens via `@thomas-forte/styles/theme.css`.

## Install

Published to GitHub Packages (`read:packages` PAT required).

```bash
# .npmrc
@thomas-forte:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

npm install @thomas-forte/styles
```

### Peer dependencies

| Package        | Version   |
| -------------- | --------- |
| `react`        | `^19.0.0` |
| `react-dom`    | `^19.0.0` |
| `react-router` | `^8.0.0`  |
| `tailwindcss`  | `^4.0.0`  |

```css
@import "tailwindcss";
@import "@thomas-forte/styles/theme.css";
@source "../node_modules/@thomas-forte/styles/dist";
```

## Release

PR → squash-merge to `master` with a conventional subject. **Publish** (semantic-release, angular preset) bumps version, updates `CHANGELOG.md`, publishes to GitHub Packages, tags, and opens a GitHub Release.

| Squash subject                           | Bump  |
| ---------------------------------------- | ----- |
| `fix:` / `perf:`                         | patch |
| `feat:`                                  | minor |
| `feat:` / `fix:` / `perf:` + body footer | major |
| `chore:` / `docs:` / `ci:` / `refactor:` | none  |

Major needs both a releasable subject **and** a `BREAKING CHANGE:` line in the commit **body** (squash extended description), not the title:

```text
feat: rename Subtitle API

BREAKING CHANGE: Subtitle now takes `text` instead of `children`.
```

## Scripts

| Script                  | Purpose                          |
| ----------------------- | -------------------------------- |
| `npm run lint`          | oxlint                           |
| `npm run build`         | Emit library `dist/`             |
| `npm run pack:artifact` | Build + `npm pack`               |
| `npm run dev`           | Local demo (`dev/`)              |
| `npm run dev:build`     | Typecheck + build demo for Pages |

Demo app lives in `dev/` (not published). Pages deploys from `master` via `.github/workflows/pages.yml`.

## Folders

| Folder      | Purpose                              |
| ----------- | ------------------------------------ |
| `base/`     | Typography, chips, and `Hr`          |
| `buttons/`  | Buttons and toggle                   |
| `cards/`    | Card shells and title/action rows    |
| `forms/`    | Inputs, selects, shared field styles |
| `icons/`    | Local SVG icon components            |
| `layout/`   | Page chrome                          |
| `dialogs/`  | Modals and dialogs                   |
| `navigation/` | Top bar, icon nav, and actions menu |
| `feedback/` | Loading and response-time indicators |
| `data/`     | Console / copy / clock helpers       |
| `demo/`     | Living catalog (`Demo`)              |

## Rules

1. Public API is `src/index.ts`.
2. Cross-folder imports use relative paths.
3. Prefer Tailwind class maps keyed by typed schemes.
4. Re-export new primitives from `index.ts`.
5. Demo new pieces under `demo/Demo.tsx`.

## Theming (`primary`)

Override `--color-styles-primary-*` in `src/theme.css` after importing `theme.css`.

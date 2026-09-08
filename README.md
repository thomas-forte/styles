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

| Package | Version |
|---------|---------|
| `react` | `^19.0.0` |
| `react-dom` | `^19.0.0` |
| `react-router` | `^8.0.0` |
| `tailwindcss` | `^4.0.0` |

```css
@import "tailwindcss";
@import "@thomas-forte/styles/theme.css";
@source "../node_modules/@thomas-forte/styles/dist";
```

## Release

PR → squash-merge to `master` with a conventional subject. **Publish** (semantic-release) bumps version, updates `CHANGELOG.md`, publishes to GitHub Packages, tags, and opens a GitHub Release.

| Squash subject | Bump |
|----------------|------|
| `fix:` / `perf:` | patch |
| `feat:` | minor |
| `feat!:` / `fix!:` / `BREAKING CHANGE:` | major |
| `chore:` / `docs:` / `ci:` / `refactor:` | none |

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | Emit `dist/` |
| `npm run pack:artifact` | Build + `npm pack` |

## Folders

| Folder | Purpose |
|--------|---------|
| `base/` | Typography and chips |
| `buttons/` | Buttons and toggle affordances |
| `cards/` | Card shells and title/action rows |
| `forms/` | Inputs, selects, shared field styles |
| `icons/` | Local SVG icon components |
| `layout/` | Page chrome |
| `overlay/` | Modals / dialogs |
| `feedback/` | Loading and response-time indicators |
| `data/` | Console / copy / clock helpers |
| `demo/` | Living catalog (`Demo`) |

## Rules

1. Public API is `src/index.ts`.
2. Cross-folder imports use relative paths.
3. Prefer Tailwind class maps keyed by typed schemes.
4. Re-export new primitives from `index.ts`.
5. Demo new pieces under `demo/Demo.tsx`.

## Theming (`primary`)

Override `--color-styles-primary-*` in `src/theme.css` after importing `theme.css`.

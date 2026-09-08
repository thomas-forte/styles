# @thomas-forte/styles

Import from `@thomas-forte/styles` only — do not deep-import package internals. Import theme tokens via `@thomas-forte/styles/theme.css`.

## Install

Published to GitHub Packages. Even for a public package, the npm registry requires authentication to install (a classic PAT with `read:packages`).

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

In the consumer CSS entry (Tailwind v4):

```css
@import "tailwindcss";
@import "@thomas-forte/styles/theme.css";
@source "../node_modules/@thomas-forte/styles/dist";
```

(Adjust `@source` to wherever the installed package lives.)

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | Emit `dist/` (ESM + types + `theme.css`) |
| `npm run pack:artifact` | Build + `npm pack` |

## Develop and publish

1. Branch off `master`, open a PR.
2. Wait for the **Package** check (`Build + artifact`) to pass.
3. Squash-merge with a [Conventional Commits](https://www.conventionalcommits.org/) subject:

| Squash subject | Version bump |
|----------------|--------------|
| `fix:` / `perf:` | patch |
| `feat:` | minor |
| `feat!:` / `fix!:` / body `BREAKING CHANGE:` | major |
| `chore:` / `docs:` / `ci:` / `refactor:` | none (no publish) |

4. Merge to `master` runs **Publish**: version bump, `CHANGELOG.md` update, GitHub Packages publish, git tag, GitHub Release.

**First release baseline:** after the initial commit lands on `master`, create tag `v0.0.1` (matches `package.json`). Without that tag, the first releasable squash publishes as `1.0.0`.

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

Default chrome uses `@theme` tokens in `src/theme.css` (`--color-styles-primary-*`). Override those after importing `theme.css` to restyle library defaults.

# Repository Guidelines

## Project Structure & Module Organization
- `src/content/docs/`: primary documentation content (MD/MDX). Routes follow file paths.
- `src/content.config.ts`: content collections config.
- `src/components/`: custom components used by MDX.
- `src/styles/`: site styles (custom overrides live in `custom.css`).
- `src/assets/`: images and other media referenced by content.
- `public/`: static assets copied as-is to the build output.
- `dist/`: production build output (generated).

## Build, Test, and Development Commands
- `pnpm install`: install dependencies.
- `pnpm dev`: start local dev server at `http://localhost:4321`.
- `pnpm build`: build the production site into `./dist/`.
- `pnpm preview`: serve the production build locally.
- `pnpm astro -- --help`: show Astro CLI options.

## Coding Style & Naming Conventions
- Content: MD/MDX with YAML frontmatter; include at least `title`.
- Language: keep documentation content in Simplified Chinese to match the site.
- Components: use Starlight components like `<Aside>` from `@astrojs/starlight/components`.
- Filenames: kebab-case for docs (e.g., `ai-roadmap/intro.mdx`).
- Formatting: follow existing Markdown/MDX style; no enforced formatter or linter.

## Testing Guidelines
- No automated test suite is currently configured.
- Validate changes by running `pnpm dev` and `pnpm build` before release.

## Commit & Pull Request Guidelines
- Commits follow a bracketed prefix pattern (e.g., `[feat] add checklist`).
- PRs should include: a concise description, related issue/link if applicable, and screenshots for visual/content changes.

## Configuration Tips
- Sidebar navigation lives in `astro.config.mjs` under `starlight.sidebar`.
- Content routing is file-based; moving a doc changes its URL.

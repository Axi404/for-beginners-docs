# for-beginners-docs

Computer science educational/research tutorial documentation site ("致新生的你") built with Astro + Starlight.

## Project Structure

```
.
├── public/                # static assets copied to build output
├── src/
│   ├── assets/            # images/media referenced by content
│   ├── components/        # custom components for MDX
│   ├── content/
│   │   ├── docs/          # documentation content (MD/MDX)
│   │   └── content.config.ts
│   └── styles/            # custom CSS overrides
├── astro.config.mjs       # Starlight config + sidebar
└── dist/                  # build output (generated)
```

Starlight routes are file-based: each `.md`/`.mdx` file under `src/content/docs/` becomes a page.

## Commands

All commands run from the project root:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `http://localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro -- --help` | Show Astro CLI help |

## Content Notes

- Write content in Simplified Chinese to match the site.
- MDX files require YAML frontmatter (at least `title`).
- Use Starlight components like `<Aside>` from `@astrojs/starlight/components`.
- Sidebar navigation is configured in `astro.config.mjs` under `starlight.sidebar`.

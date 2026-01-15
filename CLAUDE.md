# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese-language educational documentation site ("致新生的你" / "To New Students") built with **Astro + Starlight**. It provides guidance for university students interested in AI, learning methodologies, and academic research.

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
```

## Architecture

- **Framework:** Astro v5.6.1 with Starlight v0.37.3 documentation theme
- **Content:** MDX files in `src/content/docs/` with YAML frontmatter
- **Routing:** File-based routing via Starlight (slug derived from file paths)
- **Styling:** Custom CSS in `src/styles/custom.css` for footnotes and smooth scrolling

### Key Directories

| Path | Purpose |
|------|---------|
| `src/content/docs/` | All documentation content (MDX files) |
| `src/content/docs/ai-roadmap/` | AI learning pathway section (16 files) |
| `src/content/docs/learn-to-learn/` | Learning methodology section |
| `src/styles/` | Custom Starlight CSS overrides |

## Content Conventions

- All content is written in **Simplified Chinese**
- MDX files must have YAML frontmatter with at minimum a `title` field
- Use Starlight components (e.g., `<Aside>`) imported from `@astrojs/starlight/components`
- Footnotes use standard markdown syntax: `[^label]` with definitions at end of file
- Sidebar navigation is configured in `astro.config.mjs` under `starlight.sidebar`

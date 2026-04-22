# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev` (runs on http://localhost:3000)
- **Build:** `pnpm build`
- **Start prod:** `pnpm start`
- **Lint:** `pnpm lint` (runs `biome check`)
- **Format:** `pnpm format` (runs `biome format --write`)

## Tech Stack

- **Next.js 16** with App Router (all routes under `app/`)
- **React 19** with TypeScript (strict mode)
- **pnpm** as package manager (workspace configured)
- **Tailwind CSS v4** for styling (configured via `@tailwindcss/postcss` in `postcss.config.mjs`)
- **Biome 2** for linting and formatting (not ESLint/Prettier)

## Architecture

- `app/layout.tsx` — Root layout with Geist font, Header, and Footer
- `app/page.tsx` — Home page
- `app/about/page.tsx` — About / Mission / Leadership
- `app/services/page.tsx` — Service offerings
- `app/contact/page.tsx` — Contact form + info (form is a client component in `ContactForm.tsx`)
- `components/` — Shared components: `Header.tsx` (client), `Footer.tsx`, `Hero.tsx`
- Path alias `@/*` maps to project root

## Styling

- Custom color theme defined in `app/globals.css` via Tailwind's `@theme` directive
- Key colors: `primary` (navy), `accent` (teal), `gold`, with light/dark variants
- All styling uses Tailwind utility classes directly — no CSS Modules
- Biome's `noUnknownAtRules` is disabled to allow Tailwind's `@theme`

## Code Style (Biome)

- 2-space indentation
- Biome recommended rules with Next.js and React domains enabled
- Auto import organization enabled

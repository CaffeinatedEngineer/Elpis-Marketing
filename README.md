# Elpis Marketing Website

Single-page marketing site for **Elpis**, the AI-powered autonomous incident
investigation & remediation platform (repo: `github.com/CaffeinatedEngineer/SRE.AI`).

Next.js 16 (App Router) · TypeScript · Tailwind v4 · no other dependencies.

## Run

```powershell
npm install
npm run dev        # http://localhost:3000
```

## Build

```powershell
npm run build      # static prerender
npm run start
npm run lint
```

## Structure

| File | Purpose |
|---|---|
| `src/app/page.tsx` | Entire landing page (header, hero, why, stack, platform, how-it-works, stats, evaluation, get-started, footer) |
| `src/app/globals.css` | Design system: light editorial theme, hairline grid, lime accent, dark bands, responsive breakpoints |
| `src/app/layout.tsx` | Root layout, Geist fonts, metadata |

All copy and numbers describe the actual Elpis codebase (18-node workflow,
24 fault scenarios, $0.10 budget, 4 RBAC roles, 23 tests, evaluator scores),
nothing is borrowed from reference sites.

## Customization

- Colors: CSS variables in `src/app/globals.css` `:root` (`--accent`, `--panel`, …)
- Content: arrays at the top of `src/app/page.tsx` (`whyItems`, `capabilities`, `stats`, `stack`)
- Links: GitHub links point at the project repo; swap if the repo is renamed.

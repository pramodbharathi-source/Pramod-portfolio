# Pramod B — UX Designer Portfolio

Personal portfolio site: case studies, experience, photography, and a downloadable resume.

## Tech stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router 7** (`createBrowserRouter`, client-side only)
- **Radix UI** / shadcn-style components, **MUI**, **Motion**

## Getting started

```bash
npm install
npm run dev     # dev server on http://localhost:5173
npm run build   # production build to dist/
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/works` | All projects |
| `/case-study/design-system` | Design System case study |
| `/case-study/dex` | DEX case study |
| `/case-study/ather-widget` | Ather Widget case study |
| `/about` | About |
| `/experience` | Experience |
| `/contact` | Contact |
| `/resume` | Resume viewer + download |
| `/brand-kit` | Brand kit |
| `/controls` | Component/control reference |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |

## Project layout

```
src/
  app/
    pages/       route components (one per route)
    components/  shared components + ui/ primitives
    context/     ThemeContext (light/dark)
    hooks/       scroll + parallax hooks
    routes.ts    router definition
  assets/        images referenced via the figma:asset resolver
  imports/       case-study media, PDFs, generated SVG components
  styles/        global + Tailwind + theme CSS
```

`vite.config.ts` defines a small `figma:asset/*` resolver that maps those
import specifiers to `src/assets`, plus an `@` alias for `src`.

## Notes

- Routes other than `/` are lazy-loaded, so the initial JS payload stays small.
- The resume is embedded as base64 in `src/app/pages/resumeData.ts` and rendered
  through a Blob URL in a native `<iframe>` — no PDF library needed.
- Deploying to a static host requires an SPA rewrite (all paths → `index.html`),
  otherwise deep links like `/works` will 404 on refresh.

## Attribution

Originally scaffolded with Figma Make. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for
third-party component and photo licenses.

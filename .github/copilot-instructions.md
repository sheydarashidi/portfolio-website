## Quick orientation — what this repo is

- This is a Next.js (App Router) project created with create-next-app. Key entry points:
  - `app/layout.tsx` — top-level layout; uses `next/font` and imports `app/globals.css`.
  - `app/page.tsx` — main app page (TSX).
  - `app/Home/page.js` — an example client component (note the `"use client"` at the top).
  - `public/` — static assets referenced from components (SVGs, images, etc.).

## Build / run / lint commands (use exact scripts)
- Development server: `npm run dev`  (runs `next dev`)
- Production build: `npm run build` (runs `next build`)
- Start production server: `npm run start` (runs `next start`)
- Lint: `npm run lint` (runs `eslint`). The project uses `eslint-config-next`.

Always cite these exact script names when proposing commands or CI steps.

## Project conventions and immediate patterns to follow

- App Router (folder-based routing): add new routes by creating `app/<route>/page.tsx` or `app/<route>/page.js`.
- Default components are server components (TSX). If a component needs client-side state or effects, include the `"use client"` directive at the top (see `app/Home/page.js`).
- Styles:
  - Global styles are in `app/globals.css` (imported in `layout.tsx`).
  - Tailwind is present in dependencies — prefer utility classes in components (files show many Tailwind classes).
- Images:
  - TSX pages use `next/image` (`import Image from "next/image"`) for optimized images. If you propose converting `<img>` to `Image`, mention why (layout/priority/optimization).

## TypeScript & paths
- `tsconfig.json` contains `paths` mapping `@/*` to `./*`. When suggesting imports, prefer absolute-style imports using `@/` for repo-root references.

## Code examples (copyable patterns)
- Add a new server page: `app/about/page.tsx`
  ```tsx
  export default function Page(){
    return <main>About page</main>
  }
  ```
- Add a client component: start file with `"use client"` and use state/hooks (see `app/Home/page.js`).

## Integration points & external services
- Deployment target: Vercel is the expected/typical platform (README references Vercel). Keep next.config changes minimal and explain any changes you suggest.
- No API routes or external back-end are present in the repo; if you propose adding server endpoints, prefer the App Router conventions (`/app/api/...` or using the new route handlers).

## Common pitfalls to avoid when making suggestions
- Don’t assume every file is TypeScript — there are mixed JS/TS files. Preserve existing file extensions unless explicitly migrating.
- Don’t remove `"use client"` from files that need it — this will break client-side hooks.
- When changing image tags, prefer `next/image` only if you also handle required props (width/height or layout/priority) to avoid runtime warnings.

## Where to look for more context
- `package.json` — scripts and dependency versions (Next.js v16, React 19).
- `next.config.ts` — intentionally empty now; reference before advising framework-level changes.
- `app/layout.tsx`, `app/page.tsx`, `app/Home/page.js` — examples of layout, server and client components.
- `app/globals.css` — global styling entrypoint.

If anything in this file is unclear or you want extra sections (CI pipelines, test commands, or coding style rules), tell me which area to expand and I will update the file.

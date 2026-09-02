# Dharmpreet — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP + Lenis.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing — do this first

This was edited without live internet access in the environment that
generated it, so `npm install` / `npm run build` have not been run yet.
Do a local install + build + dev run and work through this checklist
before treating it as done.

- **Links & contact info**: everything lives in one file —
  `lib/links.ts`. Replace `YOUR_EMAIL`, `YOUR_LINKEDIN_URL`,
  `YOUR_GITHUB_URL`, and `YOUR_RESUME_URL` there. Nothing else in the
  codebase needs to change when you update these.
- **Photo**: drop your photo at `public/images/dharmpreet.jpg` (the path
  referenced in `lib/links.ts`). Until it's there, the hero shows a
  graceful placeholder (initial "D" on a gradient) instead of a broken
  image — see `components/Portrait.tsx`.
- **Projects**: real project content lives in `lib/projects.ts` — RAG
  Knowledge Assistant, the EEG–EMG controller, dysarthric speech severity
  detection, and PharmaSynq. Case study pages at `/work/[slug]` are
  generated from this file automatically; edit content there, not in the
  page component.
- **Metadata**: `metadataBase` in `app/layout.tsx` and the sitemap/robots
  files still point at `https://example.com` — update to your real domain
  once you have one.

## Structure

```
lib/
  links.ts           Centralized identity + contact links (edit here)
  projects.ts         All 4 case studies (edit here)
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Home page (assembles all sections)
  work/[slug]/         Case study route: 01 Problem … 06 What I learned
components/
  Hero.tsx, HeroUniverse.tsx   Hero + the interactive particle/node visual
  Portrait.tsx                 Photo with fallback if the file is missing
  WorkGrid.tsx, ProjectCard.tsx
  Skills.tsx, About.tsx, Recognition.tsx, Leadership.tsx, Contact.tsx
  PipelineDiagram.tsx           Reusable architecture-flow diagram
```

## Design notes

- The hero's particle/node visual (`HeroUniverse.tsx`) uses a canvas for
  the ambient particle field and real DOM `<a>` elements for the 5 domain
  nodes (AI/ML, GenAI, Deep Learning, Backend, Software Engineering) —
  they're genuine keyboard-reachable links to `#skills`, not canvas
  hit-testing, so screen readers and keyboard navigation both work.
- On mobile, the orbit layout is replaced with a simple horizontal chip
  list (no hover dependency) and the particle count is reduced.
- `prefers-reduced-motion` disables the particle animation loop, the
  cursor-follow effect, and all GSAP/Framer entrance animations —
  content appears in its final state immediately.
- Project cards intentionally don't use fake screenshots — there was no
  real visual asset to show honestly, so they lean on the number/name/
  tagline/tech-tag "node" treatment instead (see section 7 of the brief).

## Before deploying

- Run `npm run build` and fix any type errors — untested in this
  environment.
- Run Lighthouse, especially with the canvas particle field active —
  worth confirming it doesn't tank mobile performance on a real device.
- Test with `prefers-reduced-motion` enabled in your OS settings.
- Click through keyboard-only (Tab through the hero nodes, nav, and every
  card) to confirm focus order and visible focus rings.

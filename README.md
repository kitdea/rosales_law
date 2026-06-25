# Rosales Law Firm — Website

Production website for Rosales Law Firm. Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**, with an embedded **Sanity Studio** headless CMS.

The site runs immediately on typed seed data, so you can develop and preview before connecting the CMS. Once Sanity is configured, content comes from the CMS automatically.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** (subtle scroll reveals, reduced-motion aware)
- **Sanity** embedded Studio at `/studio`

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site runs on seed data with no further setup.

## Connect the CMS (Sanity)

1. Create a free project at https://sanity.io and note the **Project ID**.
2. Copy the env template and fill it in:

   ```bash
   cp .env.local.example .env.local
   ```

   Set `NEXT_PUBLIC_SANITY_PROJECT_ID` (and keep `NEXT_PUBLIC_SANITY_DATASET=production`).
3. Restart `npm run dev`, then open http://localhost:3000/studio to manage content.
4. Add CORS origins in your Sanity project settings for `http://localhost:3000` and your production domain.

Once a project ID is present and content exists, the fetchers in `src/lib/content.ts`
return live CMS data; otherwise they fall back to `src/lib/seed.ts`.

## Content model

Schemas live in `src/sanity/schemaTypes/`:

- `siteSettings` — firm name, hero copy, phone, email, address, hours, response promise
- `practiceArea` — title, slug, segment, summary, scope, problem, services, process, FAQs
- `matter` — anonymized representative matters (CPRA-compliant; factual, no guarantees)
- `insight` — articles / guides
- `attorney` — verifiable bios (name, role, admission year, education, languages)

## Project structure

```
src/
  app/
    page.tsx                  Home
    practice/page.tsx         Practice hub
    practice/[slug]/page.tsx  Practice detail (statically generated)
    about/page.tsx            About
    contact/page.tsx          Contact + form
    studio/[[...tool]]/       Embedded Sanity Studio
  components/                 UI + section components
  lib/
    content.ts                Fetchers (Sanity → seed fallback)
    seed.ts                   Typed seed content (edit placeholders here)
    queries.ts                GROQ queries
    types.ts                  Shared types
  sanity/                     Schemas + env
```

## Replace placeholders

Edit `src/lib/seed.ts` (or manage via the Studio) — anything in `[brackets]` is a
placeholder: office address, phone, email, attorney details, credential figures.

## Wire up the contact form

`src/components/ContactForm.tsx` currently shows a confirmation state on submit.
Connect it to an API route, a service like Formspree, or your CRM (a HubSpot
connector is available) to actually deliver messages.

## Compliance note (CPRA)

Copy is written to comply with the 2023 Code of Professional Responsibility and
Accountability: dignified, verifiable, factual — never self-laudatory. Matters are
anonymized with no guaranteed-outcome language. Keep this standard when editing
content. See `../Rosales-Law-Website-Strategy.md` for the full rationale.

## Deploy

Deploy on **Vercel**: import the repo, add the `NEXT_PUBLIC_SANITY_*` env vars,
and add your domain to Sanity CORS origins. `npm run build` produces the
production build.
```bash
npm run build && npm run start
```

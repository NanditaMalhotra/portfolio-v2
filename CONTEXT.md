# Portfolio V2 — Project Context

> **Keep this file up to date.** After every significant work session, update the "Current Status" and "Next Steps" sections so any future Claude session can pick up exactly where we left off without re-deriving context.

---

## Goal

Build a polished, premium frontend-only portfolio for **Nandita Malhotra** (nandita.anna@gmail.com) to get hired as a **UX/Product Designer at a tech company**. The site should signal credibility immediately to hiring managers — recognizable names, strong credentials, tech-focused framing.

---

## Owner

- **Name:** Nandita Malhotra
- **Email:** nandita.anna@gmail.com
- **Existing portfolio:** https://nanditamalhotra.com
- **LinkedIn:** https://linkedin.com/in/nanditamalhotra/
- **Substack:** nanditamalhotra.substack.com
- **X:** @nanditaxoxo

---

## Credentials (for credibility bar + About page)

| Type | Details |
|------|---------|
| Education | MS, Information Experience Design — Pratt Institute |
| Education | BFA, Visual & Communications Design — UT Austin |
| Company | HuCapital |
| Company | Toyota |
| Company | Cooper Hewitt |

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** DM Serif Display (headlines) + Inter (body) via next/font
- **Deployment:** Frontend-only, no backend/CMS/auth/DB

---

## Visual Direction

- **Palette:** Warm off-white `#F9F7F4` bg, near-black `#111` text, muted accent (dusty rose or sage)
- **Type:** Large serif display headlines + clean sans body — editorial contrast
- **Layout:** Full-bleed sections, generous whitespace, left-aligned editorial text (not card grids)
- **Motion:** Scroll-triggered fade-ups, hover lift on project previews
- **Feel:** Editorial minimalism (inspired by rishi.design, bradleyziffer.com, thatedchao.com) — NOT generic SaaS

---

## Site Structure

```
/                    → Homepage
/work/[slug]         → Case study template (dynamic)
/about               → Full about page

src/
  app/
    layout.tsx
    page.tsx
    work/[slug]/page.tsx
    about/page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    CredibilityBar.tsx     ← logos: Toyota, Cooper Hewitt, HuCapital, UT Austin, Pratt
    ProjectCard.tsx
    ProjectGrid.tsx
    CaseStudyLayout.tsx
    AboutSnippet.tsx
    Footer.tsx
    AnimatedSection.tsx
  lib/
    projects.ts            ← all static content/case study data
  styles/
    globals.css
```

---

## Homepage Layout (above fold priority)

1. **Hero** — Name, "Product Designer", sharp positioning line
2. **Credibility Bar** — Logos/wordmarks: Toyota | Cooper Hewitt | HuCapital | Pratt | UT Austin (visible before scrolling)
3. **Selected Work** — 6 project cards (ordered below)
4. **About Snippet** — 2–3 lines + link to /about
5. **Footer**

---

## Projects (ordered by tech-hiring priority)

| # | Slug | Title | Client | Status |
|---|------|-------|--------|--------|
| 1 | `hucapital-todo` | [New HuCapital Project] | HuCapital | **TODO — placeholder, content TBD** |
| 2 | `hucapital` | HuCapital Web & Mobile | HuCapital | Responsive web + mobile design |
| 3 | `lumity` | Enhancing Lumity | Lumity | App UX / product redesign |
| 4 | `ask-the-ordinary` | Ask The Ordinary | The Ordinary | Conversational UX / AI chatbot |
| 5 | `tend` | Tend | Self-directed | AI-integrated digital journal app |
| 6 | `bungee-accessibility` | Type You Can Hear | Cooper Hewitt | Accessibility + research (secondary) |

> Project 1 is a deliberate blank/placeholder for a second HuCapital project not yet ready. Show as "Coming Soon" card.

---

## Inspiration Sites

- https://rishi.design — spacing, typography rhythm, editorial feel
- https://www.thatedchao.com/ — case study presentation, polish
- https://bradleyziffer.com/ — intentional minimalism, project framing

---

## Current Status (updated 2026-05-25)

- [x] Node.js v20 installed via nvm
- [x] `create-next-app` scaffolded (Next.js 16, React 19, TypeScript, Tailwind v4)
- [x] Framer Motion 12 + lucide-react installed
- [x] All pages and components built, build passes cleanly (12 static pages)
- [x] Dev server running at http://localhost:3000

**Pages live:**
- `/` — Homepage: Hero + CredibilityBar + ProjectGrid + AboutSnippet
- `/about` — Full about page with education, clients, skills, writing
- `/work/[slug]` — Case study template for all 7 published projects

**Content TODOs in `src/lib/projects.ts`:**
- `hucapital`: needs full case study content (problem, process, outcomes)
- `hucapital-new`: fully TBD (coming-soon card is in place)
- `toyota-pedestrian-safety`: needs methodology, findings, outcomes
- `hookd-magazine`: needs project details

---

## Next Steps

1. Open http://localhost:3000 and review the site visually
2. Add real screenshots/mockups as project cover images (color blocks are placeholders)
3. Fill in TODO content in `src/lib/projects.ts`
4. Iterate on copy, colors, layout as needed
5. Deploy to Vercel when ready

---

## Decisions Made

- Frontend-only: no backend, CMS, auth, or database
- Static content in `lib/projects.ts` (no headless CMS)
- Logo sourcing: SVG from Simple Icons CDN or inline SVGs; HuCapital gets clean wordmark fallback
- Projects framed for tech hiring: product/UX work primary, research secondary
- Hook'd Magazine not featured (creative direction, less relevant for tech hiring)

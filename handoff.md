# Portfolio v2 — Handoff

## Goal

Ship a polished portfolio site for Nandita Malhotra (product designer, New York) to support active job searching. The site should feel editorial, minimal, and intentional — not a template. Primary audience is hiring managers and design leads.

---

## Stack

- **Next.js** (App Router, React 19, TypeScript) — note: this version has breaking changes, read `node_modules/next/dist/docs/` before writing Next-specific code
- **Tailwind CSS v4** — configured via `@theme` in `globals.css`, not `tailwind.config.js`
- **Framer Motion** — used for entrance animations on homepage
- **Fonts**: MuseoModerno (display, self-hosted via Fontsource), Hanken Grotesk (sans, Google Fonts)
- **ffmpeg** at `/Users/nanditamalhotra/.local/bin/ffmpeg` — NOT in system PATH, must use full path
- Deployed to (presumably) Vercel

---

## Design Tokens (`src/app/globals.css`)

```
--color-cream:     #ffffff   (background)
--color-ink:       #111111   (primary text)
--color-stone:     #6B6880   (secondary text)
--color-accent:    #653FD4   (purple, hover/interactive)
--color-parchment: #F3F2F8   (tag backgrounds, subtle fills)
--color-border:    #E8E8EC   (all borders)
--font-display:    MuseoModerno
--font-sans:       Hanken Grotesk
```

---

## Site Structure

```
/                  → Home (two-column desktop: sticky bio left, project cards right)
/about             → Full-page bio with reel video, photo grid, disciplines, contact
/play              → Creative work grid (2-col, hover reveals title)
/work/[slug]       → Dynamic case study or visual project page
```

### Pages
- `src/app/page.tsx` — Home. Desktop: `grid-cols-[2fr_3fr]` sticky sidebar. Mobile: stacked bio then project list.
- `src/app/about/page.tsx` — Video (`/about/reel.mp4`) in a `4/2` aspect ratio container, bio text, 6-photo grid, disciplines tag cloud, contact section.
- `src/app/play/page.tsx` — Filters `projects` where `category === "creative"` (excludes hookd-magazine which has its own case study). 2-col grid, `aspectRatio: 3/2`, hover overlay shows title on desktop; tag + title shown below image on mobile.
- `src/app/work/[slug]/page.tsx` — Routes creative projects to `VisualProjectLayout`, everything else to `CaseStudyLayout`. Next project logic filters by category: case studies only link to case studies, play only links to play.

### Key Components
- `Hero.tsx` — Sticky bio sidebar on desktop. Name card with purple radial gradient effect on mouse move (`.name-clip` CSS class). Bio, Worked With logos, Education, Experiments cards stacked with staggered Framer Motion entrance.
- `ProjectCard.tsx` — All cards are `aspect-[1157/702]` with `border border-border rounded-3xl`. Supports `coverVideo` (autoplay loop via `AutoplayVideo` component) or `coverImage`. Supports `coverImagePosition` (CSS object-position) and `coverImageScale` (transform scale, e.g. `1.1` to zoom in). Hover shows `ArrowUpRight` icon + slight darken.
- `ProjectGrid.tsx` — Renders all projects where `category !== "creative"`.
- `CaseStudyLayout.tsx` — Header with back link, meta row, structured body, next project footer.
- `VisualProjectLayout.tsx` — For creative/play projects. Gallery-driven layout. Supports `galleryColumns` for custom column layouts.
- `ExpandableVideo.tsx` — Video with click-to-expand modal. Optional `showSoundToggle` and `soundHint` props: adds a mute/unmute pill button overlaid on the video, and hint text below when muted.
- `ExperimentsCard.tsx` — List of external links. Shown in sidebar and mobile footer of homepage.
- `Navbar.tsx` — Fixed top bar. Links: Work, Play, About, Resume (Google Drive link). Mobile hamburger drawer.
- `AnimatedSection.tsx` — Fade+slide-up wrapper, used throughout for scroll entrance.
- `Footer.tsx` — Site footer.
- `HashScroll.tsx` — Handles smooth scroll to `#work` anchor from navbar.

### Next Project Footer Style (all case studies + play)
Minimal, consistent across all layouts. Full-width link row, `border-t border-border`, no background color. Small "Next" eyebrow in `text-[10px] tracking-[0.18em] uppercase text-stone/50`, title at `text-lg font-medium`, `ArrowLeft rotate-180` right-aligned. Hover: `text-accent`.

---

## Projects Data (`src/lib/projects.ts`)

Single source of truth for all projects. The `Project` interface:

```typescript
slug, title, client, shortDescription, year, role, team, duration,
tools[], tags[], category, status,
coverColor,            // always set — background fill
coverImage?,           // path from /public
coverVideo?,           // path from /public — takes priority over coverImage
coverVideoPosition?,   // CSS object-position e.g. "50% 60%"
coverImagePosition?,   // CSS object-position for static cover image
coverImageScale?,      // transform scale multiplier e.g. 1.1 to zoom in
coverFit?,             // "contain" | "cover"
glowColor,
overview?, challenge?, centralQuestion?,
sections?: { heading, body, bullets? }[],
outcomes?, lessons?,
gallery?: string[],    // for creative projects
galleryColumns?: number[]
```

### Current Projects (in order)

**Case studies (non-creative):**
| Slug | Status | Cover |
|---|---|---|
| lumity | published | `/covers/lumity.png` (coverFit: cover, coverImagePosition: top, coverImageScale: 1.1) |
| ask-the-ordinary | published | `/covers/ask-the-ordinary.mp4` (video) |
| bungee-accessibility | published | `/covers/bungee-cropped.gif` |
| tend | published | `/covers/tend.mp4` (video, position `50% 60%`) |
| toyota-pedestrian-safety | published | `/covers/toyota-cover.jpg` |

**Creative/play (shown on /play, excludes hookd-magazine):**
| Slug | Status | Cover |
|---|---|---|
| hookd-magazine | published | `/covers/hookd.png` (excluded from /play, has own case study) |
| fashion-exhibition | published | `/play/fashion-exhibition-cover.png` |
| indian-futurism | published | `/play/indian-futurism-cover.png` |
| kendra-scott | published | `/play/kendra-scott-cover.png` |
| pyala-chai | published | `/play/pyala-f.png` (pink background) |
| fragrance-bottle | published | `/play/fragrance-bottle-cover.png` |
| furniture-design | published | `/play/furniture-design-cover.jpg` |

---

## Git Setup

Repository initialized at `/Users/nanditamalhotra/portfolio_v2`.

**Branches:**
- `main` — stable site, production-ready
- `hero-experiment` — experimental intro hero + transparent navbar (see below)

**Worktree for side-by-side preview:**
- `main` runs at `localhost:3000` from `/Users/nanditamalhotra/portfolio_v2`
- `hero-experiment` runs at `localhost:3001` from `/Users/nanditamalhotra/portfolio-v2-experiment`
- Start both: `/Users/nanditamalhotra/start-both.sh`

**Workflow:**
- Work on `main` for real changes. Commit with `git add -A && git commit -m "description"`.
- Work on `hero-experiment` in the `portfolio-v2-experiment` folder. Same commit flow.
- To bring main improvements into experiment: `cd portfolio-v2-experiment && git merge main`

---

## hero-experiment Branch

The `hero-experiment` branch adds a full-screen intro experience before the homepage.

**Files changed vs main:**
- `src/components/IntroHero.tsx` (new) — sticky 100vh section, `/about/reel.mp4` full-screen, "Nandita Malhotra" in `font-display` at full viewport width (JS fit-text via ResizeObserver), `text-white/55`, flush to bottom edge. ChevronDown scroll hint. Reduced-motion: video hidden, dark bg.
- `src/app/page.tsx` — `<IntroHero />` before existing content; homepage wrapped in `relative z-10 bg-cream` so it slides over the sticky hero on scroll.
- `src/components/Navbar.tsx` — Transparent overlay mode on homepage hero zone (scroll < 90vh): white text/links, no bg, no border. Transitions back to cream navbar as homepage scrolls in. Uses `usePathname` — only activates on `/`.

---

## What's Done

- Full site structure: home, about, play, dynamic case study pages
- Sticky two-column desktop layout, stacked mobile layout
- Responsive navbar with mobile drawer
- All project cards standardized to `aspect-[1157/702]` with `border border-border`
- Video autoplay: `AutoplayVideo` component with `IntersectionObserver` + `visibilitychange` listener
- Next project footer unified across all case studies and play pages — minimal border-only style
- Bungee prototype video: autoplay with sound toggle button + "psst — turn sound on." subtext under heading
- Lumity thumbnail: `coverImagePosition: top` + `coverImageScale: 1.1` to prevent purple background bleed at bottom
- About page: `4/2` aspect ratio video in content container (rounded-2xl), heading above video as light `font-light` h1, disciplines above photo grid
- Play page: visual-only grid, hover overlay desktop, tag+title below image mobile
- Git initialized with `main` + `hero-experiment` branches, worktree at `portfolio-v2-experiment`

---

## Tend Case Study Page ✅

Built at `/work/tend` as a dedicated rich-narrative page (bypasses the generic `CaseStudyLayout`).

**Files:**
- `src/app/work/tend/page.tsx` — metadata + renders `<TendCaseStudy />`
- `src/components/TendCaseStudy.tsx` — full narrative page, imports all copy from `src/lib/tendContent.ts`
- `src/lib/tendContent.ts` — **ALL editable copy lives here**

---

## Lumity Case Study Page ✅ (section-by-section review ongoing)

Built at `/work/lumity` via `src/components/LumityCaseStudy.tsx`.

### Writing rules (apply to all copy edits)
- No em dashes in prose
- Short declarative sentences, first person
- Tend Journal case study is the approved tonal reference
- Minto Pyramid: each section heading = a specific claim; first sentence states the point; evidence follows
- Do NOT invent copy — source from https://nanditamalhotra.com/project/lumity-redesign

### Helper components (bottom of LumityCaseStudy.tsx)
- `CalloutQuestion` — centered italic large text
- `PullQuote` — `border-l-2 border-accent` blockquote
- `Label` — uppercase tracking label
- `SectionLabel` — numbered `border-t pt-10` label
- `Meta` — metadata row item

### What still needs review
- 03 Evaluative Research — copy not yet reviewed against live site
- 04 Design Iteration — copy not yet reviewed
- Building Consistency — copy not yet reviewed
- Final Prototype — copy not yet reviewed
- Reflections — copy not yet reviewed against live site exact wording

---

## Known Quirks / Gotchas

- **macOS screen recording filenames** contain a Unicode narrow no-break space (` `) before "PM" — shell path access fails silently. Use Python `glob.glob(os.path.expanduser('~/Desktop/Screen Recording 2026-05-29*.mov'))` to find them.
- **ffmpeg single-frame extraction** needs `-update 1` flag: `ffmpeg -i video.mp4 -frames:v 1 -update 1 frame.png`
- **Tailwind v4** — no `tailwind.config.js`. All theme tokens live in `globals.css` under `@theme {}`.
- **Mobile bio** in `page.tsx` is a hardcoded duplicate of `Hero.tsx` — if you update bio copy in Hero, also update the mobile section in `page.tsx`.
- **MuseoModerno** can't be loaded from Google Fonts (returns 400). It's self-hosted via Fontsource — don't switch to `next/font/google` for it.
- The `work/lumity/page.tsx` file exists as a legacy route — the dynamic `[slug]` page handles lumity too. Not a problem, just don't get confused if you see both.
- **hero-experiment worktree** lives at `/Users/nanditamalhotra/portfolio-v2-experiment` — edit files there when working on the experiment branch.

---

## To Continue

Start Claude Code in `/Users/nanditamalhotra/portfolio_v2` and say:
> "Read handoff.md and pick up where we left off"

Update this file at the end of each session.

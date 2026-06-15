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
- `src/app/about/page.tsx` — 60vh video hero (`/about/reel.mp4`), bio text, 7-photo bento grid, disciplines tag cloud, contact section.
- `src/app/play/page.tsx` — Filters `projects` where `category === "creative"` (excludes hookd-magazine which has its own case study). 2-col grid, `aspectRatio: 3/2`, hover overlay shows title.
- `src/app/work/[slug]/page.tsx` — Routes creative projects to `VisualProjectLayout`, everything else to `CaseStudyLayout`.

### Key Components
- `Hero.tsx` — Sticky bio sidebar on desktop. Name card with purple radial gradient effect on mouse move (`.name-clip` CSS class). Bio, Worked With logos, Education, Experiments cards stacked with staggered Framer Motion entrance.
- `ProjectCard.tsx` — All cards are `aspect-[1157/702]` with `border border-border rounded-3xl`. Supports `coverVideo` (autoplay loop via `AutoplayVideo` component) or `coverImage`. Hover shows `ArrowUpRight` icon + slight darken.
- `ProjectGrid.tsx` — Renders all projects where `category !== "creative"`.
- `CaseStudyLayout.tsx` — Header with back link, 3-col meta sidebar, solid color cover block, structured body (overview → challenge → central question → sections → outcomes → reflections), next project footer.
- `VisualProjectLayout.tsx` — For creative/play projects. Gallery-driven layout.
- `ExperimentsCard.tsx` — List of 3 external links (live app, writing, tool). Shown in sidebar and mobile footer of homepage.
- `Navbar.tsx` — Fixed top bar. Links: Work, Play, About, Resume (Google Drive link). Mobile hamburger drawer.
- `AnimatedSection.tsx` — Fade+slide-up wrapper, used throughout for scroll entrance.
- `Footer.tsx` — Site footer.
- `HashScroll.tsx` — Handles smooth scroll to `#work` anchor from navbar.

---

## Projects Data (`src/lib/projects.ts`)

Single source of truth for all projects. The `Project` interface:

```typescript
slug, title, client, shortDescription, year, role, team, duration,
tools[], tags[], category, status,
coverColor,           // always set — background fill
coverImage?,          // path from /public
coverVideo?,          // path from /public — takes priority over coverImage
coverVideoPosition?,  // CSS object-position e.g. "50% 60%"
coverFit?,            // "contain" | "cover"
glowColor,
overview?, challenge?, centralQuestion?,
sections?: { heading, body, bullets? }[],
outcomes?, lessons?,
gallery?: string[],   // for creative projects
galleryColumns?: number[]
```

### Current Projects (in order)

| Slug | Category | Status | Cover |
|---|---|---|---|
| lumity | product | published | `/covers/lumity.png` (cover fit) |
| tend | product | published | `/covers/tend.mp4` (video, position `50% 60%`) |
| ask-the-ordinary | product | published | `/covers/ask-the-ordinary.mp4` (video) |
| bungee-accessibility | product | published | `/covers/bungee.gif` |
| toyota-pedestrian-safety | product | published | `/covers/toyota.png` |
| hookd-magazine | creative | published | `/covers/hookd.png` |
| indian-futurism | creative | published | `/play/indian-futurism-cover.png` |
| pyala-chai | creative | published | `/play/pyala-chai-cover.png` |
| kendra-scott | creative | published | `/play/kendra-scott-cover.png` |
| fragrance-bottle | creative | published | `/play/fragrance-bottle-cover.png` |
| fashion-exhibition | creative | published | `/play/fashion-exhibition-cover.png` |
| furniture-design | creative | published | `/play/furniture-design-cover.jpg` |

---

## What's Done

- Full site structure: home, about, play, dynamic case study pages
- Sticky two-column desktop layout, stacked mobile layout
- Responsive navbar with mobile drawer
- All project cards standardized to `aspect-[1157/702]` with `border border-border`
- Video autoplay: `AutoplayVideo` component with `IntersectionObserver` + `visibilitychange` listener — videos resume when tab becomes visible or card scrolls back into view
- Ask The Ordinary thumbnail: `/covers/ask-the-ordinary.mp4` — 4s loop, cropped to white chat card, 1.658× speed, 107KB
- Tend thumbnail: `/covers/tend.mp4` — 6.53s, 375KB, original motion graphic re-encoded (no spatial crop)
- Education text in Hero: "BFA, Visual Communication Design"
- Name hover effect: purple radial gradient tracks mouse position

---

## ✅ Resolved: Tend Video

Replaced with screen recording from Desktop (`Screen Recording 2026-06-02 at 4.12.03 PM.mov`, 1486×904). Encoded as forward+reverse seamless loop with separator removed.

**ffmpeg command used:**
```bash
python3 -c "
import subprocess, glob, os
f = glob.glob(os.path.expanduser('~/Desktop/Screen Recording 2026-06-02*.mov'))[0]
subprocess.run(['/Users/nanditamalhotra/.local/bin/ffmpeg', '-i', f,
  '-filter_complex', '[0:v]crop=1486:850:0:0,fps=30[cropped];[cropped]split[fwd][rev_in];[rev_in]reverse[rev];[fwd][rev]concat=n=2:v=1:a=0[out]',
  '-map', '[out]', '-c:v', 'libx264', '-crf', '22', '-pix_fmt', 'yuv420p', '-an',
  '/Users/nanditamalhotra/portfolio_v2/public/covers/tend.mp4', '-y'], capture_output=True)
"
```
Output: `public/covers/tend.mp4`, 1486×850, 572KB, 12s. Separator was at y=852 in source. No `coverVideoPosition` needed.

---

## Tend Case Study Page ✅

Built at `/work/tend` as a dedicated rich-narrative page (bypasses the generic `CaseStudyLayout`).

**Files:**
- `src/app/work/tend/page.tsx` — metadata + renders `<TendCaseStudy />`
- `src/components/TendCaseStudy.tsx` — full narrative page, imports all copy from `src/lib/tendContent.ts`
- `src/lib/tendContent.ts` — **ALL editable copy lives here**

**What's in it:**
- Six story moments (01–06) with kicker labels + body copy
- Live SVG plant growth row (5 stages: seed → sprout → growing → budding → bloom), line-art in design system tokens
- Dark hero cover with white plant illustrations
- Two chat snippet components (plant bug + animation intent)
- Mode comparison (Goal mode vs Free write mode, side-by-side with screenshot placeholders)
- 4 screenshot placeholders labeled for drop-in (mobile writing, goal mode, free write, garden view)
- 5 pull quotes using `border-l-2 border-accent` style
- 5 numbered lessons learned
- Live app CTA → tend-journal.netlify.app
- Next project footer

**Screenshot placeholders to fill:**
1. `Mobile writing view · keyboard open` (9:16)
2. `Goal mode · writing view` (9:16)
3. `Free write mode · writing view` (9:16)
4. `Garden view · all entries` (16:10)

---

## Lumity Case Study Page ✅ (section-by-section review ongoing)

Built at `/work/lumity` via `src/components/LumityCaseStudy.tsx`.

### Writing rules (apply to all copy edits)
- No em dashes in prose
- Short declarative sentences, first person
- Tend Journal case study is the approved tonal reference
- Minto Pyramid: each section heading = a specific claim; first sentence states the point; evidence follows
- Do NOT invent copy — source from https://nanditamalhotra.com/project/lumity-redesign

### Layout reference
https://www.yangreyna.com/sonar — single column width for text + images, full-bleed hero, generous vertical spacing, no colored callout cards, pull quotes only at section ends.

### Current section order (implemented)
1. Back link
2. Title + meta (Team, Duration, Client, Skills, Tools)
3. Hero image (full bleed, `bg-[#6B3FD4]`)
4. 4-screen overview image
5. Overview paragraph
6. The Challenge — 4 user-impact bullets + HMW callout question
7. The Solution — 4 bullets
8. Design Approach label + process diagram image
9. **01 Exploratory Research** — research methods image → "consolidated findings into a table" line → ecosystem map image → ecosystem map context (underlined "ecosystem map", highlighted key takeaway) → design principles image → "That meant we couldn't design one experience..." line
10. **02 Schematic Design** — heading ("Research revealed three types of users. The app had been designing for one.") → body → 2-col grid: annotation blocks + architecture diagram (architecture-v2.png, `lensSize={350}`) with custom SVG arrows → CalloutQuestion → "Here's how every screen maps to the three engagement levels." → IA image (GzB8dSZvJcV7i2Na608sj5h2Qc.png)
11. **03 Evaluative Research** — 3 usability issues (numbered list, no colored backgrounds) → testing image → prototype screen image
12. **04 Design Iteration** — 3 fixes → 3-col GIF grid → 2-col GIF row → PullQuote
13. **Building Consistency** — heading + body → UI kit image
14. **The Final Prototype** — heading + body → 5-col GIF grid with labels/captions
15. **Shaping My Approach** — reflections with bold emphasis spans
16. Next project footer

### Images (all at `/case-studies/lumity/`)
All image filenames are correct. Do not change them.
Notable: `architecture-v2.png` = concentric circles diagram (downloaded from navyathakkar.com/work/lumity).

### MagnifierImage
All static images use `<MagnifierImage>`. GIFs and videos use plain `<img>` tags — no magnifier on animated content.
- Default: `zoom={2.5}`, `lensSize={220}`
- Architecture diagram override: `lensSize={350}` (image is dense/detailed)
- Lens background is white (`backgroundColor: "#ffffff"`) to handle transparent PNGs correctly.

### Helper components (bottom of LumityCaseStudy.tsx)
- `CalloutQuestion` — centered italic large text, for rhetorical/HMW questions between sections
- `PullQuote` — `border-l-2 border-accent` blockquote, for end-of-section statements
- `Label` — uppercase tracking label (section name)
- `SectionLabel` — numbered `border-t pt-10` label (01–04 sections)
- `Meta` — metadata row item

### What still needs review (section by section)
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

---

## To Continue

Start Claude Code in `/Users/nanditamalhotra/portfolio_v2` and say:
> "Read handoff.md and pick up where we left off"

Update this file at the end of each session.

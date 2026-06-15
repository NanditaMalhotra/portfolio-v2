/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ExpandableImage from "./ExpandableImage";
import MagnifierImage from "./MagnifierImage";
import LumityCarousel from "./LumityCarousel";
import { projects } from "@/lib/projects";

const B = "/case-studies/lumity";

export default function LumityCaseStudy() {
  const published = projects.filter((p) => p.status === "published" && p.category !== "creative");
  const idx = published.findIndex((p) => p.slug === "lumity");
  const next = published[(idx + 1) % published.length];

  return (
    <article className="pt-24 bg-white">

      {/* ── Back link ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-4 mb-10">
        <AnimatedSection>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            All Work
          </Link>
        </AnimatedSection>
      </div>

      {/* ── Title + meta ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">
            Lumity
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
            Redesigning a Social Learning Platform, End-to-End
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-10">
            Lumity is a social learning platform where users track and share what they&apos;re learning with a like-minded community. I led an end-to-end redesign to improve usability, visual consistency, and engagement, spanning research, architecture, usability testing, and design system.
          </p>
          <div className="border-t border-border mb-8" />
          <div className="flex gap-x-10">
            <Meta label="Team" value="UX team of 4, Project Manager, Developer, CEO" nowrap />
            <Meta label="What I did" value="UX Design · UX Research" />
            <Meta label="Skills" value="Product Strategy · UX Design · Usability Testing · User Research · Systems Design" />
            <Meta label="Tools" value="Figma · FigJam · UXtweak · Useberry" />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Hero — full bleed ── */}
      <AnimatedSection>
        <ExpandableImage
          src={`${B}/zMmaHwgayx5HDAQhxoURFaGl9D4.png`}
          alt="Lumity redesign: multiple app screens"
          containerClassName="w-full bg-[#6B3FD4] max-h-[380px] overflow-hidden"
          imgClassName="object-cover object-top"
        />
      </AnimatedSection>

      {/* ── Challenge ── */}
      <div id="overview" className="max-w-3xl mx-auto px-6 md:px-10 mt-20 mb-20">
        <AnimatedSection>
          <Label>The Challenge</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            The product was fragmented. Users felt it everywhere.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-6">
            There was no unified structure connecting the screens. Four specific problems made that visible.
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {[
              "Users couldn't move between personal learning and community without losing context",
              "Screens looked and behaved differently with no shared visual language",
              "Interacting with content felt overwhelming, not inviting",
              "There was nowhere for learning, notes, and social activity to coexist",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-stone">
                <span className="text-stone/30 mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="border-l-4 border-accent pl-6 py-2 mt-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent/70 font-sans mb-3">How might we</p>
            <p className="text-xl md:text-2xl font-sans font-medium text-ink leading-snug">
              Transform Lumity into a unified, engaging platform that seamlessly connects personal learning and community experiences?
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* ── 4-screen overview ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <ExpandableImage src={`${B}/q7fzR7NSc6N8KWsSj3q2JIYFZm8.webp`} alt="Lumity redesigned screens: Home, Explore, Library, Insights" />
        </AnimatedSection>
      </div>

      {/* ── Solution ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <Label>The Solution</Label>
          <ul className="flex flex-col">
            {[
              "Create seamless navigation between personal, exploratory, and community spaces",
              "Establish a consistent visual and interaction system",
              "Simplify complex workflows and reduce cognitive load",
              "Encourage user engagement through clearer pathways and community features",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 py-4 border-t border-border text-base text-stone">
                <span className="text-stone/30 mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
            <li className="border-t border-border" />
          </ul>
        </AnimatedSection>
      </div>

      {/* ── Design Approach ── */}
      <div id="design-approach" className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <Label>Design Approach</Label>
          <p className="text-base text-stone leading-relaxed">
            An end-to-end UX process across four phases over 16 weeks, combining research, testing, and design.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <ExpandableImage src={`${B}/bI9LqN0HAdQnu3IFPK898DAzw.png`} alt="4-phase design process: Exploratory Research, Schematic Design, Evaluative Research, Design Iteration" containerClassName="" />
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════
          01 — EXPLORATORY RESEARCH
      ════════════════════════════════ */}
      <div id="exploratory-research" className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <SectionLabel number="01" label="Exploratory Research" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Six research methods. One finding that changed everything.
          </h2>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <MagnifierImage src={`${B}/xaFJHE0tbNaKIHA7bSrcEXfiE.png`} alt="Research methods used" />
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-base text-stone leading-relaxed">
            Each method surfaced something different about users and the existing product. We consolidated the findings into a table to find the pattern underneath.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <MagnifierImage src={`${B}/wv6mThqyfE6zUIL1Hvo7gSERhD0.png`} alt="Ecosystem map and key insights" containerClassName="overflow-hidden" />
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-base text-stone leading-relaxed mb-3">
            One of the most insightful takeaways came from creating the <span className="underline underline-offset-2 decoration-accent">ecosystem map</span>.
          </p>
          <p className="text-base text-stone leading-relaxed">
            It highlighted that <mark className="bg-accent/10 text-ink rounded px-0.5 not-italic">users exist in progressive levels: starting at the individual level, growing to explore the community, and then to actively contributing to the community.</mark>
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <MagnifierImage src={`${B}/F71Z16NwWnqdSsi6pZstPqtBDM.png`} alt="Ecosystem map" />
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <p className="text-base text-stone leading-relaxed">
            That meant we couldn&apos;t design one experience and expect it to work for everyone.
          </p>
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════
          02 — SCHEMATIC DESIGN
      ════════════════════════════════ */}
      <div id="schematic-design" className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <SectionLabel number="02" label="Schematic Design" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Research revealed three types of users. The app had been designed for one.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-8">
            Once we understood that Lumity serves three versions of the same user, the product architecture became obvious. Three engagement levels meant three core functions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ol className="flex flex-col">
              {[
                {
                  n: "1",
                  heading: "Creating Community",
                  body: "As users become regulars, they actively engage with others and contribute to community discussions, fostering deeper connections through the platform.",
                },
                {
                  n: "2",
                  heading: "Exploring Interests",
                  body: "As users grow more engaged, they explore and discover new topics and search for specific content they may be interested in.",
                },
                {
                  n: "3",
                  heading: "Personal Tracking",
                  body: "This app function supports novice users with tools for tracking progress and effectively organizing content in their Library.",
                },
              ].map(({ n, heading, body }) => (
                <li key={n} className="flex items-center gap-4 py-3">
                  <div className="flex-1 bg-parchment rounded-xl px-4 py-3">
                    <p className="font-sans font-semibold text-ink text-xs mb-1 leading-snug">{heading}</p>
                    <p className="text-xs text-stone leading-relaxed">{body}</p>
                  </div>
                  <svg width="56" height="12" viewBox="0 0 56 12" fill="none" className="text-stone/60 shrink-0">
                    <line x1="0" y1="6" x2="50" y2="6" stroke="currentColor" strokeWidth="1" />
                    <polyline points="44,1 55,6 44,11" stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </li>
              ))}
            </ol>
            <div className="self-center">
              <MagnifierImage
                src={`${B}/architecture-v2.png`}
                alt="Product architecture diagram"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mt-28 mb-4">
        <AnimatedSection>
          <CalloutQuestion align="left">Now, how do you organize all of this so the app feels simple, regardless of which user is in front of it?</CalloutQuestion>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-8">
        <AnimatedSection>
          <p className="text-base text-stone leading-relaxed">
            We mapped the information architecture to answer that question.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <MagnifierImage src={`${B}/GzB8dSZvJcV7i2Na608sj5h2Qc.png`} alt="Information architecture" />
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════
          03 — EVALUATIVE RESEARCH + ITERATION
      ════════════════════════════════ */}
      <div id="evaluative-research" className="max-w-3xl mx-auto px-6 md:px-10 mb-6">
        <AnimatedSection>
          <SectionLabel number="03" label="Evaluative Research + Design Iteration" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Prototyped, tested, and came out knowing exactly what to change.
          </h2>
          <p className="text-base text-stone leading-relaxed">
            Mapped key workflows, built mid-fi wireframes, and tested with four users. The goal: validate how clear the navigation and content felt in practice.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Process carousel ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-4">
        <AnimatedSection>
          <LumityCarousel />
        </AnimatedSection>
      </div>

      {/* ── Figma link ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <a
            href="https://www.figma.com/design/FtoeGDYyM28y5ubyRv7zHs/Lumity-Group-Project?node-id=0-1&t=uWX383YjDpffvifm-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-4"
          >
            View full process documentation in Figma
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </AnimatedSection>
      </div>

      {/* ── Testing findings ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-base text-ink font-medium mb-6">Testing confirmed what we suspected.</p>
          <div className="grid grid-cols-3 gap-6">
            {[
              "Media types weren't distinguishable",
              "Navigation tabs were often missed",
              "The Explore section felt too rigid",
            ].map((finding, i) => (
              <div key={i} className="border border-accent/30 rounded-xl p-5 bg-parchment/40">
                <p className="font-mono text-xs text-stone/30 mb-3">0{i + 1}</p>
                <p className="text-sm text-ink leading-snug">{finding}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Results: 3 solution images from slide 15 ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
        <AnimatedSection>
          <Label>From Insights to Redesign</Label>
          <p className="text-base text-stone leading-relaxed">
            Issues uncovered through testing made redesign priorities clear: improve clarity, simplify navigation, and create a more engaging way to browse.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          {(() => {
            const items = [
              {
                src: "solution-media-types.png",
                caption: (
                  <><span className="text-ink font-medium">Distinct icons and shapes</span> for each media type led to increased browsing speed and supported <span className="text-ink font-medium">clearer content recognition</span>.</>
                ),
              },
              {
                src: "solution-navigation.png",
                caption: (
                  <><span className="text-ink font-medium">Clearer labels and hierarchy</span> of navigation tabs led to <span className="text-ink font-medium">smoother wayfinding</span>.</>
                ),
              },
              {
                src: "solution-explore.png",
                caption: (
                  <><span className="text-ink font-medium">Dynamic grid layout</span> of explore page boosted <span className="text-ink font-medium">organic discovery and engagement</span>.</>
                ),
              },
            ];
            return (
              <div className="grid grid-cols-3 gap-x-5 gap-y-4 items-start">
                {items.map((item, i) => (
                  <ExpandableImage key={`img-${i}`} src={`${B}/${item.src}`} alt="" containerClassName="rounded-xl overflow-hidden" />
                ))}
                {items.map((item, i) => (
                  <p key={`cap-${i}`} className="text-xs text-stone leading-relaxed">{item.caption}</p>
                ))}
              </div>
            );
          })()}
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════
          UI KIT
      ════════════════════════════════ */}
      <div id="building-consistency" className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <Label>Building Consistency</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Usability fixes don&apos;t hold without a consistent system underneath.
          </h2>
          <p className="text-base text-stone leading-relaxed">
            The usability fixes addressed the surface. The design system addressed the foundation. Without consistent colors, type, and reusable components, every new screen would risk reintroducing the same inconsistencies we&apos;d just fixed.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <ExpandableImage src={`${B}/7KlMtIngSaPZ2OjYWuQq3hsDCZw.png`} alt="Lumity UI kit and design system" />
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════
          FINAL PROTOTYPE
      ════════════════════════════════ */}
      <div id="final-prototype" className="bg-parchment py-20 mb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 mb-14">
          <AnimatedSection>
            <Label>The Final Prototype</Label>
            <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
              Five flows. One cohesive experience.
            </h2>
            <p className="text-base text-stone leading-relaxed">
              The final prototype brought all the redesigned pieces together. Five core workflows: onboarding, exploration, posting, library, and progress. Each working on its own and fitting together as a single coherent system.
            </p>
          </AnimatedSection>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {[
              {
                src: "wo9ejJMFJ3lPcsQUSkHvqwUr08.gif",
                label: "Onboarding",
                sub: "Get started in seconds",
                detail: "Set your interests fast and land on a personalized homepage built just for you",
              },
              {
                src: "pzB7CWelf9DZ3aSTXE6UCJpLQeM.gif",
                label: "Explore",
                sub: "Discover more, your way",
                detail: "Swipe through a dynamic Explore page with content organized by media type, tags, and community",
              },
              {
                src: "UWSDicdlf8Nf6U8ffYyVobnc.gif",
                label: "Posting",
                sub: "Share without friction",
                detail: "Save drafts, pick up where you left off, and add posts directly to your library",
              },
              {
                src: "nlNUAhJpf29B173z3PvmNPSV9Jk.gif",
                label: "Library",
                sub: "Your learning, your rules",
                detail: "Switch between playlists or saved posts in grid or list view for full control",
              },
              {
                src: "Dqh8MwKvIFZdbjgooVU77vmdvAI.gif",
                label: "Progress",
                sub: "Track it. Own it. Celebrate it.",
                detail: "Stay motivated with streaks, goals, and achievements that bring your learning journey to life.",
              },
            ].map(({ src, label, sub, detail }) => (
              <div key={src} className="flex flex-col gap-2">
                <ExpandableImage src={`${B}/${src}`} alt={label} containerClassName="rounded-2xl overflow-hidden" />
                <p className="text-[11px] font-semibold text-ink font-sans leading-tight">{label}</p>
                <p className="text-[11px] text-stone leading-tight font-medium">{sub}</p>
                <p className="text-[10px] text-stone/60 leading-snug hidden md:block">{detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        </div>
      </div>

      {/* ════════════════════════════════
          REFLECTIONS
      ════════════════════════════════ */}
      <div id="reflections" className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <Label>Shaping My Approach</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-6">
            What Lumity taught me about designing for users who aren&apos;t all the same.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-4">
            For me, redesigning Lumity was a chance to apply user-centered design thinking to a consumer-facing product and see how small usability improvements can transform the overall experience.
          </p>
          <p className="text-base text-stone leading-relaxed mb-4">
            What I learned most from this project was the value of <span className="text-ink font-medium">testing early and often</span>: small usability insights shaped some of the most impactful design changes. Building a <span className="text-ink font-medium">design system</span> also reinforced the importance of scalability, ensuring the product could grow consistently beyond the prototype.
          </p>
          <p className="text-base text-stone leading-relaxed mb-4">
            If I had more time, my next step would be to conduct <span className="text-ink font-medium">evaluative testing on the high-fidelity prototype</span> to validate the design decisions and refine details like microinteractions and accessibility.
          </p>
          <p className="text-base text-stone leading-relaxed">
            This project not only strengthened my skills in <span className="text-ink font-medium">UX research and systems thinking</span>, but also deepened my ability to <span className="text-ink font-medium">tell a clear product story through design</span>.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Next project ── */}
      {next && (
        <div className="border-t border-border">
          <Link href={`/work/${next.slug}`} className="group max-w-6xl mx-auto px-6 md:px-10 py-12 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-stone/50 mb-1 font-sans">Next</p>
              <p className="text-lg font-sans font-medium text-ink group-hover:text-accent transition-colors">{next.title}</p>
            </div>
            <ArrowLeft size={20} strokeWidth={1.5} className="rotate-180 text-stone group-hover:text-accent transition-colors shrink-0" />
          </Link>
        </div>
      )}
    </article>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4 font-sans">
      {children}
    </p>
  );
}

function SectionLabel({ number: _number, label }: { number: string; label: string }) {
  return (
    <div className="border-t border-border pt-10 mb-6">
      <span className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans">{label}</span>
    </div>
  );
}

function CalloutQuestion({ children, align = "center" }: { children: React.ReactNode; align?: "center" | "left" }) {
  return (
    <p className={`text-xl md:text-2xl font-sans italic text-stone leading-snug py-4 ${align === "center" ? "text-center" : "text-left"}`}>
      {children}
    </p>
  );
}

function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 py-2">
      <p className="font-sans font-medium text-xl md:text-2xl text-ink leading-snug">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}

function Meta({ label, value, nowrap }: { label: string; value: string; nowrap?: boolean }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1">{label}</p>
      <p className={`text-ink text-sm${nowrap ? " whitespace-nowrap" : ""}`}>{value}</p>
    </div>
  );
}

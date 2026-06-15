import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/lib/projects";
import { header, cover, sections, lessons, cta } from "@/lib/tendContent";

// ─── Plant SVG ────────────────────────────────────────────────────────────────

function PlantSVG({ stage }: { stage: 0 | 1 | 2 | 3 | 4 }) {
  const base = "fill-none stroke-ink";
  const dim = "fill-none stroke-ink/30";

  return (
    <svg
      viewBox="0 0 80 120"
      width="80"
      height="120"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <ellipse
        cx="40" cy="112" rx="9" ry="5"
        strokeWidth="1.5"
        className={stage >= 0 ? base : dim}
      />
      {stage >= 1 && (
        <>
          <line x1="40" y1="117" x2="40" y2="93" strokeWidth="1.5" className={base} />
          <path d="M40 105 Q26 97 30 87" strokeWidth="1.5" className={base} />
          <path d="M40 105 Q54 97 50 87" strokeWidth="1.5" className={base} />
          <ellipse cx="40" cy="89" rx="5" ry="6" strokeWidth="1.5" className={base} />
        </>
      )}
      {stage >= 2 && (
        <>
          <line x1="40" y1="93" x2="40" y2="65" strokeWidth="1.5" className={base} />
          <path d="M40 80 Q22 70 28 58" strokeWidth="1.5" className={base} />
          <path d="M40 80 Q58 70 52 58" strokeWidth="1.5" className={base} />
          <ellipse cx="40" cy="61" rx="5.5" ry="8" strokeWidth="1.5" className={base} />
        </>
      )}
      {stage >= 3 && (
        <>
          <line x1="40" y1="53" x2="40" y2="38" strokeWidth="1.5" className={base} />
          <path d="M40 56 Q24 46 30 36" strokeWidth="1.5" className={base} />
          <path d="M40 56 Q56 46 50 36" strokeWidth="1.5" className={base} />
          <ellipse cx="40" cy="34" rx="5.5" ry="8" strokeWidth="1.5" className={base} />
        </>
      )}
      {stage >= 4 && (
        <>
          <ellipse cx="40" cy="11" rx="3.5" ry="7" strokeWidth="1.2" className={base} />
          <ellipse cx="49.7" cy="16.5" rx="3.5" ry="7" transform="rotate(60 49.7 16.5)" strokeWidth="1.2" className={base} />
          <ellipse cx="49.7" cy="27.5" rx="3.5" ry="7" transform="rotate(120 49.7 27.5)" strokeWidth="1.2" className={base} />
          <ellipse cx="40" cy="33" rx="3.5" ry="7" strokeWidth="1.2" className={base} />
          <ellipse cx="30.3" cy="27.5" rx="3.5" ry="7" transform="rotate(60 30.3 27.5)" strokeWidth="1.2" className={base} />
          <ellipse cx="30.3" cy="16.5" rx="3.5" ry="7" transform="rotate(120 30.3 16.5)" strokeWidth="1.2" className={base} />
          <circle cx="40" cy="22" r="5.5" strokeWidth="1.5" className={base} />
          <circle cx="40" cy="22" r="1.5" fill="currentColor" className="text-ink" />
          <circle cx="37" cy="20.5" r="0.8" fill="currentColor" className="text-ink" />
          <circle cx="43" cy="20.5" r="0.8" fill="currentColor" className="text-ink" />
          <circle cx="40" cy="25" r="0.8" fill="currentColor" className="text-ink" />
        </>
      )}
    </svg>
  );
}

// ─── Plant Growth Row ─────────────────────────────────────────────────────────

function PlantGrowthRow({ label }: { label: string }) {
  const stageLabels = ["Seed", "Sprout", "Growing", "Budding", "Bloom"];
  return (
    <div className="my-12 py-10 border-t border-b border-border text-center">
      <p className="text-[10px] tracking-[0.2em] uppercase text-stone/50 mb-6 font-sans">
        {label}
      </p>
      <div className="flex items-end justify-center gap-6 md:gap-10 py-10">
        {([0, 1, 2, 3, 4] as const).map((stage) => (
          <div key={stage} className="flex flex-col items-center gap-2">
            <PlantSVG stage={stage} />
            <span className="text-[10px] tracking-[0.15em] uppercase text-stone/60">
              {stageLabels[stage]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Chat Snippet ─────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "claude";
  text: string;
}

function ChatSnippet({ messages }: { messages: Message[] }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-cream my-8">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#F5F5F5]">
        <div className="w-2 h-2 rounded-full bg-border" />
        <span className="text-[10px] tracking-[0.15em] uppercase text-stone">
          Claude conversation
        </span>
      </div>
      <div className="flex flex-col gap-0 divide-y divide-border">
        {messages.map((msg, i) => (
          <div key={i} className="px-5 py-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1.5">
              {msg.role === "user" ? "Nandita" : "Claude"}
            </p>
            <p className="text-sm text-ink leading-relaxed">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screenshot Placeholder ───────────────────────────────────────────────────

function ScreenshotPlaceholder({
  label,
  aspectRatio = "16/10",
  caption,
}: {
  label: string;
  aspectRatio?: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="w-full rounded-2xl border border-border bg-[#F5F5F5] flex flex-col items-center justify-center gap-2"
        style={{ aspectRatio }}
      >
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm border border-stone/40" />
        </div>
        <p className="text-[11px] tracking-[0.15em] uppercase text-stone/60 text-center px-4">
          {label}
        </p>
      </div>
      {caption && (
        <figcaption className="text-[12px] text-stone/70 text-center mt-3 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── Pull Quote ───────────────────────────────────────────────────────────────

function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 my-10">
      <p className="font-sans font-medium text-lg md:text-xl text-ink leading-snug">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}

// ─── Section heading helpers ──────────────────────────────────────────────────

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans font-medium text-3xl md:text-[36px] text-ink leading-tight mb-5">
      {children}
    </h2>
  );
}

function Body({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-base text-stone leading-relaxed ${className ?? ""}`}>
      {children}
    </p>
  );
}

// ─── Mode Comparison ─────────────────────────────────────────────────────────

function ModeComparison() {
  const { goalMode, freeMode } = sections.modes;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <div className="rounded-2xl border border-border p-6 bg-[#F5F5F5]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full border border-ink flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-ink" />
          </div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-stone font-sans">
            {goalMode.label}
          </span>
        </div>
        <h3 className="font-sans font-semibold text-base text-ink mb-2">
          {goalMode.heading}
        </h3>
        <Body className="text-sm mb-4">{goalMode.body}</Body>
        <ScreenshotPlaceholder
          label={goalMode.screenshotLabel}
          aspectRatio="9/16"
        />
      </div>

      <div className="rounded-2xl border border-border p-6 bg-[#F5F5F5]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full border border-stone flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-stone" />
          </div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-stone font-sans">
            {freeMode.label}
          </span>
        </div>
        <h3 className="font-sans font-semibold text-base text-ink mb-2">
          {freeMode.heading}
        </h3>
        <Body className="text-sm mb-4">{freeMode.body}</Body>
        <ScreenshotPlaceholder
          label={freeMode.screenshotLabel}
          aspectRatio="9/16"
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TendCaseStudy() {
  const published = projects.filter((p) => p.status === "published" && p.category !== "creative");
  const idx = published.findIndex((p) => p.slug === "tend");
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
            {header.kicker}
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
            {header.title}
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-10">
            {header.description}
          </p>
          <div className="border-t border-border mb-8" />
          <div className="flex gap-x-10">
            <Meta label="Team" value={header.meta.team} nowrap />
            <Meta label="What I did" value={header.meta.whatIDid} />
            <Meta label="Skills" value={header.meta.skills} />
            <Meta label="Tools" value={header.meta.tools} />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Cover hero — dark garden ── */}
      <AnimatedSection>
        <div className="w-full bg-[#0A0A0A] py-16 px-6 my-8 flex flex-col items-center justify-center overflow-hidden">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-8 font-sans">
            {cover.subtitle}
          </p>
          <div className="flex items-end justify-center gap-6 md:gap-12 w-full max-w-xl">
            {([0, 1, 2, 3, 4] as const).map((stage) => (
              <div key={stage} className="opacity-80">
                <svg
                  viewBox="0 0 80 120"
                  width="60"
                  height="90"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                  aria-hidden
                >
                  <ellipse cx="40" cy="112" rx="9" ry="5" strokeWidth="1.5" />
                  {stage >= 1 && (
                    <>
                      <line x1="40" y1="117" x2="40" y2="93" strokeWidth="1.5" />
                      <path d="M40 105 Q26 97 30 87" strokeWidth="1.5" />
                      <path d="M40 105 Q54 97 50 87" strokeWidth="1.5" />
                      <ellipse cx="40" cy="89" rx="5" ry="6" strokeWidth="1.5" />
                    </>
                  )}
                  {stage >= 2 && (
                    <>
                      <line x1="40" y1="93" x2="40" y2="65" strokeWidth="1.5" />
                      <path d="M40 80 Q22 70 28 58" strokeWidth="1.5" />
                      <path d="M40 80 Q58 70 52 58" strokeWidth="1.5" />
                      <ellipse cx="40" cy="61" rx="5.5" ry="8" strokeWidth="1.5" />
                    </>
                  )}
                  {stage >= 3 && (
                    <>
                      <line x1="40" y1="53" x2="40" y2="38" strokeWidth="1.5" />
                      <path d="M40 56 Q24 46 30 36" strokeWidth="1.5" />
                      <path d="M40 56 Q56 46 50 36" strokeWidth="1.5" />
                      <ellipse cx="40" cy="34" rx="5.5" ry="8" strokeWidth="1.5" />
                    </>
                  )}
                  {stage >= 4 && (
                    <>
                      <ellipse cx="40" cy="11" rx="3.5" ry="7" strokeWidth="1.2" />
                      <ellipse cx="49.7" cy="16.5" rx="3.5" ry="7" transform="rotate(60 49.7 16.5)" strokeWidth="1.2" />
                      <ellipse cx="49.7" cy="27.5" rx="3.5" ry="7" transform="rotate(120 49.7 27.5)" strokeWidth="1.2" />
                      <ellipse cx="40" cy="33" rx="3.5" ry="7" strokeWidth="1.2" />
                      <ellipse cx="30.3" cy="27.5" rx="3.5" ry="7" transform="rotate(60 30.3 27.5)" strokeWidth="1.2" />
                      <ellipse cx="30.3" cy="16.5" rx="3.5" ry="7" transform="rotate(120 30.3 16.5)" strokeWidth="1.2" />
                      <circle cx="40" cy="22" r="5.5" strokeWidth="1.5" />
                      <circle cx="40" cy="22" r="1.5" fill="white" className="stroke-none" />
                      <circle cx="37" cy="20.5" r="0.8" fill="white" className="stroke-none" />
                      <circle cx="43" cy="20.5" r="0.8" fill="white" className="stroke-none" />
                      <circle cx="40" cy="25" r="0.8" fill="white" className="stroke-none" />
                    </>
                  )}
                </svg>
              </div>
            ))}
          </div>
          <a
            href={cover.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/80 transition-colors font-sans"
          >
            {cover.appUrlLabel}
            <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </AnimatedSection>

      {/* ── Body copy ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16">

        {/* ── 01: The Idea ── */}
        <AnimatedSection>
          <Kicker>{sections.idea.kicker}</Kicker>
          <SectionHeading>{sections.idea.heading}</SectionHeading>
          {sections.idea.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <PlantGrowthRow label={sections.idea.plantRowLabel} />
        </AnimatedSection>

        {/* ── 02: The Plant Bug ── */}
        <AnimatedSection>
          <Kicker>{sections.bug.kicker}</Kicker>
          <SectionHeading>{sections.bug.heading}</SectionHeading>
          {sections.bug.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ChatSnippet messages={sections.bug.chat} />
          <PullQuote quote={sections.bug.quote} />
        </AnimatedSection>

        {/* ── 03: Mobile & the Keyboard ── */}
        <AnimatedSection>
          <Kicker>{sections.mobile.kicker}</Kicker>
          <SectionHeading>{sections.mobile.heading}</SectionHeading>
          {sections.mobile.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ScreenshotPlaceholder
            label={sections.mobile.screenshot.label}
            aspectRatio="9/16"
            caption={sections.mobile.screenshot.caption}
          />
          <Body>{sections.mobile.bodyAfterScreenshot}</Body>
          <PullQuote quote={sections.mobile.quote} />
        </AnimatedSection>

        {/* ── 04: Two Writing Modes ── */}
        <AnimatedSection>
          <Kicker>{sections.modes.kicker}</Kicker>
          <SectionHeading>{sections.modes.heading}</SectionHeading>
          {sections.modes.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ModeComparison />
          <PullQuote quote={sections.modes.quote} />
        </AnimatedSection>

        {/* ── 05: The PWA Moment ── */}
        <AnimatedSection>
          <Kicker>{sections.pwa.kicker}</Kicker>
          <SectionHeading>{sections.pwa.heading}</SectionHeading>
          {sections.pwa.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-border bg-[#F5F5F5] p-8 my-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 font-sans mb-1">
                  {sections.pwa.productCard.eyebrow}
                </p>
                <p className="font-sans font-semibold text-ink">{sections.pwa.productCard.name}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                <svg viewBox="0 0 80 120" width="28" height="28" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                  <ellipse cx="40" cy="112" rx="9" ry="5" strokeWidth="2" />
                  <line x1="40" y1="117" x2="40" y2="93" strokeWidth="2" />
                  <path d="M40 105 Q26 97 30 87" strokeWidth="2" />
                  <path d="M40 105 Q54 97 50 87" strokeWidth="2" />
                  <line x1="40" y1="93" x2="40" y2="65" strokeWidth="2" />
                  <path d="M40 80 Q22 70 28 58" strokeWidth="2" />
                  <path d="M40 80 Q58 70 52 58" strokeWidth="2" />
                  <ellipse cx="40" cy="11" rx="3.5" ry="7" strokeWidth="1.5" />
                  <ellipse cx="49.7" cy="16.5" rx="3.5" ry="7" transform="rotate(60 49.7 16.5)" strokeWidth="1.5" />
                  <ellipse cx="49.7" cy="27.5" rx="3.5" ry="7" transform="rotate(120 49.7 27.5)" strokeWidth="1.5" />
                  <ellipse cx="40" cy="33" rx="3.5" ry="7" strokeWidth="1.5" />
                  <ellipse cx="30.3" cy="27.5" rx="3.5" ry="7" transform="rotate(60 30.3 27.5)" strokeWidth="1.5" />
                  <ellipse cx="30.3" cy="16.5" rx="3.5" ry="7" transform="rotate(120 30.3 16.5)" strokeWidth="1.5" />
                  <circle cx="40" cy="22" r="5.5" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-stone leading-relaxed mb-6">
              {sections.pwa.productCard.description}
            </p>
            <a
              href={sections.pwa.productCard.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-ink hover:text-stone transition-colors"
            >
              {sections.pwa.productCard.linkLabel}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
          <PullQuote quote={sections.pwa.quote} />
        </AnimatedSection>

        {/* ── 06: Learning to Communicate ── */}
        <AnimatedSection>
          <Kicker>{sections.communication.kicker}</Kicker>
          <SectionHeading>{sections.communication.heading}</SectionHeading>
          {sections.communication.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ChatSnippet messages={sections.communication.chat} />
          <PullQuote quote={sections.communication.quote} />
        </AnimatedSection>

        {/* ── Garden view screenshot ── */}
        <AnimatedSection>
          <ScreenshotPlaceholder
            label={sections.gardenScreenshot.label}
            aspectRatio="16/10"
            caption={sections.gardenScreenshot.caption}
          />
        </AnimatedSection>

        {/* ── Lessons Learned ── */}
        <AnimatedSection>
          <div className="my-14 pt-14 border-t border-border">
            <Kicker>{lessons.kicker}</Kicker>
            <SectionHeading>{lessons.heading}</SectionHeading>
            <ol className="flex flex-col gap-7 mt-8">
              {lessons.items.map(({ n, heading, body }) => (
                <li key={n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-stone/40 pt-0.5 font-sans">
                    {n}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-ink mb-1.5">{heading}</p>
                    <Body className="text-sm">{body}</Body>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection>
          <div className="my-10 py-10 border-t border-b border-border text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone/50 mb-4 font-sans">
              {cta.eyebrow}
            </p>
            <a
              href={cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-medium text-xl text-ink hover:text-stone transition-colors"
            >
              {cta.urlLabel}
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </a>
            <p className="text-sm text-stone mt-3">{cta.subtext}</p>
          </div>
        </AnimatedSection>

      </div>

      {/* ── Next project ── */}
      {next && next.slug !== "tend" && (
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

// ─── Meta helper ─────────────────────────────────────────────────────────────

function Meta({ label, value, nowrap }: { label: string; value: string; nowrap?: boolean }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1">
        {label}
      </p>
      <p className={`text-ink text-sm${nowrap ? " whitespace-nowrap" : ""}`}>{value}</p>
    </div>
  );
}

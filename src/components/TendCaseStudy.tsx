"use client";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ExpandableImage from "./ExpandableImage";
import ExpandableVideo from "./ExpandableVideo";
import { projects } from "@/lib/projects";
import { header, cover, sections, learned, cta } from "@/lib/tendContent";

// ─── Chat Snippet ─────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "claude";
  text: string;
}

function ChatSnippet({ messages }: { messages: Message[] }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-cream">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-[#F5F5F5]">
        <div className="w-2 h-2 rounded-full bg-border" />
        <span className="text-[10px] tracking-[0.15em] uppercase text-stone">
          Claude conversation
        </span>
      </div>
      <div className="flex flex-col gap-0 divide-y divide-border">
        {messages.map((msg, i) => (
          <div key={i} className="px-4 py-3">
            <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1">
              {msg.role === "user" ? "Nandita" : "Claude"}
            </p>
            <p className="text-xs text-ink leading-relaxed">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
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
        <Body className="text-sm">{goalMode.body}</Body>
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
        <Body className="text-sm">{freeMode.body}</Body>
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
          <div className="grid grid-cols-2 md:flex md:gap-x-10 gap-y-5">
            <Meta label="Team" value={header.meta.team} />
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
          <ExpandableImage
            src="/case-studies/tend/writing-interface.png"
            alt="Writing interface with ruled lines and growing plant"
            containerClassName="rounded-2xl overflow-hidden mt-8"
          />
        </AnimatedSection>

        {/* ── 02: Precision ── */}
        <AnimatedSection className="mt-16">
          <Kicker>{sections.precision.kicker}</Kicker>
          <SectionHeading>{sections.precision.heading}</SectionHeading>
          <Body>{sections.precision.body}</Body>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 my-8 md:items-stretch">
            <ChatSnippet messages={sections.precision.chat} />
            <ExpandableVideo
              src="/case-studies/tend/demo-plant.mp4"
              containerClassName="rounded-2xl overflow-hidden md:h-full mx-auto"
              containerStyle={{ maxWidth: "200px" }}
              videoClassName="w-full h-auto md:h-full md:object-cover"
            />
          </div>
        </AnimatedSection>

        {/* ── 03: Desktop vs Mobile ── */}
        <AnimatedSection className="mt-16">
          <Kicker>{sections.desktopVsMobile.kicker}</Kicker>
          <SectionHeading>{sections.desktopVsMobile.heading}</SectionHeading>
          {sections.desktopVsMobile.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 my-8 items-start">
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-3 font-sans">
                {sections.desktopVsMobile.desktopLabel}
              </p>
              <ExpandableVideo
                src="/case-studies/tend/demo-goal.mp4"
                containerClassName="rounded-2xl overflow-hidden"
                videoClassName="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-3 font-sans">
                {sections.desktopVsMobile.mobileLabel}
              </p>
              <ExpandableVideo
                src="/case-studies/tend/r2-b.mp4"
                containerClassName="rounded-2xl overflow-hidden"
                containerStyle={{ width: "140px" }}
                videoClassName="w-full h-auto"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── 04: Two Writing Modes ── */}
        <AnimatedSection className="mt-16">
          <Kicker>{sections.modes.kicker}</Kicker>
          <SectionHeading>{sections.modes.heading}</SectionHeading>
          <Body>{sections.modes.body}</Body>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ExpandableImage
            src="/case-studies/tend/onboarding.png"
            alt="How do you want to write — mode selection"
            containerClassName="rounded-2xl overflow-hidden mt-8"
            containerStyle={{ height: "clamp(320px, 60vw, 580px)" }}
            imgClassName="h-full object-cover object-bottom"
          />
        </AnimatedSection>

        {/* ── 05: Idea to Product ── */}
        <AnimatedSection className="mt-16">
          <Kicker>{sections.pwa.kicker}</Kicker>
          <SectionHeading>{sections.pwa.heading}</SectionHeading>
          {sections.pwa.body.map((paragraph, i) => (
            <Body key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</Body>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="rounded-2xl border border-border bg-[#F5F5F5] p-8 mt-12">
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
        </AnimatedSection>

        {/* ── What I Learned ── */}
        <AnimatedSection className="mt-16">
          <div className="my-14 pt-14 border-t border-border">
            <Kicker>{learned.kicker}</Kicker>
            <SectionHeading>{learned.heading}</SectionHeading>
            <ol className="flex flex-col gap-7 mt-8">
              {learned.items.map(({ n, heading, body }) => (
                <li key={n}>
                  <p className="font-sans font-semibold text-ink mb-1.5">{heading}</p>
                  <Body className="text-sm">{body}</Body>
                </li>
              ))}
            </ol>
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

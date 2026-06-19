/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ExpandableImage from "./ExpandableImage";
import { projects } from "@/lib/projects";

const ACCENT = "#EB0A1E";
const B = "/case-studies/toyota-pedestrian-safety";

export default function ToyotaCaseStudy() {
  const published = projects.filter((p) => p.status === "published" && p.category !== "creative");
  const idx = published.findIndex((p) => p.slug === "toyota-pedestrian-safety");
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
            Toyota North America
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
            Ethnographic Research in New York City for Toyota&apos;s Pedestrian Safety Initiative
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-10">
            Ethnographic field research with Toyota North America, studying pedestrian behavior in NYC to challenge assumptions in urban safety system design.
          </p>
          <div className="border-t border-border mb-8" />
          <div className="grid grid-cols-2 md:flex md:gap-x-10 gap-y-5">
            <Meta label="Team" value="Individual" />
            <Meta label="What I did" value="UX Research · Ethnographic Research · Contextual Inquiry" />
            <Meta label="Skills" value="Ethnography · Field Research · Contextual Inquiry · Insight Synthesis" />
            <Meta label="Tools" value="Figma · FigJam · Panelfox" />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Cover ── */}
      <AnimatedSection>
        <div className="w-full overflow-hidden mb-20" style={{ aspectRatio: "2.6" }}>
          <img
            src={`${B}/street-crossing.jpg`}
            alt="Pedestrians and yellow taxis crossing an NYC intersection"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </AnimatedSection>

      {/* ── Context ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-base text-stone leading-relaxed">
            The brief arrived as a broad question about pedestrian safety in cities. I narrowed
            it. Most safety research focuses on rule-following behavior. I was more interested
            in rule-breaking: specifically, why jaywalking in New York functions as a coherent,
            learned system rather than chaos. That reframe shaped every methodological choice
            that followed.
          </p>
        </AnimatedSection>
      </div>

      {/* ── The Who and The Why ── */}
      <div id="overview" className="max-w-3xl mx-auto px-6 md:px-10 mb-6">
        <AnimatedSection>
          <Label>The Who and The Why</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Jaywalking is now decriminalized in New York City. However, the safety problem didn&apos;t go away.
          </h2>
          <p className="text-base text-stone leading-relaxed">
            Decriminalization doesn&apos;t affect everyone equally. Who you are and how long
            you&apos;ve lived here determines whether this change means freedom, confusion, or
            continued inequity.
          </p>
        </AnimatedSection>
      </div>

      {/* GIF — cultural framing for the research */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
        <AnimatedSection>
          <div className="w-full overflow-hidden rounded-2xl" style={{ height: 380, backgroundColor: "#111" }}>
            <img
              src={`${B}/cover.gif`}
              alt="Dustin Hoffman in Midnight Cowboy — Hey! I'm walkin' here!"
              className="w-full h-full object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Who it affects — divide/table rows */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
        <AnimatedSection>
          <p className="text-[10px] tracking-[0.2em] uppercase text-stone/50 font-sans mb-4">Who it affects</p>
          <div className="divide-y divide-border">
            {[
              {
                who: "Native New Yorkers",
                why: "Already jaywalking. It's second nature. They rely on instinct and years of experience to navigate efficiently and safely.",
              },
              {
                who: "New Residents and Visitors",
                why: "Unfamiliar with NYC pedestrian culture and more likely to misjudge risk without the local heuristics that experienced residents have built over years.",
              },
              {
                who: "Marginalized Communities",
                why: "Historical enforcement disproportionately targeted Black and Latino communities. The law changed but the systemic context it operated within did not.",
              },
            ].map(({ who, why }) => (
              <div key={who} className="py-5 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-8">
                <p className="text-sm font-semibold text-ink">{who}</p>
                <p className="text-base text-stone leading-relaxed">{why}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Why it matters — 3-col tinted cards */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <p className="text-[10px] tracking-[0.2em] uppercase text-stone/50 font-sans mb-4">Why it matters</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                area: "Safety",
                why: "Skilled jaywalking can be efficient, but creates real risk for pedestrians unfamiliar with NYC's traffic patterns and pace.",
              },
              {
                area: "Urban Equity",
                why: "Decriminalization reduces unfair penalties but raises new questions about who has access to the knowledge needed to navigate safely.",
              },
              {
                area: "Cultural Preservation",
                why: "Jaywalking isn't just a shortcut. It represents the city's adaptability and quick thinking, a form of urban identity.",
              },
            ].map(({ area, why }) => (
              <div
                key={area}
                className="rounded-2xl p-5"
                style={{ backgroundColor: `${ACCENT}0D`, border: `1px solid ${ACCENT}1A` }}
              >
                <p className="text-xs font-semibold text-ink mb-2">{area}</p>
                <p className="text-sm text-stone leading-relaxed">{why}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── HMW ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: ACCENT }}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase font-sans mb-3"
              style={{ color: `${ACCENT}B3` }}
            >
              Research Question
            </p>
            <p className="text-xl md:text-2xl font-sans font-medium text-ink leading-snug">
              How might we preserve the art of jaywalking in New York City while prioritizing pedestrian safety?
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Research Methods: 2-col text + contextual photo ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <SectionLabel label="Research Methods" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            I prioritized methods that observed behavior over asking about it.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-8">
            Self-reported accounts of street navigation differ significantly from what actually
            happens in real time. The research design reflected that.
          </p>

          <div className="w-full overflow-hidden rounded-2xl mb-10" style={{ aspectRatio: "2" }}>
            <img
              src={`${B}/midtown-crosswalk.jpg`}
              alt="Crowds crossing at a busy Midtown Manhattan intersection at dusk"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-8">
              {[
                {
                  num: "01",
                  method: "Field Observations",
                  description: "Conducted at two distinct NYC locations. I observed jaywalking behaviors and traffic dynamics without intervening, looking for naturalistic patterns: who hesitates, who leads, who never checks the signal.",
                },
                {
                  num: "02",
                  method: "Interviews",
                  description: "Five participants, a mix of long-term residents and recent arrivals. Locals often struggled to articulate their decision-making because it had become automatic. Newcomers could describe theirs in detail precisely because it hadn't.",
                },
                {
                  num: "03",
                  method: "Contextual Inquiries",
                  description: "I shadowed two individuals during their actual walks, one a longtime New Yorker, one a recent arrival. Watching someone decide whether to cross is a fundamentally different dataset than hearing them describe it afterward.",
                },
              ].map(({ num, method, description }) => (
                <div key={num} className="grid grid-cols-[32px_1fr] gap-3">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-sans mt-0.5"
                    style={{ color: `${ACCENT}80` }}
                  >
                    {num}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-1.5">{method}</p>
                    <p className="text-base text-stone leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Research Insights: large statement blocks ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <SectionLabel label="Research Insights" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-10">
            Three patterns emerged that reframed the design problem.
          </h2>

          <div className="divide-y divide-border">
            {[
              {
                num: "01",
                insight: "Awareness over compliance",
                body: "Experienced pedestrians don't follow signals. They read traffic. Jaywalking functions as a learned system of continuous environmental scanning. Most locals couldn't describe what they were doing because it had become automatic.",
                quote: "I cross when I'm not supposed to all the time. It's really the only way to get around the city without wasting time.",
                type: "Local",
              },
              {
                num: "02",
                insight: "Navigation by social proxy",
                body: "Newcomers compensate for unfamiliarity by following other pedestrians, outsourcing risk assessment in real time. This creates a dependency chain: the newcomer trusts the local, whose judgment may not be safe for someone without their contextual knowledge.",
                quote: "I'm new to NYC and find navigating confusing, so I usually just wait for someone else to cross and blindly cross with them. In hindsight, putting so much trust in them is probably not the safest idea.",
                type: "Newcomer",
              },
              {
                num: "03",
                insight: "Vigilance normalized as habit",
                body: "Both groups described themselves as comfortable navigating the city. Both also described elaborate routines built around managing discomfort: avoided blocks, preferred crowds, adjusted timing. The stress was there. It had just been reclassified as normal.",
                quote: "I didn't even realize jaywalking was illegal until it became legal. It's just a part of being in New York.",
                type: "Local",
              },
            ].map(({ num, insight, body, quote, type }) => (
              <div key={num} className="py-8">
                <p
                  className="text-[10px] tracking-[0.2em] uppercase font-sans mb-3"
                  style={{ color: `${ACCENT}80` }}
                >
                  {num}
                </p>
                <p className="text-xl md:text-2xl font-sans font-medium text-ink leading-snug mb-3">
                  {insight}
                </p>
                <p className="text-base text-stone leading-relaxed mb-5">{body}</p>
                <blockquote className="border-l-2 pl-5 py-1" style={{ borderColor: ACCENT }}>
                  <p className="text-base text-ink leading-relaxed italic mb-2">&ldquo;{quote}&rdquo;</p>
                  <p className="text-sm text-stone">{type}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Personas ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20">
        <AnimatedSection>
          <SectionLabel label="Personas" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-4">
            Two archetypes anchored the design direction.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-8">
            Delina represents the newcomer navigating by social proxy. James represents the
            native whose expertise is invisible to him. Both informed the design constraint:
            any solution had to work for one without disrupting the other.
          </p>
          <div className="flex flex-col gap-6">
            <ExpandableImage
              src={`${B}/persona-newcomer.png`}
              alt="Delina, 26, Graduate Student, New New Yorker persona"
              containerClassName="rounded-2xl overflow-hidden w-full"
            />
            <ExpandableImage
              src={`${B}/persona-local.png`}
              alt="James, 32, Actor, Native New Yorker persona"
              containerClassName="rounded-2xl overflow-hidden w-full"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Design Implications: red tinted cards ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <SectionLabel label="Design Implications" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-4">
            The New Pedestrian Integration System.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-10">
            Research surfaced one core opportunity: the street already works for people who have
            learned it. The problem is legibility for those who haven&apos;t. These three
            speculative concepts explore how to close that gap without disrupting the flow
            locals depend on.
          </p>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "New Pedestrian Holographic Badges",
                body: "Hovering holograms display a visible badge above pedestrians new to the city, similar to new-driver stickers, signaling to traffic and experienced walkers that someone may need more time.",
              },
              {
                num: "02",
                title: "Smart Crosswalks",
                body: "Badges sync with citywide sensors to extend crossing windows dynamically in areas with higher concentrations of new pedestrians.",
              },
              {
                num: "03",
                title: "Incentivized Mobile App",
                body: "An educational companion for navigating NYC streets. Completing safety modules earns real incentives like free subway rides or coffee, making it worth doing before you need it.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-2xl p-6"
                style={{ backgroundColor: `${ACCENT}0D`, border: `1px solid ${ACCENT}33` }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-sans pt-0.5 shrink-0"
                    style={{ color: `${ACCENT}99` }}
                  >
                    {num}
                  </span>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                </div>
                <p className="text-base text-stone leading-relaxed pl-8">{body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Reflections ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <Label>Shaping My Approach</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-6">
            The gap between what people say and what they do.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-5">
            The most significant methodological learning from this project was the gap between
            self-report and observed behavior. Participants consistently described themselves as
            comfortable navigating the city while simultaneously revealing complex avoidance
            strategies and stress responses embedded in their daily routines.
          </p>
          <p className="text-base text-stone leading-relaxed">
            Direct questioning is insufficient for uncovering stressors that have been
            normalized. Observation and shadowing surfaces what interviews cannot. If I were
            conducting this study again, I would weight contextual inquiry more heavily from
            the start.
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4 font-sans">{children}</p>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="border-t border-border pt-10 mb-6">
      <span className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans">{label}</span>
    </div>
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

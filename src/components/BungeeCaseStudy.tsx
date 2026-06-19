/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ExpandableImage from "./ExpandableImage";
import ExpandableVideo from "./ExpandableVideo";
import { projects } from "@/lib/projects";

const TEAL = "#3E9BAF";
const B = "/case-studies/bungee-accessibility";

export default function BungeeCaseStudy() {
  const published = projects.filter((p) => p.status === "published" && p.category !== "creative");
  const idx = published.findIndex((p) => p.slug === "bungee-accessibility");
  const next = published[(idx + 1) % published.length];

  return (
    <article className="pt-24 bg-white">

      {/* ── Back link ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-4 mb-10">
        <AnimatedSection>
          <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
            All Work
          </Link>
        </AnimatedSection>
      </div>

      {/* ── Title + meta ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">Cooper Hewitt, Smithsonian Design Museum</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
            Reimagining Digital Art Accessibility for Screen Reader Users, Through a Multisensory Experience
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-10">
            Cooper Hewitt&apos;s Bungee font tester redesigned for WCAG 2.2 compliance, then extended with AI-generated audio to translate its visual richness into sound.
          </p>
          <div className="border-t border-border mb-8" />
          <div className="grid grid-cols-2 md:flex md:gap-x-10 gap-y-5">
            <Meta label="Team" value="Team of 5" />
            <Meta label="What I did" value="Accessibility Design · Interaction Design · User Research" />
            <Meta label="Skills" value="WCAG 2.2 · Inclusive Design · Multi-Sensory Design · Generative AI · AI Integration" />
            <Meta label="Tools" value="Figma · Hume AI · FigJam" />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Cover ── */}
      <ExpandableImage
        src="/covers/bungee-cropped.gif"
        alt="Bungee font tester"
        containerClassName="w-full bg-[#3E9BAF] overflow-hidden mb-20"
        containerStyle={{ aspectRatio: "4.57" }}
        imgClassName="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Opening ── */}
      <div id="overview" className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
        <AnimatedSection>
          <Label>The Challenge</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            The Bungee font tester was built entirely around visual interaction.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-4">
            Bungee is a chromatic display typeface by David Jonathan Ross, inspired by vintage urban signage. It layers color into letterforms, stacks them, contrasts them. Cooper Hewitt&apos;s font tester puts all of that in your hands: adjust weight, orientation, contrast, layering, and watch it respond.{" "}
            <span className="font-medium text-ink px-1.5 py-0.5 rounded" style={{ backgroundColor: `${TEAL}30` }}>
              For visually impaired users, none of it was accessible.
            </span>
          </p>
        </AnimatedSection>
      </div>

      {/* ── Before image ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <ExpandableImage
            src={`${B}/desktop-hero.png`}
            alt="The original Bungee font tester — accordion menus, no keyboard navigation"
            containerClassName="rounded-2xl overflow-hidden"
          />
        </AnimatedSection>
      </div>

      {/* ── Challenge ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-xl font-sans text-stone leading-snug mb-5">
            So, how do people experience art, typography, and digital spaces when they can&apos;t rely on sight?
          </p>
          <p className="text-base text-stone leading-relaxed mb-4">
            The tester had no keyboard navigation, no ARIA labels, no logical tab order. Those were fixable.
          </p>
          <p className="text-base text-stone leading-relaxed">
            But even with those fixed, screen reader users would still only receive plain text. None of Bungee&apos;s layering, color, or personality would come through.
          </p>
        </AnimatedSection>
      </div>

      {/* ── HMW ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: TEAL }}>
            <p className="text-[10px] tracking-[0.2em] uppercase font-sans mb-3" style={{ color: TEAL }}>How might we</p>
            <p className="text-xl md:text-2xl font-sans font-medium text-ink leading-snug">
              Ensure that Bungee&apos;s weight, color, orientation, and layering remain just as meaningful for users who rely on screen readers as they are for users who can see them?
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Phase overview ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
        <AnimatedSection>
          <SectionLabel label="The Solution" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-8">
            The answer came in two parts: fix what was broken, then build something new.
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-7 border-t-2" style={{ borderColor: TEAL, backgroundColor: `${TEAL}12` }}>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: TEAL }}>Phase 01</p>
              <p className="text-base font-semibold text-ink mb-4">Practical Accessibility</p>
              <p className="text-sm text-stone leading-relaxed">Accordion menus replaced with always-visible controls. Full keyboard navigation, logical tab order, descriptive ARIA labels, and a guided tutorial to help users navigate a non-traditional interface. WCAG 2.2 compliant.</p>
            </div>
            <div className="rounded-2xl p-7 border-t-2" style={{ borderColor: TEAL, backgroundColor: `${TEAL}12` }}>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: TEAL }}>Phase 02</p>
              <p className="text-base font-semibold text-ink mb-4">Sonic Typography System</p>
              <p className="text-sm text-stone leading-relaxed">Five of Bungee&apos;s visual properties mapped to audio: contrast to voice depth, color to timbre, layering to echo and reverb, orientation to pacing, and background shapes to ambient sound. Bungee&apos;s visual personality, translated into sound.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Breaking It Down ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <SectionLabel label="Breaking It Down" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight">
            Phase 1 was about access. Phase 2 was about expression.
          </h2>
        </AnimatedSection>
      </div>

      {/* ── Phase 1 paired ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-ink font-sans mb-8 tracking-wide">Phase 1 — Practical Accessibility</p>
          <div className="flex flex-col gap-6">

            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="border border-border rounded-2xl p-6">
                <p className="text-sm font-medium text-ink mb-2">Visible interface</p>
                <p className="text-xs text-stone leading-relaxed">Accordion layouts replaced with always-on controls for easier screen reader navigation.</p>
              </div>
              <ExpandableImage src={`${B}/part1-before-after.png`} alt="Before and after: original vs redesigned interface" containerClassName="rounded-2xl overflow-hidden" />
            </div>

            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="border border-border rounded-2xl p-6">
                <p className="text-sm font-medium text-ink mb-2">Guided tutorial</p>
                <p className="text-xs text-stone leading-relaxed">Optional onboarding helping users understand the non-traditional interface and navigate confidently.</p>
              </div>
              <ExpandableImage src={`${B}/part1-tutorial.png`} alt="Redesigned interface with onboarding tutorial panel" containerClassName="rounded-2xl overflow-hidden" />
            </div>

            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="border border-border rounded-2xl p-6">
                <p className="text-sm font-medium text-ink mb-2">Keyboard navigation</p>
                <p className="text-xs text-stone leading-relaxed">All controls made fully keyboard-focusable with a logical tab order throughout the tester.</p>
              </div>
              <ExpandableImage src={`${B}/lanting-unfolded.png`} alt="Numbered keyboard tab order across the redesigned interface" containerClassName="rounded-2xl overflow-hidden" />
            </div>

            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="border border-border rounded-2xl p-6">
                <p className="text-sm font-medium text-ink mb-2">ARIA labelling</p>
                <p className="text-xs text-stone leading-relaxed">Descriptive text labels on colour swatches and controls with proper ARIA attributes for screen reader announcement.</p>
              </div>
              <ExpandableImage src={`${B}/lanting-color-picker.png`} alt="Accessible color picker with labelled swatches" containerClassName="rounded-2xl overflow-hidden" />
            </div>

          </div>
        </AnimatedSection>
      </div>

      {/* ── Phase 1 demo video ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-6 mt-16">
        <AnimatedSection>
          <p className="text-base font-medium text-ink mb-2">A closer look at the guided tutorial.</p>
          <p className="text-sm text-stone leading-relaxed mb-4">Because the tester uses a non-standard layout, we added an optional onboarding flow. It walks users through each control in sequence before they start, so nothing feels unfamiliar when a screen reader announces it.</p>
          <ExpandableVideo
            src={`${B}/lanting-demo2.mp4`}
            containerClassName="rounded-2xl overflow-hidden"
          />
        </AnimatedSection>
      </div>

      {/* ── Phase 2: Sonic Typography ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12 mt-20">
        <AnimatedSection>
          <p className="text-xs font-semibold text-ink font-sans mb-2 tracking-wide">Phase 2 — Sonic Typography System</p>
          <p className="text-sm text-stone leading-relaxed mb-6">
            Typographic sonification translates letterforms and typographic properties into sound. For Bungee, we mapped five visual properties to audio equivalents, letting the typeface&apos;s character come through even when it can&apos;t be seen.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="grid grid-cols-[1fr_32px_1fr] px-6 py-3 border-b border-border" style={{ backgroundColor: `${TEAL}12` }}>
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone">Visual property</p>
              <span />
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone">Audio equivalent</p>
            </div>
            {[
              {
                visual: "Internal Contrast",
                audio: "Voice Depth",
                desc: "Greater contrast produces deeper, more resonant voices. Lighter contrast creates higher, airier tones.",
              },
              {
                visual: "Overall Contrast",
                audio: "Timbre",
                desc: "Colour schemes map to voice qualities with similar emotional weight. Bright colours become energetic voices. Muted tones become softer ones.",
              },
              {
                visual: "Layering",
                audio: "Audio Effects",
                desc: "Inline styling adds slight echo. Outline adds reverb depth. Shade adds a chorus effect that gives the sound more body.",
              },
              {
                visual: "Orientation",
                audio: "Pacing",
                desc: "Vertical text becomes a distinct rhythmic pattern with deliberate pauses between letters, distinguishing it clearly from horizontal flow.",
              },
              {
                visual: "Background Shapes",
                audio: "Ambient Sound",
                desc: "Banner shapes produce continuous ambient tones. Block shapes create punctuated textures. Ornamental elements add subtle audio accents.",
              },
            ].map(({ visual, audio, desc }, i, arr) => (
              <div key={visual} className={`px-6 py-5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                <div className="grid grid-cols-[1fr_32px_1fr] items-center mb-2">
                  <p className="text-sm font-medium text-ink">{visual}</p>
                  <p className="text-base font-light text-center" style={{ color: TEAL }}>→</p>
                  <p className="text-sm font-semibold text-ink">{audio}</p>
                </div>
                <p className="text-xs text-stone leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Prototype ── */}
      <div className="py-28 mt-20 mb-20" style={{ backgroundColor: `${TEAL}4D` }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.2em] uppercase font-sans mb-4 text-ink/50">The Final Prototype</p>
            <h2 className="text-2xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-3">
              Everything working together. The tester you can see, navigate, and hear.
            </h2>
            <p className="text-sm text-stone/70 font-sans">psst — turn sound on.</p>
          </AnimatedSection>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <ExpandableVideo
              src={`${B}/lanting-demo1.mp4`}
              containerClassName="rounded-2xl overflow-hidden shadow-md"
              showSoundToggle
              soundHint="psst — turn sound on"
            />
          </AnimatedSection>
        </div>
      </div>

      {/* ── Reflections ── */}
      <div id="reflections" className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <SectionLabel label="Shaping My Approach" noBorder />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-6">
            Accessibility, to me, has shifted from a requirement to a design opportunity.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-4">
            Designing for Bungee reminded me that accessibility is ultimately about creating equal access to expression. The challenge was not only to simplify navigation but also to capture the font&apos;s playful personality through sound. This balance showed me how multi-sensory design can open new ways of experiencing art and design, making it meaningful to a broader audience.
          </p>
          <p className="text-base text-stone leading-relaxed">
            The project also highlighted how small design choices like a clearer interface, a guided tutorial, or thoughtful feedback can remove barriers for users who often get overlooked. Moving forward, I want to continue exploring how modalities like sound, touch, and motion can become integral to interaction design, and not just substitutes for vision. Accessibility has become a way to expand creativity by imagining experiences that everyone can take part in.
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

function SectionLabel({ label, noBorder }: { label: string; noBorder?: boolean }) {
  return (
    <div className={`${noBorder ? "mb-6" : "border-t border-border pt-10 mb-6"}`}>
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

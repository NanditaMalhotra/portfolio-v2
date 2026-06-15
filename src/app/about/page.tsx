/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — Nandita Malhotra",
  description:
    "Product designer with an MS from Pratt Institute and a BFA from UT Austin.",
};

const disciplines = [
  "Product Design",
  "Design Strategy",
  "UX Research",
  "User Journey Mapping",
  "Usability Testing",
  "Information Architecture",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
  "Inclusive Design",
  "Conversational UX",
  "AI Product Design",
  "Service Design",
  "Content Design",
  "Visual Design",
  "Motion Design",
  "Cross-functional Collaboration",
  "Data-informed Design",
  "Creative Direction",
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Heading ── */}
        <AnimatedSection>
          <h1 className="font-sans font-light text-3xl md:text-4xl text-ink leading-snug max-w-5xl pt-8 pb-10">
            I&apos;m Nandita, a product designer exploring how emerging technologies shape the systems we interact with.
          </h1>
        </AnimatedSection>

        {/* ── Video ── */}
        <AnimatedSection>
          <div className="w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/2" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full object-cover"
            >
              <source src="/about/reel.mp4" type="video/mp4" />
            </video>
          </div>
        </AnimatedSection>

        {/* ── Bio ── */}
        <AnimatedSection>
          <div className="max-w-3xl pt-10 pb-20">
            <div className="flex flex-col gap-4 text-base text-stone leading-relaxed">
              <p>
                I love asking questions as much as making things. With experience in UX,
                visual design, and research, I work across strategy and storytelling to craft
                digital experiences that are intentional, inclusive, and emotionally resonant.
              </p>
              <p>
                As AI reshapes the tools we use, I&apos;m thinking deeply about where designers
                add the most value, in how we define problems, set direction, and build systems
                that reflect human complexity.
              </p>
              <p>
                I love all things fashion and food. In my free time I write about anything and everything.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Disciplines ── */}
        <AnimatedSection>
          <div className="border-t border-border pt-14 pb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-8 font-sans">
              Disciplines
            </p>
            <div className="flex flex-wrap gap-2.5">
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="text-sm text-stone bg-parchment border border-border px-4 py-2 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── A Little More of Me ── */}
        <AnimatedSection>
          <div className="border-t border-border pt-14 pb-20">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-2 font-sans">
              A Little More of Me
            </p>
            <p className="text-sm text-stone/60 mb-10">
              Pieces of what I love, what I&apos;ve done, where I&apos;ve been and what I&apos;ve seen.
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {["photo-2", "photo-3", "photo-4", "photo-5", "photo-6", "photo-7"].map((p) => (
                <div key={p} className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img src={`/about/${p}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Contact ── */}
        <AnimatedSection>
          <div className="border-t border-border pt-14 pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4 font-sans">
              Get in Touch
            </p>
            <h2 className="font-sans font-light text-3xl md:text-4xl text-ink leading-snug mb-6">
              Open to new opportunities.
            </h2>
            <a
              href="mailto:nandita.anna@gmail.com"
              className="text-lg text-ink hover:text-accent transition-colors underline underline-offset-4"
            >
              nandita.anna@gmail.com
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

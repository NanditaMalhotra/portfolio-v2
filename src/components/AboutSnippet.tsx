import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function AboutSnippet() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <AnimatedSection>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4 font-sans">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Designer, researcher,{" "}
            <em>storyteller.</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-base text-stone leading-relaxed mb-6">
            I love asking questions as much as making things. With a background
            spanning UX, visual design, and research, I work across strategy and
            craft to build digital experiences that are intentional, inclusive,
            and emotionally resonant.
          </p>
          <p className="text-base text-stone leading-relaxed mb-8">
            As AI reshapes the tools we use, I&apos;m thinking deeply about
            where designers add the most value, in how we define problems, set
            direction, and build systems that reflect human complexity.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors"
          >
            More about me
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

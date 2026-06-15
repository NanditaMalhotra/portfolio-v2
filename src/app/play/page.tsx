/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Play — Nandita Malhotra",
  description: "Creative experiments, editorial design, and visual explorations.",
};

export default function PlayPage() {
  // Exclude hookd-magazine — it has its own full case study
  const playProjects = projects.filter(
    (p) => p.category === "creative" && p.status === "published" && p.slug !== "hookd-magazine"
  );

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-24">

        {/* Header */}
        <AnimatedSection>
          <h1 className="font-sans font-light text-3xl md:text-4xl text-ink leading-snug max-w-xl mb-14">
            A collection of visual design and creative experiments.
          </h1>
        </AnimatedSection>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {playProjects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "3/2" }}>
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      style={{ backgroundColor: project.coverColor }}
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: project.coverColor }} />
                  )}
                  {/* Hover overlay — desktop only */}
                  <div className="hidden md:flex absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex-col justify-end p-5">
                    <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-white/60 font-sans mb-1">
                        {project.tags[0]}
                      </p>
                      <h2 className="font-sans font-medium text-xl text-white leading-snug">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Always-visible text — mobile/tablet only */}
                <div className="md:hidden pt-3">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-stone/60 font-sans mb-1">
                    {project.tags[0]}
                  </p>
                  <h2 className="font-sans font-medium text-base text-ink leading-snug">
                    {project.title}
                  </h2>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  );
}

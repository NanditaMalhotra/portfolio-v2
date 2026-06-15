import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import AnimatedSection from "./AnimatedSection";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject?: Project;
}

export default function CaseStudyLayout({
  project,
  nextProject,
}: CaseStudyLayoutProps) {
  return (
    <article className="pt-24">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <AnimatedSection>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            All Work
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Title + description */}
          <div className="md:col-span-2">
            <AnimatedSection delay={0.05}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-stone mb-3 font-sans">
                {project.client}
              </p>
              <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-stone leading-relaxed">
                {project.shortDescription}
              </p>
            </AnimatedSection>
          </div>

          {/* Metadata sidebar */}
          <AnimatedSection delay={0.1}>
            <aside className="flex flex-col gap-5 text-sm">
              <MetaItem label="Role" value={project.role} />
              <MetaItem label="Team" value={project.team} />
              <MetaItem label="Duration" value={project.duration} />
              <MetaItem label="Year" value={project.year} />
              {project.tools.length > 0 && (
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 mb-1.5">
                    Tools
                  </p>
                  <p className="text-ink">{project.tools.join(", ")}</p>
                </div>
              )}
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 mb-1.5">
                  Disciplines
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-stone bg-parchment px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </div>

      {/* Cover image */}
      <AnimatedSection>
        <div
          className="w-full h-72 md:h-[480px]"
          style={{ backgroundColor: project.coverColor }}
        />
      </AnimatedSection>

      {/* Case study body */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-20">
        {project.overview && (
          <AnimatedSection>
            <Section heading="Overview" body={project.overview} />
          </AnimatedSection>
        )}

        {project.challenge && (
          <AnimatedSection delay={0.05}>
            <Section heading="The Challenge" body={project.challenge} />
          </AnimatedSection>
        )}

        {project.centralQuestion && (
          <AnimatedSection delay={0.05}>
            <div className="my-14 py-10 border-t border-b border-border">
              <p className="text-[10px] tracking-[0.18em] uppercase text-stone mb-4">
                Central Question
              </p>
              <blockquote className="font-sans font-medium text-xl md:text-2xl text-ink leading-snug">
                &ldquo;{project.centralQuestion}&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        )}

        {project.sections?.map((section, i) => (
          <AnimatedSection key={i} delay={0.05}>
            <div className="mb-14">
              <h2 className="font-sans font-semibold text-2xl text-ink mb-4">
                {section.heading}
              </h2>
              <p className="text-base text-stone leading-relaxed mb-4">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="flex flex-col gap-3 mt-4">
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-base text-stone">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
        ))}

        {project.outcomes && (
          <AnimatedSection>
            <Section heading="Outcomes" body={project.outcomes} />
          </AnimatedSection>
        )}

        {project.lessons && (
          <AnimatedSection delay={0.05}>
            <Section heading="Reflections" body={project.lessons} />
          </AnimatedSection>
        )}
      </div>

      {/* Next project */}
      {nextProject && (
        <div className="border-t border-border">
          <Link href={`/work/${nextProject.slug}`} className="group max-w-6xl mx-auto px-6 md:px-10 py-12 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-stone/50 mb-1 font-sans">Next</p>
              <p className="text-lg font-sans font-medium text-ink group-hover:text-accent transition-colors">{nextProject.title}</p>
            </div>
            <ArrowLeft size={20} strokeWidth={1.5} className="rotate-180 text-stone group-hover:text-accent transition-colors shrink-0" />
          </Link>
        </div>
      )}
    </article>
  );
}

function Section({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="mb-14">
      <h2 className="font-display text-2xl text-ink mb-4">{heading}</h2>
      <p className="text-base text-stone leading-relaxed">{body}</p>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 mb-1">
        {label}
      </p>
      <p className="text-ink">{value}</p>
    </div>
  );
}

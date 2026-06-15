/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/lib/projects";
import AnimatedSection from "./AnimatedSection";

interface Props {
  project: Project;
  nextProject?: Project;
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1 font-sans">{label}</p>
      <p className="text-ink text-sm">{value}</p>
    </div>
  );
}

export default function VisualProjectLayout({ project, nextProject }: Props) {
  const images = project.gallery ?? (project.coverImage ? [project.coverImage] : []);

  // Build column chunks for the original-layout mode
  const columns: string[][] = [];
  if (project.galleryColumns && images.length > 0) {
    let idx = 0;
    for (const count of project.galleryColumns) {
      columns.push(images.slice(idx, idx + count));
      idx += count;
    }
  }

  return (
    <article className="pt-16">

      {/* ── Back link + header ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-12">
        <AnimatedSection>
          <Link
            href="/play"
            className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Play
          </Link>

          {/* Title block */}
          <div className="max-w-3xl">
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
              {project.title}
            </h1>
            <p className="text-lg text-stone leading-relaxed mb-10">
              {project.shortDescription}
            </p>
            <div className="border-t border-border mb-8" />
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <Meta label="Type" value={project.tags[0]} />
              <Meta label="Team" value={project.team} />
              <Meta label="Tools" value={project.tools.join(" · ")} />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {project.galleryColumns ? (
        <>
          {/* ── Columnar gallery — matches original page layout ── */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
            <div className="flex gap-2 items-start">
              {columns.map((col, ci) => (
                <div key={ci} className="flex-1 flex flex-col gap-2">
                  {col.map((src, j) => (
                    <AnimatedSection key={src} delay={(ci * 0.04) + (j * 0.05)}>
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={src}
                          alt={`${project.title} — ${j + 1}`}
                          className="w-full block"
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* ── Hero — first image, full-width ── */}
          {images[0] && (
            <AnimatedSection>
              <div className="max-w-6xl mx-auto px-6 md:px-10 mb-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={images[0]}
                    alt={project.title}
                    className="w-full block"
                  />
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ── Gallery — 2-column grid ── */}
          {images.length > 1 && (
            <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.slice(1).map((src, i) => (
                  <AnimatedSection key={src} delay={i * 0.07}>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={src}
                        alt={`${project.title} — ${i + 2}`}
                        className="w-full block"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Next project ── */}
      {nextProject && (
        <div className="border-t border-border">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group max-w-6xl mx-auto px-6 md:px-10 py-12 flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-stone/50 mb-1 font-sans">
                Next
              </p>
              <p className="text-lg font-sans font-medium text-ink group-hover:text-accent transition-colors">
                {nextProject.title}
              </p>
            </div>
            <ArrowLeft
              size={20}
              strokeWidth={1.5}
              className="rotate-180 text-stone group-hover:text-accent transition-colors shrink-0"
            />
          </Link>
        </div>
      )}

    </article>
  );
}

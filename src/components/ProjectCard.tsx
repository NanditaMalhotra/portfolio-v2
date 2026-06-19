"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function AutoplayVideo({ src, objectPosition }: { src: string; objectPosition?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    const onVisible = () => {
      if (!document.hidden) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  const content = (
    <div className="bg-white border border-border rounded-3xl p-3 flex flex-col gap-3">
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden rounded-2xl w-full aspect-[1157/702]"
        style={{ backgroundColor: project.coverColor }}
      >
        {project.coverVideo && !isComingSoon && (
          <AutoplayVideo src={project.coverVideo} objectPosition={project.coverVideoPosition} />
        )}
        {project.coverImage && !project.coverVideo && !isComingSoon && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className={project.coverFit === "cover" ? "object-cover" : "object-contain"}
            style={{
              ...(project.coverImagePosition ? { objectPosition: project.coverImagePosition } : {}),
              ...(project.coverImageScale ? { transform: `scale(${project.coverImageScale})`, transformOrigin: "top center" } : {}),
            }}
            sizes="(min-width: 1024px) 400px, 100vw"
            unoptimized={project.coverImage.endsWith(".gif")}
          />
        )}

        {isComingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/40">
            <span className="text-ink/40 text-[11px] tracking-[0.2em] uppercase font-sans border border-ink/15 px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/[0.04] transition-colors duration-300" />
            <div className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 shadow-sm">
              <ArrowUpRight size={15} className="text-ink" strokeWidth={1.5} />
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="px-1 pb-1">
        <h3
          className={`font-sans font-semibold text-lg md:text-xl leading-snug mb-1.5 transition-colors duration-200 ${
            isComingSoon ? "text-ink/40" : "text-ink group-hover/card:text-accent"
          }`}
        >
          {project.title}
        </h3>
        {!isComingSoon && (
          <p className="text-[13px] text-stone leading-snug mb-3 font-sans">
            {project.shortDescription}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-ink bg-[#EFEFEF] px-2.5 py-[5px] rounded-full font-sans"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isComingSoon) {
    return (
      <div className={`group/card ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group/card ${className}`}
    >
      {content}
    </Link>
  );
}

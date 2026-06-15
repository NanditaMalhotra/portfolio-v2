import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
  const visible = projects.filter((p) => p.category !== "creative");

  return (
    <section id="work" className="pb-4">
      <div className="flex flex-col gap-10">
        {visible.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

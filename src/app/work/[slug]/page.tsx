import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/projects";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import VisualProjectLayout from "@/components/VisualProjectLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nandita Malhotra`,
    description: project.shortDescription,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.status === "coming-soon") {
    notFound();
  }

  const isCreative = project.category === "creative";
  const pool = projects.filter(
    (p) => p.status === "published" && (isCreative ? p.category === "creative" : p.category !== "creative")
  );
  const currentIndex = pool.findIndex((p) => p.slug === slug);
  const nextProject = pool[(currentIndex + 1) % pool.length];
  const next = nextProject?.slug !== slug ? nextProject : undefined;

  if (isCreative) {
    return <VisualProjectLayout project={project} nextProject={next} />;
  }

  return <CaseStudyLayout project={project} nextProject={next} />;
}

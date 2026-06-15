import type { Metadata } from "next";
import LumityCaseStudy from "@/components/LumityCaseStudy";

export const metadata: Metadata = {
  title: "Redesigning a Social Learning Platform, End-to-End — Nandita Malhotra",
  description:
    "From generative research and restructured IA to a scalable design system and validated high-fidelity prototype.",
};

export default function LumityPage() {
  return <LumityCaseStudy />;
}

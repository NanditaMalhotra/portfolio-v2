import type { Metadata } from "next";
import BungeeCaseStudy from "@/components/BungeeCaseStudy";

export const metadata: Metadata = {
  title: "Type You Can Hear — Nandita Malhotra",
  description:
    "Redesigned Cooper Hewitt's Bungee font tester for WCAG 2.2 compliance, translating visual typographic expression into a meaningful screen reader experience.",
};

export default function BungeePage() {
  return <BungeeCaseStudy />;
}

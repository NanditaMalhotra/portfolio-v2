import type { Metadata } from "next";
import TendCaseStudy from "@/components/TendCaseStudy";

export const metadata: Metadata = {
  title: "Tend Journal — Nandita Malhotra",
  description:
    "A narrative about designing and shipping a journaling PWA through conversation with AI — the process, the friction, the breakthroughs.",
};

export default function TendPage() {
  return <TendCaseStudy />;
}

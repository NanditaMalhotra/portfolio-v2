import type { Metadata } from "next";
import AskTheOrdinaryCaseStudy from "@/components/AskTheOrdinaryCaseStudy";

export const metadata: Metadata = {
  title: "Conversational AI Design for The Ordinary — Nandita Malhotra",
  description:
    "Bot personality, dialogue architecture, and personalized recommendation flows for The Ordinary's AI-powered chatbot.",
};

export default function AskTheOrdinaryPage() {
  return <AskTheOrdinaryCaseStudy />;
}

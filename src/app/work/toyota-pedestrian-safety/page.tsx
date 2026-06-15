import type { Metadata } from "next";
import ToyotaCaseStudy from "@/components/ToyotaCaseStudy";

export const metadata: Metadata = {
  title: "Ethnographic Research for Toyota's Smart City Initiative — Nandita Malhotra",
  description:
    "Field research studying pedestrian behavior in NYC to challenge assumptions in urban safety system design.",
};

export default function ToyotaPage() {
  return <ToyotaCaseStudy />;
}

/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MusicCard from "@/components/MusicCard";
import BookCard from "@/components/BookCard";
import ToolsCard from "@/components/ToolsCard";
import WearingCard from "@/components/WearingCard";
import AboutReel from "@/components/AboutReel";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "About — Nandita Malhotra",
  description:
    "Product designer with an MS from Pratt Institute and a BFA from UT Austin.",
};


export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Bento Grid ── */}
        <AnimatedSection>
          <div className="border-t border-border pt-14 pb-14">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

              {/* ── Row 0: Video (full width) ── */}
              <div className="col-span-2 md:col-span-3 md:bg-white md:border md:border-border md:rounded-2xl md:p-5">
                <div className="w-full overflow-hidden rounded-xl" style={{ aspectRatio: "4/2" }}>
                  <AboutReel />
                </div>
              </div>

              {/* ── Row 1: Bio (2col) + Places (1col) ── */}
              <div className="col-span-2 bg-white border border-border rounded-2xl p-5 flex flex-col justify-center gap-4">
                <h1 className="font-sans font-light text-xl md:text-2xl text-ink leading-snug">I&apos;m Nandita, a product designer exploring how emerging technologies shape the systems we interact with.</h1>
                <div className="flex flex-col gap-3 text-sm text-stone leading-relaxed">
                  <p>I love asking questions as much as making things. With experience in UX, visual design, and research, I work across strategy and storytelling to craft digital experiences that are intentional, inclusive, and emotionally resonant.</p>
                  <p>As AI reshapes the tools we use, I&apos;m thinking deeply about where designers add the most value, in how we define problems, set direction, and build systems that reflect human complexity.</p>
                  <p>I love all things fashion and food. In my free time I write about anything and everything.</p>
                </div>
              </div>

              <ExperienceCard />

              {/* ── Row 2: Wearing (col1, row-span-2) | Music (col2-3) ── */}
              <WearingCard />

              <MusicCard />

              {/* ── Row 3: Reading (col2) + Tools (col3) ── */}
              <BookCard />

              <ToolsCard />

            </div>
          </div>
        </AnimatedSection>


      </div>
    </div>
  );
}

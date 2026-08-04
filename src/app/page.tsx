/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ExperimentsCard from "@/components/ExperimentsCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-16">

      {/* ── Mobile layout ── */}
      <div className="lg:hidden">

        {/* Compact bio */}
        <div className="pt-36 pb-8 border-b border-border mb-8">
          <h1 className="font-display text-4xl leading-tight text-ink mb-1">
            Nandita Malhotra
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone/50 font-sans mb-5">
            Product Designer · New York
          </p>
          <p className="text-[14px] text-stone leading-relaxed mb-6">
            I design digital experiences at the intersection of UX and emerging technology. I specialize in what it means to practice design as AI reshapes the industry from the inside out.
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
            Worked With
          </p>
          <div className="flex items-center gap-5 flex-wrap mb-6">
            <img src="/logos/toyota.svg" alt="Toyota" className="h-4 w-auto" />
            <img src="/logos/cooper-hewitt.svg" alt="Cooper Hewitt" className="h-4 w-auto" />
            <img src="/logos/hucapital.svg" alt="HuCapital" className="h-4 w-auto" />
            <img src="/logos/dxcenter.png" alt="DxCenter" className="h-4 w-auto" />
            <img src="/logos/rita.png" alt="Rita" className="h-4 w-auto" />
          </div>
          <p className="text-[9px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
            Education
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 shrink-0 flex items-center">
                <img src="/logos/pratt-badge.png" alt="Pratt Institute" className="h-8 w-8 rounded-md" />
              </div>
              <div>
                <p className="text-[12px] text-ink font-medium">Pratt Institute</p>
                <p className="text-[12px] text-stone">MS, Information Experience Design</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 shrink-0 flex items-center">
                <img src="/logos/ut-austin-badge.jpg" alt="UT Austin" className="h-8 w-8 rounded-md" />
              </div>
              <div>
                <p className="text-[12px] text-ink font-medium">The University of Texas at Austin</p>
                <p className="text-[12px] text-stone">BFA, Design and Visual Communication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <ProjectGrid />

        {/* Experiments & Writing */}
        <div className="mt-10 pb-16">
          <ExperimentsCard />
        </div>

      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:grid grid-cols-[2fr_3fr] gap-16">

        {/* Bio — sticky sidebar */}
        <div className="pt-28">
          <div className="sticky top-28 pb-10 pr-4">
            <Hero />
          </div>
        </div>

        {/* Projects — scrolls with the page */}
        <div className="pt-28 pb-24">
          <ProjectGrid />
        </div>

      </div>

    </div>
  );
}

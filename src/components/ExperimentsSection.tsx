import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiments = [
  {
    type: "Live App",
    title: "Tend",
    description:
      "A daily journal where your writing becomes something living. Every entry grows a digital plant.",
    href: "https://tend-journal.netlify.app/",
  },
  {
    type: "Writing",
    title: "Have We Named This Feeling Yet?",
    description:
      "If you've ever asked AI to describe you based on everything it \"knows\" about you, this is for you.",
    href: "https://nanditamalhotra.substack.com/p/have-we-named-this-feeling-yet",
  },
  {
    type: "Tool",
    title: "Which UX Role Is Right For You?",
    description:
      "A career assessment that maps your design instincts and working style to the UX path where you will thrive.",
    href: "https://nanditamalhotra.github.io/ux-career-assessment/",
  },
];

export default function ExperimentsSection() {
  return (
    <section className="mt-16 pt-10 border-t border-border">
      <AnimatedSection>
        <p className="text-[10px] tracking-[0.22em] uppercase text-stone mb-8 font-sans">
          Experiments & Writings
        </p>
      </AnimatedSection>
      <div className="flex flex-col gap-7">
        {experiments.map((item, i) => (
          <AnimatedSection key={item.href} delay={i * 0.07}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 font-sans mb-1">
                {item.type}
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-stone leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="text-stone/50 group-hover:text-accent transition-colors shrink-0 mt-0.5"
                />
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

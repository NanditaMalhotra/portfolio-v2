"use client";

import { ArrowUpRight } from "lucide-react";

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
      "Exploring neo-emotions and the feelings that emerge at the edge of technology and human experience.",
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

export default function ExperimentsCard() {
  return (
    <div className="border border-border rounded-2xl p-4">
      <p className="text-[9px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
        Experiments &amp; Writing
      </p>
      <div className="flex flex-col gap-3">
        {experiments.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="text-[10px] tracking-[0.14em] uppercase text-stone/50 font-sans mb-0.5">
              {item.type}
            </p>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </p>
                <p className="text-[12px] text-stone leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="text-stone/40 group-hover:text-accent transition-colors shrink-0 mt-0.5"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

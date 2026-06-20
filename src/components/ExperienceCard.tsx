"use client";
import { useEffect, useRef, useState } from "react";

const entries = [
  { company: "Hu Capital", title: "Product Designer", year: "2026 – Present" },
  { company: "The Amplification Project", title: "Product Designer", year: "2026 – Present" },
  { company: "Sewa International", title: "UX Writer & Content Designer", year: "2025 – 2026" },
  {
    company: "Center for Digital Experiences, Pratt",
    title: "UX Consultant",
    year: "2023 – 2025",
    clients: ["Cooper Hewitt, Smithsonian", "Toyota Motor", "Lumity", "Afro Brazil Arts"],
  },
  { company: "Hook'd Magazine", title: "Creative Director", year: "2020 – 2022" },
];

export default function ExperienceCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);

  const TRACK_H = 220;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const ratio = clientHeight / scrollHeight;
      setThumbHeight(Math.max(ratio * TRACK_H, 28));
      setThumbTop((scrollTop / (scrollHeight - clientHeight)) * (TRACK_H - Math.max(ratio * TRACK_H, 28)));
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="col-span-2 md:col-span-1 bg-white border border-border rounded-2xl p-5 flex flex-col gap-3">
      <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans">Experience</p>
      <div className="flex gap-2">
        <style>{`[data-exp-scroll]::-webkit-scrollbar { display: none; }`}</style>
        <div
          ref={scrollRef}
          data-exp-scroll
          className="flex-1 flex flex-col gap-4 overflow-y-scroll"
          style={{ maxHeight: `${TRACK_H}px`, scrollbarWidth: "none" }}
        >
          {entries.map(({ company, title, year, clients }) => (
            <div key={company} className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-ink leading-snug">{company}</p>
              <p className="text-[11px] text-stone font-sans">{title}</p>
              <p className="text-[10px] text-stone/50 font-sans tracking-wide">{year}</p>
              {clients && (
                <ul className="mt-1 flex flex-col gap-0.5 pl-3">
                  {clients.map((c) => (
                    <li key={c} className="text-[11px] text-stone font-sans list-disc">{c}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Custom scrollbar track */}
        <div className="relative shrink-0 w-1 rounded-full bg-stone/10" style={{ height: `${TRACK_H}px` }}>
          <div
            className="absolute w-full rounded-full bg-stone/40 transition-[top] duration-75"
            style={{ top: thumbTop, height: thumbHeight }}
          />
        </div>
      </div>
    </div>
  );
}

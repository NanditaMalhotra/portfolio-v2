"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  {
    name: "Sublime",
    href: "https://sublime.app",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7d/ca/d1/7dcad158-8527-e7de-7478-5df32a405964/AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100bb.jpg" alt="Sublime" className="w-14 h-14 rounded-xl object-cover" />,
    note: "A quiet place to save and connect ideas over time. My go-to for research that actually sticks.",
  },
  {
    name: "Gizmo",
    href: "https://apps.apple.com/us/app/gizmo-make-gizmos/id6740640581",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/aa/4a/97/aa4a9738-e794-ae44-e5be-919f2256e408/AppIcon-0-0-1x_U007ephone-0-1-0-P3-85-220.png/100x100bb.jpg" alt="Gizmo" className="w-14 h-14 rounded-xl object-cover" />,
    note: "A canvas for building small interactive things without code. Fun to play with, easy to share.",
  },
  {
    name: "Alta",
    href: "https://www.altadaily.com",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0b/dd/82/0bdd820a-d3e9-e8a8-7b56-1dd5710869ad/AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100bb.jpg" alt="Alta" className="w-14 h-14 rounded-xl object-cover" />,
    note: "A digital closet with AI styling. I photograph my clothes and it handles the rest.",
  },
  {
    name: "Are.na",
    href: "https://www.are.na",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c6/7a/40/c67a40d0-0336-bebd-288e-cc775b970e8a/AppIcon-0-0-1x_U007epad-0-1-0-P3-85-220.png/100x100bb.jpg" alt="Are.na" className="w-14 h-14 rounded-xl object-cover" />,
    note: "A slow, ad-free space for collecting and connecting ideas. My favorite way to research and think visually.",
  },
  {
    name: "Rodeo",
    href: "https://apps.apple.com/us/app/rodeo-save-it-do-it/id6753013160",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/af/2b/66/af2b66fd-db64-740f-96dc-b8004790b51a/RodeoAppIcon-0-0-1x_U007ephone-0-1-0-sRGB-85-220.png/100x100bb.jpg" alt="Rodeo" className="w-14 h-14 rounded-xl object-cover" />,
    note: "Turns saved posts and group chat plans into something you actually do. Built by former Hinge execs.",
  },
  {
    name: "Beli",
    href: "https://apps.apple.com/us/app/beli/id1478375386",
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b5/13/6a/b5136a80-6535-71d0-8fcc-fa5b7cbb3459/AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100bb.jpg" alt="Beli" className="w-14 h-14 rounded-xl object-cover" />,
    note: "Rank and track restaurants you ate at. Better than a saved folder you never check.",
  },
];

const INTERVAL = 4000;

export default function ToolsCard() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () => setIndex((i) => (i + 1) % tools.length);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleNext = () => { advance(); resetTimer(); };
  const handlePrev = () => {
    setIndex((i) => (i - 1 + tools.length) % tools.length);
    resetTimer();
  };

  const tool = tools[index];

  return (
    <div className="bg-white border border-border rounded-2xl p-5 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between">
        <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans">Apps &amp; Tools on My Radar</p>
        <div className="flex items-center gap-1">
          <button onClick={handlePrev} aria-label="Previous tool" className="w-6 h-6 rounded-full border border-ink flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group/btn">
            <ChevronLeft size={11} className="text-ink group-hover/btn:text-white" strokeWidth={2} />
          </button>
          <button onClick={handleNext} aria-label="Next tool" className="w-6 h-6 rounded-full border border-ink flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group/btn">
            <ChevronRight size={11} className="text-ink group-hover/btn:text-white" strokeWidth={2} />
          </button>
        </div>
      </div>

      <a href={tool.href} target="_blank" rel="noopener noreferrer" className="group block mt-3">
        <div className="mb-3">{tool.icon}</div>
        <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">{tool.name}</p>
        <p className="text-xs text-stone leading-relaxed mt-1">{tool.note}</p>
      </a>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const outfits = [
  { src: "/about/outfit-1.jpg", position: "top" },
  { src: "/about/outfit-5.jpg", position: "top" },
  { src: "/about/outfit-2.jpg", position: "center 35%" },
  { src: "/about/outfit-6.jpg", position: "center 75%" },
];

const INTERVAL = 4000;

export default function WearingCard() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % outfits.length), INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % outfits.length), INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setIndex((i) => (i - 1 + outfits.length) % outfits.length); resetTimer(); };
  const next = () => { setIndex((i) => (i + 1) % outfits.length); resetTimer(); };

  return (
    <div className="col-span-2 md:col-span-1 md:row-span-2 bg-white border border-border rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-[9px] tracking-[0.2em] uppercase text-stone/50 font-sans">What I&apos;m Wearing</p>
        <div className="flex items-center gap-1">
          <button onClick={prev} aria-label="Previous outfit" className="w-6 h-6 rounded-full border border-ink flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group/btn">
            <ChevronLeft size={11} className="text-ink group-hover/btn:text-white" strokeWidth={2} />
          </button>
          <button onClick={next} aria-label="Next outfit" className="w-6 h-6 rounded-full border border-ink flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group/btn">
            <ChevronRight size={11} className="text-ink group-hover/btn:text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "2795/3267" }}>
        {outfits.map((outfit, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={outfit.src}
            src={outfit.src}
            alt="Current outfit"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === index ? 1 : 0, objectPosition: outfit.position }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function IntroHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;
      const available = container.offsetWidth;
      let lo = 10, hi = 400;
      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        text.style.fontSize = `${mid}px`;
        text.scrollWidth <= available ? (lo = mid) : (hi = mid);
      }
      text.style.fontSize = `${lo}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      className="sticky top-0 h-screen w-full overflow-hidden bg-ink"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
      >
        <source src="/about/reel.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

      {/* Name — full-width fit, flush to bottom */}
      <div
        ref={containerRef}
        className="absolute inset-x-0 bottom-0 overflow-hidden"
      >
        <p
          ref={textRef}
          className="font-display text-white/55 leading-[0.85] tracking-tight select-none whitespace-nowrap"
        >
          Nandita Malhotra
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-1 motion-reduce:hidden">
        <ChevronDown size={18} strokeWidth={1} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}

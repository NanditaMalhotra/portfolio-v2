/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ExperimentsCard from "./ExperimentsCard";

const card = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX / window.innerWidth) * rect.width;
      const y = (e.clientY / window.innerHeight) * rect.height;
      el.style.setProperty("--cx", `${x}px`);
      el.style.setProperty("--cy", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col gap-2">

      {/* ── Name card ── */}
      <motion.div {...card(0.08)} className="bg-white border border-border rounded-2xl p-4">
        <h1
          ref={nameRef}
          className="name-clip font-display font-normal text-5xl leading-[1.06] tracking-tight cursor-default"
        >
          Nandita
          <br />
          Malhotra
        </h1>
        <p className="text-[13px] text-stone/60 font-sans mt-1.5">
          Product Designer · New York
        </p>
      </motion.div>

      {/* ── Bio card ── */}
      <motion.div {...card(0.16)} className="bg-white border border-border rounded-2xl p-4">
        <p className="text-[14px] text-stone leading-relaxed">
          I design digital experiences at the intersection of UX and emerging technology. I specialize in what it means to practice design as AI reshapes the industry from the inside out.
        </p>
      </motion.div>

      {/* ── Worked With card ── */}
      <motion.div {...card(0.24)} className="bg-white border border-border rounded-2xl p-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
          Worked With
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          <a href="https://www.toyota.com" target="_blank" rel="noopener noreferrer">
            <img src="/logos/toyota.svg" alt="Toyota" className="h-5 w-auto" />
          </a>
          <a href="https://www.cooperhewitt.org" target="_blank" rel="noopener noreferrer">
            <img src="/logos/cooper-hewitt.svg" alt="Cooper Hewitt" className="h-5 w-auto" />
          </a>
          <a href="https://hucapital.co" target="_blank" rel="noopener noreferrer">
            <img src="/logos/hucapital.svg" alt="HuCapital" className="h-5 w-auto" />
          </a>
          <a href="https://dxcenter.pratt.edu" target="_blank" rel="noopener noreferrer">
            <img src="/logos/dxcenter.png" alt="DxCenter" className="h-5 w-auto" />
          </a>
        </div>
      </motion.div>

      {/* ── Education card ── */}
      <motion.div {...card(0.3)} className="bg-white border border-border rounded-2xl p-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-stone mb-3 font-sans">
          Education
        </p>
        <div className="grid gap-y-3" style={{ gridTemplateColumns: "auto 1fr", columnGap: "12px" }}>
          <a href="https://www.pratt.edu" target="_blank" rel="noopener noreferrer" className="contents">
            <img src="/pratt-logo.svg" alt="Pratt Institute" className="h-5 w-auto self-center" />
            <p className="text-[12px] text-stone leading-snug self-center">MS, Information Experience Design</p>
          </a>
          <a href="https://www.utexas.edu" target="_blank" rel="noopener noreferrer" className="contents">
            <img src="/ut-austin-logo.svg" alt="UT Austin" className="h-5 w-auto self-center" />
            <p className="text-[12px] text-stone leading-snug self-center">BFA, Visual Communication Design</p>
          </a>
        </div>
      </motion.div>

      {/* ── Experiments & Writing card ── */}
      <motion.div {...card(0.36)}>
        <ExperimentsCard />
      </motion.div>

    </div>
  );
}

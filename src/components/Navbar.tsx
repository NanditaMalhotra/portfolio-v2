"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/14HJ-a9m9lg25-oCIiBNKXh9WkEPtlj4o/view?usp=sharing";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const check = () => setIsHero(window.scrollY < window.innerHeight * 0.9);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [isHome]);

  // Transparent overlay when on homepage hero zone
  const overlay = isHome && isHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
        overlay
          ? "bg-transparent border-transparent"
          : "bg-cream/90 backdrop-blur-md border-border"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-bold text-xl transition-colors duration-500 hover:text-accent ${
            overlay ? "text-white" : "text-ink"
          }`}
        >
          NM.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`text-sm transition-colors duration-500 ${
              overlay ? "text-white/70 hover:text-white" : "text-stone hover:text-ink"
            }`}
          >
            Work
          </Link>
          <Link
            href="/play"
            className={`text-sm transition-colors duration-500 ${
              overlay ? "text-white/70 hover:text-white" : "text-stone hover:text-ink"
            }`}
          >
            Play
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors duration-500 ${
              overlay ? "text-white/70 hover:text-white" : "text-stone hover:text-ink"
            }`}
          >
            About
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors duration-500 inline-flex items-center gap-1 ${
              overlay ? "text-white/70 hover:text-white" : "text-stone hover:text-ink"
            }`}
          >
            Resume
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors duration-500 ${overlay ? "text-white" : "text-ink"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer — always cream */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-6 py-6 flex flex-col gap-5">
          <Link
            href="/"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-base text-ink"
          >
            Work
          </Link>
          <Link
            href="/play"
            onClick={() => setMenuOpen(false)}
            className="text-base text-ink"
          >
            Play
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-base text-ink"
          >
            About
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-ink inline-flex items-center gap-1"
          >
            Resume
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      )}
    </header>
  );
}

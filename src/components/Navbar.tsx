"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const RESUME_URL = "/resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border"
    >
      <nav className="w-full px-8 md:px-16 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-3xl text-ink hover:text-accent transition-colors"
        >
          NM.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-base text-stone hover:text-ink transition-colors"
          >
            Work
          </Link>
          <Link
            href="/play"
            className="text-base text-stone hover:text-ink transition-colors"
          >
            Play
          </Link>
          <Link
            href="/about"
            className="text-base text-stone hover:text-ink transition-colors"
          >
            About
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-stone hover:text-ink transition-colors inline-flex items-center gap-1"
          >
            Resume
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
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

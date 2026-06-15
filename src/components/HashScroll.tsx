"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.slice(1);
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 64; // matches h-16 fixed navbar
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 150);
        }
      };
      attempt(15);
    }

    // Delay so Next.js finishes its own scroll-to-top before we override it
    const timer = setTimeout(scrollToHash, 350);

    // Handle hash-only navigation (pathname unchanged, only hash changes)
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}

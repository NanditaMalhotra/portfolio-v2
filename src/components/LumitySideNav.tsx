'use client';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'design-approach', label: 'Design Approach' },
  { id: 'exploratory-research', label: 'Exploratory Research' },
  { id: 'schematic-design', label: 'Schematic Design' },
  { id: 'evaluative-research', label: 'Evaluative Research' },
  { id: 'building-consistency', label: 'Building Consistency' },
  { id: 'final-prototype', label: 'Final Prototype' },
  { id: 'reflections', label: 'Reflections' },
];

export default function LumitySideNav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-20 w-44">
      <div className="bg-white border border-border rounded-2xl p-4 shadow-sm">
        <p className="text-[9px] tracking-[0.2em] uppercase text-stone/40 font-sans mb-3">Jump to</p>
        <ul className="flex flex-col gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-[11px] leading-snug block py-1 transition-colors ${
                  active === id
                    ? 'text-accent font-medium'
                    : 'text-stone/50 hover:text-stone'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

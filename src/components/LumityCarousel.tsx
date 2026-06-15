'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MagnifierImage from './MagnifierImage';

const B = '/case-studies/lumity';

const slides = [
  { src: `${B}/carousel-workflows.png`, caption: 'Mapping key workflows' },
  { src: `${B}/carousel-wireframes.png`, caption: 'Mid-fi wireframing' },
  { src: `${B}/carousel-testing.png`, caption: 'Usability testing' },
];

export default function LumityCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative">
      <div className="relative rounded-2xl bg-parchment">
        <MagnifierImage
          src={slides[current].src}
          alt={slides[current].caption}
          containerClassName="rounded-2xl overflow-hidden"
        />

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm z-10"
        >
          <ChevronLeft size={15} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm z-10"
        >
          <ChevronRight size={15} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex items-center justify-between mt-8">
        <p className="text-xs text-stone">{slides[current].caption}</p>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-ink' : 'bg-stone/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

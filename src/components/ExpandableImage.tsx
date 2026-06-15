"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  imgClassName?: string;
}

export default function ExpandableImage({
  src,
  alt,
  containerClassName = "rounded-3xl overflow-hidden",
  containerStyle,
  imgClassName = "h-auto",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative w-full cursor-zoom-in ${containerClassName}`}
        style={containerStyle}
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className={`w-full block ${imgClassName}`} />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            <X size={22} strokeWidth={1.5} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

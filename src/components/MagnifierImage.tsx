"use client";
import { useState, useRef } from "react";
import { ZoomIn, X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  containerClassName?: string;
  imgClassName?: string;
  zoom?: number;
  lensSize?: number;
}

export default function MagnifierImage({
  src,
  alt,
  containerClassName = "rounded-3xl overflow-hidden",
  imgClassName = "",
  zoom = 2.5,
  lensSize = 220,
}: Props) {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleClick = () => {
    if (!enabled) setLightboxOpen(true);
  };

  const containerW = containerRef.current?.offsetWidth ?? 0;
  const bgX = -(pos.x * zoom - lensSize / 2);
  const bgY = -(pos.y * zoom - lensSize / 2);

  return (
    <div className="w-full relative">
      <div
        ref={containerRef}
        className={`relative w-full ${containerClassName}`}
        style={{ cursor: enabled && hovering ? "none" : enabled ? "default" : "zoom-in" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={handleClick}
      >
        <img src={src} alt={alt} className={`w-full h-auto block ${imgClassName}`} />

        {/* Lens */}
        {enabled && hovering && (
          <div
            className="absolute pointer-events-none rounded-full overflow-hidden shadow-2xl"
            style={{
              width: lensSize,
              height: lensSize,
              left: pos.x - lensSize / 2,
              top: pos.y - lensSize / 2,
              border: "1.5px solid rgba(107,104,128,0.2)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${containerW * zoom}px auto`,
                backgroundPosition: `${bgX}px ${bgY}px`,
              }}
            />
          </div>
        )}
      </div>

      {/* Toggle — floats below image */}
      <div className="absolute left-0 right-0 flex justify-end mt-2" style={{ top: "100%" }}>
        <button
          onClick={() => setEnabled((v) => !v)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-sans font-medium transition-all
            ${enabled
              ? "bg-accent text-white"
              : "bg-parchment text-stone hover:text-ink"
            }`}
        >
          <ZoomIn size={11} strokeWidth={1.8} />
          {enabled ? "Magnify on" : "Magnify"}
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
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
    </div>
  );
}

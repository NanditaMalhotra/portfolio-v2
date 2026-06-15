"use client";
import { useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

interface Props {
  src: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  videoClassName?: string;
  showSoundToggle?: boolean;
  soundHint?: string;
}

export default function ExpandableVideo({
  src,
  containerClassName = "",
  containerStyle,
  videoClassName = "w-full h-auto",
  showSoundToggle = false,
  soundHint,
}: Props) {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleSound(e: React.MouseEvent) {
    e.stopPropagation();
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  return (
    <>
      <div
        className={`relative cursor-zoom-in ${containerClassName}`}
        style={containerStyle}
        onClick={() => setOpen(true)}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={videoClassName}
        />

        {showSoundToggle && (
          <button
            onClick={toggleSound}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full px-3 py-1.5 text-xs font-sans transition-colors backdrop-blur-sm"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? <VolumeX size={13} strokeWidth={1.5} /> : <Volume2 size={13} strokeWidth={1.5} />}
            {muted ? "Sound off" : "Sound on"}
          </button>
        )}
      </div>

      {showSoundToggle && soundHint && muted && (
        <p className="text-[11px] text-stone/60 font-sans mt-2.5 text-center tracking-wide">
          {soundHint}
        </p>
      )}

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
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="max-w-full max-h-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

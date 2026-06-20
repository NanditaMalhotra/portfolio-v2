"use client";
import { useEffect, useRef } from "react";

export default function AboutReel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    const onVisible = () => {
      if (!document.hidden) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      src="/about/reel.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 40%" }}
    />
  );
}

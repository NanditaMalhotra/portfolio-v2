"use client";
import { useEffect, useRef } from "react";

export default function AboutReel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = () => video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    video.addEventListener("canplay", tryPlay);

    const onVisible = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    tryPlay();

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", tryPlay);
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

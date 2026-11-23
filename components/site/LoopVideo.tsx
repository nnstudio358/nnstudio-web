"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// A muted screen recording that loops while on screen. It never starts on its
// own for visitors who asked for reduced motion, and always has a pause
// control (WCAG 2.2.2).
export default function LoopVideo({
  src,
  poster,
  label,
  ar,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  ar: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) userPaused.current = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) v.play().catch(() => {});
        if (!entry.isIntersecting) v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => {
      io.disconnect();
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <div className={`loop ${className}`} style={{ "--ar": ar } as CSSProperties}>
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-label={label} />
      <button type="button" onClick={toggle} className="loop__toggle">
        {playing ? (
          <svg viewBox="0 0 10 12" aria-hidden="true">
            <rect x="0" y="0" width="3" height="12" fill="currentColor" />
            <rect x="7" y="0" width="3" height="12" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 10 12" aria-hidden="true">
            <path d="M0 0 L10 6 L0 12 Z" fill="currentColor" />
          </svg>
        )}
        {playing ? "Pause" : "Play"}
        <span className="sr-only"> the screen recording</span>
      </button>
    </div>
  );
}

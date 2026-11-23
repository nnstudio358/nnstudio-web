"use client";

import { useEffect, useRef, useState } from "react";

// A muted screen recording that loops. It only starts on its own when the
// visitor hasn't asked for reduced motion, and it always has a pause control
// (WCAG 2.2.2).
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) userPaused.current = true;
    // Play only while on screen, and never against the visitor's choice.
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
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-2 bottom-2 md:right-4 md:bottom-4 min-h-[2.25rem] px-3 bg-carbon/80 text-paper text-[0.875rem] font-[520] backdrop-blur-[2px] hover:bg-carbon focus-visible:!outline-paper"
      >
        {playing ? "Pause" : "Play"}
        <span className="sr-only"> the screen recording</span>
      </button>
    </div>
  );
}

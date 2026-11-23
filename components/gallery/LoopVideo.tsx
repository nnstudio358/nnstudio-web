"use client";

import { useEffect, useRef, useState } from "react";

// Muted screen recording with a plain text Pause/Play toggle set like a wall label.
// It plays on its own unless the visitor prefers reduced motion. No native controls.
export default function LoopVideo({
  src,
  poster,
  label,
  name,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  name: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) v.play().catch(() => {});
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className={className}>
      <video
        ref={ref}
        className="lift block aspect-[1728/850] w-full bg-black"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} the ${name} recording`}
        className="font-grotesk relative z-10 -ml-1 mt-2 px-1 py-1.5 text-[15px] font-medium underline decoration-1 underline-offset-[0.2em] hover:decoration-2"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}

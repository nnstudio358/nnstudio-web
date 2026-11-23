"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

// The hero stage. It owns everything that is not the footage itself: the
// full-bleed frame, the shade, the pause control, pausing when offscreen or
// when the tab is hidden, and prefers-reduced-motion. The footage is the
// child: today <CodedReel />, later a LiveSurface video can take its place by
// reading useReelPlaying() and playing or pausing itself.

const ReelContext = createContext(true);

/** True while the reel should be moving. */
export function useReelPlaying() {
  return useContext(ReelContext);
}

export default function ReelStage({
  label,
  children,
  overlay,
}: {
  /** What the footage shows, for screen readers. */
  label: string;
  children: ReactNode;
  /** Set over the foot of the reel (the message). */
  overlay?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => setReduced(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);

    const onVis = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);

    const el = ref.current;
    const io = el
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 })
      : null;
    if (el && io) io.observe(el);

    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
    };
  }, []);

  const playing = !userPaused && inView && tabVisible && !reduced;

  return (
    <section ref={ref} className="reel" data-playing={playing} aria-label="Recent work">
      <p className="sr-only">{label}</p>
      <ReelContext.Provider value={playing}>
        <div className="reel__layer" aria-hidden="true">
          {children}
        </div>
      </ReelContext.Provider>
      <div className="reel__shade" />
      <div className="reel__over frame">
        {overlay}
        <button
          type="button"
          className="reel__toggle"
          onClick={() => setUserPaused((p) => !p)}
        >
          {userPaused ? (
            <svg viewBox="0 0 10 12" aria-hidden="true">
              <path d="M0 0 L10 6 L0 12 Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 10 12" aria-hidden="true">
              <rect x="0" y="0" width="3" height="12" fill="currentColor" />
              <rect x="7" y="0" width="3" height="12" fill="currentColor" />
            </svg>
          )}
          {userPaused ? "Play the reel" : "Pause the reel"}
        </button>
      </div>
    </section>
  );
}

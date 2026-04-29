"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const LOGOS = [
  { src: "/logos/client-logo-capital-one-trade-credit.png", alt: "Capital One Trade Credit" },
  { src: "/logos/client-logo-fitbit-health-solutions.png",  alt: "Fitbit Health Solutions" },
  { src: "/logos/client-logo-outsystems.png",               alt: "OutSystems" },
  { src: "/logos/client-logo-whatsapp.png",                 alt: "WhatsApp",  maxHeight: 56 },
  { src: "/logos/client-logo-datastax.png",                 alt: "DataStax" },
  { src: "/logos/client-logo-regnology.png",                alt: "Regnology" },
  { src: "/logos/client-logo-bettercloud.png",              alt: "BetterCloud" },
  { src: "/logos/client-logo-meta.png",                     alt: "Meta",      maxHeight: 56 },
  { src: "/logos/client-logo-google.png",                   alt: "Google",    maxHeight: 32 },
  { src: "/logos/client-logo-splunk.png",                   alt: "Splunk" },
  { src: "/logos/client-logo-gitlab.svg",                   alt: "GitLab" },
];

function initialSlots(count: number): number[] {
  const indices = [...Array(LOGOS.length).keys()];
  const picked: number[] = [];
  for (let i = 0; i < count; i++) {
    const remaining = indices.filter((n) => !picked.includes(n));
    picked.push(remaining[Math.floor(Math.random() * remaining.length)]);
  }
  return picked;
}

function nextIndex(current: number, exclude: number[]): number {
  const available = [...Array(LOGOS.length).keys()].filter(
    (n) => n !== current && !exclude.includes(n)
  );
  return available[Math.floor(Math.random() * available.length)];
}

const CYCLE_MS = 7000;
const FADE_MS = 500;

function LogoSlot({ index, slotIndex, totalSlots, allCurrentIndices }: {
  index: number;
  slotIndex: number;
  totalSlots: number;
  allCurrentIndices: React.MutableRefObject<number[]>;
}) {
  const [current, setCurrent] = useState(index);
  const [visible, setVisible] = useState(true);
  const staggerMs = CYCLE_MS / totalSlots;

  useEffect(() => {
    const initialDelay = slotIndex * staggerMs;
    let intervalId: ReturnType<typeof setInterval>;

    const doSwap = () => {
      setVisible(false);
      setTimeout(() => {
        const next = nextIndex(
          allCurrentIndices.current[slotIndex],
          allCurrentIndices.current.filter((_, i) => i !== slotIndex)
        );
        allCurrentIndices.current[slotIndex] = next;
        setCurrent(next);
        setVisible(true);
      }, FADE_MS);
    };

    const timeoutId = setTimeout(() => {
      doSwap();
      intervalId = setInterval(doSwap, CYCLE_MS);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [slotIndex, staggerMs, allCurrentIndices]);

  const logo = LOGOS[current];
  return (
    <div className="flex items-center justify-center px-6 md:px-8" style={{ minWidth: 0, height: 64 }}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={160}
        height={48}
        style={{
          objectFit: "contain",
          opacity: visible ? 0.45 : 0,
          transition: `opacity ${FADE_MS}ms ease`,
          maxHeight: logo.maxHeight ?? 40,
          width: "auto",
          filter: "grayscale(1)",
        }}
      />
    </div>
  );
}

export default function LogoStrip() {
  const SLOT_COUNT = 4;
  const [slots] = useState<number[]>(() => initialSlots(SLOT_COUNT));
  const allCurrentIndices = useRef<number[]>(slots);

  return (
    <section className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-12">
        <p className="font-sans text-[11px] md:text-[13px] tracking-[0.12em] text-muted uppercase mb-6 md:mb-8 text-center">
          Trusted by enterprise marketing and brand teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-faint">
          {slots.map((logoIndex, slotIndex) => (
            <LogoSlot
              key={slotIndex}
              index={logoIndex}
              slotIndex={slotIndex}
              totalSlots={SLOT_COUNT}
              allCurrentIndices={allCurrentIndices}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

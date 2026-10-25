"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Project } from "@/components/SelectedWork";

// Desktop (lg and up, motion allowed): Selected work as pinned cards that stack
// as you scroll, Clay-style. Each card pins below the nav; as the next card
// slides over it, the one underneath shrinks and dims slightly. Image and text
// split 2/3 and 1/3, alternating sides. Rough pass for Nathan to design over
// (Oct 25). Phones and reduced motion get the plain list in SelectedWork.

const NAV = 80; // desktop nav height
const TOP = NAV + 24; // where the first card pins
const STEP = 20; // how much of each earlier card stays visible above the next

function Caption({ p, i, n }: { p: Project; i: number; n: number }) {
  return (
    <div className="flex flex-col h-full">
      <div className="font-sans text-[12px] tracking-[0.14em] text-muted tabular-nums">
        {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
      </div>
      <div className="mt-auto">
        <h3 className="font-serif text-[28px] xl:text-[34px] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
          {p.name}
        </h3>
        <p
          className="font-sans text-[16px] xl:text-[17px] leading-[1.6] font-light mt-4"
          style={{ color: "#6B6A63" }}
        >
          {p.description}
        </p>
        {p.status && (
          <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted mt-5">{p.status}</div>
        )}
        <div className="font-sans text-[14px] tracking-[0.04em] text-muted mt-8 transition-colors group-hover:text-ink">
          View project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}

function Card({
  p,
  i,
  n,
  progress,
}: {
  p: Project;
  i: number;
  n: number;
  progress: MotionValue<number>;
}) {
  // Each card starts shrinking once the next one begins to arrive.
  const start = (i + 1) / n - 1 / n;
  const end = 1;
  const depth = n - 1 - i; // how many cards will end up on top of this one
  const scale = useTransform(progress, [start, end], [1, 1 - depth * 0.035]);
  const dim = useTransform(progress, [start, end], [0, depth * 0.06]);

  const imageLeft = i % 2 === 0;
  const textOnly = !p.visual;
  const contain = p.visual?.fit === "contain";

  return (
    <li
      className="sticky"
      style={{ top: TOP + i * STEP, marginBottom: i < n - 1 ? "28vh" : 0 }}
    >
      <motion.a
        href={p.href}
        style={{ scale, transformOrigin: "50% 0%" }}
        className={`group relative block overflow-hidden border border-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber ${
          textOnly ? "h-[min(360px,40svh)]" : "h-[min(680px,calc(100svh-180px))]"
        }`}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "#F4F3EF" }} />
        <div
          className={`relative h-full grid ${
            textOnly ? "grid-cols-[2fr_1fr]" : imageLeft ? "grid-cols-[2fr_1fr]" : "grid-cols-[1fr_2fr]"
          }`}
        >
          {textOnly ? (
            <>
              <div className="p-10 xl:p-12 max-w-[640px]">
                <Caption p={p} i={i} n={n} />
              </div>
              <div />
            </>
          ) : (
            <>
              <div
                className={`relative overflow-hidden ${imageLeft ? "order-1" : "order-2"}`}
                style={{ background: p.visual!.bg ?? "#E8E6E1" }}
              >
                <div
                  className="absolute transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ inset: contain ? "8%" : 0 }}
                >
                  <Image
                    src={p.visual!.src}
                    alt={p.visual!.alt}
                    fill
                    sizes="66vw"
                    style={{ objectFit: contain ? "contain" : "cover", objectPosition: "center" }}
                  />
                </div>
              </div>
              <div className={`p-10 xl:p-12 ${imageLeft ? "order-2" : "order-1"}`}>
                <Caption p={p} i={i} n={n} />
              </div>
            </>
          )}
        </div>
        {/* Dims the card as later cards stack over it */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: dim, backgroundColor: "#2D3D46" }}
        />
      </motion.a>
    </li>
  );
}

export default function StackedWork({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <ul ref={ref} className="relative">
      {projects.map((p, i) => (
        <Card key={p.id} p={p} i={i} n={projects.length} progress={scrollYProgress} />
      ))}
    </ul>
  );
}

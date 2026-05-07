"use client";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    name: "Reliable delivery.",
    body: [
      "Enterprise launches don’t have flex dates. Neither do I.",
      "Reliable delivery across enterprise launches, agency timelines, and high-stakes marketing work.",
    ],
  },
  {
    number: "02",
    name: "Brand fluency.",
    body: [
      "I’ve worked inside the strict brand systems of regulated healthcare, enterprise fintech, and global tech platforms.",
      "Your guidelines aren’t a constraint — they’re where I start.",
    ],
  },
  {
    number: "03",
    name: "Experienced judgment.",
    body: [
      "Knowing when to follow direction is important. Knowing when to push for a better solution matters just as much.",
      "Clear thinking, thoughtful feedback, and fewer rounds of backtracking.",
    ],
  },
];


export default function ProblemAndPillars() {
  return (
    <section className="w-full border-t border-faint bg-bg relative overflow-hidden">

      {/* Brightening spotlight at bottom — lifts dot texture behind problem text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 88%, rgba(253,252,248,0.75) 0%, transparent 52%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Problem */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center"
      >
        <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
          Design shouldn&rsquo;t be a bottleneck.
        </h2>
        <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[640px]" style={{ color: "#6B6A63" }}>
          <p>
            You&rsquo;ve worked with designers — maybe agencies — and still found yourself
            directing the work, managing revision cycles, and receiving final files
            that create more work than they solve.
          </p>
          <p>
            Good design support should reduce friction, not create more of it.
          </p>
          <p>
            The goal isn&rsquo;t to remove collaboration. It&rsquo;s to work with someone
            experienced enough to move projects forward without needing every
            decision mapped out twice.
          </p>
        </div>
      </motion.div>

      {/* Pillars */}
      <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pb-16 md:pb-24 lg:pb-32">
        <div className="border border-faint grid grid-cols-1 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: index * 0.1 }}
              className="px-8 md:px-12 py-10 md:py-12"
            >
              <div className="font-sans text-[13px] tracking-[0.12em] text-amber mb-5">
                {pillar.number}
              </div>
              <h3 className="font-serif text-[26px] md:text-[28px] lg:text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-6">
                {pillar.name}
              </h3>
              <div className={`space-y-4 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light${index === 2 ? ' pr-6 lg:pr-8' : ''}`} style={{ color: "#6B6A63" }}>
                {Array.isArray(pillar.body)
                  ? pillar.body.map((para, i) => <p key={i}>{para}</p>)
                  : <p>{pillar.body}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full bg-bg"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23232520' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\"), radial-gradient(ellipse at 20% 90%, #E0DAD1 0%, #EDECE8 60%)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 md:px-10 lg:pl-28 lg:pr-16 pt-16 pb-20 md:pt-24 md:pb-32 max-w-[860px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10"
          >
            Senior design partner<br />
            for in-house<br />
            <em className="italic">marketing teams.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="font-sans text-[16px] md:text-[19px] leading-[1.65] max-w-[480px] mb-10 md:mb-14 font-light"
            style={{ color: "#6B6A63" }}
          >
            Direct partner for marketing and brand teams — and white-label
            capacity for the agencies that serve them. Take the brief, ask the
            right questions once, deliver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10"
          >
            <a
              href="/contact"
              className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
            <a
              href="/work"
              className="font-sans text-[14px] text-muted border border-faint px-9 py-4 hover:text-ink hover:border-ink transition-colors"
            >
              See the work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

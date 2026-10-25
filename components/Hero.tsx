"use client";
import { motion } from "framer-motion";

// Copy: ChatGPT final in the Home handoff doc (Oct 25, 2026).
// Kept short so the start of Selected work shows at a typical desktop viewport.
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="w-full bg-transparent pt-[64px] md:pt-[80px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 md:px-10 lg:px-16 pt-14 pb-14 md:pt-20 md:pb-16 max-w-[900px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-7 md:mb-8"
          >
            Senior design partner.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="max-w-[640px] mb-9 md:mb-11"
          >
            <p
              className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light mb-5"
              style={{ color: "#6B6A63" }}
            >
              When your team needs an experienced designer to take on a substantial
              project or ongoing work, I can step in and carry it through.
            </p>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-medium text-ink">
              Take the brief, ask the right questions, deliver.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="/work"
              className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              View work →
            </a>
            <a
              href="/contact"
              className="font-sans text-[14px] text-muted border border-faint px-9 py-4 hover:text-ink hover:border-ink transition-colors"
              style={{ backgroundColor: "#EDECE8" }}
            >
              Start a conversation →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

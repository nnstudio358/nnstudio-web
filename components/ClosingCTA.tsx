"use client";
import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section className="w-full bg-bg border-t border-faint relative overflow-hidden">
      {/* Top spotlight — flows from DualStackSection's bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 15% 100%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }}
      />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-[1] max-w-[600px]"
        >
          <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
            Have a project or campaign coming up?
          </h2>
          <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light mb-10 md:mb-14" style={{ color: "#6B6A63" }}>
            I work with marketing teams and agencies that need experienced design
            support across digital, content, and print.
          </p>
          <a
            href="/contact"
            className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
          >
            Start a conversation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-bg">
      {/* Content constrained to 1440px */}
      <div className="max-w-[1440px] mx-auto">
        <div className="px-16 pt-24 pb-32 max-w-[860px]">
          {/* Headline */}
          <h1 className="font-serif text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-10">
            Senior design partner<br />
            for in-house<br />
            <em className="italic">marketing teams.</em>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-[19px] leading-[1.65] max-w-[480px] mb-14 font-light" style={{ color: "#6B6A63" }}>
            Strategic design work — brand, campaigns, systems — delivered with the
            speed and judgment of someone who&rsquo;s done it before.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-10">
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
          </div>
        </div>

      </div>
    </section>
  );
}

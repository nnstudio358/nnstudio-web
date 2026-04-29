export default function Hero() {
  return (
    <section className="w-full bg-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 md:px-10 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-32 max-w-[860px]">
          <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10">
            Senior design partner<br />
            for in-house<br />
            <em className="italic">marketing teams.</em>
          </h1>

          <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] max-w-[480px] mb-10 md:mb-14 font-light" style={{ color: "#6B6A63" }}>
            Strategic design work — brand, campaigns, systems — delivered with the
            speed and judgment of someone who&rsquo;s done it before.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
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

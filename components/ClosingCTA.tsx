export default function ClosingCTA() {
  return (
    <section className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-16 py-32">
        <div className="max-w-[800px]">
          <h2 className="font-serif text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-10">
            If you need senior-level design output without the management overhead —{" "}
            <em className="italic">let&rsquo;s talk.</em>
          </h2>
          <p className="font-sans text-[19px] leading-[1.65] font-light mb-4" style={{ color: "#6B6A63" }}>
            I work directly with marketing and brand teams at enterprise and complex organizations.
          </p>
          <p className="font-sans text-[19px] leading-[1.65] font-light mb-14" style={{ color: "#6B6A63" }}>
            For agencies: I operate as white-label senior capacity on complex projects — no client
            management required on your end.
          </p>
          <div className="flex items-center gap-10">
            <a
              href="/contact"
              className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
            <a
              href="mailto:nathan@nnstudio.com"
              className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
            >
              nathan@nnstudio.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

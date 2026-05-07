import NNStudioLogo from "@/components/NNStudioLogo";

const NAV_LINKS = ["Work", "Services", "About", "Contact"];

export default function Footer({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <footer className="w-full border-t" style={{ backgroundColor: '#2D3D46', borderColor: "#3D4D55" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-10">
          {/* Row 1 — Logo + nav */}
          <div className="flex items-center justify-between pb-6 border-b" style={{ borderColor: "#3D4D55" }}>
            <a href="/">
              <NNStudioLogo height={16} color="#F4F3EF" />
            </a>
            <div className="flex items-center gap-6 md:gap-8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-sans text-[13px] text-muted hover:text-offwhite transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Row 2 — Tagline + links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6">
            <span className="font-sans text-[13px] text-muted font-light">
              Senior design partner for in-house marketing teams
            </span>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <a
                href="https://www.linkedin.com/in/nnstudio/"
                className="font-sans text-[13px] text-muted hover:text-offwhite transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:nathan@nnstudio.com"
                className="font-sans text-[13px] text-muted hover:text-offwhite transition-colors"
              >
                nathan@nnstudio.com
              </a>
              <span className="font-sans text-[12px] text-muted font-light">
                &copy; 2026 nnstudio
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-bg border-t border-faint relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 15% 0%, rgba(253,252,248,0.8) 0%, transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-10">
        {/* Row 1 — Logo + nav */}
        <div className="flex items-center justify-between pb-6 border-b border-faint">
          <a href="/">
            <NNStudioLogo height={16} />
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Row 2 — Tagline + links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6">
          <span className="font-sans text-[13px] text-muted font-light">
            Senior design partner for in-house marketing teams
          </span>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="https://www.linkedin.com/in/nnstudio/"
              className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nathan@nnstudio.com"
              className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
            >
              nathan@nnstudio.com
            </a>
            <span className="font-sans text-[12px] text-muted font-light">
              &copy; 2026 nnstudio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

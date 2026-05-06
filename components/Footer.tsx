import NNStudioLogo from "@/components/NNStudioLogo";

export default function Footer({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <footer className="w-full border-t" style={{ backgroundColor: '#2D3D46', borderColor: "#3D4D55" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-baseline justify-between">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4">
            <NNStudioLogo height={16} color="#F4F3EF" />
            <span className="font-sans text-[13px] md:text-[15px] text-muted font-light">
              Senior design partner for in-house marketing teams
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="https://www.linkedin.com/in/nnstudio/"
              className="font-sans text-[13px] md:text-[15px] text-muted hover:text-offwhite transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nathan@nnstudio.com"
              className="font-sans text-[13px] md:text-[15px] text-muted hover:text-offwhite transition-colors"
            >
              nathan@nnstudio.com
            </a>
            <span className="font-sans text-[12px] md:text-[13px] text-muted font-light">
              &copy; 2026 nnstudio
            </span>
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
      <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-baseline justify-between">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4">
          <NNStudioLogo height={16} />
          <span className="font-sans text-[13px] md:text-[15px] text-muted font-light">
            Senior design partner for in-house marketing teams
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <a
            href="https://www.linkedin.com/in/nnstudio/"
            className="font-sans text-[13px] md:text-[15px] text-muted hover:text-ink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nathan@nnstudio.com"
            className="font-sans text-[13px] md:text-[15px] text-muted hover:text-ink transition-colors"
          >
            nathan@nnstudio.com
          </a>
          <span className="font-sans text-[12px] md:text-[13px] text-muted font-light">
            &copy; 2026 nnstudio
          </span>
        </div>
      </div>
    </footer>
  );
}

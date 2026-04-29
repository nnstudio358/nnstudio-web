import NNStudioLogo from "@/components/NNStudioLogo";

export default function Nav() {
  return (
    <nav className="w-full border-b border-faint bg-bg">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-16 h-[80px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <NNStudioLogo height={20} />
        </a>

        {/* Links */}
        <div className="flex items-center gap-10">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-sans text-[13px] tracking-[0.04em] text-muted hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/contact"
            className="font-sans text-[13px] tracking-[0.04em] text-ink bg-amber px-5 py-2 hover:bg-[#D4A55A] transition-colors"
          >
            Let&rsquo;s talk →
          </a>
        </div>
      </div>
    </nav>
  );
}

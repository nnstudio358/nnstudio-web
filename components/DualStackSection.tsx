import Image from "next/image";

const FIGMA_ITEMS = [
  "Design systems",
  "Variables and tokens",
  "Component libraries",
  "Dev-ready handoff",
  "Advanced prototyping",
  "UI/UX for complex product interfaces",
];

const ADOBE_ITEMS = [
  "eBooks and whitepapers",
  "Research reports",
  "Sales decks and presentations",
  "Print collateral — all formats",
  "Infographics and data visualization",
  "Digital advertising and social assets",
];

export default function DualStackSection() {
  return (
    <section className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center mb-16 md:mb-28">
          <div>
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
              Most designers live in one world.<br />
              <em className="italic">Your brand lives in both.</em>
            </h2>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[500px]" style={{ color: "#6B6A63" }}>
              Marketing teams need design that works across every format — from a Figma
              component library to a 20-page technical whitepaper. Most designers force
              you to split that work across two vendors. I don&rsquo;t.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/figma-adobe.svg"
              alt="Figma and Adobe"
              width={347}
              height={98}
              style={{ width: "100%", maxWidth: 320, height: "auto" }}
            />
          </div>
        </div>

        {/* Centered headline */}
        <h3 className="font-serif text-[28px] md:text-[44px] lg:text-[64px] font-normal leading-[1.1] text-ink tracking-[-0.02em] text-center mb-8">
          One partner. Full brand consistency.
        </h3>

        {/* Combined list box */}
        <div className="border border-faint relative max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">

            <ul className="space-y-5 px-8 md:px-10 py-8 md:py-10 border-b sm:border-b-0 sm:border-r border-faint">
              {FIGMA_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[7px] shrink-0 w-[6px] h-[6px] rotate-45 border border-amber inline-block" />
                  <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="space-y-5 px-8 md:px-10 py-8 md:py-10">
              {ADOBE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[7px] shrink-0 w-[6px] h-[6px] rotate-45 border border-amber inline-block" />
                  <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Center connector — hidden on mobile (single column), visible on sm+ */}
          <div
            className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-amber items-center justify-center z-10"
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="7" y1="1" x2="7" y2="13" stroke="#EDECE8" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="1" y1="7" x2="13" y2="7" stroke="#EDECE8" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}

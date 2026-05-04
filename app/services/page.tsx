import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const viewport: Viewport = { themeColor: "#111110" };

export const metadata: Metadata = {
  title: "Services",
  description:
    "Project and retainer engagements for in-house marketing teams and agency partners. Design systems and marketing production — one partner covering every format.",
};

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

const ENGAGEMENTS = [
  {
    name: "Project",
    qualifier: "For teams with a defined, scoped need.",
    description:
      "A single engagement with clear deliverables and a fixed timeline. Right for a product launch, a campaign asset suite, a one-off content piece, or an initial design system build. Either or both tools, depending on what the work requires.",
    detail: null,
  },
  {
    name: "Marketing Partner",
    qualifier: "For teams with regular, ongoing production needs.",
    description:
      "A monthly retainer covering ongoing design production across both Figma and Adobe — digital assets, eBooks, whitepapers, decks, print collateral, and more. Right for in-house teams that need a reliable senior production partner on a consistent basis, without the overhead of managing a contractor week to week.",
    detail: "Retainer · 20–30 hrs/month",
  },
  {
    name: "Design Partner",
    qualifier: "For teams building or scaling design infrastructure alongside ongoing production.",
    description:
      "A monthly retainer at system scale — Figma design systems with variables, tokens, and component libraries built and maintained for your team, alongside ongoing Adobe marketing production. Right for teams that need a living design system and regular marketing output maintained together, by the same partner, with full brand consistency across every format.",
    detail: "Retainer · 30–40 hrs/month",
  },
];

function DiamondBullet() {
  return (
    <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rotate-45 border border-amber inline-block" />
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
          <FadeUp>
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
              Services
            </div>
            <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10">
              Senior-level design output.<br />
              <em className="italic">No management overhead.</em>
            </h1>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[640px]" style={{ color: "#6B6A63" }}>
              I work with in-house marketing and brand teams — and as white-label
              capacity for the agencies that serve them. Strict brand standards,
              compliance requirements, multi-team sign-off: that&rsquo;s not a
              constraint. Every engagement runs on one premise: take the brief,
              ask the right questions once, and deliver.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Engagements */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <FadeUp className="max-w-[720px] mb-6">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-6 md:mb-8">
              How we can work together.
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
              I work with a small number of retainer clients at a time to maintain the
              quality and responsiveness each engagement requires.
            </p>
          </FadeUp>

          <div className="mt-12 md:mt-20 divide-y divide-faint border-t border-faint">
            {ENGAGEMENTS.map(({ name, qualifier, description, detail }, index) => (
              <FadeUp key={name} delay={index * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-24 py-12 md:py-16">
                <div>
                  {detail && (
                    <div className="font-sans text-[12px] tracking-[0.14em] uppercase text-amber mb-3">
                      {detail}
                    </div>
                  )}
                  <h3 className="font-serif text-[32px] md:text-[36px] lg:text-[40px] font-normal text-ink tracking-[-0.02em] mb-4">
                    {name}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.65] font-light" style={{ color: "#8A8A82" }}>
                    {qualifier}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                    {description}
                  </p>
                  <a
                    href="/contact"
                    className="self-start font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                  >
                    Let&rsquo;s talk →
                  </a>
                </div>
              </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* One partner section */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <div className="mb-12 md:mb-20">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10 lg:whitespace-nowrap">
              One partner. Full brand consistency.
            </h2>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[640px]" style={{ color: "#6B6A63" }}>
              Most design work requires both digital and print execution — and most teams
              split that across two vendors. I cover both, with the same brand standards
              applied across every format.
            </p>
          </div>

          <div className="border border-faint relative max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">

              <ul className="space-y-5 px-8 md:px-10 py-8 md:py-10">
                {FIGMA_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <DiamondBullet />
                    <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5 px-8 md:px-10 py-8 md:py-10">
                {ADOBE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <DiamondBullet />
                    <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            <div
              className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-amber items-center justify-center z-10"
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

      {/* Closing CTA — dark */}
      <section className="w-full bg-ink">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <div className="max-w-[720px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              Not sure which engagement fits?{" "}
              <br className="hidden md:block" />
              <em className="italic">Let&rsquo;s figure it out.</em>
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14" style={{ color: "#C8C2BA" }}>
              Most clients know what they need to get done — not necessarily which
              structure makes sense. Reach out and describe the work.
              We&rsquo;ll find the right fit.
            </p>
            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
          </div>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

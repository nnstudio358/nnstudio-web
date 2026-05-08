import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const viewport: Viewport = { themeColor: "#2D3D46" };

export const metadata: Metadata = {
  title: "Services",
  description:
    "Project and retainer design support for B2B marketing teams and agency partners — from design systems and campaign assets to long-form content and print.",
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
      "A single engagement with clear deliverables and a fixed timeline. Right for a product launch, campaign asset suite, one-off content piece, or initial design system build.\n\nDigital systems, long-form content, print, or all three — depending on what the work requires.\n\nOften used by agencies needing senior support on launch campaigns, pitch work, or client-facing brand systems.",
    detail: null,
  },
  {
    name: "Marketing Partner",
    qualifier: "For teams with regular, ongoing design needs.",
    description:
      "A monthly retainer covering ongoing digital, content, and print design — including assets, eBooks, whitepapers, decks, print collateral, and more.\n\nRight for teams that need reliable senior support on a consistent basis without rebuilding context every week.",
    detail: "Retainer · 20–30 hrs/month",
  },
  {
    name: "Design Partner",
    qualifier: "For teams building or scaling design systems alongside ongoing marketing work.",
    description:
      "A monthly retainer focused on scalable design systems alongside ongoing marketing design.\n\nShared UI patterns, organized component systems, and consistent brand execution maintained across digital, content, and print environments.\n\nRight for teams that need both a living design system and ongoing marketing output managed together by the same senior partner.",
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
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10"><Nav /></div>
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
          mixBlendMode: "screen",
        }} />
        <div className="relative z-[1]">
        {/* Hero */}
        <section className="w-full bg-transparent border-b border-faint pt-[64px] md:pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
          <FadeUp>
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
              Services
            </div>
            <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[980px]">
              Senior-level design output. <em className="italic">Works to brief.</em>
            </h1>
            <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
              <p>
                I work directly with in-house marketing and brand teams — and
                serve as white-label senior capacity for the agencies that
                partner with them.
              </p>
              <p>
                Strict brand standards, complex approvals, and multi-team review
                are already built into how I work. The goal is clear
                communication, thoughtful execution, and work that moves cleanly
                from brief to final delivery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-10 md:mt-14">
              <a
                href="/work"
                className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
              >
                View selected projects →
              </a>
              <a
                href="mailto:nathan@nnstudio.com"
                className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
              >
                nathan@nnstudio.com
              </a>
            </div>
          </FadeUp>
        </div>
        </section>
        </div>
      </div>

      {/* Engagements */}
      <section className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <FadeUp className="max-w-[720px] mb-6">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-6 md:mb-8">
              Engagement options.
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
                <div className="space-y-5">
                  {description.split("\n\n").map((para, i) => (
                    <p key={i} className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <a
              href="/contact"
              className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Start a conversation →
            </a>
            <a
              href="/work"
              className="font-sans text-[14px] text-muted border border-faint px-9 py-4 hover:text-ink hover:border-ink transition-colors"
              style={{ backgroundColor: '#EDECE8' }}
            >
              View work →
            </a>
          </div>

        </div>
      </section>

      {/* One partner section */}
      <section className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <div className="mb-12 md:mb-20">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
              One partner across digital, content, and print.
            </h2>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
              Most marketing teams end up splitting digital systems, long-form
              content, and print work across multiple vendors. nnstudio keeps
              those environments connected — applying the same brand standards
              across campaigns, presentations, long-form content, and print
              materials.
            </p>
          </div>

          <div className="border border-faint relative max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">

              <div className="px-8 md:px-10 py-8 md:py-10">
                <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-6">
                  Digital systems
                </div>
                <ul className="space-y-5">
                  {FIGMA_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <DiamondBullet />
                      <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 md:px-10 py-8 md:py-10">
                <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-6">
                  Marketing + editorial
                </div>
                <ul className="space-y-5">
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

            </div>

          </div>

        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="w-full" style={{ backgroundColor: '#2D3D46' }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <div className="max-w-[700px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              Not sure which engagement fits? <em className="italic">Let&rsquo;s figure it out.</em>
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14 max-w-[500px]" style={{ color: "#C8C2BA" }}>
              Most clients know what they need to get done — not necessarily which
              structure makes sense. Reach out and describe the work.
              I&rsquo;ll find the right fit.
            </p>
            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Start a conversation →
            </a>
          </div>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

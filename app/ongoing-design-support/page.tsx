import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const viewport: Viewport = { themeColor: "#2D3D46" };

export const metadata: Metadata = {
  title: "Ongoing Design Support for B2B Marketing Teams and Agencies | nnstudio",
  description:
    "Reserved monthly design capacity for B2B marketing teams and agency partners. Reports, campaign assets, digital templates, and design-system work — handled by one experienced senior design partner.",
};

const WORKLOAD_MONTHS = [
  {
    label: "Report launch month",
    descriptor: "Designing the full report or eBook and the supporting assets to launch it.",
    items: [
      "Charts, diagrams, and infographics",
      "Landing-page design",
      "Social and campaign assets",
      "Email graphics",
    ],
  },
  {
    label: "Campaign support month",
    descriptor: "Designing a coordinated campaign visual system and the assets to run it.",
    items: [
      "Campaign visual direction",
      "Paid and organic social assets",
      "Email graphics",
      "Landing-page design",
    ],
  },
  {
    label: "Digital systems month",
    descriptor: "Designing and refining the systems and templates your team uses across campaigns.",
    items: [
      "Figma library expansion and refinement",
      "Component and template design",
      "Landing-page modules",
      "Dev-ready handoff",
    ],
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Understand the work.",
    titleMaxWidth: "max-w-[130px]",
    body: "We start with what your team produces regularly — formats, review processes, brand standards, and the deadlines that matter.",
  },
  {
    number: "02",
    title: "Reserve monthly capacity.",
    titleMaxWidth: undefined,
    body: "A defined amount of design time is held for your team each month — without requiring a new proposal for every project.",
  },
  {
    number: "03",
    title: "Prioritize together.",
    titleMaxWidth: undefined,
    body: "Work is sequenced based on what is most pressing and adjusts as campaigns develop and needs change. The reserved capacity is the structure — not a fixed list of monthly deliverables.",
  },
  {
    number: "04",
    title: "Deliver.",
    titleMaxWidth: undefined,
    body: "Brand context, files, and working preferences carry forward. No re-explaining standards. No starting from zero.",
  },
];

function DiamondBullet() {
  return (
    <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rotate-45 border border-amber inline-block" />
  );
}

export default function OngoingDesignSupportPage() {
  return (
    <main>

      {/* Hero */}
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10"><Nav /></div>
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
          mixBlendMode: "screen",
        }} />
        <div className="relative z-[1]">
          <section className="w-full bg-transparent border-b border-faint pt-[64px] md:pt-[80px]">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
              <FadeUp>
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
                  Ongoing Design Support
                </div>
                <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[760px] lg:max-w-[580px]">
                  Reserved senior design capacity.
                </h1>
                <div className="space-y-5 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[610px] mb-10 md:mb-14" style={{ color: "#6B6A63" }}>
                  <p>Reports, campaign assets, digital templates, and design-system work — handled by a single experienced partner. No re-explaining standards. No rebuilding context for every project.</p>
                  <p>For in-house marketing teams and the agencies that work with them.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                  <a
                    href="/contact"
                    className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                  >
                    Start a conversation →
                  </a>
                  <a
                    href="#what-a-month-can-look-like"
                    className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
                  >
                    See what monthly support can include ↓
                  </a>
                </div>
              </FadeUp>
            </div>
          </section>
        </div>
      </div>

      {/* Why monthly support exists */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp className="max-w-[980px] mx-auto text-center">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
              The work changes month to month.<br className="hidden lg:block" /> The need for reliable support does not.
            </h2>
            <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[560px] mx-auto" style={{ color: "#6B6A63" }}>
              <p>One month is a report and a campaign launch. The next is template updates, digital assets, and a system review.</p>
              <p>A fixed deliverable list works when scope is predictable. Reserved capacity works when it is not.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What a month can look like */}
      <section id="what-a-month-can-look-like" className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <FadeUp className="mb-12 md:mb-20">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-6 md:mb-8">
              What a month can look like.
            </h2>
            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[560px]" style={{ color: "#6B6A63" }}>
              Each month is different. These are three ways the work commonly takes shape.
            </p>
          </FadeUp>

          <div className="border border-faint grid grid-cols-1 lg:grid-cols-3">
            {WORKLOAD_MONTHS.map((month, index) => (
              <FadeUp
                key={month.label}
                delay={index * 0.1}
                className={`px-8 md:px-10 py-10 md:py-12${index < 2 ? " border-b border-faint lg:border-b-0 lg:border-r" : ""}`}
              >
                <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-5">
                  {month.label}
                </div>
                <p className="font-sans text-[15px] leading-[1.65] font-light mb-8" style={{ color: "#8A8A82" }}>
                  {month.descriptor}
                </p>
                <ul className="space-y-4">
                  {month.items.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <DiamondBullet />
                      <span className="font-sans text-[16px] md:text-[17px] leading-[1.6] text-ink font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>

          <div className="mt-10 md:mt-14">
            <a
              href="/work"
              className="font-sans text-[16px] text-muted hover:text-ink transition-colors"
            >
              View selected work →
            </a>
          </div>

        </div>
      </section>

      {/* How monthly support works */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">

          <FadeUp className="mb-12 md:mb-20 max-w-[720px]">
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em]">
              How monthly support works.
            </h2>
          </FadeUp>

          <div className="divide-y divide-faint border-t border-faint max-w-[900px]">
            {HOW_IT_WORKS.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-6 md:gap-20 py-10 md:py-14">
                  <div>
                    <div className="font-sans text-[13px] tracking-[0.12em] text-amber mb-4">
                      {step.number}
                    </div>
                    <h3 className={`font-serif text-[22px] md:text-[26px] font-normal text-ink tracking-[-0.02em] leading-[1.15]${step.titleMaxWidth ? ` ${step.titleMaxWidth}` : ""}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light md:flex md:items-center" style={{ color: "#6B6A63" }}>
                    {step.body}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-faint max-w-[900px]">
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-6 max-w-[700px]" style={{ color: "#6B6A63" }}>
                Support typically runs 20&ndash;30 hours per month for recurring content and campaign work, or 30&ndash;40 hours when digital-system maintenance is part of the scope.
              </p>
              <a
                href="/services"
                className="font-sans text-[16px] text-muted hover:text-ink transition-colors"
              >
                View engagement options →
              </a>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* White-label agency support */}
      <section className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
            <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[600px]">
              White-label senior capacity for agencies.
            </h2>
            <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[720px]" style={{ color: "#6B6A63" }}>
              <p>I also work with agencies that need experienced senior design support for ongoing client work — behind the scenes, with your client relationship as the priority.</p>
              <p>The engagement structure is the same: reserved monthly capacity applied to what your account needs most, delivered to your standard and timeline.</p>
              <p>Most of that work is client-confidential. Additional context is available in a focused conversation.</p>
            </div>
            <div className="mt-10 md:mt-14">
              <a
                href="/contact"
                className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
              >
                Start a conversation →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Proof block — Turno placeholder; swap for Pendulum testimonial when available */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
            <div className="border border-faint p-8 md:p-12 lg:p-16 max-w-[760px]">
              <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-6">
                Featured work
              </div>
              <p className="font-serif text-[22px] md:text-[30px] font-normal leading-[1.2] text-ink tracking-[-0.02em] mb-8">
                A content system for Turno — digital guide, eBook, and print — generated 8,000+ unique views, 800+ eBook downloads, and a 65% conversion rate for new signups.
              </p>
              <a
                href="/work"
                className="font-sans text-[16px] text-muted hover:text-ink transition-colors"
              >
                View selected work →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full" style={{ backgroundColor: '#2D3D46' }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
            <div className="max-w-[700px]">
              <h2
                className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
                style={{ color: "#F4F3EF" }}
              >
                Have recurring design needs?<br className="hidden lg:block" /> <em className="italic">Tell me about the work.</em>
              </h2>
              <p
                className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14 max-w-[500px]"
                style={{ color: "#C8C2BA" }}
              >
                Describe what your team produces regularly, what is slowing it down, and what kind of support would make the process easier. I will help determine whether ongoing support or a defined project is the better fit.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                <a
                  href="/contact"
                  className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                >
                  Start a conversation →
                </a>
                <a
                  href="/work"
                  className="font-sans text-[14px] text-[#C8C2BA] hover:text-[#F4F3EF] transition-colors"
                >
                  View work →
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

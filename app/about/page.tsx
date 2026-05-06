import type { Metadata, Viewport } from "next";

export const viewport: Viewport = { themeColor: "#3A4A52" };
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nathan Billman is a senior design partner with 20+ years working with marketing teams at Meta, Google, Capital One, ServiceNow, and more. Solo practice, direct engagement, no hand-holding.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10"><Nav /></div>
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
          mixBlendMode: "screen",
        }} />
        <div className="relative z-[1]">
        {/* Opening — copy left, photo right */}
        <section className="w-full bg-transparent border-b border-faint pt-[64px] md:pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-24 items-center">

            <FadeUp>
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6 md:mb-8">
                About
              </div>
              <h1 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-6 md:mb-8 text-balance">
                I&rsquo;m Nathan Billman. I run nnstudio.
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                A solo design practice for in-house marketing and brand teams — and the
                agencies that serve them — who need senior design output without the
                back-and-forth.
              </p>
            </FadeUp>

            <div className="flex items-center justify-start md:justify-center">
              <div className="w-[200px] md:w-[280px] aspect-square overflow-hidden">
                <Image
                  src="/nathan-billman.jpg"
                  alt="Nathan Billman"
                  width={280}
                  height={280}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
        </section>
        </div>
      </div>

      {/* Body sections */}
      <section className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(253,252,248,0.8) 0%, transparent 55%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-24">
          <div className="max-w-[1040px] mx-auto">

            <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  The practice.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                <p>
                  I&rsquo;ve spent 20+ years designing for B2B organizations across regulated
                  industries — healthcare, fintech, global tech platforms, cybersecurity,
                  logistics, and more. The brands I&rsquo;ve worked with operate under strict
                  standards, tight timelines, and multi-team stakeholder review. That
                  environment shaped how I work.
                </p>
                <p>
                  What it produced is a practice most designers don&rsquo;t have.
                  I build and maintain Figma-based design systems — variables, tokens,
                  component libraries, dev-ready handoff — and I produce high-fidelity Adobe
                  marketing assets: eBooks, whitepapers, sales decks, print collateral,
                  infographics. Most designers live in one world. I operate in both, which
                  means one partner covering every format with full brand consistency.
                </p>
              </div>
            </div>
            </FadeUp>

            <div className="border-t border-faint" />

            <FadeUp delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  How I work.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                <p>
                  I take the brief, ask the right questions once, and deliver. That&rsquo;s not a
                  tagline — it&rsquo;s how every engagement runs in practice.
                </p>
                <p>
                  Senior-level judgment means I&rsquo;m not asking you to manage me. I know what
                  information I need upfront, I know when something is off-brand before it
                  becomes a revision cycle, and I know how to produce files your team can
                  actually maintain. No hand-holding, no missed deadlines, no final assets that
                  create more work than they solve.
                </p>
                <p>
                  I work directly with marketing and brand teams at B2B organizations, and
                  as white-label senior capacity for agencies. Either way, the work is the
                  same: take the brief, ask the right questions once, and deliver.
                </p>
              </div>
            </div>
            </FadeUp>

            <div className="border-t border-faint" />

            <FadeUp delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  A note on scale.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                <p>
                  nnstudio is intentionally small. I work with a limited number of clients at a
                  time — that&rsquo;s not a constraint, it&rsquo;s the point. The responsiveness and
                  quality you get from working with me directly depends on keeping the practice
                  focused.
                </p>
                <p>
                  You&rsquo;re not getting handed off. You&rsquo;re working with me.
                </p>
              </div>
            </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="w-full" style={{ backgroundColor: '#2D3D46' }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
          <div className="max-w-[680px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-10 md:mb-14"
              style={{ color: "#F4F3EF" }}
            >
              If that&rsquo;s the kind of design partner you&rsquo;re looking for —{" "}
              <em className="italic">let&rsquo;s talk.</em>
            </h2>
            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
          </div>
          </FadeUp>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

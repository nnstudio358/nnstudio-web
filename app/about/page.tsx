import type { Metadata, Viewport } from "next";

export const viewport: Viewport = { themeColor: "#3A4A52" };
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nathan Billman is an independent senior design partner with 20+ years supporting marketing teams at Meta, Google, Capital One, ServiceNow, and more. Direct collaboration across digital, content, and print.",
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
                I&rsquo;m Nathan Billman. nnstudio is my independent design practice.
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                Independent design support for in-house marketing and brand teams — and
                the agencies that serve them — who need experienced execution without
                unnecessary back-and-forth.
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
                </p>
                <p>
                  I build scalable digital systems and long-form marketing content under
                  the same brand standards — from shared UI patterns and interface design
                  to eBooks, reports, presentations, and print materials.
                </p>
                <p>
                  Most teams split that work across multiple vendors. I don&rsquo;t.
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
                  Good design support should make projects easier to move forward, not
                  harder to manage.
                </p>
                <p>
                  I ask the right questions early, work collaboratively, and keep the
                  process clear from start to delivery.
                </p>
                <p>
                  Senior-level judgment means understanding what matters upfront, spotting
                  problems before they become revision cycles, and delivering files your
                  team can actually maintain.
                </p>
                <p>
                  Clear communication, reliable execution, and no unnecessary friction.
                </p>
              </div>
            </div>
            </FadeUp>

            <div className="border-t border-faint" />

            <FadeUp delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  Small by design.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                <p>
                  nnstudio is intentionally focused. I work with a limited number of clients
                  at a time so the work stays responsive, consistent, and directly connected
                  to the person doing it.
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
          <div className="max-w-[600px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8 max-w-[460px]"
              style={{ color: "#F4F3EF" }}
            >
              Looking for a consistent design partner?
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14 max-w-[525px]" style={{ color: "#C8C2BA" }}>
              I work directly with a small number of clients at a time so the
              work stays focused, responsive, and handled by the person you hired.
            </p>
            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Start a conversation →
            </a>
          </div>
          </FadeUp>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

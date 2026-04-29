import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nathan Billman is a senior design partner with 20+ years working with enterprise marketing teams at Meta, Google, Capital One, ServiceNow, and more. Solo practice, direct engagement, no hand-holding.",
};
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* Opening — copy left (2/3), photo right (1/3) */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-20">
          <div className="grid grid-cols-[2fr_1fr] gap-24 items-center">

            {/* Left — intro copy */}
            <div>
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-8">
                About
              </div>
              <h1 className="font-serif text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8">
                I&rsquo;m Nathan Billman. I run nnstudio.
              </h1>
              <p className="font-sans text-[19px] leading-[1.65] font-light max-w-[680px]" style={{ color: "#6B6A63" }}>
                A solo design practice for in-house marketing and brand teams — and the
                agencies that serve them — who need senior design output without the
                management overhead.
              </p>
            </div>

            {/* Right — photo */}
            <div className="flex items-center justify-center">
              <div className="w-[280px] aspect-square overflow-hidden">
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

      {/* Body sections — spine container */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-16 py-24">
          <div className="max-w-[1040px] mx-auto">

            {/* The practice */}
            <div className="grid grid-cols-[1fr_2fr] gap-16 px-14 py-16">
              <div>
                <h2 className="font-serif text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  The practice.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                <p>
                  I&rsquo;ve spent 20+ years designing for enterprise and complex organizations —
                  regulated healthcare, enterprise fintech, global tech platforms,
                  cybersecurity, logistics, and more. The brands I&rsquo;ve worked with operate
                  under strict standards, tight timelines, and multi-team stakeholder review.
                  That environment shaped how I work.
                </p>
                <p>
                  What it produced is a dual-stack practice that most designers don&rsquo;t have.
                  I build and maintain Figma-based design systems — variables, tokens,
                  component libraries, dev-ready handoff — and I produce high-fidelity Adobe
                  marketing assets: eBooks, whitepapers, sales decks, print collateral,
                  infographics. Most designers live in one world. I operate in both, which
                  means one partner covering every format with full brand consistency.
                </p>
              </div>
            </div>

            <div className="border-t border-faint" />

            {/* How I work */}
            <div className="grid grid-cols-[1fr_2fr] gap-16 px-14 py-16">
              <div>
                <h2 className="font-serif text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  How I work.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
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
                  I work directly with marketing and brand directors at enterprise
                  organizations, and as white-label senior capacity for agencies on complex
                  projects. In both cases, the commitment is the same: I show up at the level
                  the work requires.
                </p>
              </div>
            </div>

            <div className="border-t border-faint" />

            {/* A note on scale */}
            <div className="grid grid-cols-[1fr_2fr] gap-16 px-14 py-16">
              <div>
                <h2 className="font-serif text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                  A note on scale.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
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

          </div>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="w-full bg-ink">
        <div className="max-w-[1440px] mx-auto px-16 py-32">
          <div className="max-w-[680px]">
            <h2
              className="font-serif text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-14"
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
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

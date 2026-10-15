import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import Link from "next/link";

export const viewport: Viewport = { themeColor: "#2D3D46" };

export const metadata: Metadata = {
  title: "Turno — nnstudio",
  description:
    "A content system across a 70,000-word hardcover book, eBook, and website content hub that converted 65% of visitors into new signups.",
};

const METRICS = [
  { value: "8,000+", label: "Unique views" },
  { value: "800+", label: "eBook downloads" },
  { value: "65%", label: "Conversion rate for new signups" },
];

export default function TurnoCaseStudy() {
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
                <Link
                  href="/work"
                  className="inline-block font-sans text-[13px] tracking-[0.04em] text-muted hover:text-ink transition-colors mb-10"
                >
                  ← Work
                </Link>
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-3">
                  Turno
                </div>
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase mb-10" style={{ color: "#8A8A82" }}>
                  UI design · eBook · Print &nbsp;·&nbsp; Hospitality / Short-term rental
                </div>
                <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[64px] font-normal leading-[1.08] text-ink tracking-[-0.02em] max-w-[820px]">
                  A content system that converted 65% of visitors into new signups.
                </h1>
              </FadeUp>
            </div>
          </section>
        </div>
      </div>

      {/* Feature image */}
      <div className="w-full aspect-[3/2] md:aspect-[16/7] overflow-hidden flex gap-px border-b border-faint" style={{ background: "var(--color-faint)" }}>
        <div className="relative flex-[3] overflow-hidden" style={{ background: "#146259" }}>
          <div className="absolute" style={{ inset: "8px" }}>
            <Image
              src="/work-turno-browser.png"
              alt="Turno — How to Start an Airbnb digital guide displayed in browser"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ flex: 2, background: "#1B7E72" }}>
          <Image
            src="/work-turno-book.png"
            alt="Turno — 70,000-word hardcover book print production"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Body sections */}
      <section className="w-full bg-bg border-b border-faint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(253,252,248,0.8) 0%, transparent 55%)",
          mixBlendMode: "screen",
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-24">
          <div className="max-w-[1040px] mx-auto">

            <FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
                <div>
                  <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                    The brief.
                  </h2>
                </div>
                <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                  <p>
                    Turno came in with a defined scope: a hardcover book for an upcoming trade show.
                    They had already drafted most of the content. The timeline was fixed — the book
                    needed to be in hand before the event.
                  </p>
                  <p>
                    Nathan designed the hardcover book, eBook, and content hub end-to-end, and
                    coordinated print production through a partner he brought to the project.
                  </p>
                </div>
              </div>
            </FadeUp>

            <div className="border-t border-faint" />

            <FadeUp delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
                <div>
                  <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                    What changed.
                  </h2>
                </div>
                <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                  <p>
                    Through kickoff meetings with the full Turno team, it became clear the content
                    they had could reach further than a single print piece. Nathan proposed adding a
                    digital eBook and a content hub built directly into the Turno site.
                  </p>
                  <p>
                    The scope expanded — but so did the team&rsquo;s commitment to it. Once the direction
                    was set, the Turno team moved quickly: revising content for digital formats,
                    aligning on the content hub structure, and making decisions fast enough to keep
                    everything on schedule.
                  </p>
                  <p>
                    The outcome was a collaboration in the real sense — not a handoff, but a team
                    working toward the same thing.
                  </p>
                </div>
              </div>
            </FadeUp>

            <div className="border-t border-faint" />

            <FadeUp delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
                <div>
                  <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
                    The challenge.
                  </h2>
                </div>
                <div className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                  <p>
                    Keeping print and digital consistent when they are built on completely different systems.
                  </p>
                  <p>
                    The hardcover book offered full design control. The eBook allowed similar
                    flexibility. The content hub was different — it had to work inside Turno&rsquo;s
                    existing CMS, using their components to make the build feasible for their team.
                  </p>
                  <p>
                    The design problem was carrying the same colors, typography, and visual logic
                    into a constrained system without the output looking like a compromise.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Secondary images */}
      <div className="w-full border-b border-faint flex gap-px overflow-hidden" style={{ background: "var(--color-faint)" }}>
        <div className="relative flex-1 aspect-[4/3] overflow-hidden">
          <Image
            src="/work-turno-laptop.png"
            alt="Turno — content hub displayed on laptop"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="relative flex-1 aspect-[4/3] overflow-hidden">
          <Image
            src="/work-turno-tablet.png"
            alt="Turno — eBook displayed on tablet"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Outcome + Testimonial */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-24">

          <FadeUp>
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-muted mb-10">
              The outcome
            </div>

            <div className="border border-faint flex flex-col sm:flex-row mb-20 md:mb-28 max-w-[900px]">
              {METRICS.map(({ value, label }) => (
                <div key={label} className="flex-1 px-6 py-8 md:px-12 md:py-10 text-center">
                  <div className="font-serif text-[36px] font-normal tracking-[-0.02em] text-amber">
                    <CountUp value={value} />
                  </div>
                  <div className="font-sans text-[17px] font-light mt-2 text-ink">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="max-w-[760px] pl-0 md:pl-14 border-l-2 border-amber">
              <blockquote className="pl-8 md:pl-10">
                <p className="font-serif text-[20px] md:text-[24px] font-normal leading-[1.55] text-ink tracking-[-0.01em] mb-6">
                  &ldquo;What started as a fairly narrow project evolved into a beautifully designed
                  70,000-word hardcover book, eBook, and website content hub. Because the scope
                  expanded significantly over time, it was critical to work with someone who could
                  help guide the process strategically, not just execute design work. Nathan kept
                  me informed every step of the way while also bringing thoughtful ideas and
                  recommendations that elevated the final outcome far beyond the original scope.
                  Each piece helped position Turno as an industry thought leader and strengthened
                  our overall brand authority.&rdquo;
                </p>
                <div className="font-sans text-[13px] font-light text-ink mb-1">
                  Nicolette M.
                </div>
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-muted">
                  Turno
                </div>
              </blockquote>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="w-full" style={{ backgroundColor: "#2D3D46" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/work"
                className="inline-block font-sans text-[14px] tracking-[0.04em] border border-[#6B7E89] text-[#C8C2BA] px-9 py-4 hover:border-[#C8C2BA] hover:text-[#F4F3EF] transition-colors"
              >
                ← Back to work
              </Link>
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

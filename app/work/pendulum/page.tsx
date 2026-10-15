import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";

// Copy is the ChatGPT final in "Pendulum case study — handoff" (03 Copy Handoff), Oct 15, 2026.
// Images come from the finished files in Dropbox (Projects > Complete > Pendulum).

export const viewport: Viewport = { themeColor: "#2D3D46" };

export const metadata: Metadata = {
  title: "Pendulum Intelligence — nnstudio",
  description:
    "I designed the Brand Risk Report, its promotional assets and ad sets for other campaigns.",
};

const IMG = "/work/pendulum";
const BODY_COLOR = "#6B6A63";

const OPENERS = [
  { src: "opener-final-1", alt: "Brand Risk Report section opener: Narrow the Brand Risk Data Gap" },
  { src: "opener-final-2", alt: "Brand Risk Report section opener: The So What? of Brand Data" },
  { src: "opener-final-3", alt: "Brand Risk Report section opener: Gaining Buy-In for Brand Intelligence" },
  { src: "opener-final-4", alt: "Brand Risk Report section opener: How Can You Use Brand Intelligence Data?" },
  { src: "opener-final-5", alt: "Brand Risk Report section opener: Brand Reputation Monitoring Action Plan" },
];

const CAROUSEL = [
  { src: "carousel-1", alt: "LinkedIn carousel slide: a 12-month roadmap to managing crises before they go viral" },
  { src: "carousel-2", alt: "LinkedIn carousel slide: Phase 1, Audit" },
  { src: "carousel-3", alt: "LinkedIn carousel slide: Phase 2, Converge" },
  { src: "carousel-4", alt: "LinkedIn carousel slide: Phase 3, Automate" },
  { src: "carousel-5", alt: "LinkedIn carousel slide: Phase 4, Govern" },
  { src: "carousel-6", alt: "LinkedIn carousel slide: download the 2026 Brand Risk Report" },
];

const CAMPAIGN_ADS = [
  { src: "campaign-bofu-1", alt: "LinkedIn ad: Can your team answer these right now?" },
  { src: "campaign-tofu-1", alt: "LinkedIn ad: Your brand is all over video, with a photographic callout" },
  { src: "campaign-bofu-2", alt: "LinkedIn ad: Your brand is being talked about, with a data diagram" },
  { src: "campaign-tofu-2", alt: "LinkedIn ad: 15x more data, a typographic case-study ad" },
  { src: "campaign-bofu-3", alt: "LinkedIn ad: Three formats missed by your current listening tool" },
  { src: "campaign-tofu-3", alt: "LinkedIn ad: You launched the campaign, with photography and interface callouts" },
  { src: "campaign-bofu-4", alt: "LinkedIn ad: Your brand strategy is built on 25% of the story" },
  { src: "campaign-tofu-4", alt: "LinkedIn ad: Your audience is talking about your brand, with a statistic callout" },
];

function Section({
  title,
  children,
  first = false,
}: {
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <FadeUp delay={first ? 0 : 0.05}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 px-0 md:px-14 py-10 md:py-16">
        <div>
          <h2 className="font-serif text-[24px] md:text-[28px] font-normal text-ink tracking-[-0.02em] leading-[1.2]">
            {title}
          </h2>
        </div>
        <div
          className="space-y-6 font-sans text-[16px] md:text-[17px] leading-[1.65] font-light"
          style={{ color: BODY_COLOR }}
        >
          {children}
        </div>
      </div>
    </FadeUp>
  );
}

function TextBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full bg-bg border-b border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-6 md:py-10">
        <div className="max-w-[1040px] mx-auto">{children}</div>
      </div>
    </section>
  );
}

function VisualBand({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "tint";
}) {
  return (
    <section
      className="w-full border-b border-faint"
      style={{ background: tone === "tint" ? "#E4E2DC" : "var(--color-offwhite)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-16">
        {children}
      </div>
    </section>
  );
}

function Shot({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={`${IMG}/${src}.jpg`}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={`w-full h-auto block ${className}`}
    />
  );
}

export default function PendulumCaseStudy() {
  return (
    <main>
      {/* Introduction */}
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10"><Nav /></div>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
            mixBlendMode: "screen",
          }}
        />
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
                <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[64px] font-normal leading-[1.08] text-ink tracking-[-0.02em] max-w-[820px]">
                  Pendulum Intelligence
                </h1>
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mt-5 mb-10 md:mb-12">
                  Editorial design, paid social and ongoing marketing support
                </div>
                <div
                  className="max-w-[720px] space-y-6 font-sans text-[17px] md:text-[19px] leading-[1.6] font-light"
                  style={{ color: BODY_COLOR }}
                >
                  <p>
                    Pendulum&rsquo;s marketing team already had a brand guide, an illustration library
                    and examples of social content. My first assignment was to extend that visual
                    direction into the Brand Risk Report, a research publication with editorial
                    layouts, charts, tables and statistical callouts.
                  </p>
                  <p>
                    That first report led to ongoing work with the team on paid social, webinar
                    promotions, email graphics, guides and other marketing materials.
                  </p>
                </div>
              </FadeUp>
            </div>
          </section>
        </div>
      </div>

      {/* Feature: report cover and a data spread */}
      <div
        className="w-full border-b border-faint grid grid-cols-1 md:grid-cols-[1fr_2.6fr] gap-px"
        style={{ background: "var(--color-faint)" }}
      >
        <div className="p-6 md:p-10 lg:p-14 flex items-center justify-center" style={{ background: "#2A1F5C" }}>
          <Image
            src={`${IMG}/report-cover.jpg`}
            alt="Cover of the 2026 Pendulum Brand Risk Report"
            width={1000}
            height={1294}
            sizes="(min-width: 768px) 25vw, 70vw"
            preload
            className="w-[70%] md:w-full max-w-[420px] h-auto shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
        <div className="p-4 md:p-10 lg:p-14 flex items-center" style={{ background: "var(--color-offwhite)" }}>
          <Image
            src={`${IMG}/report-spread-scenario.jpg`}
            alt="Brand Risk Report spread: a real-world scenario with research statistics and a channel table"
            width={1800}
            height={1165}
            sizes="(min-width: 768px) 70vw, 100vw"
            preload
            className="w-full h-auto shadow-[0_10px_30px_rgba(44,50,54,0.12)]"
          />
        </div>
      </div>

      {/* Extending the brand into a research report */}
      <TextBand>
        <Section title="Extending the brand into a research report" first>
          <p>
            Working from Georgina Ford&rsquo;s content and design notes, I developed several
            treatments for the executive summary and section openings. This gave the team concrete
            options for how the existing brand could work across a longer publication.
          </p>
          <p>
            I recommended a photographic treatment for the section openings, with interface-style
            callouts. It gave each section a clear introduction and drew on an element already
            present in Pendulum&rsquo;s visual language. The final report used that approach
            throughout, with callouts tailored to each section&rsquo;s subject.
          </p>
          <p>
            The completed 20-page report combined those openings with layouts for research
            findings, charts, tables and a four-phase roadmap. I had to make pages with very
            different amounts and types of information feel like parts of the same publication.
          </p>
        </Section>
      </TextBand>

      <VisualBand>
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {OPENERS.map((o, i) => (
              <div key={o.src} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
                <Shot
                  src={o.src}
                  alt={o.alt}
                  width={1000}
                  height={549}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
                />
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="mt-8 md:mt-14 max-w-[1200px] mx-auto">
            <Shot
              src="report-spread-so-what"
              alt="Brand Risk Report spread: The So What? of Brand Data, with a social listening versus brand intelligence comparison"
              width={1800}
              height={1165}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="shadow-[0_10px_30px_rgba(44,50,54,0.12)]"
            />
          </div>
        </FadeUp>
      </VisualBand>

      {/* Carrying the report into its promotion */}
      <TextBand>
        <Section title="Carrying the report into its promotion" first>
          <p>
            I carried visual elements from the report into the promotional work. The four-phase
            roadmap, for example, became a LinkedIn carousel, so the promotion showed readers
            something they&rsquo;d find in the report itself.
          </p>
          <p>
            I also designed ads, an email banner and other promotional assets, working with the
            marketing team&rsquo;s supplied copy and direction.
          </p>
        </Section>
      </TextBand>

      <VisualBand>
        <FadeUp>
          <div className="max-w-[1200px] mx-auto">
            <Shot
              src="report-spread-roadmap"
              alt="Brand Risk Report spread: the four-phase roadmap of Audit, Converge, Automate and Govern"
              width={1800}
              height={1165}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="shadow-[0_10px_30px_rgba(44,50,54,0.12)]"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="mt-8 md:mt-12 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {CAROUSEL.map((c) => (
              <Shot
                key={c.src}
                src={c.src}
                alt={c.alt}
                width={800}
                height={800}
                sizes="(min-width: 768px) 16vw, 33vw"
              />
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 items-center">
            <Shot
              src="promo-ad-report"
              alt="LinkedIn ad promoting the 2026 Brand Risk Report"
              width={800}
              height={800}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="flex justify-center">
              <Image
                src={`${IMG}/promo-email-banner.jpg`}
                alt="Email banner promoting the 2026 Pendulum Brand Risk Report"
                width={600}
                height={200}
                sizes="(min-width: 768px) 600px, 100vw"
                className="w-full max-w-[600px] h-auto shadow-[0_10px_30px_rgba(44,50,54,0.12)]"
              />
            </div>
          </div>
        </FadeUp>
      </VisualBand>

      {/* Reported results */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20">
          <div className="max-w-[1040px] mx-auto px-0 md:px-14">
            <FadeUp>
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-muted mb-8">
                Reported campaign results
              </div>
              <div className="border border-faint flex flex-col sm:flex-row max-w-[760px]">
                <div className="flex-1 px-6 py-8 md:px-10 md:py-10 text-center border-b sm:border-b-0 sm:border-r border-faint">
                  <div className="font-sans text-[13px] tracking-[0.04em] text-muted mb-1">approximately</div>
                  <div className="font-serif text-[40px] md:text-[44px] font-normal tracking-[-0.02em] text-amber leading-none">280</div>
                  <div className="font-sans text-[17px] font-light mt-3 text-ink">report downloads</div>
                </div>
                <div className="flex-1 px-6 py-8 md:px-10 md:py-10 text-center">
                  <div className="font-sans text-[13px] tracking-[0.04em] text-muted mb-1">at least</div>
                  <div className="font-serif text-[40px] md:text-[44px] font-normal tracking-[-0.02em] text-amber leading-none">150</div>
                  <div className="font-sans text-[17px] font-light mt-3 text-ink">marketing-qualified leads</div>
                </div>
              </div>
              <p
                className="mt-8 max-w-[640px] font-sans text-[16px] md:text-[17px] leading-[1.65] font-light"
                style={{ color: BODY_COLOR }}
              >
                Georgina Ford, who led the report&rsquo;s marketing, reported these results for the
                campaign. They reflect the wider team&rsquo;s work, which my design supported.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Different campaigns needed different creative */}
      <TextBand>
        <Section title="Different campaigns needed different creative" first>
          <p>
            The ongoing paid social work covered product messaging, reports, webinars and other
            campaigns. Some briefs came with copy and a rough visual concept. Others started with
            copy alone, and I developed the visual direction from there.
          </p>
          <p>
            Depending on the message, I worked with metaphors, illustrations, photography and
            statistical layouts. I kept the work within Pendulum&rsquo;s established brand while
            changing the concept and composition to suit each campaign.
          </p>
          <p>
            I generally presented one recommended direction, adding alternatives when there was a
            useful variation to explore.
          </p>
        </Section>
      </TextBand>

      <VisualBand tone="tint">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {CAMPAIGN_ADS.map((a) => (
              <Shot
                key={a.src}
                src={a.src}
                alt={a.alt}
                width={800}
                height={800}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
              />
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="mt-8 md:mt-12 flex justify-center">
            <Image
              src={`${IMG}/campaign-webinar-email.jpg`}
              alt="Email hero banner for an on-demand Pendulum webinar, co-branded with Hershey"
              width={600}
              height={250}
              sizes="(min-width: 768px) 600px, 100vw"
              className="w-full max-w-[600px] h-auto shadow-[0_10px_30px_rgba(44,50,54,0.12)]"
            />
          </div>
        </FadeUp>
      </VisualBand>

      {/* Supporting the next piece of work */}
      <TextBand>
        <Section title="Supporting the next piece of work" first>
          <p>
            The partnership also included guides and worksheets. I established reusable layouts,
            typography and form treatments for the initial documents, then carried those decisions
            into later pieces.
          </p>
          <p>
            I also developed a LinkedIn Ad Style Guide to sit alongside the existing brand book.
            Its logo guidance focused on clear space and contrast, with approved placement options.
            Feedback from the marketing team helped refine the guidance on text length and white
            space.
          </p>
        </Section>
      </TextBand>

      <VisualBand>
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Shot
                src="guide-worksheet-cover"
                alt="Cover of the Brand Risk Readiness Audit and Detection Checklist worksheet"
                width={900}
                height={1165}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
              />
              <Shot
                src="guide-worksheet-page"
                alt="Worksheet page with a scored visibility audit form"
                width={900}
                height={1165}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <Shot
                src="guide-brand-health-cover"
                alt="Cover of the Beyond NPS brand health guide"
                width={1400}
                height={787}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
              />
              <Shot
                src="guide-brand-health-page"
                alt="Brand health guide page assessing what brand tracking can see"
                width={1400}
                height={787}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="shadow-[0_6px_18px_rgba(44,50,54,0.10)]"
              />
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-3 md:p-4 border border-faint">
              <Shot
                src="style-guide-layout"
                alt="LinkedIn Ad Style Guide page on layout: one message and one focal point, with logo space and contrast guidance"
                width={1600}
                height={552}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="bg-white p-3 md:p-4 border border-faint">
              <Shot
                src="style-guide-word-count"
                alt="LinkedIn Ad Style Guide page with word-count ranges for each part of an ad"
                width={1600}
                height={561}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </FadeUp>
      </VisualBand>

      {/* Credits */}
      <TextBand>
        <Section title="Credits" first>
          <p>
            I was responsible for the visual design across the engagement, including final files.
            Pendulum supplied its existing brand and illustration library. The marketing team
            supplied content and campaign requirements, reviewed the work and managed distribution.
          </p>
          <p>
            Georgina Ford wrote the report content and led its marketing. Daniella Sampson
            commissioned and approved the work. Jennifer Torres coordinated marketing requests and
            feedback and managed the paid social campaigns.
          </p>
        </Section>
      </TextBand>

      {/* Closing */}
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
              <Link
                href="/contact"
                className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
              >
                Start a conversation →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

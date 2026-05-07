import type { Metadata, Viewport } from "next";
import React from "react";

export const viewport: Viewport = { themeColor: "#3A4A52" };

export const metadata: Metadata = {
  title: "Work",
  description:
    "Senior B2B design work across campaigns, content systems, digital products, and long-form marketing — built for enterprise teams, regulated industries, and agency partners.",
};
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import CountUp from "@/components/CountUp";

const FEATURED = [
  {
    client: "Turno",
    headline: <>A content system that converted 65% of visitors into new signups.</>,
    industry: "Hospitality / Short-term rental",
    deliverables: "UI design · eBook · Print",
    body: [
      "A single content system designed to work across three formats — a digital guide, a downloadable eBook, and a print coffee table book — all for the same audience, under the same brand.",
      "The challenge was keeping the experience consistent across digital, downloadable, and print formats without losing clarity or creating disconnected brand experiences.",
    ],
    metrics: [
      { value: "8,000+", label: "Unique views" },
      { value: "800+", label: "eBook downloads" },
      { value: "65%", label: "Conversion rate" },
    ],
    image: "/work-turno-browser.png",
    imagePosition: "center",
    imageFit: "contain",
    imagePadding: "8px 8px",
    primaryBg: "#146259",
    headlineMaxWidth: "640px",
    secondaryImage: "/work-turno-book.png",
    secondaryImagePosition: "center",
    secondaryFlex: 2,
    secondaryBg: "#1B7E72",
  },
  {
    client: "OutSystems",
    headline: "Turning 1,200 survey responses into award-winning thought leadership.",
    industry: "Enterprise Software / Low-code development",
    deliverables: "Research report · eBook · Infographic",
    body: [
      "A research-backed content system designed to position OutSystems as an authoritative voice on application development trends across long-form and campaign formats.",
      "The project translated more than 1,200 survey responses into an eBook and infographic system structured for both lead generation and readability — turning dense research into clear, usable content rather than pages of raw data.",
      "The work moved through OutSystems' full content and brand review process with a single structured brief upfront, delivering campaign-ready assets from the first round.",
    ],
    metrics: [{ value: "Finnys Award", label: "Best research-based content", logo: "/finnys-logo-accent.png" }],
    image: "/work-outsystems.png",
    imagePosition: "center",
    primaryBg: "#8E1116",
    secondaryImage: "/work-outsystems-infographic.jpg",
    secondaryImagePosition: "50% 30%",
  },
  {
    client: "SSC Intralinks",
    headline: <>An award-winning interactive built for enterprise review and engagement.</>,
    industry: "Fintech / Investor communications",
    deliverables: "Interactive · Assessment",
    body: [
      "An interactive assessment designed to help financial professionals evaluate their investor portal experience against modern platform expectations — while guiding users toward the Intralinks product naturally through the experience itself.",
      "The challenge was balancing engagement, clarity, and enterprise review requirements within a highly regulated brand environment. The interactive needed to feel genuinely useful first — not like a thinly veiled product pitch.",
      "The result was an interactive experience that felt useful first, supported product interest naturally, and held up through enterprise review without adding cleanup work for internal teams.",
    ],
    metrics: [
      { value: "Finnys Award", label: "Best interactive content" },
      { value: "775", label: "Visitors" },
      { value: "928", label: "clicks in 1,331 views" },
    ],
    headlineMaxWidth: "750px",
    bodyMaxWidth: "585px",
    video: "/work-intralinks.mp4",
  },
];

const MORE_WORK = [
  {
    client: "Meta Messenger",
    industry: "Technology / Sales enablement",
    description:
      "Sales enablement and marketing support across multiple Messenger initiatives — including pitch decks, partner materials, and campaign content built for large internal teams and evolving stakeholder review.",
    image: "/work-meta-messenger.png",
    imagePosition: "center",
  },
  {
    client: "WhatsApp",
    industry: "Technology / Communications",
    description:
      "Marketing and partner-facing content supporting civic engagement and nonprofit initiatives across the WhatsApp business platform.",
    image: "/work-whatsapp.png",
    imagePosition: "center",
  },
  {
    client: "Capital One Trade Credit",
    industry: "Fintech / Commercial banking",
    description:
      "Integrated campaign work spanning long-form content, digital advertising, and supporting sales materials — all built under strict enterprise brand standards.",
    image: "/work-capital-one.png",
    imagePosition: "center",
    imageBg: "rgba(119, 209, 236, 0.5)",
  },
  {
    client: "Broadridge",
    industry: "Fintech / Investor communications",
    description:
      "Ongoing long-form content support across capital markets, wealth management, and investor communications — designed for consistency across multiple enterprise verticals and stakeholder groups.",
    image: "/work-broadridge.jpg",
    imagePosition: "top",
  },
  {
    client: "Regnology",
    industry: "RegTech / Regulatory compliance",
    description:
      "Complex regulatory subject matter translated into clear visual content designed for readability, engagement, and enterprise credibility.",
    image: "/work-regnology.png",
    imagePosition: "left top",
    imageBg: "#08A74F",
  },
  {
    client: "DataStax",
    industry: "Data / Technology",
    description:
      "Multi-format campaign and content design across technical subject matter — maintaining consistency across a highly recognizable brand system.",
    image: "/work-datastax.jpg",
    imagePosition: "right",
  },
];


export default function WorkPage() {
  return (
    <main>
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10"><Nav /></div>
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
          mixBlendMode: "screen",
        }} />
        <div className="relative z-[1]">
        {/* Page intro */}
        <section className="w-full bg-transparent border-b border-faint pt-[64px] md:pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
          <FadeUp>
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
              Work
            </div>
            <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-6 md:mb-8">
              Work built for complex<br className="hidden lg:block" /> marketing environments.
            </h1>
            <div className="max-w-[600px]">
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-8 md:mb-10" style={{ color: "#6B6A63" }}>
                Featured case studies include full context and outcomes. For
                confidential client work, schedule a portfolio review to see
                additional projects across healthcare, fintech, and agency
                partnerships.
              </p>
              <a
                href="/contact"
                className="inline-block font-sans text-[14px] tracking-[0.04em] border border-faint text-muted px-9 py-4 hover:text-ink hover:border-ink transition-colors"
                style={{ backgroundColor: '#EDECE8' }}
              >
                Schedule portfolio review →
              </a>
            </div>
          </FadeUp>
        </div>
        </section>
        </div>
      </div>

      {/* Featured work */}
      <section className="w-full bg-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(253,252,248,0.7) 0%, transparent 60%)',
          mixBlendMode: 'screen',
        }} />
        <div className="relative z-[1] max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20">
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-8">
            Featured case studies
          </div>

          <div className="divide-y divide-faint">
            {FEATURED.map(({ client, headline, deliverables, industry, body, metrics, image, imagePosition, imageFit, imagePadding, primaryBg, headlineMaxWidth, bodyMaxWidth, secondaryImage, secondaryImagePosition, secondaryFlex, secondaryBg, video }: { client: string; headline: React.ReactNode; deliverables: string; industry: string; body: string[]; metrics: { value: string; label: string; logo?: string }[]; image?: string; imagePosition?: string; imageFit?: string; imagePadding?: string; primaryBg?: string; headlineMaxWidth?: string; bodyMaxWidth?: string; secondaryImage?: string; secondaryImagePosition?: string; secondaryFlex?: number; secondaryBg?: string; video?: string }) => (
              <FadeUp key={client}>
                <div className="py-12 md:py-20">

                  {/* Client + industry */}
                  <div className="mb-6">
                    <div className="font-sans text-[12px] tracking-[0.18em] uppercase" style={{ color: "#8A8A82" }}>
                      {client}
                    </div>
                    <div className="font-sans text-[12px] tracking-[0.18em] uppercase" style={{ color: "#8A8A82" }}>
                      {industry}
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10" style={{ maxWidth: headlineMaxWidth ?? "820px" }}>
                    {headline}
                  </h2>

                  {/* Body copy */}
                  <div className="space-y-5 mb-16" style={{ maxWidth: bodyMaxWidth ?? '560px' }}>
                    {body.map((para, i) => (
                      <p key={i} className="font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Media area */}
                  {video ? (
                    <div className="w-full border border-faint overflow-hidden mb-12">
                      <video autoPlay muted loop playsInline className="w-full h-auto block">
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  ) : image && secondaryImage ? (
                    <div className="w-full aspect-[3/2] md:aspect-[16/7] border border-faint overflow-hidden mb-12 flex gap-px" style={{ background: "var(--color-faint)" }}>
                      <div className="relative flex-[3] overflow-hidden" style={{ background: primaryBg ?? "#EDECE8" }}>
                        {imagePadding ? (
                          <div className="absolute" style={{ inset: imagePadding }}>
                            <Image src={image} alt={client} fill style={{ objectFit: "contain", objectPosition: "center" }} />
                          </div>
                        ) : (
                          <Image src={image} alt={client} fill style={{ objectFit: imageFit === "contain" ? "contain" : "cover", objectPosition: imagePosition ?? "center" }} />
                        )}
                      </div>
                      <div className="relative overflow-hidden" style={{ flex: secondaryFlex ?? 1, background: secondaryBg ?? "#EDECE8" }}>
                        <Image src={secondaryImage} alt="" fill className="object-cover" style={{ objectPosition: secondaryImagePosition ?? "top" }} />
                      </div>
                    </div>
                  ) : image ? (
                    <div className="relative w-full aspect-[3/2] md:aspect-[16/7] border border-faint overflow-hidden mb-12">
                      <Image src={image} alt={client} fill className="object-cover" style={{ objectPosition: imagePosition ?? "center" }} />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-[3/2] md:aspect-[16/7] border border-faint flex items-center justify-center mb-12"
                      style={{ background: "#E8E6E1" }}
                    >
                      <span className="font-sans text-[13px] text-muted tracking-[0.04em]">
                        {client} — images coming
                      </span>
                    </div>
                  )}

                  {/* Outcome */}
                  <div className="max-w-[1000px] mx-auto">
                    <div className="mb-6">
                      <div className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted mb-1">
                        The outcome
                      </div>
                      <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted">
                        {deliverables}
                      </div>
                    </div>

                    <div className="border border-faint flex flex-col sm:flex-row">
                      {metrics.map(({ value, label, logo }: { value: string; label: string; logo?: string }) => (
                        <div key={label} className="flex-1 px-6 py-8 md:px-12 md:py-10 text-center">
                          {logo ? (
                            <div className="flex items-center justify-center gap-3">
                              <Image src={logo} alt="" width={40} height={34} style={{ height: 34, width: "auto" }} />
                              <div className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.02em] text-amber">
                                <CountUp value={value} />
                              </div>
                            </div>
                          ) : (
                            <div className="font-serif text-[36px] font-normal tracking-[-0.02em] text-amber">
                              <CountUp value={value} />
                            </div>
                          )}
                          <div className="font-sans text-[17px] font-light mt-2 text-ink">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* More work grid */}
      <section className="w-full bg-bg border-t border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20">
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-10 md:mb-16">
            Additional work
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MORE_WORK.map(({ client, industry, description, image, imagePosition, imageBg }, index) => (
              <FadeUp key={client} delay={index * 0.07} className="h-full">
                <div className="flex flex-col border border-faint h-full transition-colors duration-500 hover:bg-offwhite">
                  {image ? (
                    <div className="relative w-full aspect-[4/3] border-b border-faint overflow-hidden" style={imageBg ? { background: imageBg } : undefined}>
                      <Image
                        src={image}
                        alt={client}
                        fill
                        className="object-cover"
                        style={{ objectPosition: imagePosition ?? "top" }}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-[4/3] border-b border-faint flex items-center justify-center"
                      style={{ background: "#E8E6E1" }}
                    >
                      <span className="font-sans text-[12px] text-muted tracking-[0.04em]">
                        {client}
                      </span>
                    </div>
                  )}

                  <div className="p-10 flex flex-col flex-1">
                    <div className="font-sans text-[12px] tracking-[0.18em] uppercase mb-6" style={{ color: "#8A8A82" }}>
                      {industry}
                    </div>
                    <h3 className="font-serif text-[22px] font-normal text-ink tracking-[-0.01em] mb-5">
                      {client}
                    </h3>
                    <p className="font-sans text-[15px] leading-[1.65] font-light flex-1" style={{ color: "#6B6A63" }}>
                      {description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gated CTA — dark */}
      <section className="w-full" style={{ backgroundColor: '#2D3D46' }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <FadeUp>
            <div className="max-w-[740px]">
              <h2
                className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
                style={{ color: "#F4F3EF" }}
              >
                There&rsquo;s more to see.
              </h2>
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14" style={{ color: "#C8C2BA" }}>
                Much of the work is client-confidential — including projects delivered
                as white-label senior capacity for agencies. The full range,
                including regulated healthcare, additional fintech, and direct
                agency work, is available in a live portfolio review.
              </p>
              <a
                href="/contact"
                className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
              >
                Schedule portfolio review →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

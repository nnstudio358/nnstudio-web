import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Enterprise design work across fintech, technology, cybersecurity, and healthcare — eBooks, whitepapers, interactive content, design systems, and sales decks for brands including Meta, Google, Capital One, and OutSystems.",
};
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const FEATURED = [
  {
    client: "OutSystems",
    headline: "Turning 1,200 survey responses into award-winning thought leadership.",
    industry: "Enterprise Software / Low-code development",
    deliverables: "Research report · eBook · Infographic",
    body: [
      "A research-backed thought leadership system designed to establish OutSystems as the authoritative voice on application development trends — across an eBook and infographic.",
      "1,200+ survey responses needed to be translated into content that drove lead generation and brand authority — not just data presented on a page, but a designed narrative that moved readers toward action.",
      "The project ran through OutSystems' full content and brand review process. One brief, structured upfront. No revision cycles on the back end — assets delivered ready for campaign deployment.",
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
    headline: <>An interactive assessment that earned<br />928 clicks and a Finnys Award.</>,
    industry: "Fintech / Investor communications",
    deliverables: "Interactive · Assessment",
    body: [
      "An interactive assessment experience designed to help financial professionals benchmark their current investor portal against modern platform standards — and discover where they were falling behind.",
      "A traditional whitepaper wasn't going to cut through. The brief required an experience that engaged users, collected meaningful data, and moved them toward the Intralinks product — without feeling like a sales funnel.",
      "Intralinks operates under strict brand governance and multi-team sign-off. The interactive was scoped and built to pass their full approval process from the first submission — no post-delivery cleanup, no files that created more work than they solved.",
    ],
    metrics: [
      { value: "Finnys Award", label: "Best interactive content" },
      { value: "775", label: "Visitors" },
      { value: "928", label: "clicks in 1,331 views" },
    ],
    video: "/work-intralinks.mp4",
  },
  {
    client: "Turno",
    headline: <>A content system that converted 65%<br />of visitors into new signups.</>,
    industry: "Hospitality / Short-term rental",
    deliverables: "UI design · eBook · Print",
    body: [
      "A single content system designed to work across three formats — a digital guide, a downloadable eBook, and a print coffee table book — all for the same audience, under the same brand.",
      "Turno needed to reach Airbnb hosts at every stage of the content journey — discovery, depth, and offline. Three formats, one consistent brand treatment, built to convert.",
      "Three formats coordinated under a single brief meant the brand system had to hold across digital, PDF, and print production simultaneously. No consistency gaps, no reconciliation between vendors.",
    ],
    metrics: [
      { value: "8,000+", label: "Unique views" },
      { value: "800+", label: "eBook downloads" },
      { value: "65%", label: "Conversion rate" },
    ],
    image: "/work-turno-browser.png",
    imagePosition: "center",
    imageFit: "contain",
    imagePadding: "24px 48px",
    primaryBg: "#146259",
    headlineMaxWidth: "770px",
    secondaryImage: "/work-turno-book.png",
    secondaryImagePosition: "center",
    secondaryFlex: 2,
    secondaryBg: "#1B7E72",
  },
];

const MORE_WORK = [
  {
    client: "Meta Messenger",
    deliverables: "Sales enablement · Pitch decks · Marketing guides",
    industry: "Technology / Social media",
    description:
      "Sales enablement and external pitch design for Meta's Messenger platform — pitch decks, best practice guides, and marketing materials across multiple initiatives.",
    image: "/work-meta-messenger.png",
    imagePosition: "center",
  },
  {
    client: "WhatsApp",
    deliverables: "Sales enablement · Pitch decks · Vertical content",
    industry: "Technology / Communications",
    description:
      "Marketing and sales enablement design for WhatsApp's business platform, including vertical-specific content for civic engagement and nonprofit audiences.",
    image: "/work-whatsapp.png",
    imagePosition: "center",
  },
  {
    client: "Capital One Trade Credit",
    deliverables: "eBook · Infographic · Digital advertising",
    industry: "Fintech / Commercial banking",
    description:
      "Integrated campaign design across eBook, infographic, and digital advertising — three formats built around a unified campaign concept.",
    image: "/work-capital-one.png",
    imagePosition: "center",
    imageBg: "rgba(119, 209, 236, 0.5)",
  },
  {
    client: "Broadridge",
    deliverables: "eBooks · Whitepapers · Long-form content",
    industry: "Fintech / Investor communications",
    description:
      "Long-form content design across capital markets, wealth management, and asset management verticals — sustained enterprise engagement.",
    image: "/work-broadridge.jpg",
    imagePosition: "top",
  },
  {
    client: "Regnology",
    deliverables: "Infographic · Interactive",
    industry: "RegTech / Regulatory compliance",
    description:
      "Infographic and interactive content design for a global regulatory technology platform — complex compliance subject matter translated into clear, engaging visual content.",
    image: "/work-regnology.png",
    imagePosition: "left top",
    imageBg: "#08A74F",
  },
  {
    client: "DataStax",
    deliverables: "eBook · Whitepaper · Infographic",
    industry: "Data / Technology",
    description:
      "Content system design across eBook, whitepaper, and infographic formats — multiple subject matters all under a consistent, highly-recognizable brand treatment.",
    image: "/work-datastax.jpg",
    imagePosition: "right",
  },
];

function Deliverables({ value }: { value: string }) {
  return (
    <div className="border-t border-rule pt-4 font-sans text-[11px] tracking-[0.14em] uppercase text-muted">
      {value}
    </div>
  );
}

export default function WorkPage() {
  return (
    <main>
      <Nav />

      {/* Page intro */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
            Work
          </div>
          <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-6 md:mb-8">
            A selection of work across enterprise marketing and brand projects.
          </h1>
          <div className="max-w-[720px]">
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-8 md:mb-10" style={{ color: "#6B6A63" }}>
              Featured case studies include full context and outcomes. For
              client-confidential work, schedule a call to review the complete
              portfolio.
            </p>
            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] border border-faint text-muted px-9 py-4 hover:text-ink hover:border-ink transition-colors"
            >
              Let&rsquo;s talk →
            </a>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20">
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-8">
            Featured case studies
          </div>

          <div className="divide-y divide-faint">
            {FEATURED.map(({ client, headline, deliverables, industry, body, metrics, image, imagePosition, imageFit, imagePadding, primaryBg, headlineMaxWidth, secondaryImage, secondaryImagePosition, secondaryFlex, secondaryBg, video }: { client: string; headline: React.ReactNode; deliverables: string; industry: string; body: string[]; metrics: { value: string; label: string; logo?: string }[]; image?: string; imagePosition?: string; imageFit?: string; imagePadding?: string; primaryBg?: string; headlineMaxWidth?: string; secondaryImage?: string; secondaryImagePosition?: string; secondaryFlex?: number; secondaryBg?: string; video?: string }) => (
              <div key={client} className="py-20">

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

                {/* Body copy — merged summary + challenge */}
                <div className="space-y-5 max-w-[640px] mb-16">
                  {body.map((para, i) => (
                    <p key={i} className="font-sans text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Media area */}
                {video ? (
                  <div className="w-full aspect-[16/7] border border-faint overflow-hidden mb-12">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                ) : image && secondaryImage ? (
                  <div className="w-full aspect-[16/7] border border-faint overflow-hidden mb-12 flex gap-px" style={{ background: "var(--color-faint)" }}>
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
                  <div className="relative w-full aspect-[16/7] border border-faint overflow-hidden mb-12">
                    <Image src={image} alt={client} fill className="object-cover" style={{ objectPosition: imagePosition ?? "center" }} />
                  </div>
                ) : (
                  <div
                    className="w-full aspect-[16/7] border border-faint flex items-center justify-center mb-12"
                    style={{ background: "#E8E6E1" }}
                  >
                    <span className="font-sans text-[13px] text-muted tracking-[0.04em]">
                      {client} — images coming
                    </span>
                  </div>
                )}

                {/* Outcome — centered block, labels flush left within it */}
                <div className="max-w-[1000px] mx-auto">
                  <div className="mb-6">
                    <div className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted mb-1">
                      The outcome
                    </div>
                    <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted">
                      {deliverables}
                    </div>
                  </div>

                  {/* Metrics box */}
                  <div className="border border-faint flex flex-col sm:flex-row">
                    {metrics.map(({ value, label, logo }: { value: string; label: string; logo?: string }) => (
                      <div key={label} className="flex-1 px-6 py-8 md:px-12 md:py-10 text-center border-b sm:border-b-0 sm:border-r border-faint last:border-0">
                        {logo ? (
                          <div className="flex items-center justify-center gap-3">
                            <Image src={logo} alt="" width={40} height={34} style={{ height: 34, width: "auto" }} />
                            <div className="font-serif text-[36px] font-normal tracking-[-0.02em] text-amber">
                              {value}
                            </div>
                          </div>
                        ) : (
                          <div className="font-serif text-[36px] font-normal tracking-[-0.02em] text-amber">
                            {value}
                          </div>
                        )}
                        <div className="font-sans text-[17px] font-light mt-2 text-ink">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>{/* end outcome wrapper */}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More work grid */}
      <section className="w-full bg-bg border-t border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-20">
          <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-10 md:mb-16">
            More work
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MORE_WORK.map(({ client, deliverables, industry, description, image, imagePosition, imageBg }: { client: string; deliverables: string; industry: string; description: string; image?: string; imagePosition?: string; imageBg?: string }) => (
              <div key={client} className="bg-bg flex flex-col border border-faint">
                {/* Image — flush top, full width, bottom rule only */}
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

                {/* Card content */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="font-sans text-[12px] tracking-[0.18em] uppercase mb-6" style={{ color: "#8A8A82" }}>
                    {industry}
                  </div>
                  <h3 className="font-serif text-[22px] font-normal text-ink tracking-[-0.01em] mb-5">
                    {client}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.65] font-light mb-8 flex-1" style={{ color: "#6B6A63" }}>
                    {description}
                  </p>
                  <Deliverables value={deliverables} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gated CTA — dark */}
      <section className="w-full bg-ink">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <div className="max-w-[680px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              There&rsquo;s more to see.
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14" style={{ color: "#C8C2BA" }}>
              A significant portion of enterprise work is client-confidential — including
              work delivered as white-label senior capacity for agencies. If you want to
              see the full range — regulated healthcare, additional fintech, and direct
              agency work — schedule a call for a live portfolio review.
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

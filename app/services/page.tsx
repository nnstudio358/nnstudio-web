import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = { themeColor: "#2D3D46" };

// Copy: ChatGPT final in the Services handoff doc (Oct 15, 2026).
export const metadata: Metadata = {
  title: "Services",
  description:
    "I work with in-house marketing teams and agencies on content design, campaigns and marketing website systems.",
};

type Engagement = {
  id: string;
  name: string;
  paragraphs: string[];
  example?: string;
  link?: { href: string; text: string };
};

const ENGAGEMENTS: Engagement[] = [
  {
    id: "defined-project",
    name: "A defined project",
    paragraphs: [
      "For work with a clear scope, I handle the design from the brief through final files. That might be a research report with its promotional assets, a landing page or a defined piece of design-system work. We agree on what I’m delivering, the schedule and the fee up front.",
    ],
    example:
      "Pendulum. I designed the Brand Risk Report, its promotional assets and ad sets for other campaigns.",
    link: { href: "/work", text: "View work →" },
  },
  {
    id: "ongoing-support",
    name: "Ongoing support",
    paragraphs: [
      "If your team has design work coming in each month, I can reserve time for it. We decide together what takes priority as needs change, from campaign work to reports or updates to existing templates. Because I’m working within your brand regularly, there’s less to explain each time.",
    ],
    example:
      "Enterprise website design system. I’m reviewing components and maintaining system documentation with a design and development team.",
    link: { href: "/work", text: "View work →" },
  },
  {
    id: "agencies",
    name: "Working with agencies",
    paragraphs: [
      "I work behind the scenes with agencies, under your creative lead and within your client’s brand standards. I can take responsibility for a defined project or provide ongoing capacity when your team needs it. Some of that work is confidential, so I can talk through relevant examples and share what I’m allowed to show.",
    ],
  },
  {
    id: "shopify",
    name: "Shopify stores",
    paragraphs: [
      "The Launch is a fixed-price service for product founders. I design a custom home page and product page, then build the store in Shopify.",
    ],
    // "Explore The Launch →" goes here once the /shopify page is built.
  },
];

const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.65] font-light";

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
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
                Services
              </div>
              <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[980px]">
                Senior design for marketing teams and agencies.
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
                I work with in-house marketing teams and agencies on content design,
                campaigns and marketing website systems. You can bring me a defined
                project or work with me on an ongoing basis. We agree on the scope,
                schedule and fee before I start.
              </p>
              <div className="mt-10 md:mt-14">
                <a
                  href="/contact"
                  className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                >
                  Start a conversation →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Ways to work together */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-6 md:py-10">
          <div className="divide-y divide-faint">
            {ENGAGEMENTS.map(({ id, name, paragraphs, example, link }) => (
              <div
                key={id}
                id={id}
                className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-24 py-12 md:py-16 scroll-mt-24"
              >
                <h2 className="font-serif text-[30px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-ink tracking-[-0.02em]">
                  {name}
                </h2>
                <div className="space-y-5">
                  {paragraphs.map((para) => (
                    <p key={para} className={bodyText} style={{ color: "#6B6A63" }}>
                      {para}
                    </p>
                  ))}
                  {example && (
                    <div className="border-l-2 border-amber pl-5 py-1">
                      <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-2">
                        Example
                      </div>
                      <p className={`${bodyText} text-ink`}>{example}</p>
                    </div>
                  )}
                  {link && (
                    <a
                      href={link.href}
                      className="font-sans text-[16px] text-muted hover:text-ink transition-colors inline-block pt-1"
                    >
                      {link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — dark */}
      <section className="w-full" style={{ backgroundColor: "#2D3D46" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
          <div className="max-w-[700px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              Tell me about the work.
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-14 max-w-[560px]" style={{ color: "#C8C2BA" }}>
              Tell me what you&rsquo;re working on, the timing and anything you already
              have, like a brief or a link. I&rsquo;ll let you know whether it&rsquo;s a fit
              and how I&rsquo;d suggest working together.
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

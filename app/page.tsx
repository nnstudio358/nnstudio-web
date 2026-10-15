import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

export const viewport: Viewport = { themeColor: "#2D3D46" };

// Copy: ChatGPT final in the Home handoff doc (Oct 15, 2026).
const title = "nnstudio — Senior design partner for B2B marketing teams and agencies";
const description =
  "Nathan Billman is an independent senior designer working with B2B marketing teams and agencies across digital, content and print.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    siteName: "nnstudio",
    type: "website",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.65] font-light";

export default function Home() {
  return (
    <main>
      {/* Nav + Hero share a background so the transparent nav blends into it */}
      <div className="relative bg-bg hero-bg">
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav />
        </div>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
            mixBlendMode: "screen",
          }}
        />
        <div className="relative z-[1]">
          <Hero />
        </div>
      </div>

      <SelectedWork />

      {/* Working together */}
      <section className="w-full bg-bg border-t border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-24">
            <h2 className="font-serif text-[30px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-ink tracking-[-0.02em]">
              Project-based and ongoing support.
            </h2>
            <div>
              <p className={bodyText} style={{ color: "#6B6A63" }}>
                Some teams bring me a defined project, like a research report and
                the assets that promote it. Others reserve time with me each month,
                and we decide together what it goes toward. Agencies bring me in
                either way, working under their creative lead and inside their
                client&rsquo;s brand.
              </p>
              <a
                href="/services"
                className="font-sans text-[15px] text-muted hover:text-ink transition-colors inline-block mt-6"
              >
                Explore services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and contact — dark */}
      <section className="w-full" style={{ backgroundColor: "#2D3D46" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-28">
          <p
            className="font-sans text-[16px] md:text-[18px] leading-[1.65] font-light max-w-[760px] pb-12 md:pb-16 mb-12 md:mb-16 border-b"
            style={{ color: "#C8C2BA", borderColor: "#3D4D55" }}
          >
            I&rsquo;ve been a designer for more than 20 years, and for about the last
            decade most of my work has been B2B marketing in healthcare, fintech and
            technology. Clients include Google Cloud, Meta, WhatsApp, Capital One
            and Penske.
          </p>
          <div className="max-w-[700px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              Have design work coming up?
            </h2>
            <p
              className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-12 max-w-[560px]"
              style={{ color: "#C8C2BA" }}
            >
              Send me a note about the work and when you need it.
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

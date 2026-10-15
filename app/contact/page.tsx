import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const viewport: Viewport = { themeColor: "#2D3D46" };

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nathan Billman at nnstudio about a project or ongoing design support for your marketing team or agency.",
};

export default function ContactPage() {
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
          <section className="w-full bg-transparent pt-[64px] md:pt-[80px]">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-6 md:pt-24 md:pb-8">
              <div className="max-w-[720px]">
                <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
                  Contact
                </div>
                <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10">
                  What are you working on?
                </h1>
                <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[560px]" style={{ color: "#6B6A63" }}>
                  <p>
                    A few lines about the work is enough to get started. If you
                    have a brief or a link to the project, include it.
                  </p>
                  <p className="text-[15px] md:text-[16px]">
                    You can also email me directly at{" "}
                    <a
                      href="mailto:nathan@nnstudio.com"
                      className="text-ink underline decoration-faint underline-offset-4 hover:text-amber hover:decoration-amber transition-colors"
                    >
                      nathan@nnstudio.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Form */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-6 pb-16 md:pt-8 md:pb-24">
          <div className="max-w-[640px]">
            <div className="border border-faint p-6 sm:p-8 md:p-12">
              <ContactForm />
            </div>

            <p className="font-sans text-[15px] font-light mt-8" style={{ color: "#6B6A63" }}>
              Prefer to talk first?{" "}
              <a
                href="https://calendly.com/nnstudio-nathan/conversation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-faint underline-offset-4 hover:text-amber hover:decoration-amber transition-colors"
              >
                Pick a time.
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

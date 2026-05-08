import type { Metadata, Viewport } from "next";

export const viewport: Viewport = { themeColor: "#2D3D46" };
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Discuss a project, schedule a call, or explore a potential fit. Senior design support for B2B marketing teams and agencies.",
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
        {/* Header */}
        <section className="w-full bg-transparent pt-[64px] md:pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-6 md:pt-24 md:pb-8">
          <div className="max-w-[720px]">
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
              Contact
            </div>
            <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10">
              Start a conversation.
            </h1>
            <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[540px]" style={{ color: "#6B6A63" }}>
              <p>
                Whether you have a defined project or just want to explore the
                fit, reach out.
              </p>
              <p>
                Tell me what you&rsquo;re working on, your timeline, and what you
                need. I&rsquo;ll follow up within one business day.
              </p>
            </div>
          </div>
        </div>
        </section>
        </div>
      </div>

      {/* Two paths */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-6 pb-16 md:pt-8 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

            {/* Send a note */}
            <div className="border border-faint p-8 md:p-12">
              <ContactForm />
            </div>

            {/* Book a call */}
            <div className="border border-faint p-8 md:p-12 flex flex-col" style={{ background: "#F4F3EF" }}>
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-2">
                Book a call
              </div>
              <p className="font-sans text-[15px] font-light mb-10 md:mb-16" style={{ color: "#6B6A63" }}>
                Prefer to talk through the work directly?
              </p>

              <div className="flex-1 flex flex-col justify-center">
                <p className="font-serif text-[24px] md:text-[28px] font-normal leading-[1.2] text-ink tracking-[-0.01em] mb-6">
                  A focused 30-minute conversation.
                </p>
                <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-12" style={{ color: "#6B6A63" }}>
                  No prep required — just a straightforward conversation about
                  the work, the timeline, and whether nnstudio is the right fit.
                </p>
                <a
                  href="https://calendly.com/nnstudio-nathan/conversation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                >
                  Book a time →
                </a>
              </div>

              <div className="border-t border-faint pt-8 mt-10 md:mt-16">
                <p className="font-sans text-[13px] font-light" style={{ color: "#8A8A82" }}>
                  Or email directly:{" "}
                  <a
                    href="mailto:nathan@nnstudio.com"
                    className="text-ink hover:text-amber transition-colors"
                  >
                    nathan@nnstudio.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

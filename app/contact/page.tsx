import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Discuss a project, book a call, or schedule a portfolio review. Senior design partner for in-house marketing teams and agency partners.",
};
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Nav />

      {/* Header */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-8">
          <div className="max-w-[720px]">
            <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
              Contact
            </div>
            <h1 className="font-serif text-[76px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-10">
              Let&rsquo;s talk.
            </h1>
            <p className="font-sans text-[19px] leading-[1.65] font-light max-w-[540px]" style={{ color: "#6B6A63" }}>
              Whether you have a defined project or just want to explore whether this is
              the right fit — reach out. Tell me what you&rsquo;re working on, your timeline,
              and what you need. I&rsquo;ll follow up within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-16 pt-8 pb-24">
          <div className="grid grid-cols-2 gap-16">

            {/* Send a note */}
            <div className="border border-faint p-12">
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-2">
                Send a note
              </div>
              <p className="font-sans text-[15px] font-light mb-10" style={{ color: "#6B6A63" }}>
                Prefer to share context first before getting on a call.
              </p>

              <ContactForm />
            </div>

            {/* Book a call */}
            <div className="border border-faint p-12 flex flex-col" style={{ background: "#F4F3EF" }}>
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-2">
                Book a call
              </div>
              <p className="font-sans text-[15px] font-light mb-16" style={{ color: "#6B6A63" }}>
                Ready to talk through the work directly.
              </p>

              <div className="flex-1 flex flex-col justify-center">
                <p className="font-serif text-[28px] font-normal leading-[1.2] text-ink tracking-[-0.01em] mb-6">
                  Schedule a 30-minute call.
                </p>
                <p className="font-sans text-[17px] leading-[1.65] font-light mb-12" style={{ color: "#6B6A63" }}>
                  No prep required — just a conversation about what you need and whether
                  nnstudio is the right fit.
                </p>
                <a
                  href="https://calendly.com/nnstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
                >
                  Book a time →
                </a>
              </div>

              <div className="border-t border-faint pt-8 mt-16">
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

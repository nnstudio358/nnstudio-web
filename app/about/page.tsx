import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = { themeColor: "#2D3D46" };

// Copy: ChatGPT final in the About handoff doc (Copy Chief rerun Nov 3, 2026).
// The second section's headline was renamed Nov 3 (Nathan) so it doesn't repeat the hero.
// Portrait: small, beside the Contact block only (Nathan, Oct 15).
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nathan Billman, the independent designer behind nnstudio. Over 20 years of experience working with marketing teams and agencies across digital, content and print.",
};

const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.65] font-light";

const SECTIONS: { id: string; heading: string; paragraphs: string[]; link?: { href: string; text: string } }[] = [
  {
    id: "how-i-work",
    heading: "What working with me looks like.",
    paragraphs: [
      "When you bring me into a project, I’ll start by understanding what you’re trying to accomplish, what’s already in place and where design decisions need to be made. From there, I can take responsibility for the work without needing direction on every detail.",
      "I generally recommend one design direction and explain why I think it’s the right approach. When a project calls for more exploration, we’ll look at options before committing. If something isn’t working, I’ll explain what I’d change and why.",
      "My experience covers digital, content and print, so I can help when a project moves between different formats or needs to carry through to implementation. I work in Figma and Adobe, collaborate with developers when needed, and build custom Shopify stores for selected projects.",
      "I also use AI tools as part of my design practice, particularly for checking work, documenting systems and handling tasks that benefit from automation. I’m interested in what these tools make possible, but I still make the design decisions and review the work myself.",
      "You’ll know where the project stands as we work. I’ll bring you into decisions that need your input and raise anything that could affect delivery early, so there aren’t surprises at the end.",
    ],
  },
  {
    id: "experience",
    heading: "The experience behind nnstudio.",
    paragraphs: [
      "I’ve been designing for more than 20 years. I spent six years at Lehigh Valley Health Network, finishing as Senior Graphic Designer. My work included campaigns across the network’s healthcare services and a monthly employee magazine that I helped take from editorial concept through print.",
      "I started freelancing in 2003 and made nnstudio my full-time work in 2009. From 2015 to 2022, I worked as a contract Design Manager with Content4Demand, a B2B content marketing agency. I designed and art-directed reports, eBooks and interactive projects, while also managing freelance designers and production vendors. Clients included Microsoft, Siemens, Oracle and Fisher Investments.",
      "Today I work independently with in-house teams and agency partners. Clients include Google Cloud, Capital One, WhatsApp, Meta Messenger and OutSystems.",
      "I take on a limited number of engagements at a time so I can stay involved in each project.",
    ],
    link: { href: "/services", text: "Explore services →" },
  },
];

export default function AboutPage() {
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
              <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6 md:mb-8">
                About
              </div>
              <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[980px]">
                A little about how I work.
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
                I&rsquo;m Nathan Billman, the independent designer behind nnstudio. I work
                directly with marketing teams and agencies, helping with projects that need
                someone who can make design decisions and carry the work through. When you
                hire me, I&rsquo;m the person you&rsquo;ll work with.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Body sections */}
      <section className="w-full bg-bg border-b border-faint">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-6 md:py-10">
          <div className="divide-y divide-faint">
            {SECTIONS.map(({ id, heading, paragraphs, link }) => (
              <div
                key={id}
                id={id}
                className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-24 py-12 md:py-16 scroll-mt-24"
              >
                <h2 className="font-serif text-[30px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-ink tracking-[-0.02em]">
                  {heading}
                </h2>
                <div className="space-y-5">
                  {paragraphs.map((para) => (
                    <p key={para} className={bodyText} style={{ color: "#6B6A63" }}>
                      {para}
                    </p>
                  ))}
                  {link && (
                    <a
                      href={link.href}
                      className="font-sans text-[15px] text-muted hover:text-ink transition-colors inline-block pt-1"
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

      {/* Contact — dark, with the small portrait */}
      <section className="w-full" style={{ backgroundColor: "#2D3D46" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-12">
            <div className="w-[120px] md:w-[148px] aspect-square overflow-hidden shrink-0">
              <Image
                src="/nathan-billman.jpg"
                alt="Nathan Billman"
                width={148}
                height={148}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="max-w-[600px]">
              <h2
                className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-5 md:mb-6"
                style={{ color: "#F4F3EF" }}
              >
                Interested in working together?
              </h2>
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-8 md:mb-10" style={{ color: "#C8C2BA" }}>
                Send me a note and we can talk through the details.
              </p>
              <a
                href="/contact"
                className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer dark />
    </main>
  );
}

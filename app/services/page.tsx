import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = { themeColor: "#2D3D46" };

// Copy: ChatGPT final in the Services handoff doc (Copy Chief rerun Nov 3, 2026,
// with the Nov 5 copy-review fix to the Pendulum example). The final has no meta
// description, so this one is taken from its hero body.
export const metadata: Metadata = {
  title: "Services",
  description:
    "Design support for specific projects or regular work alongside your team, from marketing campaigns and reports to websites and design systems.",
};

type Engagement = {
  id: string;
  name: string;
  paragraphs: string[];
  example?: { project: string; line: string; href: string };
  note?: { text: string; link: string; href: string };
};

const ENGAGEMENTS: Engagement[] = [
  {
    id: "defined-project",
    name: "A defined project",
    paragraphs: [
      "Have a project coming up that needs dedicated design attention? It could be a research report with supporting campaign materials, a landing page, or a website that needs a new visual direction. I can work from an established brand and brief, or help figure out the design direction when that hasn’t been settled yet.",
      "We’ll agree on the scope, schedule and fee before starting. You’ll work directly with me as the project develops, with opportunities to review the work and discuss decisions along the way. I’ll make recommendations when I see a better approach and handle the design through to the finished deliverables.",
    ],
    example: {
      project: "Pendulum Intelligence",
      line: "Pendulum started with a single project, the Brand Risk Report, which led to a three-month retainer covering paid social campaigns, webinars and other marketing work.",
      href: "/work#pendulum",
    },
  },
  {
    id: "ongoing-support",
    name: "Ongoing support",
    paragraphs: [
      "If your team has design work coming in regularly, it can help to have someone who already understands your projects and can pick up the next assignment without starting from scratch.",
      "We can reserve time each month and decide together what needs attention. That might be a report and its promotional materials one month, followed by campaign assets or updates to existing designs the next. Priorities can change as your marketing plans develop.",
      "The benefit of working together over time is that I get to know your team, your brand and how you like to work. There’s less to explain each time, and we can spend more time on the design itself. You’ll have someone familiar with the work who can make recommendations and carry projects forward without needing direction on every detail.",
    ],
    example: {
      project: "Enterprise website design system",
      line: "An ongoing engagement working alongside the client’s design and development teams to improve and expand their website design system.",
      href: "/work#enterprise-system",
    },
  },
  {
    id: "agencies",
    name: "Working with agencies",
    paragraphs: [
      "When you bring a freelance designer into an agency project, you need to know they can work with your team and meet the standards your clients expect. You shouldn’t have to spend more time explaining and reviewing the work than you would doing it yourself.",
      "I’ve worked with agencies throughout my career, taking on individual projects and ongoing assignments under their creative direction. I can work from an established concept or help develop the direction when that’s part of the assignment.",
      "You can bring me into creative discussions and client reviews when needed, or hand over a defined piece of work for me to manage. I’ll ask questions when something needs clarification, explain my design decisions and raise concerns early if something could affect the schedule. The goal is to keep the work moving and avoid unnecessary rounds of backtracking.",
      "Some agency projects are confidential, but I’m happy to discuss relevant experience and share examples I’m allowed to show.",
    ],
  },
  {
    id: "shopify",
    name: "Shopify stores",
    paragraphs: [
      "The Launch is a fixed-price service for product founders preparing to launch a store. I develop the visual direction, design a custom home page and product page, and build the store in Shopify so you can manage it after handoff.",
    ],
    // The Launch isn't live yet (Nathan, Nov 6): say so and invite founders to get in touch.
    // The final's "Explore The Launch →" link replaces this note once the /shopify page is built.
    note: {
      text: "The Launch is coming soon. If you’re planning a store now,",
      link: "get in touch →",
      href: "/contact",
    },
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
                Design for your projects and ongoing needs.
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
                Whether you need someone to handle a specific project or work
                alongside your team regularly, I can help with everything from
                marketing campaigns and reports to websites and design systems.
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
            {ENGAGEMENTS.map(({ id, name, paragraphs, example, note }) => (
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
                  {note && (
                    <p className={`${bodyText} text-ink`}>
                      {note.text}{" "}
                      <a href={note.href} className="underline underline-offset-4 decoration-faint hover:decoration-ink transition-colors">
                        {note.link}
                      </a>
                    </p>
                  )}
                  {example && (
                    <div className="border border-faint px-6 md:px-8 py-6 md:py-7">
                      <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-amber mb-3">
                        {example.project}
                      </div>
                      <p className={`${bodyText} text-ink`}>{example.line}</p>
                      <a
                        href={example.href}
                        className="font-sans text-[15px] text-muted hover:text-ink transition-colors inline-block mt-5"
                      >
                        View work →
                      </a>
                    </div>
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
              If you have a project in mind or think ongoing support might be a
              good fit, happy to chat about what you need and how we could work
              together.
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

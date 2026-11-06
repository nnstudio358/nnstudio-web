import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const viewport: Viewport = { themeColor: "#2D3D46" };

// Copy: ChatGPT final in the Work handoff doc (Copy Chief rerun Nov 5, 2026), revised live
// with Nathan Nov 6: new headlines, Pendulum rewrite, grouped by type of work. The Copy
// Chief reviews the built page afterward. Release 1 has no case-study links (Nathan, Nov 4).
// Images: existing finished-work files where they match the approved lineup; the rest
// show a placeholder until Nathan picks from the image ideas (O-76).
export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Nathan Billman at nnstudio, from B2B reports and campaigns to interactive content, website design systems and Shopify stores.",
};

type Img = { src: string; alt: string; fit?: "cover" | "contain"; bg?: string; position?: string };

type Feature = {
  id: string;
  name: string;
  scope: string;
  headline?: string;
  body: string[];
  result?: { label: string; text: string };
  status?: string;
  caption?: string;
  images: Img[];
};

const FEATURES: Feature[] = [
  {
    id: "pendulum",
    name: "Pendulum Intelligence",
    scope: "Research report and campaign design on retainer",
    headline: "A flagship research report that turned into a retainer.",
    body: [
      "Pendulum’s marketing team brought me in to design its 20-page Brand Risk Report and the campaign promoting it. I shaped each chart around its findings instead of forcing the research into one format, so every result gets the treatment it needs.",
      "That work led to a three-month retainer alongside the team, designing paid social, webinar promotion, guides and worksheets. For each ad brief I usually brought one recommended direction rather than a spread of options, and the team asked me to create a LinkedIn Ad Style Guide to keep the work consistent.",
    ],
    result: {
      label: "Report campaign results",
      text: "About 280 report downloads and 150+ marketing-qualified leads.",
    },
    images: [
      { src: "/work/pendulum/report-cover.jpg", alt: "Pendulum Brand Risk Report cover", fit: "contain", bg: "#1E1436" },
      { src: "/work/pendulum/report-spread-scenario.jpg", alt: "Brand Risk Report spread with data charts" },
    ],
  },
  {
    id: "maison-levande",
    name: "Maison Levande",
    scope: "Visual direction, storefront design and Shopify build",
    headline: "A custom-designed Shopify store for a product launch.",
    body: [
      "The Leon is Maison Levande’s first tote. This Shopify store for Deux Digital introduces it to distributors and future customers. I developed the site’s color and typography direction and designed the pages around the founder’s brand strategy, logo and photography.",
      "The finished store uses custom Shopify sections I designed and built for the site, with content the client can manage after handoff.",
    ],
    status: "Complete · Launch pending",
    images: [{ src: "/home/maison-levande.jpg", alt: "Maison Levande store home page for The Leon tote" }],
  },
  {
    id: "turno",
    name: "Turno",
    scope: "Content hub, downloadable eBook and print book",
    headline: "A trade-show book, expanded into an eBook and content hub.",
    body: [
      "Turno’s brief was a printed guide for new Airbnb hosts to use at a trade show. The content had value beyond the event, so at kickoff I proposed an eBook and a website content hub alongside the book, giving hosts more ways to find and use it.",
      "I designed all three formats, including the 130-page hardcover book, and brought in the printer. The hub combined existing CMS components with new sections in the designs Turno’s developer built.",
    ],
    result: {
      label: "Reported results",
      text: "8,000+ unique views · 800+ eBook downloads · About 65% of new sign-ups went on to book a cleaner through Turno’s marketplace.",
    },
    caption: "The content hub, eBook pages and print edition.",
    images: [
      { src: "/work-turno-book.png", alt: "Turno’s How to Start an Airbnb guide in print", fit: "contain", bg: "#146259" },
      { src: "/work-turno-browser.png", alt: "Turno’s guide as a content hub on the website", fit: "contain", bg: "#1B7E72" },
    ],
  },
  {
    id: "enterprise-system",
    name: "Enterprise website design system",
    scope: "Component design, Figma and code alignment, and documentation · Ongoing",
    headline: "Ongoing design system work that keeps Figma and code aligned.",
    body: [
      "An enterprise website design system needs to reflect the site people are building with it. I’m working with the company’s design and development teams to build and refine components, keeping the Figma library consistent with what’s built and expanding what it can do.",
      "Where Figma can’t do what code can, I work with development on how to represent the component in the library. The work also includes documentation and the beginnings of AI skills that work with the components and system.",
    ],
    caption: "Illustrative visuals recreated with sample content and neutral styling.",
    images: [],
  },
];

type Tile = { id: string; name: string; scope: string; body: string; credit: string; image?: Img; video?: string };
type Group = { id: string; label: string; subhead: string; tiles: Tile[] };

const UDG = "Through Unreal Digital Group";

// Grouped by type of work (Nathan, Nov 6). Engagement is a credit line on each tile;
// the Services page covers how to work together.
const GROUPS: Group[] = [
  {
    id: "reports",
    label: "Reports and guides",
    subhead: "Long-form content, designed well from cover to last page.",
    tiles: [
      {
        id: "bettercloud",
        name: "BetterCloud",
        scope: "Research report and landing page",
        body: "A 44-page research report on SaaS operations, and the landing page that promoted it. I designed the report’s layout and app-tile system, carrying the cover’s tile cluster into the landing page as a pictogram so the research reads as one piece across both.",
        credit: UDG,
      },
      {
        id: "axway",
        name: "Axway",
        scope: "Healthcare interoperability eBook",
        body: "Healthcare interoperability is the subject of this eBook for API management company Axway. I designed the page layouts and collaged people and device screens onto the cover’s pixel-block graphics, connecting the people using healthcare technology with the systems behind it.",
        credit: UDG,
      },
      {
        id: "mambu",
        name: "Mambu + Google Cloud",
        scope: "Financial-services guides",
        body: "An AI checklist and a value-proposition guide for financial-services readers bring two kinds of content into one visual language. I designed both pieces, refining and selectively applying Mambu’s brand elements to connect the publications without making their layouts identical.",
        credit: UDG,
      },
      {
        id: "datastax",
        name: "DataStax",
        scope: "White paper and eBook series",
        body: "White papers and eBooks share an illustrated space theme across this content series. I composed the space scenes and created a layout pattern for the graphics using DataStax’s brand assets.",
        credit: UDG,
        image: { src: "/work-datastax.jpg", alt: "DataStax eBook page with an illustrated space scene", position: "top" },
      },
      {
        id: "crothall",
        name: "Crothall Healthcare",
        scope: "Case-study series",
        body: "A case-study series presents a hospital services company’s work across its service lines. I used color coding and a “By the numbers” rail to make each story’s subject and results easy to find.",
        credit: "Direct client",
      },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    subhead: "One strong creative concept, carried across every touchpoint.",
    tiles: [
      {
        id: "bottomline",
        name: "Bottomline",
        scope: "B2B payments campaign",
        body: "A payments campaign built around AP transformation as a sports playbook. I developed that concept for the Payments Transformation Playbook infographic and carried the campaign artwork into the AP Opportunities guidebook, composing the scenes from licensed illustration.",
        credit: UDG,
      },
      {
        id: "capital-one",
        name: "Capital One",
        scope: "eBook and infographic",
        body: "The Hidden Costs eBook and infographic explain the costs of managing credit in-house. I carried an illustrated business owner kept awake by those costs across both pieces, reworking licensed stock artwork into one campaign concept.",
        credit: UDG,
      },
    ],
  },
  {
    id: "interactive",
    label: "Interactive",
    subhead: "Interactive content readers explore, not just scroll past.",
    tiles: [
      {
        id: "ssc-intralinks",
        name: "SSC Intralinks",
        scope: "Interactive assessment",
        body: "I led the design of an interactive investor-portal assessment, working directly with the client, and built it in Ceros. It won a Demand Gen Report Killer Content Award in 2022 and recorded 775 visitors and 1,331 page views over five weeks.",
        credit: "Through Content4Demand",
        video: "/work-intralinks.mp4",
      },
      {
        id: "regnology",
        name: "Regnology",
        scope: "Interactive content hub",
        body: "An interactive hub with Google Cloud organizes regulatory-reporting content around challenges, opportunities and solutions. I designed the layout around gradient connector shapes that link those sections.",
        credit: UDG,
        image: { src: "/work-regnology.png", alt: "Regnology regulatory-reporting hub screens", position: "top" },
      },
      {
        id: "udg-mops",
        name: "Unreal Digital Group",
        scope: "Six-screen interactive",
        body: "“Follow the Roadmap Toward MOPs Maturity” is an interactive for the agency’s own marketing. I developed the road-sign navigation concept and designed all six screens around it.",
        credit: "For the agency’s own marketing",
      },
    ],
  },
];

const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.65] font-light";
const label = "font-sans text-[12px] tracking-[0.18em] uppercase";

function Frame({ img, aspect, sizes }: { img?: Img; aspect: string; sizes: string }) {
  return (
    <div className={`relative w-full ${aspect} overflow-hidden border border-faint`} style={{ background: img?.bg ?? "#E8E6E1" }}>
      {img ? (
        <div className="absolute" style={{ inset: img.fit === "contain" ? "6%" : 0 }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes={sizes}
            style={{ objectFit: img.fit ?? "cover", objectPosition: img.position ?? "center" }}
          />
        </div>
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
}

function GroupHeader({ label: text, subhead }: { label: string; subhead: string }) {
  return (
    <div className="mb-10 md:mb-14 max-w-[760px]">
      <div className={`${label} text-amber mb-4`}>{text}</div>
      <p className="font-serif text-[26px] md:text-[32px] leading-[1.2] text-ink tracking-[-0.01em]">{subhead}</p>
    </div>
  );
}

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
          <section className="w-full bg-transparent border-b border-faint pt-[64px] md:pt-[80px]">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-20">
              <div className={`${label} text-amber mb-6`}>Work</div>
              <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-[1.08] text-ink tracking-[-0.02em] mb-8 md:mb-10">
                Selected work
              </h1>
              <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[760px]" style={{ color: "#6B6A63" }}>
                I work with marketing teams and agencies on projects that need a clear
                design direction and someone to carry it through. The work below ranges
                from research-led campaigns to websites, with much of it for software,
                fintech and healthcare companies.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Featured projects */}
      <section className="w-full bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="pt-14 md:pt-20">
            <GroupHeader label="Featured projects" subhead="Longer engagements, from the first brief to the finished work." />
          </div>
          <div className="divide-y divide-faint">
            {FEATURES.map((f) => (
              <article key={f.id} id={f.id} className="py-14 md:py-20 scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8 mb-6">
                  <div className={`${label} text-ink`}>{f.name}</div>
                  <div className={label} style={{ color: "#8A8A82" }}>{f.scope}</div>
                </div>
                <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[48px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10 max-w-[900px]">
                  {f.headline ?? f.name}
                </h2>

                {f.images.length > 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 md:h-[420px] lg:h-[540px]">
                    <Frame img={f.images[0]} aspect="aspect-[4/3] md:aspect-auto md:h-full" sizes="(min-width: 768px) 40vw, 100vw" />
                    <Frame img={f.images[1]} aspect="aspect-[4/3] md:aspect-auto md:h-full" sizes="(min-width: 768px) 60vw, 100vw" />
                  </div>
                ) : (
                  <Frame img={f.images[0]} aspect="aspect-[4/3] md:aspect-[16/8]" sizes="100vw" />
                )}
                {f.caption && (
                  <p className="font-sans text-[13px] text-muted mt-3">{f.caption}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16 mt-10 md:mt-12">
                  <div className="space-y-5">
                    {f.body.map((p) => (
                      <p key={p} className={bodyText} style={{ color: "#6B6A63" }}>{p}</p>
                    ))}
                  </div>
                  {(f.result || f.status) && (
                    <div className="md:border-l md:border-faint md:pl-10 space-y-6">
                      {f.result && (
                        <div>
                          <div className={`${label} text-amber mb-3`}>{f.result.label}</div>
                          <p className="font-serif text-[20px] md:text-[22px] leading-[1.35] text-ink">{f.result.text}</p>
                        </div>
                      )}
                      {f.status && (
                        <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted">{f.status}</div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More work, grouped by type */}
      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="w-full bg-bg border-t border-faint scroll-mt-24">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-14 md:py-20">
            <GroupHeader label={g.label} subhead={g.subhead} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {g.tiles.map((t) => (
                <article key={t.id} id={t.id} className="scroll-mt-24 flex flex-col">
                  {t.video ? (
                    <div className="relative w-full aspect-[4/3] overflow-hidden border border-faint bg-[#E8E6E1]">
                      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden">
                        <source src={t.video} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <Frame img={t.image} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  )}
                  <div className={`${label} mt-5`} style={{ color: "#8A8A82", fontSize: 11 }}>{t.scope}</div>
                  <h3 className="font-serif text-[22px] md:text-[24px] font-normal text-ink tracking-[-0.01em] mt-2 mb-3">{t.name}</h3>
                  <p className="font-sans text-[15px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>{t.body}</p>
                  <div className="font-sans text-[13px] text-muted mt-4">{t.credit}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact — dark */}
      <section className="w-full" style={{ backgroundColor: "#2D3D46" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="max-w-[700px]">
            <h2
              className="font-serif text-[28px] md:text-[36px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
              style={{ color: "#F4F3EF" }}
            >
              Looking for a relevant example?
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-12 max-w-[560px]" style={{ color: "#C8C2BA" }}>
              Some engagements are confidential. Let me know what you&rsquo;re working on,
              and I can say which additional examples I&rsquo;m able to share.
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

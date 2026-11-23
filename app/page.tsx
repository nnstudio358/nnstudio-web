import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Close from "@/components/site/Close";
import LoopVideo from "@/components/site/LoopVideo";
import PlannedShot from "@/components/site/PlannedShot";
import ComponentSheet from "@/components/site/ComponentSheet";

export const viewport: Viewport = { themeColor: "#F4F2EE" };

const title = "nnstudio — Senior design partner for B2B marketing teams and agencies";
const description =
  "Work with Nathan Billman at nnstudio on marketing design, digital projects and print. Senior design support for in-house teams and agencies.";

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
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

// Copy: Nathan's Duet Figma file, page "Layouts in the new type (Nov 23)", used verbatim.

const SERVICES = [
  {
    name: "Brand and campaigns",
    line: "eBooks, ads, social and the campaign artwork that ties them together.",
    href: "/services",
  },
  {
    name: "Reports and presentations",
    line: "Research and annual reports, pitch decks, print pieces and interactives.",
    href: "/services/reports-and-presentations",
  },
  { name: "Websites", line: "Marketing sites, landing pages and Shopify stores.", href: "/services" },
];

function Caption({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <p className="caption mt-5">
      <b>{name}</b>
      <span>&ensp;{children}</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="site-a">
      <SiteNav />

      <main>
        {/* Hero: headline over a standfirst and the actions, set left. */}
        <section aria-labelledby="hero-heading" className="frame pt-[clamp(2.5rem,4.4vw,4rem)]">
          <h1 id="hero-heading" className="t-display max-w-[11.5em]">
            Senior design for the work that has to land.
          </h1>
          <div className="grid-12 gap-y-8 mt-[clamp(2rem,3.6vw,3.5rem)]">
            <p className="t-lead col-span-12 md:col-span-7 lg:col-span-6 max-w-[33em]">
              When a report, campaign or site really matters and your team is already stretched, I join you and carry it
              from first idea to final files. You&rsquo;ll always know where it stands, and the person you hire is the
              person doing the work.
            </p>
            <div className="col-span-12 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5 md:pt-1">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link href="/contact" className="btn">
                  Tell me what&rsquo;s coming up
                </Link>
                <Link href="/work" className="link font-[560] text-[1.0625rem] py-2">
                  See the work
                </Link>
              </div>
              <p className="t-small muted mt-6 max-w-[30em]">
                Design for marketing teams at Google Cloud, Meta, WhatsApp, Capital One and Penske.
              </p>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section aria-labelledby="work-heading" className="frame mt-[clamp(3.5rem,6vw,5.5rem)]">
          <h2 id="work-heading" className="sr-only">
            Selected work
          </h2>

          {/* 1. Pendulum: the report on a plate of its own colour, edge to edge.
              The image's flat border is #2C233E, so the band continues it. */}
          <Link href="/work/pendulum" className="zoom block group">
            <div className="bleed bg-[#2C233E] overflow-hidden">
              <div className="mx-auto max-w-[1280px] px-[clamp(0rem,3vw,3rem)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/home/pendulum-brand-risk-report.jpg"
                    alt="Pendulum Brand Risk Report: the cover and an interior page with data charts"
                    fill
                    sizes="(min-width: 1280px) 1184px, 100vw"
                    loading="eager"
                    fetchPriority="high"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[46rem]">
              <Caption name="Pendulum Intelligence">
                A research report and the campaign around it brought in at least 150 marketing-qualified leads, and a
                three-month retainer.
              </Caption>
            </div>
          </Link>

          {/* 2 + 3. Turno large, FGX smaller and dropped. */}
          <div className="grid-12 gap-y-16 mt-[clamp(5rem,9vw,8.5rem)]">
            <Link href="/work/turno" className="zoom block col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#4f4e51]">
                <Image
                  src="/turno-feature.jpg"
                  alt="Turno’s How to Start an Airbnb guide as a hardcover book, beside the eBook on a tablet"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover object-[50%_62%]"
                />
              </div>
              <Caption name="Turno">
                Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and together
                they&rsquo;ve reached more than 8,000 unique views.
              </Caption>
            </Link>

            <Link href="/work" className="zoom block col-span-12 md:col-start-9 md:col-span-4 md:mt-[38%]">
              <PlannedShot
                className="aspect-[4/3] md:aspect-[4/5]"
                art="laptop-phone"
                shot="FGX landing page, laptop and phone"
                description="Placeholder for a planned photo of the FGX landing page on a laptop and a phone"
              />
              <Caption name="FGX">FGX&rsquo;s printed services booklet, turned into an interactive landing page.</Caption>
            </Link>
          </div>

          {/* 4 + 5. The enterprise sheet small and dropped; SSC wide, running off the right edge. */}
          <div className="grid-12 gap-y-16 mt-[clamp(5rem,9vw,8.5rem)]">
            <figure className="col-span-12 md:col-start-6 md:col-span-7 md:row-start-1">
              <div className="bleed md:!ml-0 bg-black">
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  label="Screen recording of the SSC Intralinks investor-portal assessment"
                  className="aspect-[1728/850]"
                />
              </div>
              <figcaption>
                <Link href="/work" className="zoom block">
                  <Caption name="SSC Intralinks">
                    An interactive investor-portal assessment that won a Demand Gen Report Killer Content Award in 2022.
                  </Caption>
                </Link>
              </figcaption>
            </figure>

            <Link
              href="/work"
              className="zoom block col-span-12 md:col-start-1 md:col-span-4 md:row-start-1 md:mt-[52%]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <ComponentSheet className="absolute inset-0 h-full w-full" />
              </div>
              <Caption name="Enterprise website design system">
                A Figma library kept in step with the live site, so designers and developers build from the same parts.
                Shown with illustrative visuals.
              </Caption>
            </Link>
          </div>

          <p className="mt-[clamp(3.5rem,6vw,5rem)]">
            <Link href="/work" className="link font-[560] text-[1.0625rem] py-2">
              See all work
            </Link>
          </p>
        </section>

        {/* What I can help with: a ruled list, design systems set apart. */}
        <section
          aria-labelledby="help-heading"
          className="frame mt-[clamp(6rem,12vw,11rem)] mb-[clamp(6rem,11vw,10rem)]"
        >
          <div className="grid-12 gap-y-6 items-end">
            <h2 id="help-heading" className="t-h2 col-span-12 lg:col-span-7">
              What I can help with
            </h2>
            <p className="t-lead muted col-span-12 lg:col-start-8 lg:col-span-5 lg:pb-1">
              Most teams come to me with one of four kinds of project.
            </p>
          </div>

          <ul className="mt-[clamp(2.5rem,4vw,3.5rem)] border-t border-carbon">
            {SERVICES.map((s) => (
              <li key={s.name} className="border-b border-hairline">
                <Link
                  href={s.href}
                  className="group grid-12 gap-y-2 py-[clamp(1.4rem,2.2vw,2rem)]"
                >
                  <span className="t-sub col-span-12 md:col-span-6 lg:col-span-5 group-hover:underline decoration-1 underline-offset-[0.18em]">
                    {s.name}
                  </span>
                  <span className="t-lead muted col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-5 md:pt-1">
                    {s.line}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Set apart: a tinted panel whose padding is taken back from the frame,
              so its columns still line up with the rows above. */}
          <div className="mt-[clamp(2.5rem,4vw,3.5rem)] bg-paper-2 -mx-[clamp(1.25rem,2.2vw,2rem)]">
            <Link
              href="/services"
              className="group grid-12 gap-y-2 px-[clamp(1.25rem,2.2vw,2rem)] py-[clamp(1.6rem,2.6vw,2.4rem)]"
            >
              <span className="t-sub col-span-12 md:col-span-6 lg:col-span-5 group-hover:underline decoration-1 underline-offset-[0.18em]">
                Design systems
              </span>
              <span className="t-lead muted col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-5 md:pt-1">
                For design and development teams: Figma libraries that match what&rsquo;s built and are documented so
                your team can use them.
              </span>
            </Link>
          </div>
        </section>

        {/* Client quote: open (no Pendulum quote yet). Do not render a placeholder;
            a quote would sit here, between the services and the close. */}

        <Close
          headline="Have something coming up?"
          body="Tell me what it is and when you need it. A few lines is plenty, and I’ll come back with how I’d approach it."
          messageLabel="What’s coming up"
          placeholder="A report due in March, a campaign for a product launch, a site that needs a refresh…"
        />
      </main>

      <SiteFooter />
    </div>
  );
}

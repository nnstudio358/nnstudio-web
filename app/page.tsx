import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Close from "@/components/site/Close";
import LoopVideo from "@/components/site/LoopVideo";
import PlannedShot from "@/components/site/PlannedShot";
import SpecIllustration from "@/components/site/SpecIllustration";

export const viewport: Viewport = { themeColor: "#F4F2EE" };

// Copy: Nathan's Duet Figma file, page "Layouts in the new type (Nov 23)", used verbatim.
// The share description is the approved hero body.
const title = "nnstudio — Senior design partner for B2B marketing teams and agencies";
const description =
  "When a report, campaign or site really matters and your team is already stretched, I join you and carry it from first idea to final files. You'll always know where it stands, and the person you hire is the person doing the work.";

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

const CREDIT = "Design for marketing teams at Google Cloud, Meta, WhatsApp, Capital One and Penske.";

export default function Home() {
  return (
    <div className="site-a">
      <SiteNav />

      <main>
        {/* Hero: kept short so the work starts in the first screen. */}
        <section aria-labelledby="hero-heading" className="frame pt-[clamp(0.75rem,1.7vw,1.5rem)]">
          <h1 id="hero-heading" className="t-display">
            Senior design for the work <br className="hidden md:inline" />
            that has to land.
          </h1>
          <div className="grid-12 gap-y-7 mt-[clamp(1.5rem,2.8vw,2.5rem)]">
            <p className="t-lead col-span-12 md:col-span-6 max-w-[30em]">
              When a report, campaign or site really matters and your team is already stretched, I join you and carry it
              from first idea to final files. You&rsquo;ll always know where it stands, and the person you hire is the
              person doing the&nbsp;work.
            </p>
            <div className="col-span-12 md:col-start-7 md:col-span-6 md:pt-1">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link href="/contact" className="btn">
                  Tell me what&rsquo;s coming up
                </Link>
                <Link href="/work" className="link font-[560] text-[1.0625rem] py-2">
                  See the work
                </Link>
              </div>
              <p className="t-lead mt-5 max-w-[24em] hidden md:block">{CREDIT}</p>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section aria-labelledby="work-heading" className="frame mt-[clamp(2rem,2.8vw,2.5rem)]">
          <h2 id="work-heading" className="sr-only">
            Selected work
          </h2>

          {/* 1. Pendulum: the pages fill the band top to bottom; the right page
              lines up with the frame and the cover runs off the left edge. The
              band continues the image's own flat border colour, #2C233E.
              The image's pages sit at y 146–1076 of 1200 and x 80–1531 of 1600. */}
          <Link href="/work/pendulum" className="zoom block">
            <div className="bleed relative overflow-hidden bg-[#2C233E] [--h:72vw] md:[--h:min(60vw,880px)] h-[var(--h)]">
              <Image
                src="/home/pendulum-brand-risk-report.jpg"
                alt="Pendulum Brand Risk Report: the cover and an interior page with data charts"
                width={1600}
                height={1200}
                sizes="(min-width: 768px) 105vw, 125vw"
                loading="eager"
                fetchPriority="high"
                className="absolute max-w-none w-auto"
                style={{
                  height: "calc(var(--h) * 1.2903)",
                  top: "calc(var(--h) * -0.157)",
                  right: "calc(var(--bleed) - var(--h) * 0.0742)",
                }}
              />
            </div>
            <Caption name="Pendulum Intelligence">
              A research report and the campaign around it brought in at least 150 marketing-qualified leads, and a
              three-month retainer.
            </Caption>
          </Link>
          <p className="t-lead mt-8 max-w-[24em] md:hidden">{CREDIT}</p>

          {/* 2 + 3. Turno cropped into the hardcover; the enterprise spec dropped
              on the second column. */}
          <div className="grid-12 gap-y-16 mt-[clamp(5rem,9vw,8.5rem)]">
            <Link href="/work/turno" className="zoom block col-span-12 md:col-span-6">
              {/* Crop of work-turno-book.png (1920×1440): x 200–1350, y 60–1210.
                  Turno's teal shows only where the frame takes the book's corners. */}
              <div className="relative aspect-square overflow-hidden bg-[#146259]">
                <Image
                  src="/work-turno-book.png"
                  alt="Turno’s How to Start an Airbnb guide, printed as a hardcover book"
                  width={1920}
                  height={1440}
                  sizes="(min-width: 768px) 84vw, 167vw"
                  className="absolute max-w-none h-auto w-[166.96%] left-[-17.39%] top-[-5.22%]"
                />
              </div>
              <Caption name="Turno">
                Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and together
                they&rsquo;ve reached more than 8,000 unique&nbsp;views.
              </Caption>
            </Link>

            <Link href="/work" className="zoom block col-span-12 md:col-start-7 md:col-span-6 md:mt-[34%]">
              <div className="relative aspect-[5/4] overflow-hidden">
                <SpecIllustration className="absolute inset-0 h-full w-full" />
              </div>
              <Caption name="Enterprise website design system">
                A Figma library kept in step with the live site, so designers and developers build from the same parts.
                Shown with illustrative visuals.
              </Caption>
            </Link>
          </div>

          {/* 4. SSC: a second edge-to-edge plate, echoing Pendulum. */}
          <figure className="mt-[clamp(5rem,9vw,8.5rem)]">
            <div className="bleed bg-black">
              <LoopVideo
                src="/work-intralinks.mp4"
                poster="/work/intralinks-poster.jpg"
                label="Screen recording of the SSC Intralinks investor-portal assessment"
                className="aspect-[1728/850] md:aspect-[2/1] md:max-h-[880px] md:w-full"
              />
            </div>
            <figcaption>
              <Link href="/work" className="zoom block">
                <Caption name="SSC Intralinks">
                  An interactive <span className="whitespace-nowrap">investor-portal</span>{" "}assessment that won a Demand
                  Gen Report Killer Content Award in 2022.
                </Caption>
              </Link>
            </figcaption>
          </figure>

          {/* 5. FGX, small, with the way on to the rest of the work beside it. */}
          <div className="grid-12 gap-y-10 mt-[clamp(5rem,9vw,8.5rem)] items-end">
            <Link href="/work" className="zoom block col-span-12 md:col-span-5">
              <PlannedShot
                shot="FGX landing page, laptop and phone"
                description="Placeholder for a planned photo of the FGX landing page on a laptop and a phone"
              />
              <Caption name="FGX">FGX&rsquo;s printed services booklet, turned into an interactive landing&nbsp;page.</Caption>
            </Link>
            <p className="col-span-12 md:col-start-7 md:col-span-6">
              <Link href="/work" className="link t-sub inline-block py-1">
                See all work
              </Link>
            </p>
          </div>
        </section>

        {/* What I can help with: a ruled list, design systems set apart. */}
        <section
          aria-labelledby="help-heading"
          className="frame mt-[clamp(6rem,12vw,11rem)] mb-[clamp(6rem,11vw,10rem)]"
        >
          <div className="grid-12 gap-y-6 items-end">
            <h2 id="help-heading" className="t-h2 col-span-12 md:col-span-6">
              What I can help with
            </h2>
            <p className="t-lead muted col-span-12 md:col-start-7 md:col-span-6 lg:col-span-5 md:pb-1">
              Most teams come to me with one of four kinds of project.
            </p>
          </div>

          <ul className="mt-[clamp(2.5rem,4vw,3.5rem)] border-t border-carbon">
            {SERVICES.map((s) => (
              <li key={s.name} className="border-b border-hairline">
                <Link href={s.href} className="grid-12 gap-y-2 py-[clamp(1.4rem,2.2vw,2rem)]">
                  <span className="t-sub col-span-12 md:col-span-6">
                    <span className="row-name">{s.name}</span>
                  </span>
                  <span className="t-lead muted col-span-12 md:col-start-7 md:col-span-6 lg:col-span-5 md:pt-1">
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
              className="grid-12 gap-y-2 px-[clamp(1.25rem,2.2vw,2rem)] py-[clamp(1.6rem,2.6vw,2.4rem)]"
            >
              <span className="t-sub col-span-12 md:col-span-6">
                <span className="row-name">Design systems</span>
              </span>
              <span className="t-lead muted col-span-12 md:col-start-7 md:col-span-6 lg:col-span-5 md:pt-1">
                For design and development teams: Figma libraries that match what&rsquo;s built and are documented so
                your team can use&nbsp;them.
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

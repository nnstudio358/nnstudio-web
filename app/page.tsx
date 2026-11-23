import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WallLabel from "@/components/gallery/WallLabel";
import PlannedShot from "@/components/gallery/PlannedShot";
import LoopVideo from "@/components/gallery/LoopVideo";
import DocPage from "@/components/gallery/DocPage";
import BriefForm from "@/components/gallery/BriefForm";
import { primaryButtonLarge } from "@/components/gallery/buttons";

import reportSpread from "@/public/work/pendulum/report-spread-scenario.jpg";
import reportCover from "@/public/work/pendulum/report-cover.jpg";
import adVideo from "@/public/work/pendulum/campaign-tofu-1.jpg";
import adData from "@/public/work/pendulum/campaign-tofu-2.jpg";
import adAudience from "@/public/work/pendulum/campaign-tofu-4.jpg";
import adReport from "@/public/work/pendulum/promo-ad-report.jpg";
import turnoBook from "@/public/work-turno-book.png";
import turnoTablet from "@/public/work-turno-tablet.png";

export const viewport: Viewport = { themeColor: "#54504A" };

const title = "nnstudio — Senior design partner for B2B marketing teams and agencies";
// From the approved hero copy.
const description =
  "When a report, campaign or site really matters and your team is already stretched, I join you and carry it from first idea to final files.";

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

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16";
const sectionTitle =
  "font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-balance";

const campaign = [
  { src: adVideo, alt: "Pendulum campaign ad: Your brand is all over video. Your listening tool can't find it." },
  { src: adData, alt: "Pendulum campaign ad: 15x more data. Same brand. Actually useful intel." },
  { src: adAudience, alt: "Pendulum campaign ad: Your audience is talking about your brand." },
  { src: adReport, alt: "Pendulum campaign ad promoting the report: Reputation unravels in 15 seconds. Get the 30-minute warning." },
];

const services = [
  {
    name: "Brand and campaigns",
    text: "eBooks, ads, social and the campaign artwork that ties them together.",
    href: "/services",
  },
  {
    name: "Reports and presentations",
    text: "Research and annual reports, pitch decks, print pieces and interactives.",
    href: "/services/reports-and-presentations",
  },
  {
    name: "Websites",
    text: "Marketing sites, landing pages and Shopify stores.",
    href: "/services",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Title wall, with the Pendulum report spread hung large and running off the right edge */}
        <section aria-labelledby="home-title" className="wall-bronze overflow-hidden">
          <div className={`${wrap} pb-20 pt-8 md:pb-28 md:pt-12 lg:pt-14`}>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-12">
              <h1
                id="home-title"
                className="font-display text-[clamp(2.75rem,6vw,5.75rem)] font-medium leading-[1.0] tracking-[-0.02em] text-balance lg:col-span-12"
              >
                Senior design for the work that has to land.
              </h1>

              <Link
                href="/work/pendulum"
                aria-label="Pendulum Intelligence research report: see the project"
                className="piece block lg:col-span-8 lg:col-start-5 lg:row-start-2 lg:mr-[calc(-9rem_-_max(0px,(100vw_-_1440px)/2))]"
              >
                <Image
                  src={reportSpread}
                  alt="Pendulum Intelligence research report, open to a spread on a real-world scenario, with charts of the social data analysed"
                  sizes="(min-width: 1024px) 75vw, 100vw"
                  preload
                  className="lift h-auto w-full"
                />
              </Link>

              <div className="font-grotesk lg:col-span-4 lg:row-start-2">
                <p className="max-w-[31rem] text-[18px] leading-[1.6] md:text-[19px]">
                  When a report, campaign or site really matters and your team is already stretched, I join you
                  and carry it from first idea to final files. You&rsquo;ll always know where it stands, and the
                  person you hire is the person doing the work.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link href="/contact" className={primaryButtonLarge}>
                    Tell me what&rsquo;s coming up
                  </Link>
                  <Link href="/work" className="text-link py-2 text-[16px] font-medium">
                    See the work
                  </Link>
                </div>
                <p className="mt-10 max-w-[28rem] text-[17px] leading-[1.55] md:text-[18px]">
                  Design for marketing teams at Google Cloud, Meta, WhatsApp, Capital One and Penske.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stone room: the darker pieces */}
        <section aria-labelledby="selected-work" className="wall-stone">
          <h2 id="selected-work" className="sr-only">
            Selected work
          </h2>
          <div className={`${wrap} py-24 md:py-32`}>
            {/* Pendulum: cover and a 2×2 of the campaign share top and bottom edges */}
            <article className="piece lg:w-[84%]">
              <div className="grid gap-5 md:grid-cols-[1000fr_1294fr] md:gap-x-6 md:gap-y-0">
                <Image
                  src={reportCover}
                  alt="Pendulum report cover: Why is your current risk monitoring failing your boardroom?"
                  sizes="(min-width: 1440px) 480px, (min-width: 768px) 40vw, 72vw"
                  className="lift h-auto w-[72%] md:w-full"
                />
                <ul className="lift grid grid-cols-2 gap-3 md:gap-4">
                  {campaign.map((ad) => (
                    <li key={ad.alt}>
                      <Image
                        src={ad.src}
                        alt={ad.alt}
                        sizes="(min-width: 1440px) 300px, (min-width: 768px) 26vw, 46vw"
                        className="h-auto w-full"
                      />
                    </li>
                  ))}
                </ul>
                <WallLabel
                  name="Pendulum Intelligence"
                  medium="Research report and campaign"
                  href="/work/pendulum"
                  className="mt-3 md:col-start-2 md:mt-8"
                >
                  A research report and the campaign around it brought in at least 150 marketing-qualified leads,
                  and a three-month retainer.
                </WallLabel>
              </div>
            </article>

            {/* Turno: the hardcover and the hub on the tablet, standing on one baseline */}
            <article className="piece mt-28 md:mt-40">
              <div className="grid grid-cols-12 items-end gap-x-4 gap-y-6 md:gap-x-6">
                <div className="lift col-span-12 overflow-hidden md:col-span-7" style={{ aspectRatio: "1753 / 1240" }}>
                  <Image
                    src={turnoBook}
                    alt="Turno's hardcover guide, How to Start an Airbnb: The Complete Guide for New Hosts"
                    sizes="(min-width: 1440px) 830px, (min-width: 768px) 60vw, 110vw"
                    className="h-auto"
                    style={{ width: "109.53%", maxWidth: "none", marginLeft: "-5.08%", marginTop: "-6.67%" }}
                  />
                </div>
                <div
                  className="lift col-span-9 col-start-4 overflow-hidden md:col-span-5 md:col-start-auto"
                  style={{ aspectRatio: "1421 / 1089" }}
                >
                  <Image
                    src={turnoTablet}
                    alt="The guide as a web hub, shown on a tablet"
                    sizes="(min-width: 1440px) 740px, (min-width: 768px) 56vw, 100vw"
                    className="h-auto"
                    style={{ width: "135.12%", maxWidth: "none", marginLeft: "-17.59%", marginTop: "-12.1%" }}
                  />
                </div>
              </div>
              <WallLabel
                name="Turno"
                medium="Hardcover book, eBook and web hub"
                href="/work/turno"
                className="mt-8"
              >
                Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and together
                they&rsquo;ve reached more than 8,000 unique views.
              </WallLabel>
            </article>

            {/* SSC Intralinks: the recording, hung right of centre */}
            <article className="piece mt-28 grid md:mt-40 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-8 lg:col-start-5">
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  name="SSC Intralinks"
                  label="Screen recording of the SSC Intralinks investor-portal assessment"
                />
                <WallLabel
                  name="SSC Intralinks"
                  medium="Interactive assessment"
                  href="/work"
                  className="mt-4"
                >
                  An interactive investor-portal assessment that won a Demand Gen Report Killer Content Award in
                  2022.
                </WallLabel>
              </div>
            </article>
          </div>
        </section>

        {/* Bronze room: the lighter pieces, then services and the close */}
        <section aria-label="More selected work" className="wall-bronze">
          <div className={`${wrap} pt-24 md:pt-32`}>
            <div className="grid gap-y-20 md:grid-cols-12 md:items-start md:gap-x-6">
              <article className="piece md:col-span-6 lg:col-span-5">
                <DocPage className="lift block h-auto w-full" />
                <WallLabel
                  name="Enterprise website design system"
                  medium="Figma library"
                  href="/work"
                  className="mt-6"
                >
                  A Figma library kept in step with the live site, so designers and developers build from the same
                  parts. Shown with illustrative visuals.
                </WallLabel>
              </article>

              <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8">
                <article className="piece">
                  <PlannedShot shot="FGX landing page (laptop and phone)" ratio="16 / 10" />
                  <WallLabel name="FGX" medium="Landing page" href="/work" className="mt-6">
                    FGX&rsquo;s printed services booklet, turned into an interactive landing page.
                  </WallLabel>
                </article>
                <Link href="/work" className="text-link font-grotesk mt-16 inline-block py-2 text-[17px] font-semibold md:mt-24">
                  See all work
                </Link>
              </div>
            </div>
          </div>

          {/* Client quote: open. No quote has been received yet, so this section stays out. */}

          <div className={`${wrap} pt-28 md:pt-40`}>
            <div className="max-w-[40rem]">
              <h2 id="help-title" className={sectionTitle}>
                What I can help with
              </h2>
              <p className="font-grotesk mt-5 text-[18px] leading-[1.6] text-paper-dim md:text-[19px]">
                Most teams come to me with one of four kinds of project.
              </p>
            </div>

            <ul aria-labelledby="help-title" className="font-grotesk mt-14 border-t border-[var(--rule)] md:mt-16">
              {services.map((s) => (
                <li key={s.name} className="border-b border-[var(--rule)]">
                  <Link
                    href={s.href}
                    className="group -mx-5 grid gap-y-2 px-5 py-7 transition-colors duration-200 ease-out hover:bg-bronze-deep md:-mx-6 md:grid-cols-12 md:items-baseline md:gap-x-6 md:px-6 md:py-9"
                  >
                    <span className="text-[26px] font-semibold leading-tight tracking-[-0.012em] underline decoration-1 underline-offset-[0.2em] group-hover:decoration-2 md:col-span-5 md:text-[32px]">
                      {s.name}
                    </span>
                    <span className="text-[17px] leading-[1.55] text-paper-dim md:col-span-6 md:col-start-7 md:text-[18px]">
                      {s.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Design systems sits apart: a different audience (design and development teams) */}
            <Link
              href="/services"
              className="wall-stone group font-grotesk mt-16 grid gap-y-3 rounded-[4px] px-6 py-8 transition-colors duration-200 ease-out hover:bg-stone-deep md:mt-20 md:grid-cols-12 md:items-baseline md:gap-x-6 md:px-10 md:py-11"
            >
              <span className="text-[26px] font-semibold leading-tight tracking-[-0.012em] underline decoration-1 underline-offset-[0.2em] group-hover:decoration-2 md:col-span-5 md:text-[32px]">
                Design systems
              </span>
              <span className="text-[17px] leading-[1.55] text-graphite-dim md:col-span-6 md:col-start-7 md:text-[18px]">
                For design and development teams: Figma libraries that match what&rsquo;s built and are documented
                so your team can use them.
              </span>
            </Link>
          </div>

          {/* The close */}
          <div className={`${wrap} py-28 md:py-40`}>
            <div className="grid gap-y-12 border-t border-[var(--rule)] pt-20 md:pt-28 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-5">
                <h2 id="close-title" className={sectionTitle}>
                  Have something coming up?
                </h2>
                <p className="font-grotesk mt-6 max-w-[28rem] text-[18px] leading-[1.6] text-paper-dim md:text-[19px]">
                  Tell me what it is and when you need it. A few lines is plenty, and I&rsquo;ll come back with how
                  I&rsquo;d approach it.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
                <BriefForm
                  id="home-brief"
                  messageLabel="What’s coming up"
                  messagePlaceholder="A report due in March, a campaign for a product launch, a site that needs a refresh…"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

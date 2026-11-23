import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WallLabel from "@/components/gallery/WallLabel";
import PlannedShot from "@/components/gallery/PlannedShot";
import LoopVideo from "@/components/gallery/LoopVideo";
import ComponentSheet from "@/components/gallery/ComponentSheet";
import BriefForm from "@/components/gallery/BriefForm";

import reportSpread from "@/public/work/pendulum/report-spread-scenario.jpg";
import reportCover from "@/public/work/pendulum/report-cover.jpg";
import adVideo from "@/public/work/pendulum/campaign-tofu-1.jpg";
import adData from "@/public/work/pendulum/campaign-tofu-2.jpg";
import adAudience from "@/public/work/pendulum/campaign-tofu-4.jpg";
import adReport from "@/public/work/pendulum/promo-ad-report.jpg";
import turnoStack from "@/public/turno-dualstack.png";

export const viewport: Viewport = { themeColor: "#54504A" };

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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16";

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
        {/* Room one: the title wall and the Pendulum report and campaign */}
        <section aria-labelledby="home-title" className="wall-bronze">
          <div className={`${wrap} pt-8 md:pt-12 lg:pt-14`}>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-12">
              <h1
                id="home-title"
                className="font-slab text-[clamp(2.75rem,6.4vw,6rem)] font-medium leading-[0.98] tracking-[-0.018em] text-balance lg:col-span-11"
              >
                Senior design for the work that has to land.
              </h1>

              <figure className="lg:col-span-7 lg:col-start-6 lg:row-start-2">
                <Image
                  src={reportSpread}
                  alt="Pendulum Intelligence research report, open to a spread on a real-world scenario, with charts of the social data analysed"
                  sizes="(min-width: 1440px) 765px, (min-width: 1024px) 56vw, 100vw"
                  preload
                  className="hung h-auto w-full"
                />
              </figure>

              <div className="font-grotesk lg:col-span-4 lg:row-start-2 lg:self-center">
                <p className="max-w-[31rem] text-[18px] leading-[1.6] md:text-[19px]">
                  When a report, campaign or site really matters and your team is already stretched, I join you
                  and carry it from first idea to final files. You&rsquo;ll always know where it stands, and the
                  person you hire is the person doing the work.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link
                    href="/contact"
                    className="rounded-[3px] bg-aqua px-6 py-[0.9rem] text-[16px] font-semibold text-on-aqua transition-colors duration-150 ease-out hover:bg-[#B7EEDF]"
                  >
                    Tell me what&rsquo;s coming up
                  </Link>
                  <Link href="/work" className="text-link py-2 text-[16px] font-medium">
                    See the work
                  </Link>
                </div>
                <p className="mt-10 max-w-[26rem] text-[15px] leading-[1.55] text-paper-dim lg:mt-12">
                  Design for marketing teams at Google Cloud, Meta, WhatsApp, Capital One and Penske.
                </p>
              </div>
            </div>
          </div>

          <h2 className="sr-only">Selected work</h2>

          {/* Pendulum: the report's cover with its campaign hung on the cover's centre line */}
          <article aria-labelledby="w-pendulum" className={`${wrap} pb-24 pt-20 md:pb-32 md:pt-28`}>
            <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
              <div className="w-[72%] max-w-[26rem] sm:w-[56%] lg:col-span-4 lg:w-full lg:max-w-none">
                <Image
                  src={reportCover}
                  alt="Pendulum report cover: Why is your current risk monitoring failing your boardroom?"
                  sizes="(min-width: 1024px) 30vw, 72vw"
                  className="hung h-auto w-full"
                />
              </div>
              <div className="grid lg:col-span-8 lg:col-start-5 lg:grid-rows-[1fr_auto_1fr]">
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:row-start-2 lg:gap-5">
                  {campaign.map((ad) => (
                    <li key={ad.alt}>
                      <Image src={ad.src} alt={ad.alt} sizes="(min-width: 1024px) 15vw, (min-width: 640px) 24vw, 46vw" className="hung h-auto w-full" />
                    </li>
                  ))}
                </ul>
                <WallLabel
                  id="w-pendulum"
                  name="Pendulum Intelligence"
                  medium="Research report and campaign"
                  className="mt-10 lg:row-start-3 lg:self-end"
                >
                  A research report and the campaign around it brought in at least 150 marketing-qualified leads,
                  and a three-month retainer.
                </WallLabel>
              </div>
            </div>
          </article>
        </section>

        {/* Room two: Turno, the book and the hub it grew into */}
        <section aria-labelledby="w-turno" className="wall-stone">
          <div className={`${wrap} py-20 md:py-28`}>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-6">
              <figure className="-mx-3 lg:col-span-9 lg:col-start-4 lg:mx-0">
                <Image
                  src={turnoStack}
                  alt="Turno's printed guide, How to Start an Airbnb, beside a tablet showing the web hub built from it"
                  sizes="(min-width: 1440px) 990px, (min-width: 1024px) 72vw, 100vw"
                  className="h-auto w-full"
                />
              </figure>
              <WallLabel
                id="w-turno"
                name="Turno"
                medium="Printed guide, eBook and web hub"
                className="lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:pb-16"
              >
                Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and together
                they&rsquo;ve reached more than 8,000 unique views.
              </WallLabel>
            </div>
          </div>
        </section>

        {/* Room three: screens, then the design system */}
        <section aria-label="More selected work" className="wall-bronze">
          <div className={`${wrap} py-24 md:py-32`}>
            <div className="grid gap-x-6 lg:grid-cols-12 lg:items-center">
              <LoopVideo
                src="/work-intralinks.mp4"
                poster="/work/intralinks-poster.jpg"
                label="Screen recording of the SSC Intralinks investor-portal assessment"
                className="hung block aspect-[1728/850] w-full rounded-[4px] bg-white lg:col-span-7 lg:row-start-1"
              />
              <WallLabel
                name="SSC Intralinks"
                medium="Interactive assessment"
                className="mt-6 lg:col-span-4 lg:row-start-2 lg:mt-8"
              >
                An interactive investor-portal assessment that won a Demand Gen Report Killer Content Award in
                2022.
              </WallLabel>
              <PlannedShot
                shot="FGX landing page (laptop and phone)"
                ratio="16 / 10"
                className="mt-16 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0"
              />
              <WallLabel
                name="FGX"
                medium="Landing page"
                className="mt-6 lg:col-span-4 lg:col-start-8 lg:row-start-2 lg:mt-8"
              >
                FGX&rsquo;s printed services booklet, turned into an interactive landing page.
              </WallLabel>
            </div>

            <article
              aria-labelledby="w-system"
              className="mt-24 grid gap-y-8 md:mt-32 lg:grid-cols-12 lg:items-center lg:gap-x-6"
            >
              <figure className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
                <ComponentSheet className="hung block h-auto w-full rounded-[4px]" />
              </figure>
              <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
                <WallLabel id="w-system" name="Enterprise website design system" medium="Figma library">
                  A Figma library kept in step with the live site, so designers and developers build from the same
                  parts. Shown with illustrative visuals.
                </WallLabel>
                <Link href="/work" className="text-link font-grotesk mt-10 inline-block py-2 text-[17px] font-semibold">
                  See all work
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Client quote: open. No quote has been received yet, so this section stays out. */}

        {/* Room four: the information desk */}
        <section aria-labelledby="help-title" className="wall-stone">
          <div className={`${wrap} py-24 md:py-32`}>
            <div className="max-w-[40rem]">
              <h2
                id="help-title"
                className="font-slab text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.012em]"
              >
                What I can help with
              </h2>
              <p className="font-grotesk mt-5 text-[18px] leading-[1.6] text-graphite-dim md:text-[19px]">
                Most teams come to me with one of four kinds of project.
              </p>
            </div>

            <ul className="font-grotesk mt-14 border-t border-[var(--rule)] md:mt-16">
              {services.map((s) => (
                <li key={s.name} className="border-b border-[var(--rule)]">
                  <Link
                    href={s.href}
                    className="group -mx-5 grid gap-y-2 px-5 py-7 transition-colors duration-200 ease-out hover:bg-stone-deep md:-mx-6 md:grid-cols-12 md:items-baseline md:gap-x-6 md:px-6 md:py-9"
                  >
                    <span className="text-[26px] font-semibold leading-tight tracking-[-0.012em] decoration-2 underline-offset-[6px] group-hover:underline md:col-span-5 md:text-[32px]">
                      {s.name}
                    </span>
                    <span className="text-[17px] leading-[1.55] text-graphite-dim md:col-span-6 md:col-start-7 md:text-[18px]">
                      {s.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Design systems sits apart: a different audience (design and development teams) */}
            <Link
              href="/services"
              className="wall-night group font-grotesk mt-16 grid gap-y-3 rounded-[4px] px-6 py-8 transition-colors duration-200 ease-out hover:bg-[#36434A] md:mt-20 md:grid-cols-12 md:items-baseline md:gap-x-6 md:px-10 md:py-11"
            >
              <span className="text-[26px] font-semibold leading-tight tracking-[-0.012em] decoration-2 underline-offset-[6px] group-hover:underline md:col-span-5 md:text-[32px]">
                Design systems
              </span>
              <span className="text-[17px] leading-[1.55] text-mist md:col-span-6 md:col-start-7 md:text-[18px]">
                For design and development teams: Figma libraries that match what&rsquo;s built and are documented
                so your team can use them.
              </span>
            </Link>
          </div>
        </section>

        {/* The close */}
        <section aria-labelledby="close-title" className="wall-night">
          <div className={`${wrap} py-24 md:py-32`}>
            <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-5">
                <h2
                  id="close-title"
                  className="font-slab text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.012em]"
                >
                  Have something coming up?
                </h2>
                <p className="font-grotesk mt-6 max-w-[28rem] text-[18px] leading-[1.6] text-mist md:text-[19px]">
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

import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WallLabel from "@/components/gallery/WallLabel";
import PlannedShot from "@/components/gallery/PlannedShot";
import LoopVideo from "@/components/gallery/LoopVideo";
import BriefForm from "@/components/gallery/BriefForm";
import { primaryButtonLarge } from "@/components/gallery/buttons";

import roadmapSpread from "@/public/work/pendulum/report-spread-roadmap.jpg";
import turnoBook from "@/public/work-turno-book.png";
import turnoTablet from "@/public/work-turno-tablet.png";

export const viewport: Viewport = { themeColor: "#54504A" };

// From the approved hero copy.
const description =
  "You have the research, a date and a team that’s already full. I’ll take the design from first layout to final files, in print or on screen, and turn dense data into pages your readers want to finish.";

export const metadata: Metadata = {
  title: "Reports and presentations",
  description,
  openGraph: {
    siteName: "nnstudio",
    type: "website",
    title: "Research reports, eBooks and pitch decks | nnstudio",
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "nnstudio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research reports, eBooks and pitch decks | nnstudio",
    description,
    images: ["/og-image.png"],
  },
};

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16";
const sectionTitle =
  "font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-balance";

const takeOn = [
  "Research and annual reports",
  "eBooks and guides",
  "Pitch and sales decks",
  "Print pieces, from brochures to hardcover books",
  "Interactive reports and assessments",
];

const reasons = [
  {
    title: "Senior and hands-on",
    text: "More than 20 years designing B2B reports, and you work with me, not someone I hand it to.",
  },
  {
    title: "Data that reads easily",
    text: "Every chart gets a layout built around its own data, so long research stays easy to follow.",
  },
  {
    title: "Print and screen, one designer",
    text: "From a landing page to a 130-page hardcover, the piece looks like one piece wherever it shows up.",
  },
  {
    title: "Part of your team",
    text: "You’ll know where things stand, and I’ll suggest more when it helps, like turning Turno’s printed guide into an eBook and a web hub too.",
  },
];

const steps = [
  { title: "Send what you have", text: "The draft or research, your date and your brand guide." },
  { title: "We agree scope and fee up front", text: "So there are no surprises later." },
  { title: "You see real pages early", text: "Usually one recommended direction, with the reasons behind it." },
  { title: "Final files, ready to go", text: "For print, the web or your developer." },
];

export default function ReportsAndPresentations() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero: title beside a Pendulum report spread that runs off the right edge */}
        <section aria-labelledby="rp-title" className="wall-bronze overflow-hidden">
          <div className={`${wrap} pb-20 pt-8 md:pb-28 md:pt-12 lg:pt-14`}>
            <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-5">
                <h1
                  id="rp-title"
                  className="font-display text-[clamp(2.75rem,4.6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance"
                >
                  Research reports, eBooks and pitch decks.
                </h1>
                <p className="font-grotesk mt-8 max-w-[32rem] text-[18px] leading-[1.6] md:text-[19px]">
                  You have the research, a date and a team that&rsquo;s already full. I&rsquo;ll take the design from
                  first layout to final files, in print or on screen, and turn dense data into pages your readers
                  want to finish.
                </p>
                <Link href="/contact" className={`${primaryButtonLarge} mt-8`}>
                  Send the draft and the date
                </Link>
                <p className="font-grotesk mt-10 max-w-[28rem] text-[17px] leading-[1.55] md:text-[18px]">
                  Turno&rsquo;s host guide reached 8,000+ unique views and 800+ eBook downloads.
                </p>
              </div>
              <Link
                href="/work/pendulum"
                aria-label="Pendulum Intelligence research report: see the project"
                className="piece block lg:col-span-7 lg:col-start-6 lg:mr-[calc(-9rem_-_max(0px,(100vw_-_1440px)/2))] lg:pt-3"
              >
                <Image
                  src={roadmapSpread}
                  alt="Pendulum Intelligence research report, open to the brand reputation monitoring action plan: a four-phase roadmap"
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  preload
                  className="lift h-auto w-full"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Stone room: recent reports, then scope */}
        <section aria-labelledby="rp-recent" className="wall-stone">
          <div className={`${wrap} py-24 md:py-32`}>
            <h2 id="rp-recent" className={sectionTitle}>
              Recent reports
            </h2>

            {/* Turno: the hardcover and the hub on the tablet, standing on one baseline */}
            <article className="mt-12 md:mt-16">
              <div className="piece">
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
                  A printed guide for new Airbnb hosts that grew into a 130-page hardcover, an eBook and a web hub.
                </WallLabel>
              </div>

              <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
                <p className="font-grotesk max-w-[24rem] text-[16px] font-semibold leading-[1.55] lg:col-span-4">
                  8,000+ unique views, 800+ eBook downloads, and about 65% of new sign-ups went on to book a cleaner.
                </p>
                <figure className="lg:col-span-7 lg:col-start-6">
                  <blockquote className="font-grotesk text-[21px] leading-[1.5] tracking-[-0.005em] md:text-[24px]">
                    <p style={{ textIndent: "-0.42em" }}>
                      &ldquo;What started as a fairly narrow project evolved into a beautifully designed
                      70,000-word hardcover book, eBook, and website content hub. &hellip; Nathan kept me informed
                      every step of the way while also bringing thoughtful ideas and recommendations.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="font-grotesk mt-5 text-[15px] leading-snug text-graphite-dim">
                    Nicolette M., Marketing Director, Turno
                  </figcaption>
                </figure>
              </div>
            </article>

            {/* SSC and BetterCloud */}
            <div className="mt-28 grid gap-y-20 md:mt-36 md:grid-cols-12 md:items-start md:gap-x-6">
              <article className="piece md:col-span-7">
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  name="SSC Intralinks"
                  label="Screen recording of the SSC Intralinks investor-portal assessment"
                />
                <WallLabel name="SSC Intralinks" medium="Interactive assessment" href="/work" className="mt-4">
                  An interactive investor-portal assessment, designed and built as lead designer through
                  Content4Demand. Winner of a 2022 Demand Gen Report Killer Content Award.
                </WallLabel>
              </article>
              <article className="piece md:col-span-4 md:col-start-9">
                <PlannedShot shot="BetterCloud report and landing page" ratio="4 / 3" tone="stone" />
                <WallLabel name="BetterCloud" medium="Research report and landing page" href="/work" className="mt-6">
                  A 44-page research report on SaaS operations and the landing page that promoted it, designed while
                  working as a contractor through an agency.
                </WallLabel>
              </article>
            </div>

            <h2 id="rp-take-on" className={`${sectionTitle} mt-32 md:mt-44`}>
              What I can take on
            </h2>
            <ul aria-labelledby="rp-take-on" className="font-grotesk mt-8 border-t border-[var(--rule)] md:mt-10">
              {takeOn.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--rule)] py-4 text-[22px] font-medium leading-snug tracking-[-0.01em] md:py-5 md:text-[30px]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 id="rp-why" className={`${sectionTitle} mt-28 md:mt-36`}>
              Why teams bring me in
            </h2>
            <div className="font-grotesk mt-8 max-w-[40rem] space-y-5 text-[18px] leading-[1.6] md:mt-10 md:text-[19px]">
              {reasons.map((r) => (
                <p key={r.title}>
                  <strong className="font-semibold">{r.title}.</strong>{" "}
                  <span className="text-graphite-dim">{r.text}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Bronze room: how it works, the two ways in, and the close */}
        <section aria-labelledby="rp-how" className="wall-bronze">
          <div className={`${wrap} pt-24 md:pt-32`}>
            <h2 id="rp-how" className={sectionTitle}>
              How it works
            </h2>
            <ol className="font-grotesk mt-10 border-t border-[var(--rule)]">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-y-1 border-b border-[var(--rule)] py-6 md:grid-cols-12 md:items-baseline md:gap-x-6 md:py-8"
                >
                  <span className="text-[17px] font-semibold text-paper-dim md:col-span-1" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="text-[20px] font-semibold leading-snug md:col-span-5 md:text-[24px]">{s.title}</h3>
                  <p className="col-start-2 text-[17px] leading-[1.6] text-paper-dim md:col-span-6 md:col-start-7 md:text-[18px]">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>

            <h2 id="rp-ways" className={`${sectionTitle} mt-28 md:mt-36`}>
              Directly or through an agency
            </h2>
            <div className="font-grotesk mt-10 grid gap-y-10 md:grid-cols-2 md:gap-x-0">
              <div className="md:pr-12">
                <h3 className="text-[22px] font-semibold leading-snug md:text-[24px]">Your in-house team</h3>
                <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.6] text-paper-dim md:text-[18px]">
                  You work with me directly. I fit around your review process and bring you only the decisions that
                  need you.
                </p>
              </div>
              <div className="border-t border-[var(--rule)] pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                <h3 className="text-[22px] font-semibold leading-snug md:text-[24px]">Your agency</h3>
                <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.6] text-paper-dim md:text-[18px]">
                  I work under your creative lead, in front of your client or behind the scenes, and keep the work
                  confidential.
                </p>
              </div>
            </div>
          </div>

          {/* The close */}
          <div className={`${wrap} py-28 md:py-40`}>
            <div className="grid gap-y-12 border-t border-[var(--rule)] pt-20 md:pt-28 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-5">
                <h2 id="rp-close" className={sectionTitle}>
                  Have a report or deck coming up?
                </h2>
                <p className="font-grotesk mt-6 max-w-[28rem] text-[18px] leading-[1.6] text-paper-dim md:text-[19px]">
                  Send the draft and the date, even if it&rsquo;s rough, and I&rsquo;ll come back with how I&rsquo;d
                  approach it.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
                <BriefForm id="rp-brief" messageLabel="What’s the project and when is it due?" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

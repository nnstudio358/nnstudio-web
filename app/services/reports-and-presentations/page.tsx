import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WallLabel from "@/components/gallery/WallLabel";
import PlannedShot from "@/components/gallery/PlannedShot";
import LoopVideo from "@/components/gallery/LoopVideo";
import BriefForm from "@/components/gallery/BriefForm";

import turnoBook from "@/public/work-turno-book.png";
import turnoTablet from "@/public/work-turno-tablet.png";
import turnoLaptop from "@/public/work-turno-laptop.png";

export const viewport: Viewport = { themeColor: "#54504A" };

export const metadata: Metadata = {
  title: "Reports and presentations",
  description:
    "Research reports, eBooks and pitch decks. I'll take the design from first layout to final files, in print or on screen, and turn dense data into pages your readers want to finish.",
};

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16";
const subhead = "font-grotesk text-[28px] font-semibold leading-tight tracking-[-0.012em] md:text-[34px]";

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
        {/* Hero: the Turno book hung beside the title */}
        <section aria-labelledby="rp-title" className="wall-bronze overflow-hidden">
          <div className={`${wrap} pb-20 pt-8 md:pb-28 md:pt-12 lg:pt-14`}>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:items-center lg:gap-x-6">
              <div className="lg:col-span-6">
                <h1
                  id="rp-title"
                  className="font-slab text-[clamp(2.75rem,5.6vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.018em] text-balance"
                >
                  Research reports, eBooks and pitch decks.
                </h1>
                <p className="font-grotesk mt-8 max-w-[33rem] text-[18px] leading-[1.6] md:text-[19px]">
                  You have the research, a date and a team that&rsquo;s already full. I&rsquo;ll take the design from
                  first layout to final files, in print or on screen, and turn dense data into pages your readers
                  want to finish.
                </p>
                <Link
                  href="/contact"
                  className="font-grotesk mt-8 inline-block rounded-[3px] bg-aqua px-6 py-[0.9rem] text-[16px] font-semibold text-on-aqua transition-colors duration-150 ease-out hover:bg-[#B7EEDF]"
                >
                  Send the draft and the date
                </Link>
                <p className="font-grotesk mt-10 max-w-[30rem] text-[15px] leading-[1.55] text-paper-dim">
                  Turno&rsquo;s host guide reached 8,000+ unique views and 800+ eBook downloads.
                </p>
              </div>
              <figure className="-mx-4 lg:col-span-6 lg:-mr-10 lg:ml-0">
                <Image
                  src={turnoBook}
                  alt="Turno's hardcover guide, How to Start an Airbnb: The Complete Guide for New Hosts"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  preload
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Reading room: scope and reasons */}
        <section aria-labelledby="rp-take-on" className="wall-stone">
          <div className={`${wrap} py-24 md:py-32`}>
            <h2 id="rp-take-on" className={subhead}>
              What I can take on
            </h2>
            <ul className="font-grotesk mt-8 border-t border-[var(--rule)] md:mt-10">
              {takeOn.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--rule)] py-4 text-[22px] font-medium leading-snug tracking-[-0.01em] md:py-5 md:text-[30px]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 id="rp-why" className={`${subhead} mt-24 md:mt-32`}>
              Why teams bring me in
            </h2>
            <ul className="font-grotesk mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2 md:gap-y-14 lg:max-w-[64rem]">
              {reasons.map((r) => (
                <li key={r.title}>
                  <h3 className="text-[20px] font-semibold leading-snug">{r.title}</h3>
                  <p className="mt-2 max-w-[30rem] text-[17px] leading-[1.6] text-graphite-dim">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery room: recent reports */}
        <section aria-labelledby="rp-recent" className="wall-bronze">
          <div className={`${wrap} py-24 md:py-32`}>
            <h2 id="rp-recent" className={subhead}>
              Recent reports
            </h2>

            {/* Turno: eBook on the tablet and the hub on the laptop, hung on one centre line */}
            <article aria-labelledby="rp-turno" className="mt-12 md:mt-16">
              <div className="grid grid-cols-12 items-center gap-y-8 lg:gap-x-6">
                {/* The tablet file carries a wide transparent margin; crop to the device itself */}
                <figure className="col-span-12 overflow-hidden lg:col-span-7" style={{ aspectRatio: "1421 / 1089" }}>
                  <Image
                    src={turnoTablet}
                    alt="Turno's guide as a web hub, shown on a tablet"
                    sizes="(min-width: 1440px) 1040px, (min-width: 1024px) 78vw, 135vw"
                    className="h-auto"
                    style={{ width: "135.12%", maxWidth: "none", marginLeft: "-17.59%", marginTop: "-12.1%" }}
                  />
                </figure>
                <figure className="col-span-10 col-start-3 lg:col-span-5 lg:col-start-auto">
                  <Image
                    src={turnoLaptop}
                    alt="The same Turno hub page on a laptop"
                    sizes="(min-width: 1440px) 540px, (min-width: 1024px) 40vw, 80vw"
                    className="h-auto w-full"
                  />
                </figure>
              </div>

              <div className="mt-10 grid gap-y-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-6">
                <div className="lg:col-span-4">
                  <WallLabel id="rp-turno" name="Turno" medium="Hardcover book, eBook and web hub">
                    A printed guide for new Airbnb hosts that grew into a 130-page hardcover, an eBook and a web
                    hub.
                  </WallLabel>
                  <p className="font-grotesk mt-5 max-w-[22rem] text-[16px] font-semibold leading-[1.55]">
                    8,000+ unique views, 800+ eBook downloads, and about 65% of new sign-ups went on to book a
                    cleaner.
                  </p>
                </div>
                <figure className="lg:col-span-7 lg:col-start-6">
                  <blockquote className="font-grotesk text-[21px] leading-[1.5] tracking-[-0.005em] md:text-[24px]">
                    <p>
                      &ldquo;What started as a fairly narrow project evolved into a beautifully designed
                      70,000-word hardcover book, eBook, and website content hub. &hellip; Nathan kept me informed
                      every step of the way while also bringing thoughtful ideas and recommendations.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="font-grotesk mt-5 text-[15px] leading-snug text-paper-dim">
                    Nicolette M., Marketing Director, Turno
                  </figcaption>
                </figure>
              </div>
            </article>

            {/* SSC and BetterCloud: two pieces on one centre line */}
            <div className="mt-28 grid gap-x-6 md:mt-36 lg:grid-cols-12 lg:items-center">
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
                An interactive investor-portal assessment, designed and built as lead designer through
                Content4Demand. Winner of a 2022 Demand Gen Report Killer Content Award.
              </WallLabel>
              <PlannedShot
                shot="BetterCloud report and landing page"
                ratio="4 / 3"
                className="mt-16 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0"
              />
              <WallLabel
                name="BetterCloud"
                medium="Research report and landing page"
                className="mt-6 lg:col-span-4 lg:col-start-8 lg:row-start-2 lg:mt-8"
              >
                A 44-page research report on SaaS operations and the landing page that promoted it, designed while
                working as a contractor through an agency.
              </WallLabel>
            </div>
          </div>
        </section>

        {/* Reading room: process and the two ways to work together */}
        <section aria-labelledby="rp-how" className="wall-stone">
          <div className={`${wrap} py-24 md:py-32`}>
            <h2 id="rp-how" className={subhead}>
              How it works
            </h2>
            <ol className="font-grotesk mt-10 border-t border-[var(--rule)]">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-y-1 border-b border-[var(--rule)] py-6 md:grid-cols-12 md:items-baseline md:gap-x-6 md:py-8"
                >
                  <span className="text-[17px] font-semibold text-graphite-dim md:col-span-1" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="text-[20px] font-semibold leading-snug md:col-span-5 md:text-[24px]">{s.title}</h3>
                  <p className="col-start-2 text-[17px] leading-[1.6] text-graphite-dim md:col-span-6 md:col-start-7 md:text-[18px]">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>

            <h2 id="rp-ways" className={`${subhead} mt-24 md:mt-32`}>
              Directly or through an agency
            </h2>
            <div className="font-grotesk mt-10 grid gap-y-10 md:grid-cols-2 md:gap-x-6">
              <div className="rounded-[4px] bg-stone-deep p-7 md:p-10">
                <h3 className="text-[22px] font-semibold leading-snug md:text-[24px]">Your in-house team</h3>
                <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.6] text-graphite-dim md:text-[18px]">
                  You work with me directly. I fit around your review process and bring you only the decisions that
                  need you.
                </p>
              </div>
              <div className="wall-night rounded-[4px] p-7 md:p-10">
                <h3 className="text-[22px] font-semibold leading-snug md:text-[24px]">Your agency</h3>
                <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.6] text-mist md:text-[18px]">
                  I work under your creative lead, in front of your client or behind the scenes, and keep the work
                  confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The close */}
        <section aria-labelledby="rp-close" className="wall-night">
          <div className={`${wrap} py-24 md:py-32`}>
            <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-5">
                <h2
                  id="rp-close"
                  className="font-slab text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.012em] text-balance"
                >
                  Have a report or deck coming up?
                </h2>
                <p className="font-grotesk mt-6 max-w-[28rem] text-[18px] leading-[1.6] text-mist md:text-[19px]">
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

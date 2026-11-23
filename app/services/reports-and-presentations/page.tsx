import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import CloseForm from "@/components/site/CloseForm";
import LoopVideo from "@/components/site/LoopVideo";
import { Canvas, Fit, Layer } from "@/components/site/pieces";

export const metadata: Metadata = {
  title: "Reports and presentations",
  description:
    "Research reports, eBooks and pitch decks. I’ll take the design from first layout to final files, in print or on screen.",
};

const TAKE_ON = [
  "Research and annual reports",
  "eBooks and guides",
  "Pitch and sales decks",
  "Print pieces, from brochures to hardcover books",
  "Interactive reports and assessments",
];

const WHY = [
  {
    name: "Senior and hands-on",
    text: "More than 20 years designing B2B reports, and you work with me, not someone I hand it to.",
  },
  {
    name: "Data that reads easily",
    text: "Every chart gets a layout built around its own data, so long research stays easy to follow.",
  },
  {
    name: "Print and screen, one designer",
    text: "From a landing page to a 130-page hardcover, the piece looks like one piece wherever it shows up.",
  },
  {
    name: "Part of your team",
    text: "You’ll know where things stand, and I’ll suggest more when it helps, like turning Turno’s printed guide into an eBook and a web hub too.",
  },
];

const STEPS = [
  { name: "Send what you have", text: "The draft or research, your date and your brand guide." },
  { name: "We agree scope and fee up front", text: "So there are no surprises later." },
  { name: "You see real pages early", text: "Usually one recommended direction, with the reasons behind it." },
  { name: "Final files, ready to go", text: "For print, the web or your developer." },
];

const WAYS = [
  {
    name: "Your in-house team",
    text: "You work with me directly. I fit around your review process and bring you only the decisions that need you.",
  },
  {
    name: "Your agency",
    text: "I work under your creative lead, in front of your client or behind the scenes, and keep the work confidential.",
  },
];

export default function ReportsAndPresentations() {
  return (
    <div className="site">
      <SiteNav current="services" />

      <main>
        {/* Dark bookend: a stack of reports, the headline set below its edge.
            None of these pieces is in the home page reel. */}
        <section className="svc-hero" aria-labelledby="svc-title">
          <div className="svc-stage">
            <Canvas ar={1.8} sar={0.9}>
              <Layer at={{ x: 28, y: 15, w: 46 }} small={{ x: 4, y: 26, w: 80 }} z={1}>
                <Fit
                  src="/work/pendulum/report-spread-so-what.jpg"
                  alt="A spread from the Pendulum Brand Risk Report: The So What? of Brand Data."
                  width={1800}
                  height={1165}
                  sizes="(max-width: 767px) 320px, 46vw"
                  lift
                  eager
                />
              </Layer>
              <Layer at={{ x: 16, y: 5, w: 17 }} small={{ x: -4, y: 4, w: 36 }} z={2}>
                <Fit
                  src="/work/pendulum/guide-worksheet-cover.jpg"
                  alt="A Pendulum guide cover: Brand Risk Readiness Audit and Detection Checklist."
                  width={900}
                  height={1165}
                  sizes="(max-width: 767px) 140px, 17vw"
                  lift
                  eager
                />
              </Layer>
              <Layer at={{ x: 50, y: 12, w: 57 }} small={{ x: 30, y: 0, w: 84 }} z={3}>
                <Fit
                  src="/work-turno-book.png"
                  alt="Turno’s 130-page hardcover guide for new Airbnb hosts."
                  width={1920}
                  height={1440}
                  sizes="(max-width: 767px) 330px, 57vw"
                  eager
                />
              </Layer>
            </Canvas>
            <h1 id="svc-title" className="t-display svc-hero__title frame">
              Research reports, eBooks and pitch decks.
            </h1>
          </div>

          <div className="frame grid">
            <div className="svc-hero__body">
              <p className="t-lead">
                You have the research, a date and a team that&rsquo;s already full. I&rsquo;ll take the design
                from first layout to final files, in print or on screen, and turn dense data into pages your
                readers want to finish.
              </p>
              <div className="svc-hero__actions">
                <Link href="/contact" className="btn">
                  Send the draft and the date
                </Link>
              </div>
              <p className="svc-hero__proof t-small quiet">
                Turno&rsquo;s host guide reached 8,000+ unique views and 800+ eBook downloads.
              </p>
            </div>
          </div>
        </section>

        <div className="paper">
          <section className="band frame" aria-labelledby="recent-title">
            <div className="grid">
              <h2 id="recent-title" className="t-headline section-head">
                Recent reports
              </h2>
            </div>

            <article className="report" aria-labelledby="r-turno">
              <div className="report__media">
                <Canvas ar={1.3} sar={1.05}>
                  <Layer at={{ x: -16, y: 0, w: 96 }} small={{ x: -14, y: 0, w: 100 }} z={1}>
                    <Fit
                      src="/work-turno-tablet.png"
                      alt="Turno’s host guide web hub on a tablet."
                      width={1920}
                      height={1440}
                      sizes="(max-width: 767px) 390px, 60vw"
                    />
                  </Layer>
                  <Layer at={{ x: 46, y: 38, w: 62 }} small={{ x: 38, y: 40, w: 70 }} z={2}>
                    <Fit
                      src="/work-turno-book.png"
                      alt="The printed guide: a 130-page hardcover, How to Start an Airbnb."
                      width={1920}
                      height={1440}
                      sizes="(max-width: 767px) 280px, 40vw"
                    />
                  </Layer>
                </Canvas>
              </div>
              <div className="report__text">
                <h3 id="r-turno" className="t-lead">
                  Turno
                </h3>
                <p className="t-body quiet mt-2">
                  A printed guide for new Airbnb hosts that grew into a 130-page hardcover, an eBook and a web
                  hub.
                </p>
                <p className="metrics">
                  8,000+ unique views, 800+ eBook downloads, and about 65% of new sign-ups went on to book a
                  cleaner.
                </p>
                <figure className="quote">
                  <blockquote>
                    <p>
                      &ldquo;What started as a fairly narrow project evolved into a beautifully designed
                      70,000-word hardcover book, eBook, and website content hub. &hellip; Nathan kept me
                      informed every step of the way while also bringing thoughtful ideas and
                      recommendations.&rdquo;
                    </p>
                  </blockquote>
                  <footer>Nicolette M., Marketing Director, Turno</footer>
                </figure>
              </div>
            </article>

            {/* SSC Intralinks: one question of the assessment as a still, with
                the recording playing behind it, running off the right. */}
            <article className="report report--flip" aria-labelledby="r-ssc">
              <div className="report__media">
                <Canvas ar={1.75} sar={1.5}>
                  <Layer at={{ x: 0, y: 0, w: 74 }} small={{ x: 0, y: 0, w: 84 }} z={1}>
                    <LoopVideo
                      src="/work-intralinks.mp4"
                      poster="/work/intralinks-poster.jpg"
                      label="Screen recording of the SSC Intralinks investor-portal assessment."
                      ar={1728 / 850}
                      className="lift"
                    />
                  </Layer>
                  <Layer at={{ x: 46, y: 50, w: 54 }} small={{ x: 30, y: 50, w: 70 }} z={2}>
                    <Fit
                      src="/work/intralinks-question.jpg"
                      alt="A question from the assessment: Our portal’s customer service team is helping me with everything I need. True or False."
                      width={1728}
                      height={850}
                      sizes="(max-width: 767px) 280px, 36vw"
                      lift
                    />
                  </Layer>
                </Canvas>
              </div>
              <div className="report__text">
                <h3 id="r-ssc" className="t-lead">
                  SSC Intralinks
                </h3>
                <p className="t-body quiet mt-2">
                  An interactive investor-portal assessment, designed and built as lead designer through
                  Content4Demand. Winner of a 2022 Demand Gen Report Killer Content Award.
                </p>
              </div>
            </article>

            {/* BetterCloud: text only until the shot exists. */}
            <article className="report report--small" aria-labelledby="r-bc">
              <div className="report__text">
                <h3 id="r-bc" className="t-lead">
                  BetterCloud
                </h3>
                <p className="t-body quiet mt-2">
                  A 44-page research report on SaaS operations and the landing page that promoted it, designed
                  while working as a contractor through an agency.
                </p>
              </div>
            </article>
          </section>

          <section className="band frame" aria-label="What I take on and why teams bring me in">
            <div className="grid offer">
              <div className="offer__take">
                <h2 className="t-headline">What I can take on</h2>
                <ul className="take-on mt-10">
                  {TAKE_ON.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__why">
                <h2 className="t-headline">Why teams bring me in</h2>
                <ul className="pairs mt-10">
                  {WHY.map((w) => (
                    <li key={w.name}>
                      <h3 className="pairs__name">{w.name}</h3>
                      <p className="pairs__text">{w.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="band frame" aria-labelledby="how-title">
            <div className="grid">
              <h2 id="how-title" className="t-headline section-head">
                How it works
              </h2>
              <ol className="run col-wide">
                {STEPS.map((s, i) => (
                  <li key={s.name}>
                    <span className="run__n">{i + 1}</span>
                    {s.name}. <span className="run__text">{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="ways ways-wrap">
              <h2 className="t-headline ways__head">Directly or through an agency</h2>
              {WAYS.map((w) => (
                <div className="ways__item" key={w.name}>
                  <h3>{w.name}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="close frame" aria-labelledby="close-title">
          <h2 id="close-title" className="t-display close__head">
            Have a report or deck coming up?
          </h2>
          <div className="close__row">
            <p className="t-body quiet close__body measure">
              Send the draft and the date, even if it&rsquo;s rough, and I&rsquo;ll come back with how I&rsquo;d
              approach it.
            </p>
            <div className="close__form">
              <CloseForm messageLabel="What’s the project and when is it due?" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

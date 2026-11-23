import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import CloseForm from "@/components/site/CloseForm";
import LoopVideo from "@/components/site/LoopVideo";
import { Canvas, Crop, Fit, Layer, Note, Panel } from "@/components/site/pieces";
import ReelStage from "@/components/reel/ReelStage";
import CodedReel from "@/components/reel/CodedReel";

export const metadata: Metadata = {
  title: { absolute: "nnstudio — Independent design studio for B2B marketing teams" },
  description:
    "nnstudio is an independent design studio for B2B marketing teams and the agencies behind them.",
};

// Each service carries a small fragment of matching work. None of these
// fragments appears in the reel or the projects above.
const SERVICES = [
  {
    name: "Brand and campaigns",
    desc: "eBooks, ads, social and the campaign artwork that ties them together.",
    href: "/services",
    frag: { src: "/work/pendulum/campaign-bofu-3.jpg", w: 800, h: 800 },
  },
  {
    name: "Reports and presentations",
    desc: "Research and annual reports, pitch decks, print pieces and interactives.",
    href: "/services/reports-and-presentations",
    frag: { src: "/work/pendulum/guide-worksheet-cover.jpg", w: 900, h: 1165 },
  },
  {
    name: "Websites",
    desc: "Marketing sites, landing pages and Shopify stores.",
    href: "/services",
    frag: { src: "/work/intralinks-result.jpg", w: 1728, h: 850 },
  },
];

export default function Home() {
  return (
    <div className="site">
      <SiteNav />

      <main>
        <ReelStage
          label="A slow pan across recent work: the Pendulum Intelligence research report and its ads, Turno's host guide web hub, the Maison Levande store, the SSC Intralinks assessment and an enterprise design system screen."
          overlay={
            <h1 className="t-statement reel__message">
              nnstudio is an independent design studio for B2B marketing teams and the agencies behind
              them.
            </h1>
          }
        >
          <CodedReel />
        </ReelStage>

        <section className="intro frame grid" aria-label="About the studio">
          <div className="intro__body">
            <p className="t-lead">
              When a report, campaign or site really matters and your team is already stretched, I join you
              and carry it from first idea to final files. You&rsquo;ll always know where it stands, and the
              person you hire is the person doing the work.
            </p>
            <div className="intro__actions">
              <Link href="/contact" className="btn">
                Tell me what&rsquo;s coming up
              </Link>
              <Link href="/work" className="link t-body">
                See the work
              </Link>
            </div>
            <p className="intro__credit t-small quiet">
              Design for marketing teams at Google Cloud, Meta, WhatsApp, Capital One and Penske.
            </p>
          </div>
        </section>

        <section className="work" aria-labelledby="work-title">
          <h2 id="work-title" className="sr-only">
            Selected work
          </h2>

          {/* Pendulum: the action-plan page of the report bleeding off the
              left, the cover laid over its edge, two carousel slides fanned
              at the right. None of these pieces is in the reel. */}
          <article className="project" aria-label="Pendulum Intelligence">
            <Canvas ar={1.62} sar={0.9}>
              <Layer at={{ x: 0, y: 4, w: 38 }} small={{ x: 0, y: 2, w: 58 }} z={1}>
                <Crop
                  src="/work/pendulum/report-spread-roadmap.jpg"
                  alt="A page from the Pendulum report: the section opener, Brand Reputation Monitoring Action Plan, over a photograph, with the four-phase roadmap below."
                  width={1800}
                  height={1165}
                  ar={0.858}
                  region={{ x: 0, y: 0, w: 0.5 }}
                  sizes="(max-width: 767px) 460px, (max-width: 1700px) 76vw, 1300px"
                />
              </Layer>
              <Layer at={{ x: 33, y: 16, w: 22 }} small={{ x: 46, y: 24, w: 34 }} z={2}>
                <Fit
                  src="/work/pendulum/report-cover.jpg"
                  alt="The report cover: Why is Your Current Risk Monitoring Failing Your Boardroom?"
                  width={1000}
                  height={1294}
                  sizes="(max-width: 767px) 140px, 22vw"
                  lift
                />
              </Layer>
              <Layer at={{ x: 61, y: 0, w: 22 }} small={{ x: 56, y: 62, w: 40 }} z={2}>
                <Fit
                  src="/work/pendulum/carousel-1.jpg"
                  alt="A LinkedIn carousel slide: We have your 12-month roadmap to managing crises before they go viral."
                  width={800}
                  height={800}
                  sizes="(max-width: 767px) 160px, 22vw"
                  lift
                />
              </Layer>
              <Layer at={{ x: 75, y: 25, w: 18 }} z={3}>
                <Fit
                  src="/work/pendulum/carousel-4.jpg"
                  alt="A later slide in the same carousel: Phase 3, Automate."
                  width={800}
                  height={800}
                  sizes="18vw"
                  lift
                />
              </Layer>
            </Canvas>
            <Note at={{ x: 61, y: 66, w: 26 }} title="Pendulum Intelligence">
              A research report and the campaign around it brought in at least 150 marketing-qualified leads,
              and a three-month retainer.
            </Note>
          </article>

          {/* Turno: the hardcover breaking out of a mint panel that bleeds off
              the right edge, the web hub on a laptop above it. */}
          <article className="project" aria-label="Turno">
            <Canvas ar={1.5} sar={0.85}>
              <Layer at={{ x: 47, y: 8, w: 53 }} small={{ x: 30, y: 4, w: 70 }} z={1}>
                <Panel color="#b9d8d0" ar={1.074} />
              </Layer>
              <Layer at={{ x: 24, y: 20, w: 60 }} small={{ x: -6, y: 28, w: 100 }} z={3}>
                <Fit
                  src="/work-turno-book.png"
                  alt="Turno's hardcover guide, How to Start an Airbnb: The Complete Guide for New Hosts."
                  width={1920}
                  height={1440}
                  sizes="(max-width: 767px) 390px, (max-width: 1700px) 60vw, 1020px"
                />
              </Layer>
              <Layer at={{ x: 63, y: 1, w: 34 }} small={{ x: 44, y: 0, w: 58 }} z={2}>
                <Fit
                  src="/work-turno-laptop.png"
                  alt="The guide's web hub on a laptop."
                  width={1008}
                  height={606}
                  sizes="(max-width: 767px) 230px, 34vw"
                />
              </Layer>
            </Canvas>
            <Note at={{ x: 8.5, y: 24, w: 15 }} title="Turno">
              Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and
              together they&rsquo;ve reached more than 8,000 unique views.
            </Note>
          </article>

          {/* Maison Levande: tucked up into the bottom of Turno's mint panel,
              the store's desktop hero cropped to whole words, sliding under the
              corner of the book. */}
          <article className="project project--tuck" aria-label="Maison Levande">
            <Canvas ar={2.35} sar={1.6}>
              {/* z 2: above Turno's panel (1), under the corner of its book (3). */}
              <Layer at={{ x: 38, y: 0, w: 52 }} small={{ x: 0, y: 4, w: 100 }} z={2}>
                <Crop
                  src="/home/maison-levande.jpg"
                  alt="The Maison Levande store's hero: Prime Mover, set large over the red tote."
                  width={1600}
                  height={1200}
                  ar={2.31}
                  region={{ x: 0.1, y: 0.28, w: 0.83 }}
                  sizes="(max-width: 767px) 470px, (max-width: 1700px) 62vw, 1080px"
                />
              </Layer>
            </Canvas>
            <Note at={{ x: 8.5, y: 46, w: 24 }} title="Maison Levande">
              A Shopify store introducing The Leon, the brand&rsquo;s first tote. I set the color and type
              direction, designed the pages and built the store with sections the founder can manage.
            </Note>
          </article>

          {/* SSC Intralinks: the assessment itself, playing, as a wide band
              running off the right edge. "See all work" closes its note. */}
          <article className="project" aria-label="SSC Intralinks">
            <Canvas ar={2.3} sar={2.033}>
              <Layer at={{ x: 34, y: 4, w: 66 }} small={{ x: 0, y: 0, w: 100 }}>
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  label="Screen recording of the SSC Intralinks investor-portal assessment."
                  ar={1728 / 850}
                  className="lift"
                />
              </Layer>
            </Canvas>
            <div className="note" style={{ "--x": 8.5, "--y": 30, "--w": 21 } as CSSProperties}>
              <h3 className="note__title">SSC Intralinks</h3>
              <p className="note__text">
                An interactive investor-portal assessment that won a Demand Gen Report Killer Content Award
                in 2022.
              </p>
              <Link href="/work" className="link note__more">
                See all work
              </Link>
            </div>
          </article>
        </section>

        <section className="routes frame" aria-labelledby="routes-title">
          <div className="routes__head">
            <h2 id="routes-title" className="t-headline">
              What I can help with
            </h2>
            <p className="t-body quiet">Most teams come to me with one of four kinds of project.</p>
          </div>
          <ul className="routes__list">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="route">
                  <span className="route__frag" aria-hidden="true">
                    <Fit src={s.frag.src} alt="" width={s.frag.w} height={s.frag.h} sizes="160px" lift />
                  </span>
                  <span className="route__name">{s.name}</span>
                  <span className="route__desc">{s.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="route-apart">
            <Link href="/services">
              <span className="route-apart__name">Design systems</span>
              <span className="route-apart__desc">
                For design and development teams: Figma libraries that match what&rsquo;s built and are
                documented so your team can use them.
              </span>
            </Link>
          </div>
        </section>

        {/* Client quote: none yet. Leave this space empty until one is cleared. */}

        <section className="close frame" aria-labelledby="close-title">
          <h2 id="close-title" className="t-display close__head">
            Have something coming up?
          </h2>
          <div className="close__row">
            <p className="t-body quiet close__body measure">
              Tell me what it is and when you need it. A few lines is plenty, and I&rsquo;ll come back with how
              I&rsquo;d approach it.
            </p>
            <div className="close__form">
              <CloseForm
                messageLabel="What’s coming up"
                placeholder="A report due in March, a campaign for a product launch, a site that needs a refresh…"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

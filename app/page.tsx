import type { Metadata } from "next";
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

const SERVICES = [
  {
    name: "Brand and campaigns",
    desc: "eBooks, ads, social and the campaign artwork that ties them together.",
    href: "/services",
  },
  {
    name: "Reports and presentations",
    desc: "Research and annual reports, pitch decks, print pieces and interactives.",
    href: "/services/reports-and-presentations",
  },
  {
    name: "Websites",
    desc: "Marketing sites, landing pages and Shopify stores.",
    href: "/services",
  },
];

export default function Home() {
  return (
    <div className="site">
      <SiteNav />

      <main>
        <ReelStage
          label="A slow pan across recent work: the Pendulum Intelligence research report and its ads, Turno's host guide as a hardcover book and web hub, the Maison Levande Shopify store, the SSC Intralinks assessment and an enterprise design system screen."
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

          {/* Pendulum: the report scene, a detail of a spread bleeding off the
              left edge, and one of the campaign ads laid over both. */}
          <article className="project" aria-label="Pendulum Intelligence">
            <Canvas ar={1.62} sar={0.78}>
              <Layer at={{ x: 0, y: 30, w: 46 }} small={{ x: 0, y: 47, w: 62 }} z={2}>
                <Crop
                  src="/work/pendulum/report-spread-roadmap.jpg"
                  alt="Detail of a Pendulum report spread: the section opener, Brand Reputation Monitoring Action Plan, set over a photograph with interface-style callouts."
                  width={1800}
                  height={1165}
                  ar={1.2}
                  region={{ x: 0, y: 0, w: 0.44 }}
                  sizes="(max-width: 767px) 560px, (max-width: 1700px) 105vw, 1800px"
                />
              </Layer>
              <Layer at={{ x: 34, y: 0, w: 60 }} small={{ x: -2, y: 0, w: 104 }} z={1}>
                <Fit
                  src="/work/scenes/pendulum-scene-1000.png"
                  alt="The Pendulum Intelligence Brand Risk Report open on a violet ground, with its cover behind and a phone showing the campaign."
                  width={1000}
                  height={676}
                  sizes="(max-width: 767px) 410px, (max-width: 1700px) 60vw, 1000px"
                />
              </Layer>
              <Layer at={{ x: 40, y: 66, w: 16 }} small={{ x: 54, y: 70, w: 40 }} z={3}>
                <Fit
                  src="/work/pendulum/promo-ad-report.jpg"
                  alt="A square LinkedIn ad promoting the report: Reputation unravels in 15 seconds."
                  width={800}
                  height={800}
                  sizes="(max-width: 767px) 170px, 300px"
                  lift
                />
              </Layer>
            </Canvas>
              <Note at={{ x: 64, y: 74, w: 24 }} title="Pendulum Intelligence">
                A research report and the campaign around it brought in at least 150 marketing-qualified
                leads, and a three-month retainer.
              </Note>
          </article>

          {/* Turno: the hardcover breaking out of a mint panel that bleeds off
              the right edge, the web hub on a tablet above it. */}
          <article className="project" aria-label="Turno">
            <Canvas ar={1.5} sar={0.85}>
              <Layer at={{ x: 47, y: 8, w: 53 }} small={{ x: 30, y: 4, w: 70 }} z={1}>
                <Panel color="#b9d8d0" ar={1.243} />
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
              <Layer at={{ x: 66, y: -2, w: 31 }} small={{ x: 50, y: -2, w: 54 }} z={2}>
                <Fit
                  src="/work-turno-tablet.png"
                  alt="The Turno guide's web hub on a tablet."
                  width={1920}
                  height={1440}
                  sizes="(max-width: 767px) 210px, 31vw"
                />
              </Layer>
            </Canvas>
              <Note at={{ x: 8.5, y: 26, w: 15 }} title="Turno">
                Turno asked for a printed guide for new hosts. I suggested an eBook and a web hub too, and
                together they&rsquo;ve reached more than 8,000 unique views.
              </Note>
          </article>

          {/* Maison Levande: a bold crop of the store's hero type bleeding off
              the left, the tote and tablet scene laid over its edge. */}
          <article className="project" aria-label="Maison Levande">
            <Canvas ar={1.6} sar={0.8}>
              <Layer at={{ x: 0, y: 22, w: 42 }} small={{ x: 0, y: 36, w: 64 }} z={1}>
                <Crop
                  src="/home/maison-levande.jpg"
                  alt="Detail of the Maison Levande store's hero: the words Prime Mover set large over the red tote."
                  width={1600}
                  height={1200}
                  ar={0.86}
                  region={{ x: 0.2, y: 0.2, w: 0.56 }}
                  sizes="(max-width: 767px) 480px, (max-width: 1700px) 81vw, 1400px"
                />
              </Layer>
              <Layer at={{ x: 30, y: 2, w: 52 }} small={{ x: 14, y: 0, w: 92 }} z={2}>
                <Fit
                  src="/work/scenes/maison-levande-scene-880.png"
                  alt="The Leon, a red structured tote, beside a tablet showing the Maison Levande store."
                  width={880}
                  height={595}
                  sizes="(max-width: 767px) 360px, (max-width: 1700px) 52vw, 880px"
                />
              </Layer>
            </Canvas>
              <Note at={{ x: 64, y: 70, w: 25 }} title="Maison Levande">
                A Shopify store introducing The Leon, the brand&rsquo;s first tote. I set the color and type
                direction, designed the pages and built the store with sections the founder can manage.
              </Note>
          </article>

          {/* SSC Intralinks: the assessment itself, playing, as a wide band
              running off the right edge. */}
          <article className="project" aria-label="SSC Intralinks">
            <Canvas ar={2.3} sar={2.033}>
              <Layer at={{ x: 32, y: 4, w: 68 }} small={{ x: 0, y: 0, w: 100 }}>
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  label="Screen recording of the SSC Intralinks investor-portal assessment."
                  ar={1728 / 850}
                  className="lift"
                />
              </Layer>
            </Canvas>
              <Note at={{ x: 8.5, y: 50, w: 19 }} title="SSC Intralinks">
                An interactive investor-portal assessment that won a Demand Gen Report Killer Content Award
                in 2022.
              </Note>
          </article>

          <div className="work__more frame">
            <Link href="/work" className="link t-body">
              See all work
            </Link>
          </div>
        </section>

        <section className="routes frame grid" aria-labelledby="routes-title">
          <div className="routes__head">
            <h2 id="routes-title" className="t-headline">
              What I can help with
            </h2>
            <p className="t-body quiet mt-5 measure">Most teams come to me with one of four kinds of project.</p>
          </div>
          <ul className="routes__list">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="route">
                  <span className="route__name">{s.name}</span>
                  <span className="route__desc">{s.desc}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="route route--apart">
                <span className="route__name">Design systems</span>
                <span className="route__desc">
                  For design and development teams: Figma libraries that match what&rsquo;s built and are
                  documented so your team can use them.
                </span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Client quote: none yet. Leave this space empty until one is cleared. */}

        <section className="close frame grid" aria-labelledby="close-title">
          <h2 id="close-title" className="t-display close__head">
            Have something coming up?
          </h2>
          <p className="t-lead quiet close__body">
            Tell me what it is and when you need it. A few lines is plenty, and I&rsquo;ll come back with how
            I&rsquo;d approach it.
          </p>
          <div className="close__form">
            <CloseForm
              messageLabel="What's coming up"
              placeholder="A report due in March, a campaign for a product launch, a site that needs a refresh…"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

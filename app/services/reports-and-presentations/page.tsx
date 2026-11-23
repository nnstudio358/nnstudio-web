import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Close from "@/components/site/Close";
import LoopVideo from "@/components/site/LoopVideo";
import PlannedShot from "@/components/site/PlannedShot";

export const viewport: Viewport = { themeColor: "#F4F2EE" };

// Copy: Nathan's Duet Figma file, page "Layouts in the new type (Nov 23)", used verbatim.
// The share description is the approved hero body.
const title = "Reports and presentations";
const description =
  "You have the research, a date and a team that's already full. I'll take the design from first layout to final files, in print or on screen, and turn dense data into pages your readers want to finish.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    siteName: "nnstudio",
    type: "website",
    title: `${title} | nnstudio`,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${title} | nnstudio` }],
  },
  twitter: { card: "summary_large_image", title: `${title} | nnstudio`, description, images: ["/og-image.png"] },
};

const TAKE_ON = [
  "Research and annual reports",
  "eBooks and guides",
  "Pitch and sales decks",
  "Print pieces, from brochures to hardcover books",
  "Interactive reports and assessments",
];

const NOWRAP = (t: string) => <span className="whitespace-nowrap">{t}</span>;

const WHY: { title: string; body: React.ReactNode }[] = [
  {
    title: "Senior and hands-on",
    body: <>More than 20 years designing B2B reports, and you work with me, not someone I hand&nbsp;it&nbsp;to.</>,
  },
  {
    title: "Data that reads easily",
    body: <>Every chart gets a layout built around its own data, so long research stays easy to&nbsp;follow.</>,
  },
  {
    title: "Print and screen, one designer",
    body: (
      <>
        From a landing page to a {NOWRAP("130-page")}{" "}hardcover, the piece looks like one piece wherever it
        shows&nbsp;up.
      </>
    ),
  },
  {
    title: "Part of your team",
    body: (
      <>
        You&rsquo;ll know where things stand, and I&rsquo;ll suggest more when it helps, like turning Turno&rsquo;s
        printed guide into an eBook and a web hub&nbsp;too.
      </>
    ),
  },
];

const STEPS = [
  { title: "Send what you have", body: "The draft or research, your date and your brand guide." },
  { title: "We agree scope and fee up front", body: "So there are no surprises later." },
  { title: "You see real pages early", body: "Usually one recommended direction, with the reasons behind it." },
  { title: "Final files, ready to go", body: "For print, the web or your developer." },
];

const section = "mt-[clamp(6rem,11vw,10rem)]";

export default function ReportsAndPresentations() {
  return (
    <div className="site-a">
      <SiteNav current="services" />

      <main>
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="frame pt-[clamp(0.75rem,1.7vw,1.5rem)]">
          <h1 id="hero-heading" className="t-display">
            Research reports, eBooks <br className="hidden md:inline" />
            and pitch decks.
          </h1>
          <div className="grid-12 gap-y-7 mt-[clamp(1.5rem,2.8vw,2.5rem)]">
            <p className="t-lead col-span-12 md:col-span-6 max-w-[30em]">
              You have the research, a date and a team that&rsquo;s already full. I&rsquo;ll take the design from first
              layout to final files, in print or on screen, and turn dense data into pages your readers want
              to&nbsp;finish.
            </p>
            <div className="col-span-12 md:col-start-7 md:col-span-6 md:pt-1">
              <Link href="/contact" className="btn">
                Send the draft and the date
              </Link>
              <p className="t-item mt-5 max-w-[22em]">
                Turno&rsquo;s host guide reached 8,000+ unique views and 800+ eBook&nbsp;downloads.
              </p>
            </div>
          </div>
        </section>

        {/* Hero image: the Turno hardcover on Turno's teal, its far corner taken
            by the right edge of the frame. */}
        <figure className="frame mt-[clamp(2rem,2.8vw,2.5rem)]">
          <div className="bleed relative overflow-hidden bg-[#146259] aspect-[5/4] sm:aspect-[16/9] lg:aspect-[2.1/1]">
            <Image
              src="/work-turno-book.png"
              alt="Turno’s How to Start an Airbnb guide, printed as a hardcover book"
              width={1920}
              height={1440}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 84vw, 118vw"
              className="absolute max-w-none h-auto w-[118%] left-[-3%] top-[2%] sm:w-[92%] sm:left-[14%] sm:top-[-4%] lg:w-[80%] lg:left-[24%] lg:top-[-7%]"
            />
          </div>
        </figure>

        {/* What I can take on: set like a contents page. */}
        <section aria-labelledby="take-heading" className={`frame ${section}`}>
          <h2 id="take-heading" className="t-h2">
            What I can take on
          </h2>
          <ul className="mt-[clamp(2.25rem,4vw,3.5rem)] border-t border-carbon">
            {TAKE_ON.map((item) => (
              <li
                key={item}
                className="border-b border-hairline py-[clamp(0.9rem,1.3vw,1.25rem)] font-[500] text-[clamp(1.25rem,0.9vw+0.9rem,1.75rem)] leading-[1.2] tracking-[-0.015em]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Why teams bring me in: a real data spread beside the four reasons. */}
        <section aria-labelledby="why-heading" className={`frame ${section}`}>
          <h2 id="why-heading" className="t-h2">
            Why teams bring me in
          </h2>
          <div className="grid-12 gap-y-12 mt-[clamp(2.25rem,4vw,3.5rem)]">
            <figure className="col-span-12 md:col-span-6">
              <div className="bg-[#2C233E] p-[clamp(0.75rem,2.6vw,2.5rem)]">
                <Image
                  src="/work/pendulum/report-spread-scenario.jpg"
                  alt="A spread from Pendulum’s research report: a data panel with post, image and video counts beside a donut chart of mentions"
                  width={1800}
                  height={1165}
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="caption mt-5">
                <b>Pendulum Intelligence</b>
                <span>&ensp;Research report</span>
              </figcaption>
            </figure>
            <div className="col-span-12 md:col-start-7 md:col-span-6 lg:col-span-5 flex flex-col gap-[clamp(1.75rem,2.6vw,2.5rem)]">
              {WHY.map((w) => (
                <div key={w.title}>
                  <h3 className="t-item">{w.title}</h3>
                  <p className="muted mt-2">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works: one ruled list on a quieter band. */}
        <section aria-labelledby="how-heading" className={`${section} bg-paper-2`}>
          <div className="frame py-[clamp(4rem,7vw,6rem)]">
            <h2 id="how-heading" className="t-sub">
              How it works
            </h2>
            <ol className="mt-[clamp(1.75rem,3vw,2.5rem)] border-t border-carbon">
              {STEPS.map((s, i) => (
                <li key={s.title} className="grid-12 border-b border-hairline py-[clamp(1.1rem,1.7vw,1.5rem)]">
                  <span className="col-span-2 md:col-span-1 t-lead font-[560] tabular-nums">{i + 1}</span>
                  <p className="col-span-10 md:col-span-11 lg:col-span-9 t-lead">
                    <span className="font-[600]">{s.title}</span>
                    <span className="muted">&ensp;{s.body}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Recent reports */}
        <section aria-labelledby="recent-heading" className={`frame ${section}`}>
          <h2 id="recent-heading" className="t-h2">
            Recent reports
          </h2>

          {/* Turno: the eBook hub on a tablet, the frame taking its lower third. */}
          <article className="mt-[clamp(2.25rem,4vw,3.5rem)]">
            <Link href="/work/turno" className="zoom block">
              <div className="relative overflow-hidden bg-paper-2 aspect-[4/3] md:aspect-[2.1/1]">
                <Image
                  src="/work-turno-tablet.png"
                  alt="Turno’s How to Start an Airbnb web hub on a tablet"
                  width={1920}
                  height={1440}
                  sizes="(min-width: 768px) 85vw, 140vw"
                  className="absolute max-w-none h-auto w-[140%] left-[-20%] top-[0%] md:w-[92%] md:left-[4%] md:top-[-0%]"
                />
              </div>
              <p className="caption mt-5">
                <b>Turno</b>
                <span>
                  &ensp;A printed guide for new Airbnb hosts that grew into a {NOWRAP("130-page")}{" "}hardcover, an eBook and
                  a web&nbsp;hub.
                </span>
              </p>
            </Link>

            <div className="grid-12 gap-y-10 mt-6">
              <p className="t-item col-span-12 md:col-span-6 max-w-[24em]">
                8,000+ unique views, 800+ eBook downloads, and about 65% of new sign-ups went on to book a&nbsp;cleaner.
              </p>
              <figure className="col-span-12 md:col-start-7 md:col-span-6">
                <blockquote className="text-[clamp(1.1875rem,0.7vw+1rem,1.5rem)] leading-[1.45] tracking-[-0.008em]">
                  <p className="md:-indent-[0.42em]">
                    &ldquo;What started as a fairly narrow project evolved into a beautifully designed 70,000-word hardcover
                    book, eBook, and website content hub. &hellip; Nathan kept me informed every step of the way while also
                    bringing thoughtful ideas and recommendations.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="t-small muted mt-5">Nicolette M., Marketing Director, Turno</figcaption>
              </figure>
            </div>
          </article>

          {/* SSC and BetterCloud as a pair on the two shared columns. */}
          <div className="grid-12 gap-y-16 mt-[clamp(5rem,8vw,7.5rem)]">
            <article className="col-span-12 md:col-span-6">
              <div className="bg-black">
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  label="Screen recording of the SSC Intralinks investor-portal assessment"
                  className="aspect-[16/10]"
                  position="object-left"
                />
              </div>
              <p className="caption mt-5">
                <b>SSC Intralinks</b>
                <span>
                  &ensp;An interactive {NOWRAP("investor-portal")}{" "}assessment, designed and built as lead designer through
                  Content4Demand. Winner of a 2022 Demand Gen Report Killer Content&nbsp;Award.
                </span>
              </p>
            </article>
            <article className="col-span-12 md:col-start-7 md:col-span-6">
              <PlannedShot
                shot="BetterCloud report open and landing page, booklet and laptop"
                description="Placeholder for a planned photo of the BetterCloud report, open, beside its landing page on a laptop"
              />
              <p className="caption mt-5">
                <b>BetterCloud</b>
                <span>
                  &ensp;A 44-page research report on SaaS operations and the landing page that promoted it, designed
                  while working as a contractor through an&nbsp;agency.
                </span>
              </p>
            </article>
          </div>
        </section>

        {/* Directly or through an agency */}
        <section aria-labelledby="ways-heading" className={`frame ${section} mb-[clamp(6rem,11vw,10rem)]`}>
          <h2 id="ways-heading" className="t-sub">
            Directly or through an agency
          </h2>
          <div className="grid-12 gap-y-10 mt-[clamp(1.75rem,3vw,2.5rem)]">
            <div className="col-span-12 md:col-span-6 border-t border-carbon pt-5">
              <h3 className="t-item">Your in-house team</h3>
              <p className="t-lead muted mt-3 max-w-[26em]">
                You work with me directly. I fit around your review process and bring you only the decisions that need
                you.
              </p>
            </div>
            <div className="col-span-12 md:col-start-7 md:col-span-6 border-t border-carbon pt-5">
              <h3 className="t-item">Your agency</h3>
              <p className="t-lead muted mt-3 max-w-[26em]">
                I work under your creative lead, in front of your client or behind the scenes, and keep the work
                confidential.
              </p>
            </div>
          </div>
        </section>

        <Close
          headline={
            <>
              Have a report or deck <br className="hidden md:inline" />
              coming up?
            </>
          }
          body="Send the draft and the date, even if it’s rough, and I’ll come back with how I’d approach it."
          messageLabel="What’s the project and when is it due?"
        />
      </main>

      <SiteFooter />
    </div>
  );
}

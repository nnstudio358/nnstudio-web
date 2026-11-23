import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Close from "@/components/site/Close";
import LoopVideo from "@/components/site/LoopVideo";
import PlannedShot from "@/components/site/PlannedShot";

export const viewport: Viewport = { themeColor: "#F4F2EE" };

export const metadata: Metadata = {
  title: "Reports and presentations",
  description:
    "You have the research, a date and a team that's already full. I'll take the design from first layout to final files, in print or on screen.",
};

// Copy: Nathan's Duet Figma file, page "Layouts in the new type (Nov 23)", used verbatim.

const TAKE_ON = [
  "Research and annual reports",
  "eBooks and guides",
  "Pitch and sales decks",
  "Print pieces, from brochures to hardcover books",
  "Interactive reports and assessments",
];

const WHY = [
  {
    title: "Senior and hands-on",
    body: "More than 20 years designing B2B reports, and you work with me, not someone I hand it to.",
  },
  {
    title: "Data that reads easily",
    body: "Every chart gets a layout built around its own data, so long research stays easy to follow.",
  },
  {
    title: "Print and screen, one designer",
    body: "From a landing page to a 130-page hardcover, the piece looks like one piece wherever it shows up.",
  },
  {
    title: "Part of your team",
    body: "You’ll know where things stand, and I’ll suggest more when it helps, like turning Turno’s printed guide into an eBook and a web hub too.",
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
        <section aria-labelledby="hero-heading" className="frame pt-[clamp(2.5rem,4.4vw,4rem)]">
          <h1 id="hero-heading" className="t-display max-w-[11em]">
            Research reports, eBooks and pitch decks.
          </h1>
          <div className="grid-12 gap-y-8 mt-[clamp(2rem,3.6vw,3.5rem)]">
            <p className="t-lead col-span-12 md:col-span-7 lg:col-span-6 max-w-[33em]">
              You have the research, a date and a team that&rsquo;s already full. I&rsquo;ll take the design from first
              layout to final files, in print or on screen, and turn dense data into pages your readers want to finish.
            </p>
            <div className="col-span-12 md:col-start-8 md:col-span-5 md:pt-1">
              <Link href="/contact" className="btn">
                Send the draft and the date
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image: the Turno hardcover on a studio-grey plate, cropped by the right edge. */}
        <figure className="frame mt-[clamp(3.5rem,6vw,5.5rem)]">
          <div className="bleed relative overflow-hidden bg-[#4E4D50] aspect-[5/4] sm:aspect-[16/9] lg:aspect-[2.1/1]">
            {/* The book is set large and slightly off centre, so the right edge of
                the frame takes its far corner: the title stays whole. */}
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
          <figcaption className="caption mt-5">
            <span>Turno&rsquo;s host guide reached 8,000+ unique views and 800+ eBook downloads.</span>
          </figcaption>
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
                className="border-b border-hairline py-[clamp(1rem,1.6vw,1.5rem)] font-[500] text-[clamp(1.375rem,1.9vw+0.75rem,2.625rem)] leading-[1.15] tracking-[-0.02em]"
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
            <figure className="col-span-12 lg:col-span-7">
              <div className="bg-[#2C233E] p-[clamp(0.75rem,3vw,2.75rem)]">
                <Image
                  src="/work/pendulum/report-spread-scenario.jpg"
                  alt="A spread from Pendulum’s research report: a data panel with post, image and video counts beside a donut chart of mentions"
                  width={1800}
                  height={1165}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="t-small muted mt-4">Pendulum Intelligence, research report</figcaption>
            </figure>
            <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col gap-[clamp(1.75rem,2.6vw,2.5rem)]">
              {WHY.map((w) => (
                <div key={w.title}>
                  <h3 className="t-item">{w.title}</h3>
                  <p className="muted mt-2">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works: a quieter band so the page changes pace. */}
        <section aria-labelledby="how-heading" className={`${section} bg-paper-2`}>
          <div className="frame py-[clamp(4.5rem,8vw,7rem)]">
            <h2 id="how-heading" className="t-h2">
              How it works
            </h2>
            <ol className="grid-12 gap-y-10 mt-[clamp(2.25rem,4vw,3.5rem)]">
              {STEPS.map((s, i) => (
                <li key={s.title} className="col-span-12 sm:col-span-6 lg:col-span-3 border-t border-carbon pt-5">
                  <span className="block t-small font-[560] tabular-nums" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="t-item mt-6 max-w-[14em]">{s.title}</h3>
                  <p className="muted mt-2 max-w-[22em]">{s.body}</p>
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

          {/* Turno: the eBook and hub, laptop and tablet together. */}
          <article className="mt-[clamp(2.25rem,4vw,3.5rem)]">
            <Link href="/work/turno" className="zoom block">
              <div className="relative overflow-hidden bg-[#D5D9DC] aspect-[4/3] md:aspect-[2.1/1]">
                <div className="absolute left-[4%] md:left-[9%] bottom-[16%] md:bottom-[11%] w-[78%] md:w-[56%] aspect-[1008/606]">
                  <Image
                    src="/work-turno-laptop.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 56vw, 78vw"
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-[2%] md:right-[9%] bottom-[6%] md:bottom-[8%] w-[54%] md:w-[38%] aspect-[1920/1440]">
                  <Image
                    src="/work-turno-tablet.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 38vw, 54vw"
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Turno’s web hub on a laptop and the eBook on a tablet</span>
              </div>
            </Link>

            <div className="grid-12 gap-y-10 mt-8">
              <div className="col-span-12 md:col-span-6 lg:col-span-5">
                <h3 className="t-sub">
                  <Link href="/work/turno" className="hover:underline decoration-1 underline-offset-[0.18em]">
                    Turno
                  </Link>
                </h3>
                <p className="muted mt-4 max-w-[30em]">
                  A printed guide for new Airbnb hosts that grew into a 130-page hardcover, an eBook and a web hub.
                </p>
                <p className="t-item mt-5 max-w-[24em]">
                  8,000+ unique views, 800+ eBook downloads, and about 65% of new sign-ups went on to book a cleaner.
                </p>
              </div>
              <figure className="col-span-12 md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-6">
                <blockquote className="text-[clamp(1.1875rem,0.7vw+1rem,1.5rem)] leading-[1.45] tracking-[-0.008em] text-pretty">
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

          {/* SSC wide, BetterCloud smaller and dropped. */}
          <div className="grid-12 gap-y-16 mt-[clamp(5rem,8vw,7.5rem)]">
            <article className="col-span-12 md:col-span-7">
              <div className="bg-black">
                <LoopVideo
                  src="/work-intralinks.mp4"
                  poster="/work/intralinks-poster.jpg"
                  label="Screen recording of the SSC Intralinks investor-portal assessment"
                  className="aspect-[1728/850]"
                />
              </div>
              <p className="caption mt-5">
                <b>SSC Intralinks</b>
                <span>
                  &ensp;An interactive investor-portal assessment, designed and built as lead designer through
                  Content4Demand. Winner of a 2022 Demand Gen Report Killer Content Award.
                </span>
              </p>
            </article>
            <article className="col-span-12 md:col-start-9 md:col-span-4 md:mt-[22%]">
              <PlannedShot
                className="aspect-[4/3] md:aspect-[4/5]"
                art="booklet-laptop"
                shot="BetterCloud report open and landing page, booklet and laptop"
                description="Placeholder for a planned photo of the BetterCloud report, open, beside its landing page on a laptop"
              />
              <p className="caption mt-5">
                <b>BetterCloud</b>
                <span>
                  &ensp;A 44-page research report on SaaS operations and the landing page that promoted it, designed
                  while working as a contractor through an agency.
                </span>
              </p>
            </article>
          </div>
        </section>

        {/* Directly or through an agency */}
        <section aria-labelledby="ways-heading" className={`frame ${section} mb-[clamp(6rem,11vw,10rem)]`}>
          <h2 id="ways-heading" className="t-h2">
            Directly or through an agency
          </h2>
          <div className="grid-12 gap-y-10 mt-[clamp(2.25rem,4vw,3.5rem)]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 border-t border-carbon pt-6">
              <h3 className="t-sub">Your in-house team</h3>
              <p className="t-lead muted mt-4">
                You work with me directly. I fit around your review process and bring you only the decisions that need
                you.
              </p>
            </div>
            <div className="col-span-12 md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-5 border-t border-carbon pt-6">
              <h3 className="t-sub">Your agency</h3>
              <p className="t-lead muted mt-4">
                I work under your creative lead, in front of your client or behind the scenes, and keep the work
                confidential.
              </p>
            </div>
          </div>
        </section>

        <Close
          headline="Have a report or deck coming up?"
          body="Send the draft and the date, even if it’s rough, and I’ll come back with how I’d approach it."
          messageLabel="What’s the project and when is it due?"
        />
      </main>

      <SiteFooter />
    </div>
  );
}

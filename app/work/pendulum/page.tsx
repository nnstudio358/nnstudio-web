import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Artwork, ReportReader, CampaignGallery } from './visuals';
import './pendulum.css';

const description = "Editorial and information design for Pendulum's Brand Risk Report, followed by paid social and ongoing marketing support.";
export const metadata: Metadata = {
  title: { absolute: 'Pendulum Intelligence — nnstudio' }, description,
  openGraph: { title: 'Pendulum Intelligence — nnstudio', description, images: [{url:'/pendulum/hero.webp',alt:'Pendulum Intelligence case study'}] },
  twitter: { title:'Pendulum Intelligence — nnstudio', description, images:['/pendulum/hero.webp'] },
};

export default function Pendulum() {
  return <main className="pendulum">
    <Nav />
    <div className="p-nav-space" />
    <section className="p-hero" aria-labelledby="pendulum-title">
      <img className="p-hero-image" src="/pendulum/hero.webp" alt="Atmospheric presentation of Pendulum’s interface graphics over a person working at a laptop" fetchPriority="high" />
      <div className="p-hero-copy">
        <Link className="p-back" href="/work">← Work</Link>
        <p className="p-label">Pendulum Intelligence</p>
        <h1 id="pendulum-title">Extending Pendulum&apos;s brand across a research report and marketing campaigns</h1>
        <p className="p-support">Editorial design, paid social and ongoing marketing support</p>
      </div>
      <a href="#report" className="p-explore"><span>↓</span> Explore the work</a>
      <span className="p-hero-index" aria-hidden="true">01 / 02</span>
    </section>

    <div className="p-intro p-shell">
      <p className="p-intro-text">Pendulum Intelligence&apos;s marketing team brought me in to design its 2026 Brand Risk Report within the company&apos;s established brand. The report led to a three-month retainer, with work ranging from paid social to guides and worksheets.</p>
      <div className="p-intro-art" aria-label="A selection of the work">
        <Artwork name="cover" alt="Cover of Pendulum's Brand Risk Report" />
        <Artwork name="campaign" alt="Paid social ad with a composition of conversational questions" />
        <Artwork name="health" alt="Brand Health guide cover" />
      </div>
    </div>

    <section className="p-report" id="report" aria-labelledby="report-heading">
      <div className="p-shell">
        <p className="p-chapter">Part 1 · The Brand Risk Report</p>
        <div className="p-editorial-head">
          <h2 id="report-heading">Giving the team a say in the direction</h2>
          <p>Georgina Ford supplied the report content and design notes. Before the full layout, I developed two executive-summary treatments and four approaches to the section openers. The options gave the team ideas to react to, a voice in the design choice and a concept to approve before the full design.</p>
        </div>
        <div className="p-direction">
          <div className="p-summary-pair">
            <figure><Artwork name="summary-a" alt="First executive-summary treatment: light background with a restrained texture" /><figcaption>Executive summary · Light treatment</figcaption></figure>
            <figure><Artwork name="summary-b" alt="Second executive-summary treatment: white typography over a purple texture" /><figcaption>Executive summary · Dark treatment</figcaption></figure>
          </div>
          <div className="p-opener">
            <figure><Artwork name="opener" alt="Approved photographic section opener with a mint frame, headline and interface-style callout" /><figcaption>Selected direction · Photography with interface-style callouts</figcaption></figure>
            <div className="p-opener-note"><span className="p-small-label">From the existing brand</span><Artwork name="callout" alt="Detail of the interface-style callout used in the report" /></div>
          </div>
        </div>
        <p className="p-recommendation">My recommendation was the photographic opener with interface-style callouts. It clearly showed the start of a new section and added a little layer of the AI overlay used in the branding. The approved approach carried through all five sections, with callouts adapted to each subject.</p>
      </div>

      <div className="p-information p-shell">
        <div className="p-editorial-head">
          <h2>Designing around the information</h2>
          <p>Working from raw copy or tables, I designed each chart and data visual individually around the information it needed to communicate. During layout, the report grew to 20 pages so the findings had room and the content flowed at a readable pace. The copy didn&apos;t get longer.</p>
        </div>
        <ReportReader />
      </div>
      <div className="p-results p-shell">
        <p className="p-small-label">Reported campaign results</p>
        <div className="p-result-figures">
          <p><span>approximately</span><strong>280</strong><span>report downloads</span></p>
          <span className="p-result-and">and</span>
          <p><span>at least</span><strong>150</strong><span>marketing-qualified leads</span></p>
        </div>
        <p className="p-result-credit">Georgina Ford reported these results for the campaign promoting the report, which included social ads, a carousel and an email banner.</p>
      </div>
    </section>

    <section id="support" className="p-ongoing" aria-labelledby="support-heading">
      <div className="p-bridge p-shell"><p className="p-chapter" id="support-heading">Part 2 · Ongoing support</p><p>After the report, the retainer covered more of the marketing team&apos;s work, from paid social campaigns to longer documents.</p></div>
      <div className="p-shell p-campaign-intro">
        <div className="p-editorial-head"><h2>A clear direction for each brief</h2><p>Ad briefs arrived with copy, sometimes with a rough concept and sometimes without one. I developed the layouts and compositions within Pendulum&apos;s brand guidelines, usually presenting one recommended direction, with alternatives when there was a useful choice to make.</p></div>
        <CampaignGallery />
        <p className="p-range-copy">Across the campaigns, the ads used different approaches to photography, illustration and data. A social series also carried ideas from the report forward, including its four-phase roadmap.</p>
        <div className="p-roadmap-composition">
          <figure className="p-roadmap-source"><Artwork name="report-16" alt="Report page with the four-phase action plan" /><figcaption>The roadmap in the report</figcaption></figure>
          <div className="p-roadmap-social"><Artwork name="roadmap-2" alt="Audit phase of the roadmap adapted for social media" /><Artwork name="roadmap-3" alt="Converge phase of the roadmap adapted for social media" /></div>
          <span className="p-small-label p-roadmap-label">Carried into the social series ↗</span>
        </div>
      </div>
    </section>

    <section className="p-guides p-shell" aria-label="Guides and worksheets">
      <p className="p-guides-copy">The guides and worksheets reused layout, type and form treatments established in earlier documents, giving each new piece a consistent starting point.</p>
      <div className="p-document-composition"><figure><Artwork name="health" alt="Brand Health guide, showing the established typography and layout" /><figcaption>Brand Health · Guide</figcaption></figure><figure><Artwork name="agentic" alt="Agentic AI guide, using the shared document design treatments" /><figcaption>Agentic AI · Guide</figcaption></figure><figure><Artwork name="worksheet" alt="Brand Health worksheet with consistent form fields and type treatments" /><figcaption>Brand Health · Worksheet</figcaption></figure></div>
    </section>

    <section className="p-style p-shell" aria-labelledby="style-heading"><div className="p-editorial-head"><h2 id="style-heading">The team asked for a style guide</h2><p>After I&apos;d designed a substantial run of social ads, the team asked for a LinkedIn Ad Style Guide for non-designers. Built in Figma as a companion to the brand book, it uses my ads as examples and gives guidance on logo placement, word counts and white space.</p></div>
      <figure className="p-style-showpiece"><Artwork name="style" alt="LinkedIn Ad Style Guide: One message. One focal point. Completed ads demonstrate practical layout decisions." /><figcaption>LinkedIn Ad Style Guide · Using completed work to explain the decisions</figcaption></figure>
      <figure className="p-style-secondary"><Artwork name="style-type" alt="Style guide typography guidance using completed Pendulum ads as examples" /></figure>
    </section>
    <section className="p-credits p-shell"><h2>Credits</h2><p>Pendulum supplied its brand guide and illustration library. Georgina Ford wrote the report content and led its marketing. Daniella Sampson commissioned and approved the work. Jennifer Torres coordinated requests and feedback and managed the paid social campaigns.</p></section>
    <div className="p-closing p-shell"><Link href="/work">← Back to work</Link><Link className="p-contact" href="/contact">Start a conversation →</Link></div>
    <Footer />
  </main>;
}

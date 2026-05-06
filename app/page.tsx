import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "nnstudio — Senior Design Partner for In-House Marketing Teams",
  description:
    "Senior design partner for in-house marketing and brand teams at B2B organizations — and white-label capacity for the agencies that serve them. Figma design systems, Adobe marketing production — eBooks, whitepapers, decks, and print. One partner, full brand consistency.",
};
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import ProblemAndPillars from "@/components/ProblemAndPillars";
import TurnoFeature from "@/components/TurnoFeature";
import DualStackSection from "@/components/DualStackSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Nav + Hero share a relative container so vertical guides can span both */}
      {/* Background lives here so the semi-transparent nav blends into it */}
      <div className="relative bg-bg hero-bg">
        {/* Nav floats over hero so the shared background shows through it */}
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav />
        </div>
        {/* Gradient overlay — screens against the dot texture so dots lighten in the upper right */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse at 90% -5%, rgba(255,253,250,0.88) 0%, rgba(244,243,239,0.5) 35%, transparent 62%)",
            mixBlendMode: "screen",
          }}
        />
        <div className="relative z-[1]">
          <Hero />
        </div>
      </div>
      <LogoStrip />
      <ProblemAndPillars />
      <DualStackSection />
      <TurnoFeature />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

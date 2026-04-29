import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "nnstudio — Senior Design Partner for In-House Marketing Teams",
  description:
    "Senior design partner for enterprise marketing and brand teams. Figma design systems, Adobe marketing production — eBooks, whitepapers, decks, and print. One partner, full brand consistency, no management overhead.",
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
      <Nav />
      <Hero />
      <LogoStrip />
      <ProblemAndPillars />
      <TurnoFeature />
      <DualStackSection />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

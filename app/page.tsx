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
      {/* Nav + Hero share a relative container so vertical guides can span both */}
      {/* Background lives here so the semi-transparent nav blends into it */}
      <div
        className="relative bg-bg"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23232520' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\"), radial-gradient(ellipse at 80% 10%, #E0DAD1 0%, #EDECE8 60%)" }}
      >
        <Nav />
        <Hero />
        {/* Left guide — x-aligned with logo / left content edge */}
        <div
          className="hidden lg:block absolute bottom-0 w-px pointer-events-none"
          style={{ top: "80px", backgroundColor: "#C8C2BA", left: "max(64px, calc(50% - 656px))" }}
        />
        {/* Right outer guide — x-aligned with right content edge / right edge of Let's talk button */}
        <div
          className="hidden lg:block absolute bottom-0 w-px pointer-events-none"
          style={{ top: "80px", backgroundColor: "#C8C2BA", right: "max(64px, calc(50% - 656px))" }}
        />
        {/* Right inner guide — x-aligned with left edge of Let's talk button (~130px wide) */}
        <div
          className="hidden lg:block absolute bottom-0 w-px pointer-events-none"
          style={{ top: "80px", backgroundColor: "#C8C2BA", right: "max(194px, calc(50% - 526px))" }}
        />
      </div>
      <LogoStrip />
      <ProblemAndPillars />
      <TurnoFeature />
      <DualStackSection />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

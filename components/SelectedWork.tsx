"use client";

import { useState } from "react";
import Image from "next/image";
import EnterpriseIllustration from "@/components/EnterpriseIllustration";

// Copy: ChatGPT final in the Home handoff doc (Oct 15, 2026).
// Desktop: hovering or focusing an entry swaps the preview beside the list.
// Below lg: each entry carries its own image and the tap goes to Work.

type Preview =
  | { kind: "image"; src: string; mobileSrc?: string; alt: string; fit?: "cover" | "contain"; bg?: string }
  | { kind: "enterprise" }
  | { kind: "pending"; label: string };

type Project = {
  id: string;
  name: string;
  description: string;
  status?: string;
  href: string;
  preview: Preview;
};

const PROJECTS: Project[] = [
  {
    id: "pendulum",
    name: "Pendulum",
    description: "I designed the Brand Risk Report, its promotional assets and ad sets for other campaigns.",
    href: "/work#pendulum",
    // Waiting on a cover or chart spread from the final report PDF.
    preview: { kind: "pending", label: "Brand Risk Report" },
  },
  {
    id: "enterprise-system",
    name: "Enterprise website design system",
    description: "I’m reviewing components and maintaining system documentation with a design and development team.",
    status: "Ongoing · Illustrative visuals",
    href: "/work#enterprise-system",
    preview: { kind: "enterprise" },
  },
  {
    id: "maison-levande",
    name: "Maison Levande",
    description: "I developed the site’s color and typography direction, designed the pages and built the Shopify store.",
    status: "Complete · Launch pending",
    href: "/work#maison-levande",
    preview: {
      kind: "image",
      src: "/home/maison-levande.jpg",
      mobileSrc: "/home/maison-levande-mobile.jpg",
      alt: "Maison Levande store home page for The Leon tote",
    },
  },
  {
    id: "turno",
    name: "Turno",
    description: "I designed a guide across digital, downloadable eBook and print formats.",
    href: "/work#turno",
    preview: {
      kind: "image",
      src: "/work-turno-book.png",
      alt: "Turno’s How to Start an Airbnb guide in print",
      fit: "contain",
      bg: "#146259",
    },
  },
];

function PreviewArt({ preview, mobile = false, eager = false }: { preview: Preview; mobile?: boolean; eager?: boolean }) {
  if (preview.kind === "enterprise") {
    return <EnterpriseIllustration className="absolute inset-0 w-full h-full" />;
  }
  if (preview.kind === "pending") {
    return (
      <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#2D3D46" }}>
        <span className="font-sans text-[12px] tracking-[0.18em] uppercase" style={{ color: "#C8C2BA" }}>
          {preview.label}
        </span>
      </div>
    );
  }
  const src = mobile && preview.mobileSrc ? preview.mobileSrc : preview.src;
  const contain = preview.fit === "contain";
  return (
    <div className="absolute inset-0" style={{ background: preview.bg ?? "#E8E6E1" }}>
      <div className="absolute" style={{ inset: contain ? "6%" : 0 }}>
        <Image
          src={src}
          alt={preview.alt}
          fill
          sizes={mobile ? "100vw" : "50vw"}
          loading={eager ? "eager" : "lazy"}
          style={{ objectFit: contain ? "contain" : "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [active, setActive] = useState(0);

  return (
    <section id="selected-work" className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6 md:mb-8">
          Selected work
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 lg:gap-16 items-start">
          {/* Project list */}
          <ul className="border-t border-faint">
            {PROJECTS.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.id} className="border-b border-faint">
                  <a
                    href={p.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group block py-7 md:py-8 lg:py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                  >
                    {/* Image on smaller screens */}
                    <div className="lg:hidden relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden border border-faint mb-5">
                      <PreviewArt preview={p.preview} mobile />
                    </div>

                    <div className="flex items-baseline justify-between gap-6">
                      <h2
                        className={`font-serif text-[24px] md:text-[28px] lg:text-[30px] font-normal leading-[1.15] tracking-[-0.01em] transition-colors ${
                          isActive ? "lg:text-ink" : "lg:text-[#5E6A70]"
                        } text-ink`}
                      >
                        {p.name}
                      </h2>
                      <span
                        aria-hidden="true"
                        className={`font-sans text-[18px] shrink-0 transition-all duration-200 ${
                          isActive ? "text-amber lg:translate-x-0" : "text-muted lg:-translate-x-1"
                        }`}
                      >
                        →
                      </span>
                    </div>
                    <p
                      className="font-sans text-[16px] md:text-[17px] leading-[1.6] font-light mt-3 max-w-[560px]"
                      style={{ color: "#6B6A63" }}
                    >
                      {p.description}
                    </p>
                    {p.status && (
                      <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted mt-4">
                        {p.status}
                      </div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop preview, follows hover and keyboard focus */}
          <div className="hidden lg:block sticky top-28" aria-hidden="true">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-faint">
              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ opacity: i === active ? 1 : 0 }}
                >
                  <PreviewArt preview={p.preview} eager={i === 0} />
                </div>
              ))}
            </div>
            {PROJECTS[active].preview.kind === "enterprise" && (
              <div className="font-sans text-[12px] text-muted mt-3">Illustrative example.</div>
            )}
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <a
            href="/work"
            className="inline-block font-sans text-[14px] tracking-[0.04em] border border-faint text-muted px-9 py-4 hover:text-ink hover:border-ink transition-colors"
            style={{ backgroundColor: "#EDECE8" }}
          >
            View work →
          </a>
        </div>
      </div>
    </section>
  );
}

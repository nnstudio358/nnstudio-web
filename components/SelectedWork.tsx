import Image from "next/image";

// Copy: ChatGPT final in the Home handoff doc (Oct 25, 2026).
// Layout A from the O-59 proposal (approved Oct 25): every project is visible
// with its image first. Pendulum and Maison Levande take the large tiles in the
// first row; Turno and the enterprise entry sit smaller in the second. The
// enterprise entry stays text-only until its illustrations are art-directed (O-13).

type Visual = { src: string; mobileSrc?: string; alt: string; fit?: "cover" | "contain"; bg?: string };

type Project = {
  id: string;
  name: string;
  description: string;
  status?: string;
  href: string;
  visual?: Visual;
};

const PENDULUM: Project = {
  id: "pendulum",
  name: "Pendulum",
  description:
    "A research report, its promotional assets and ad sets for other campaigns, all designed within Pendulum’s established brand.",
  href: "/work#pendulum",
  // Cover and page 4 from the final report PDF (no pipeline figure).
  visual: {
    src: "/home/pendulum-brand-risk-report.jpg",
    alt: "Pendulum Brand Risk Report cover and an interior page with data charts",
  },
};

const MAISON: Project = {
  id: "maison-levande",
  name: "Maison Levande",
  description:
    "A Shopify storefront carried from color and typography direction through page design and build, working from the founder’s brand strategy.",
  status: "Complete · Launch pending",
  href: "/work#maison-levande",
  visual: {
    src: "/home/maison-levande.jpg",
    mobileSrc: "/home/maison-levande-mobile.jpg",
    alt: "Maison Levande store home page for The Leon tote",
  },
};

const TURNO: Project = {
  id: "turno",
  name: "Turno",
  description:
    "A guide for new Airbnb hosts designed as a website content hub, downloadable eBook and hardcover print book.",
  href: "/work#turno",
  visual: {
    src: "/work-turno-book.png",
    alt: "Turno’s How to Start an Airbnb guide in print",
    fit: "contain",
    bg: "#146259",
  },
};

const ENTERPRISE: Project = {
  id: "enterprise-system",
  name: "Enterprise website design system",
  description:
    "Component reviews and system documentation developed in collaboration with an enterprise design and development team.",
  status: "Ongoing · Illustrative visuals",
  href: "/work#enterprise-system",
};

function Art({ visual, size, aspect, sizes }: { visual: Visual; size: "lg" | "sm"; aspect: string; sizes: string }) {
  const contain = visual.fit === "contain";
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden border border-faint`}
      style={{ background: visual.bg ?? "#E8E6E1" }}
    >
      <div
        className="absolute transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ inset: contain ? (size === "lg" ? "6%" : "8%") : 0 }}
      >
        {visual.mobileSrc ? (
          <>
            <Image
              src={visual.mobileSrc}
              alt={visual.alt}
              fill
              sizes="100vw"
              className="md:hidden"
              style={{ objectFit: "cover" }}
            />
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes={sizes}
              className="hidden md:block"
              style={{ objectFit: "cover" }}
            />
          </>
        ) : (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes={sizes}
            style={{ objectFit: contain ? "contain" : "cover", objectPosition: "center" }}
          />
        )}
      </div>
    </div>
  );
}

function Caption({ p, size }: { p: Project; size: "lg" | "sm" }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-6">
        <h3
          className={`font-serif font-normal leading-[1.15] tracking-[-0.01em] text-ink ${
            size === "lg" ? "text-[24px] md:text-[28px] lg:text-[30px]" : "text-[24px] md:text-[26px]"
          }`}
        >
          {p.name}
        </h3>
        <span
          aria-hidden="true"
          className="font-sans text-[18px] shrink-0 text-muted transition-all duration-200 group-hover:text-amber group-hover:translate-x-1"
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
        <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-muted mt-4">{p.status}</div>
      )}
    </>
  );
}

const linkFocus =
  "group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber";

function ImageTile({ p, size }: { p: Project; size: "lg" | "sm" }) {
  return (
    <a href={p.href} className={linkFocus}>
      <Art
        visual={p.visual!}
        size={size}
        aspect={size === "lg" ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-[16/9]"}
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="mt-5 md:mt-6">
        <Caption p={p} size={size} />
      </div>
    </a>
  );
}

// Text-only tile: a quiet panel instead of a placeholder image.
function TextTile({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      className={`${linkFocus} md:aspect-[16/9] border border-faint p-6 md:p-8 lg:p-10 flex flex-col justify-end transition-colors hover:border-rule`}
      style={{ backgroundColor: "#E8E6E1" }}
    >
      <Caption p={p} size="sm" />
    </a>
  );
}

export default function SelectedWork() {
  return (
    <section id="selected-work" className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
        <h2 className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber font-normal mb-6 md:mb-8">
          Selected work
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-14">
          <li>
            <ImageTile p={PENDULUM} size="lg" />
          </li>
          <li>
            <ImageTile p={MAISON} size="lg" />
          </li>
          <li>
            <ImageTile p={TURNO} size="sm" />
          </li>
          <li>
            <TextTile p={ENTERPRISE} />
          </li>
        </ul>

        <div className="mt-12 md:mt-14">
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

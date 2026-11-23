import Link from "next/link";
import NNStudioLogo from "@/components/NNStudioLogo";

// Sits at the foot of the dark close section, so it carries the dark ground.
const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-carbon text-paper">
      <div className="frame">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-night-rule py-8 md:py-10">
          <Link href="/" className="self-start py-1" aria-label="nnstudio home">
            <NNStudioLogo height={18} color="#F4F2EE" />
          </Link>
          <ul className="flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-2 t-small">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ash hover:text-paper transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/nnstudio/"
                className="text-ash hover:text-paper transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

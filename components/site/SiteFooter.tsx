import Link from "next/link";
import NNStudioLogo from "@/components/NNStudioLogo";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="footer frame">
      <div className="footer__row">
        <Link href="/" aria-label="nnstudio home" className="inline-flex py-2">
          <NNStudioLogo height={15} color="#ece6dd" />
        </Link>
        <nav aria-label="Footer" className="footer__links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="py-1">
              {l.label}
            </Link>
          ))}
          <a href="https://www.linkedin.com/in/nnstudio/" className="py-1">
            LinkedIn
          </a>
        </nav>
        <p>&copy; 2026 nnstudio</p>
      </div>
    </footer>
  );
}

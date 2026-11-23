import Link from "next/link";
import NNStudioLogo from "@/components/NNStudioLogo";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// `dark` is accepted so routes outside this round keep compiling; the footer
// now has one look.
export default function Footer(_props: { dark?: boolean }) {
  return (
    <footer className="wall-bronze">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 border-t border-[var(--rule)] py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <Link href="/" aria-label="nnstudio, home" className="-m-2 self-start p-2 md:self-auto">
            <NNStudioLogo height={17} color="#F2F0EB" />
          </Link>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-grotesk text-[15px] text-paper-dim transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/nnstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk text-[15px] text-paper-dim transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="font-grotesk pb-10 text-[13px] text-paper-dim">&copy; 2026 nnstudio</p>
      </div>
    </footer>
  );
}

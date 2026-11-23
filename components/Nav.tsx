"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NNStudioLogo from "@/components/NNStudioLogo";
import { primaryButtonSmall } from "@/components/gallery/buttons";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="wall-bronze relative z-20">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[76px] md:px-10 lg:px-16"
      >
        <Link href="/" aria-label="nnstudio, home" className="-m-2 flex items-center p-2">
          <NNStudioLogo height={19} color="#F2F0EB" />
        </Link>

        <div className="flex items-center gap-2 md:gap-9">
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isCurrent(l.href) ? "page" : undefined}
                  className="font-grotesk text-[15px] font-medium text-paper-dim decoration-1 underline-offset-[6px] transition-colors hover:text-paper aria-[current=page]:text-paper aria-[current=page]:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={primaryButtonSmall}
          >
            Contact
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="font-grotesk -mr-2 px-3 py-2 text-[15px] font-medium text-paper md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-[var(--rule)] px-5 pb-6 pt-2 md:hidden"
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.href} className="border-b border-[var(--rule)]">
              <Link
                href={l.href}
                aria-current={isCurrent(l.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="font-grotesk block py-4 text-[20px] font-medium text-paper"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

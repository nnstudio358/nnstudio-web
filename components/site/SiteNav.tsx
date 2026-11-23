"use client";

import Link from "next/link";
import { useId, useState } from "react";
import NNStudioLogo from "@/components/NNStudioLogo";

// Direction A nav: Nathan's wordmark, three links and a Contact button.
// On phones the links fold into a disclosure; Contact stays visible.

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function SiteNav({ current }: { current?: "work" | "services" | "about" }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="frame">
      <nav aria-label="Main" className="flex items-center justify-between h-[76px] md:h-[96px]">
        <Link href="/" className="py-3 -my-1" aria-label="nnstudio home">
          <NNStudioLogo height={22} color="#1C1C1A" />
        </Link>

        <div className="flex items-center gap-2 md:gap-9">
          <ul className="hidden md:flex items-center gap-9 text-[1.0625rem] font-[520]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={current === l.label.toLowerCase() ? "page" : undefined}
                  className="py-2 underline-offset-[0.3em] decoration-1 hover:underline aria-[current=page]:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn !min-h-[2.75rem] md:!min-h-[3.125rem] !px-5 md:!px-6 !text-[1rem]">
            Contact
          </Link>
          <button
            type="button"
            className="md:hidden h-11 px-3 -mr-3 text-[1rem] font-[520]"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <ul id={menuId} hidden={!open} className="md:hidden border-t border-hairline pb-4">
        {LINKS.map((l) => (
          <li key={l.href} className="border-b border-hairline">
            <Link href={l.href} className="block py-4 text-[1.25rem] font-[560]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

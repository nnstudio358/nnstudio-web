"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import NNStudioLogo from "@/components/NNStudioLogo";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

// Small and quiet, set over the top of the page. On phones the three links
// fold into a sheet; Contact stays visible.
export default function SiteNav({ current }: { current?: "work" | "services" | "about" }) {
  const [open, setOpen] = useState(false);
  const sheetId = useId();
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    openBtn.current?.focus();
  };

  return (
    <header className="nav frame">
      <nav aria-label="Main" className="nav__bar">
        <Link href="/" className="nav__home" aria-label="nnstudio home">
          <NNStudioLogo height={19} color="#ece6dd" />
        </Link>
        <div className="nav__links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current === l.label.toLowerCase() ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn">
            Contact
          </Link>
          <button
            ref={openBtn}
            type="button"
            className="nav__menu-btn"
            aria-expanded={open}
            aria-controls={sheetId}
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </nav>

      <div id={sheetId} className="nav__sheet frame" hidden={!open} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="nav__sheet-close">
          <button ref={closeBtn} type="button" className="nav__menu-btn" onClick={close}>
            Close
          </button>
        </div>
        <ul>
          {[...LINKS, { label: "Contact", href: "/contact" }].map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

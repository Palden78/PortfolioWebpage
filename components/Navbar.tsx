"use client";

import { useState } from "react";
import JournalLink from "@/components/JournalLink";

const links = [
  { href: "/", label: "home" },
  { href: "/#about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/learning", label: "learning" },
  { href: "/journey", label: "journey" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <JournalLink
          href="/"
          className="font-cinzel text-sm tracking-widest text-white drop-shadow-md transition-colors hover:text-amber-100"
          onClick={() => setOpen(false)}
        >
          PT.
        </JournalLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 font-mono text-xs text-white/80 sm:flex">
          {links.slice(1).map((link) => (
            <JournalLink
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </JournalLink>
          ))}
        </div>

        {/* Desktop resume */}
        <a
          href="/resume.pdf"
          className="hidden rounded-md border border-white/30 bg-black/10 px-4 py-2 font-mono text-xs text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-black/20 sm:block"
        >
          resume
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="rounded-md border border-white/30 bg-black/10 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm transition-colors hover:border-white/60 sm:hidden"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-200`}
      >
        <div className="mx-4 overflow-hidden rounded-lg border border-white/20 bg-[#2f2921]/90 shadow-xl backdrop-blur-md">
          <div className="flex flex-col divide-y divide-white/10 font-mono text-xs">
            {links.map((link) => (
              <JournalLink
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </JournalLink>
            ))}

            <a
              href="/resume.pdf"
              onClick={() => setOpen(false)}
              className="px-5 py-4 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
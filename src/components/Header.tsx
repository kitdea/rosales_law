"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/practice", label: "Practice" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#insights", label: "Insights" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between h-[88px]">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-brass font-serif text-sm text-brass">
            R
          </span>
          <span className="font-serif text-xl tracking-tight text-paper">
            Rosales <span className="text-brass">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-grey2 hover:text-paper transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="wrap flex flex-col py-6 gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

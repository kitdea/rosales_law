"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Sticky bottom call-to-action shown on small screens after the user
 * scrolls past the hero.
 */
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-4 bg-ink/90 backdrop-blur-md border-t border-line transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href="/contact" className="btn btn-primary w-full justify-center">
        Book a Consultation <span className="arrow">→</span>
      </Link>
    </div>
  );
}

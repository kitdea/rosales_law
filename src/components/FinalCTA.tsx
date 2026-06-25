import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Settings } from "@/lib/content";

export default function FinalCTA({ settings }: { settings: Settings }) {
  return (
    <section className="relative border-t border-line py-[130px] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 blur-[120px]"
      />
      <div className="wrap relative text-center">
        <Reveal>
          <span className="eyebrow">Get started</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.4rem)] max-w-[22ch] mx-auto">
            Let&apos;s find the clearest path forward.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-grey2 max-w-[48ch] mx-auto">
            Tell us where you stand. We respond within one business day, and
            initial inquiries are treated confidentially.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation <span className="arrow">→</span>
            </Link>
            <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
              {settings.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

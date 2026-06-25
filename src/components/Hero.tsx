import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Settings } from "@/lib/content";

const PROMISES = [
  "Senior attention on every matter",
  "Plain-language advice you can act on",
  "Responsive — answers, not silence",
];

export default function Hero({ settings }: { settings: Settings }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Attorney portrait — full-bleed on mobile, right half on desktop */}
      <div aria-hidden className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Image
          src="/attorney.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[60%_22%] animate-heroZoom"
        />
        {/* Blend the portrait into the dark column on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 lg:from-ink lg:via-ink/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      </div>

      {/* Ambient brass glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full bg-brass/10 blur-[120px] animate-drift"
      />

      <div className="wrap relative grid min-h-[100svh] items-center pt-[120px] pb-24 lg:grid-cols-2">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">{settings.name} · Philippines</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-[18px] text-[clamp(2.5rem,5.4vw,4.7rem)] leading-[1.04] max-w-[16ch]">
              Clear counsel.
              <br />
              <span className="italic text-brass">Decisive</span> action.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-brass">
              Senior attorneys. Straight answers.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[52ch] text-lg text-[#C7C5BF]">
              Full-service legal counsel for Filipino businesses and families, the law explained plainly, your matter handled with rigor from
              first consult to resolution.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-7 space-y-3">
              {PROMISES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-paper">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2.5 6.2 5 8.5 9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation <span className="arrow">→</span>
              </Link>
              <Link href="/practice" className="btn btn-ghost">
                Explore Practice Areas
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.38}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-[2px] border border-line px-4 py-3">
              <span className="font-serif text-2xl text-paper">24h</span>
              <span className="text-sm leading-tight text-grey2">
                Inquiry response
                <br />
                guaranteed
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-grey2">
          Scroll
        </span>
        <span className="h-10 w-px bg-line animate-cue" />
      </div>
    </section>
  );
}

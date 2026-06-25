import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { PracticeArea } from "@/lib/content";

export default function PracticeGrid({ areas }: { areas: PracticeArea[] }) {
  return (
    <section className="border-t border-line py-[110px]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-[54px]">
          <div>
            <Reveal>
              <span className="eyebrow">Practice areas</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3.5 text-[clamp(1.8rem,3.6vw,2.8rem)] max-w-[18ch]">
                Full-service counsel, one standard of clarity.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/practice"
              className="text-brass text-sm font-medium inline-flex items-center gap-2 group"
            >
              View all
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 0.08} className="bg-ink">
              <Link
                href={`/practice/${a.slug}`}
                className="group block h-full p-[40px_34px] transition-colors duration-300 hover:bg-ink2"
              >
                <span className="num block mb-5">
                  {String(a.order).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(1.4rem,2.2vw,1.9rem)] mb-3 transition-colors group-hover:text-brass">
                  {a.title}
                </h3>
                <p className="text-grey2 text-[15px] max-w-[44ch]">
                  {a.problem}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

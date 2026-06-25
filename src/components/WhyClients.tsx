import Reveal from "@/components/Reveal";
import type { Reason } from "@/lib/content";

export default function WhyClients({ reasons }: { reasons: Reason[] }) {
  return (
    <section className="bg-paper text-ink py-[110px]">
      <div className="wrap">
        {/* Header — heading on the left, lead line tucked to the lower-right */}
        <div className="grid gap-y-8 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="eyebrow">The approach</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3.5 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] max-w-[12ch]">
                Why clients stay with Rosales.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-[34ch] text-[15px] leading-relaxed text-grey lg:pb-2">
              No jargon, no surprises — just counsel you can act on.
            </p>
          </Reveal>
        </div>

        <div className="mt-[60px] grid gap-x-14 gap-y-12 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.num} delay={i * 0.08}>
              <div className="border-t border-lineDark pt-7">
                <span className="block font-serif text-3xl text-brass">
                  {r.num}
                </span>
                <h3 className="mb-3 mt-5 text-[clamp(1.25rem,2vw,1.6rem)]">
                  {r.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-grey">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

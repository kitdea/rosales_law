import Reveal from "@/components/Reveal";
import type { Matter } from "@/lib/content";

export default function Matters({ matters }: { matters: Matter[] }) {
  return (
    <section id="work" className="scroll-mt-[88px] border-t border-line py-[110px]">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Representative matters</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3.5 mb-[54px] text-[clamp(1.8rem,3.6vw,2.8rem)] max-w-[20ch]">
            Outcomes that speak plainly.
          </h2>
        </Reveal>

        <div className="border-t border-line">
          {matters.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.06}>
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-x-10 gap-y-2 items-baseline border-b border-line py-7">
                <span className="num">{m.area}</span>
                <h3 className="text-[clamp(1.15rem,1.8vw,1.5rem)] max-w-[48ch]">
                  {m.title}
                </h3>
                <div className="md:text-right">
                  <span className="block text-brass text-sm font-medium">
                    {m.result}
                  </span>
                  <span className="block text-grey2 text-xs mt-1">{m.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-grey2 text-xs max-w-[60ch]">
          Matters described are illustrative and anonymized to protect client
          confidentiality. Prior results do not guarantee a similar outcome.
        </p>
      </div>
    </section>
  );
}

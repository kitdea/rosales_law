import Reveal from "@/components/Reveal";
import type { Pillar } from "@/lib/content";

export default function Approach({ pillars }: { pillars: Pillar[] }) {
  return (
    <section className="border-t border-line py-[110px]">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">How we work</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3.5 text-[clamp(1.8rem,3.6vw,2.8rem)] max-w-[20ch]">
            A different kind of legal experience.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-[46px] mt-[54px]">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div className="border-t border-line pt-[22px]">
                <span className="font-serif text-3xl text-brass block mb-3.5">
                  {p.num}
                </span>
                <h3 className="mb-2.5 text-[clamp(1.25rem,2vw,1.6rem)]">
                  {p.title}
                </h3>
                <p className="text-[15px] text-[#D9D7D1]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import type { Credential } from "@/lib/content";

export default function Credentials({ items }: { items: Credential[] }) {
  return (
    <section className="border-t border-line py-[90px]">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {items.map((c, i) => (
          <Reveal key={c.label} delay={(i % 4) * 0.08} className="bg-ink">
            <div className="p-[40px_28px] text-center">
              <div className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] text-brass leading-none">
                {c.value}
              </div>
              <div className="mt-3 text-[13px] tracking-[0.04em] text-grey2">
                {c.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

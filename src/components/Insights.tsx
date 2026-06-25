import Reveal from "@/components/Reveal";
import type { Insight } from "@/lib/content";

export default function Insights({ insights }: { insights: Insight[] }) {
  if (insights.length === 0) return null;

  return (
    <section id="insights" className="scroll-mt-[88px] border-t border-line py-[110px]">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Insights</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3.5 mb-[54px] text-[clamp(1.8rem,3.6vw,2.8rem)] max-w-[20ch]">
            The law, made understandable.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08} className="bg-ink">
              <article className="group h-full p-[36px_30px] transition-colors duration-300 hover:bg-ink2">
                <div className="flex items-center gap-3 text-xs text-grey2">
                  <span className="text-brass uppercase tracking-[0.14em]">
                    {post.category}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-[clamp(1.2rem,1.8vw,1.5rem)] transition-colors group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mt-3 text-grey2 text-[15px]">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

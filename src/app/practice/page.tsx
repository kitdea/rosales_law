import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Reveal from "@/components/Reveal";
import { getSettings, getPracticeAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas — Rosales Law Firm",
  description:
    "Corporate & business, litigation & disputes, family & estate, and labor & immigration counsel for Filipino businesses and families.",
};

export default async function PracticeHub() {
  const [settings, areas] = await Promise.all([
    getSettings(),
    getPracticeAreas(),
  ]);

  return (
    <>
      <Header />
      <main className="pt-[140px]">
        <section className="wrap pb-[60px]">
          <Reveal>
            <span className="eyebrow">Practice areas</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] max-w-[18ch]">
              Full-service counsel, one standard of clarity.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[#C7C5BF] max-w-[52ch] text-lg">
              Whatever your situation calls for, you get senior attention and
              plain-language advice you can act on.
            </p>
          </Reveal>
        </section>

        <section className="wrap pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 0.08} className="bg-ink">
                <Link
                  href={`/practice/${a.slug}`}
                  className="group block h-full p-[44px_36px] transition-colors duration-300 hover:bg-ink2"
                >
                  <span className="num block mb-5">
                    {String(a.order).padStart(2, "0")}
                  </span>
                  <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] mb-3 transition-colors group-hover:text-brass">
                    {a.title}
                  </h2>
                  <p className="text-grey2 text-[15px] max-w-[44ch]">
                    {a.problem}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-brass text-sm font-medium">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <MobileCTA />
    </>
  );
}

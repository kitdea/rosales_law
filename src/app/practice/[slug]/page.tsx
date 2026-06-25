import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Reveal from "@/components/Reveal";
import { getSettings, getPracticeArea, getPracticeAreas } from "@/lib/content";

export async function generateStaticParams() {
  const areas = await getPracticeAreas();
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const area = await getPracticeArea(params.slug);
  if (!area) return { title: "Practice Area — Rosales Law Firm" };
  return {
    title: `${area.title} — Rosales Law Firm`,
    description: area.problem,
  };
}

export default async function PracticeDetail({
  params,
}: {
  params: { slug: string };
}) {
  const [settings, area] = await Promise.all([
    getSettings(),
    getPracticeArea(params.slug),
  ]);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main className="pt-[140px]">
        {/* Intro */}
        <section className="wrap pb-[70px]">
          <Reveal>
            <Link
              href="/practice"
              className="text-grey2 text-sm hover:text-brass transition-colors"
            >
              ← All practice areas
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow block mt-8">
              {String(area.order).padStart(2, "0")} · Practice
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] max-w-[16ch]">
              {area.title}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-[#C7C5BF] max-w-[56ch] text-lg">
              {area.problem}
            </p>
          </Reveal>
        </section>

        {/* What we do */}
        <section className="bg-paper text-ink py-[90px]">
          <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] text-ink">
                What we do
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-4">
                {area.services.map((s) => (
                  <li
                    key={s}
                    className="flex gap-4 border-b border-lineDark pb-4 text-[17px] text-[#2A2A2A]"
                  >
                    <span className="text-brass">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-[100px]">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">How the engagement works</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3.5 mb-[54px] text-[clamp(1.6rem,3vw,2.4rem)]">
                A clear path, start to finish.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
              {area.process.map((step, i) => (
                <Reveal key={step.title} delay={(i % 4) * 0.08}>
                  <div className="border border-line p-7 h-full">
                    <span className="font-serif text-3xl text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl mt-4 mb-2">{step.title}</h3>
                    <p className="text-grey2 text-sm">{step.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {area.faqs.length > 0 && (
          <section className="py-[100px] border-t border-line">
            <div className="wrap grid lg:grid-cols-[0.6fr_1.4fr] gap-12">
              <Reveal>
                <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]">
                  Common questions
                </h2>
              </Reveal>
              <div className="grid gap-8">
                {area.faqs.map((f, i) => (
                  <Reveal key={f.q} delay={i * 0.06}>
                    <div className="border-b border-line pb-8">
                      <h3 className="text-xl mb-3">{f.q}</h3>
                      <p className="text-grey2 max-w-[60ch]">{f.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center py-[110px] bg-ink2">
          <div className="wrap">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] max-w-[20ch] mx-auto mb-7">
                Have a {area.title.toLowerCase()} matter? Let&apos;s talk.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <MobileCTA />
    </>
  );
}

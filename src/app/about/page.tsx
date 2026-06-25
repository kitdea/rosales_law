import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Reveal from "@/components/Reveal";
import Credentials from "@/components/Credentials";
import { getSettings, getPillars, getCredentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Rosales Law Firm",
  description:
    "A full-service Philippine law firm built on clarity, responsiveness, and senior attention to every matter.",
};

export default async function AboutPage() {
  const settings = await getSettings();
  const pillars = getPillars();
  const credentials = getCredentials();

  return (
    <>
      <Header />
      <main className="pt-[140px]">
        <section className="wrap pb-[80px]">
          <Reveal>
            <span className="eyebrow">The firm</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] max-w-[20ch]">
              The law, made understandable.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[#C7C5BF] max-w-[58ch] text-lg">
              Rosales Law Firm is a full-service Philippine practice serving
              businesses and families. We believe good counsel starts with being
              understood — so we explain the law plainly, move decisively, and
              stay with you from first consult to resolution.
            </p>
          </Reveal>
        </section>

        {/* Approach pillars (dark variant) */}
        <section className="py-[90px] border-t border-line">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">How we work</span>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-[46px] mt-[40px]">
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

        <Credentials items={credentials} />

        {/* CTA */}
        <section className="text-center py-[110px]">
          <div className="wrap">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] max-w-[20ch] mx-auto mb-7">
                Let&apos;s find the clearest path forward.
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

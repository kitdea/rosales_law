import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Rosales Law Firm",
  description:
    "Book a consultation with Rosales Law Firm. Initial inquiries are confidential; we respond within one business day.",
};

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <>
      <Header />
      <main className="pt-[140px] pb-[120px]">
        <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-16">
          {/* Left: intro + details */}
          <div>
            <Reveal>
              <span className="eyebrow">Get started</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)] max-w-[16ch]">
                Tell us where you stand.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-[#C7C5BF] max-w-[44ch]">
                Share a little about your situation and we&apos;ll respond within
                one business day. Initial inquiries are treated confidentially.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-12 grid gap-7">
                <Detail label="Call" value={settings.phone} href={`tel:${settings.phone.replace(/\s/g, "")}`} />
                <Detail label="Email" value={settings.email} href={`mailto:${settings.email}`} />
                <Detail label="Office" value={settings.address} />
                <Detail label="Hours" value={settings.hours} />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </main>
      <Footer settings={settings} />
    </>
  );
}

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-t border-line pt-4">
      <div className="text-[12px] tracking-[0.16em] uppercase text-grey2 mb-1.5">
        {label}
      </div>
      {href ? (
        <a href={href} className="text-lg hover:text-brass transition-colors">
          {value}
        </a>
      ) : (
        <span className="text-lg">{value}</span>
      )}
    </div>
  );
}

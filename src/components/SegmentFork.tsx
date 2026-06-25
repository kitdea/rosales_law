import Link from "next/link";
import Reveal from "@/components/Reveal";

const SEGMENTS = [
  {
    eyebrow: "For businesses",
    title: "Counsel that keeps you moving",
    body: "Incorporation, contracts, disputes, and compliance — handled by senior counsel so your team can stay focused on the business.",
    href: "/practice/corporate-business",
    cta: "Business services",
  },
  {
    eyebrow: "For families",
    title: "Protect what you've built",
    body: "Estate planning, family matters, and property — handled with discretion, clarity, and care for what matters most.",
    href: "/practice/family-estate",
    cta: "Family services",
  },
];

export default function SegmentFork() {
  return (
    <section className="border-t border-line py-[100px]">
      <div className="wrap grid md:grid-cols-2 gap-px bg-line border border-line">
        {SEGMENTS.map((s, i) => (
          <Reveal key={s.href} delay={i * 0.1} className="bg-ink">
            <Link
              href={s.href}
              className="group block h-full p-[48px_40px] transition-colors duration-300 hover:bg-ink2"
            >
              <span className="eyebrow">{s.eyebrow}</span>
              <h3 className="mt-5 text-[clamp(1.5rem,2.6vw,2.2rem)] transition-colors group-hover:text-brass">
                {s.title}
              </h3>
              <p className="mt-4 text-grey2 max-w-[42ch]">{s.body}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-brass text-sm font-medium">
                {s.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

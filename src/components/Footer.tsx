import Link from "next/link";
import type { Settings } from "@/lib/content";

const PRACTICE_LINKS = [
  { href: "/practice/corporate-business", label: "Corporate & Business" },
  { href: "/practice/litigation-disputes", label: "Litigation & Disputes" },
  { href: "/practice/family-estate", label: "Family & Estate" },
  { href: "/practice/labor-immigration", label: "Labor & Immigration" },
];

const FIRM_LINKS = [
  { href: "/about", label: "About the firm" },
  { href: "/practice", label: "Practice areas" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="wrap py-[80px] grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="font-serif text-2xl text-paper">
            Rosales<span className="text-brass">.</span>
          </Link>
          <p className="mt-4 text-grey2 text-sm max-w-[34ch]">
            {settings.tagline} Full-service legal counsel for Filipino
            businesses and families.
          </p>
        </div>

        <FooterCol title="Practice" links={PRACTICE_LINKS} />
        <FooterCol title="Firm" links={FIRM_LINKS} />

        <div>
          <h4 className="text-[12px] tracking-[0.16em] uppercase text-grey2 mb-4">
            Get in touch
          </h4>
          <div className="grid gap-2.5 text-sm">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="text-paper hover:text-brass transition-colors"
            >
              {settings.phone}
            </a>
            <a
              href={`mailto:${settings.email}`}
              className="text-paper hover:text-brass transition-colors"
            >
              {settings.email}
            </a>
            <span className="text-grey2 max-w-[30ch]">{settings.address}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-grey2">
          <span>
            © {year} {settings.name}. All rights reserved.
          </span>
          <span>Attorney advertising. Prior results do not guarantee a similar outcome.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[12px] tracking-[0.16em] uppercase text-grey2 mb-4">
        {title}
      </h4>
      <ul className="grid gap-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-paper hover:text-brass transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

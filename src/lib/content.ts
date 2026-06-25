/**
 * Content layer for the Rosales Law Firm site.
 *
 * For now this serves typed, hand-authored content. The async signatures
 * (getSettings, getPracticeAreas, …) intentionally mirror a CMS data layer,
 * so swapping in Sanity later only changes the bodies of these functions —
 * the pages and components don't need to know the difference.
 */

export interface Settings {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface PracticeArea {
  slug: string;
  order: number;
  title: string;
  /** One-line statement of the problem this area solves, in the client's words. */
  problem: string;
  services: string[];
  process: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export interface Matter {
  title: string;
  area: string;
  result: string;
  year: string;
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface Pillar {
  num: string;
  title: string;
  body: string;
}

export interface Credential {
  value: string;
  label: string;
}

export interface Reason {
  num: string;
  title: string;
  body: string;
}

const settings: Settings = {
  name: "Rosales Law Firm",
  tagline: "Clear counsel. Decisive action.",
  phone: "+63 2 8123 4567",
  email: "hello@rosaleslaw.ph",
  address: "8F Sterling Tower, Ayala Avenue, Makati City, Metro Manila 1226",
  hours: "Monday–Friday, 9:00 AM – 6:00 PM",
};

const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-business",
    order: 1,
    title: "Corporate & Business",
    problem:
      "You're starting, scaling, or restructuring a business and need counsel that protects the company without slowing it down.",
    services: [
      "Company incorporation and SEC registration",
      "Shareholder, joint-venture, and founders' agreements",
      "Commercial contracts and supplier terms",
      "Corporate governance and board advisory",
      "Mergers, acquisitions, and reorganizations",
      "Regulatory compliance and licensing",
    ],
    process: [
      { title: "Listen", detail: "We map your goals, risks, and timeline before recommending anything." },
      { title: "Structure", detail: "We design the cleanest legal structure for where you're headed." },
      { title: "Document", detail: "Plain-language agreements that hold up and that you can actually use." },
      { title: "Stand by", detail: "Ongoing counsel as the business grows and the questions change." },
    ],
    faqs: [
      {
        q: "How long does it take to register a corporation in the Philippines?",
        a: "With complete documents, SEC registration is typically 2–4 weeks. We handle name reservation, drafting, and the post-registration BIR, local-government, and SSS/PhilHealth/Pag-IBIG steps so nothing falls through the cracks.",
      },
      {
        q: "Can you work as our outside general counsel?",
        a: "Yes. Many clients keep us on a monthly retainer for day-to-day contracts, employment questions, and compliance — senior attention without the cost of an in-house department.",
      },
    ],
  },
  {
    slug: "litigation-disputes",
    order: 2,
    title: "Litigation & Disputes",
    problem:
      "A dispute is threatening your business, your assets, or your peace of mind, and you need a clear-eyed assessment of where you stand.",
    services: [
      "Civil and commercial litigation",
      "Contract and collection disputes",
      "Arbitration and mediation",
      "Injunctions and provisional remedies",
      "Settlement negotiation",
      "Enforcement of judgments",
    ],
    process: [
      { title: "Assess", detail: "An honest read on the merits, the costs, and the realistic outcomes." },
      { title: "Strategize", detail: "We pursue settlement where it serves you and litigate hard where it doesn't." },
      { title: "Advocate", detail: "Disciplined preparation and clear advocacy at every stage." },
      { title: "Resolve", detail: "We push toward the fastest acceptable resolution, not the longest fight." },
    ],
    faqs: [
      {
        q: "Should I settle or go to court?",
        a: "It depends on the strength of your position, the cost and time of litigation, and what outcome you actually need. We give you a candid recommendation early, so you decide with full information — not after the bills pile up.",
      },
      {
        q: "How are litigation fees structured?",
        a: "We offer fixed-fee phases, hourly, or blended arrangements depending on the matter. You'll get a written estimate and clear scope before we start.",
      },
    ],
  },
  {
    slug: "family-estate",
    order: 3,
    title: "Family & Estate",
    problem:
      "You're protecting your family's future — through marriage, separation, or succession — and want it handled with discretion and care.",
    services: [
      "Estate planning and wills",
      "Settlement of estates and probate",
      "Annulment and legal separation",
      "Prenuptial and property agreements",
      "Adoption and guardianship",
      "Property and inheritance disputes",
    ],
    process: [
      { title: "Understand", detail: "We start with your family's situation and what matters most to you." },
      { title: "Plan", detail: "Clear options explained in plain terms, with the tax and timing trade-offs." },
      { title: "Execute", detail: "Properly drafted, properly witnessed, properly filed." },
      { title: "Protect", detail: "Documents and counsel that hold up when your family needs them." },
    ],
    faqs: [
      {
        q: "Do I really need a will if my estate is simple?",
        a: "A will prevents costly disputes and lets you decide how your estate is divided rather than leaving it to the default rules. Even modest estates benefit from clear instructions and a named executor.",
      },
      {
        q: "How long does estate settlement take?",
        a: "Extrajudicial settlement among agreeing heirs can be done in a few months; contested or court-supervised settlements take longer. We aim for the simplest lawful route available to your family.",
      },
    ],
  },
  {
    slug: "labor-immigration",
    order: 4,
    title: "Labor & Immigration",
    problem:
      "You're managing people — hiring, exiting, or relocating them across borders — and need the rules handled correctly the first time.",
    services: [
      "Employment contracts and handbooks",
      "Termination and redundancy counsel",
      "Labor dispute and NLRC representation",
      "Work visas and special work permits",
      "Alien Employment Permits (AEP)",
      "Compliance audits and HR advisory",
    ],
    process: [
      { title: "Review", detail: "We audit your contracts and processes against current labor rules." },
      { title: "Advise", detail: "Practical guidance that reduces risk without grinding HR to a halt." },
      { title: "Act", detail: "We handle filings, permits, and representation end to end." },
      { title: "Maintain", detail: "Ongoing support as your team and the regulations evolve." },
    ],
    faqs: [
      {
        q: "What's the right way to terminate an employee in the Philippines?",
        a: "Philippine law requires both a valid cause and due process — typically the two-notice rule. Getting either wrong exposes you to illegal-dismissal claims. We help you do it correctly and document it properly.",
      },
      {
        q: "What permits does a foreign hire need to work here?",
        a: "Most foreign nationals need an Alien Employment Permit and the appropriate work visa (often 9(g)). We coordinate the AEP, visa, and BI requirements so your hire can start on time.",
      },
    ],
  },
];

const matters: Matter[] = [
  {
    title: "Cross-border supply agreement renegotiated under deadline",
    area: "Corporate & Business",
    result: "Closed in 11 days, ₱40M exposure removed",
    year: "2024",
  },
  {
    title: "Collection suit resolved before trial",
    area: "Litigation & Disputes",
    result: "Full recovery via court-annexed mediation",
    year: "2024",
  },
  {
    title: "Estate settled among six heirs without litigation",
    area: "Family & Estate",
    result: "Extrajudicial settlement in under four months",
    year: "2023",
  },
  {
    title: "Illegal-dismissal claim dismissed at the NLRC",
    area: "Labor & Immigration",
    result: "Decision affirmed on appeal, no liability",
    year: "2023",
  },
];

const insights: Insight[] = [
  {
    slug: "ease-of-paying-taxes-act",
    title: "What the Ease of Paying Taxes Act means for SMEs",
    category: "Corporate",
    date: "May 2024",
    excerpt:
      "The new classification of taxpayers changes filing thresholds and penalties. Here's what small and medium businesses should adjust now.",
  },
  {
    slug: "two-notice-rule",
    title: "The two-notice rule, explained without the jargon",
    category: "Labor",
    date: "March 2024",
    excerpt:
      "Most illegal-dismissal losses come down to process, not cause. A plain-language walkthrough of doing terminations right.",
  },
  {
    slug: "wills-vs-extrajudicial-settlement",
    title: "Wills vs. extrajudicial settlement: which does your family need?",
    category: "Estate",
    date: "January 2024",
    excerpt:
      "Two very different paths to passing on what you've built. We compare cost, speed, and the disputes each one prevents.",
  },
];

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Plain language, always",
    body: "We explain the law in terms you can act on. No jargon, no posturing — just a clear view of your options and what we recommend.",
  },
  {
    num: "02",
    title: "Senior attention",
    body: "Your matter is handled by experienced counsel, not passed down a chain. The lawyer you meet is the lawyer who does the work.",
  },
  {
    num: "03",
    title: "Decisive, not drawn out",
    body: "We move toward the fastest acceptable resolution. We litigate when it serves you and settle when it serves you better.",
  },
];

const reasons: Reason[] = [
  {
    num: "01",
    title: "Clarity in communication",
    body: "We explain the law in plain language so you understand your options and the path ahead — before you decide.",
  },
  {
    num: "02",
    title: "Responsiveness",
    body: "Questions get answered. We keep you informed at every stage, with realistic timelines and no silence.",
  },
  {
    num: "03",
    title: "Senior attention",
    body: "Your matter is handled with the care and rigor it deserves — not passed down and forgotten.",
  },
];

const credentials: Credential[] = [
  { value: "20+", label: "Years of combined practice" },
  { value: "4", label: "Core practice areas" },
  { value: "1 day", label: "Typical response time" },
  { value: "100%", label: "Senior-attorney handled" },
];

/** Simulates async data access; swap these bodies for Sanity fetches later. */
export async function getSettings(): Promise<Settings> {
  return settings;
}

export async function getPracticeAreas(): Promise<PracticeArea[]> {
  return [...practiceAreas].sort((a, b) => a.order - b.order);
}

export async function getPracticeArea(
  slug: string,
): Promise<PracticeArea | null> {
  return practiceAreas.find((a) => a.slug === slug) ?? null;
}

export async function getMatters(): Promise<Matter[]> {
  return matters;
}

export async function getInsights(): Promise<Insight[]> {
  return insights;
}

export function getPillars(): Pillar[] {
  return pillars;
}

export function getReasons(): Reason[] {
  return reasons;
}

export function getCredentials(): Credential[] {
  return credentials;
}

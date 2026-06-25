import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Hero from "@/components/Hero";
import SegmentFork from "@/components/SegmentFork";
import PracticeGrid from "@/components/PracticeGrid";
import Approach from "@/components/Approach";
import WhyClients from "@/components/WhyClients";
import Matters from "@/components/Matters";
import Insights from "@/components/Insights";
import Credentials from "@/components/Credentials";
import FinalCTA from "@/components/FinalCTA";
import {
  getSettings,
  getPracticeAreas,
  getMatters,
  getInsights,
  getPillars,
  getReasons,
  getCredentials,
} from "@/lib/content";

export default async function HomePage() {
  const [settings, areas, matters, insights] = await Promise.all([
    getSettings(),
    getPracticeAreas(),
    getMatters(),
    getInsights(),
  ]);
  const pillars = getPillars();
  const reasons = getReasons();
  const credentials = getCredentials();

  return (
    <>
      <Header />
      <main>
        <Hero settings={settings} />
        <SegmentFork />
        <PracticeGrid areas={areas} />
        <Approach pillars={pillars} />
        <WhyClients reasons={reasons} />
        <Matters matters={matters} />
        <Insights insights={insights} />
        <Credentials items={credentials} />
        <FinalCTA settings={settings} />
      </main>
      <Footer settings={settings} />
      <MobileCTA />
    </>
  );
}

import Navbar from "@/components/layout/nav-bar";
import { MARKETING_PAGE_MODE } from "@/features/marketing/constants";
import { HomeHeroMetaSection } from "@/features/marketing/components/home-hero-meta-section";
import { HomePageSections } from "@/features/marketing/components/home-page-sections";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";

export default function HomePage() {
  const showHomePage = MARKETING_PAGE_MODE === "home";

  return (
    <>
      <Navbar />
      <MarketingHero variant={MARKETING_PAGE_MODE} />
      {showHomePage && (
        <>
          <HomeHeroMetaSection />
          <HomePageSections />
        </>
      )}
    </>
  );
}

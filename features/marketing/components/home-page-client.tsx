"use client";

import { SiteLayout } from "@/components/layout/site-layout";
import { HomeHeroMetaSection } from "@/features/marketing/components/home-hero-meta-section";
import { HomePageSections } from "@/features/marketing/components/home-page-sections";
import { MarketingHero } from "@/features/marketing/components/marketing-hero";
import { useHomePageContent } from "@/features/marketing/services/home-page";

export function HomePageClient() {
  const { data } = useHomePageContent();
  const pageMode = data?.pageMode ?? "home";
  const showHomePage = pageMode === "home";

  return (
    <SiteLayout settings={{ footer: showHomePage, navbar: true, pageContainer: false }}>
      <MarketingHero variant={pageMode} />
      {showHomePage && <><HomeHeroMetaSection /><HomePageSections /></>}
    </SiteLayout>
  );
}

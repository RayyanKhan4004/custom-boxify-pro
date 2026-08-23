import { IndustriesSection } from "./home-sections/industries-section";
import { PackagingStyleSection } from "./home-sections/packaging-style-section";
import { ProcessSection } from "./home-sections/process-section";
import { QuoteSection } from "./home-sections/quote-section";
import { SiteFooter } from "./home-sections/site-footer";

export function HomePageSections() {
  return (
    <>
      <PackagingStyleSection />
      <ProcessSection />
      <IndustriesSection />
      <QuoteSection />
      <SiteFooter />
    </>
  );
}

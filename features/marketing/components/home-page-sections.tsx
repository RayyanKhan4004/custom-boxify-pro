import { IndustriesSection } from "./home-sections/industries-section";
import { PackagingStyleSection } from "./home-sections/packaging-style-section";
import { ProcessSection } from "./home-sections/process-section";
import { QuoteSection } from "./home-sections/quote-section";

export function HomePageSections() {
  return (
    <>
      <PackagingStyleSection />
      <ProcessSection />
      <IndustriesSection />
      <QuoteSection />
    </>
  );
}

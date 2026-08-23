import { SiteLayout } from "@/components/layout/site-layout";
import { IndustriesHero } from "@/features/marketing/components/industries";

export default function IndustriesPage() {
  return (
    <SiteLayout
      settings={{ footer: true, navbar: true, pageContainer: false }}
    >
      <IndustriesHero />
    </SiteLayout>
  );
}

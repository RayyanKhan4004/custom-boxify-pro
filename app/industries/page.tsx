import { SiteLayout } from "@/components/layout/site-layout";
import { Suspense } from "react";
import {
  IndustriesCta,
  IndustriesGrid,
  IndustriesHero,
} from "@/features/marketing/components/industries";

export default function IndustriesPage() {
  return (
    <SiteLayout
      settings={{ footer: true, navbar: true, pageContainer: false }}
    >
      <IndustriesHero />
      <Suspense fallback={null}>
        <IndustriesGrid />
      </Suspense>
      <IndustriesCta />
    </SiteLayout>
  );
}

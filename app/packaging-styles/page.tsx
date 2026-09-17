import { SiteLayout } from "@/components/layout/site-layout";
import { Suspense } from "react";
import {
  PackagingStylesCta,
  PackagingStylesGrid,
  PackagingStylesHero,
} from "@/features/marketing/components/packaging-styles";

export default function PackagingStylesPage() {
  return (
    <SiteLayout settings={{ footer: true, navbar: true, pageContainer: false }}>
      <PackagingStylesHero />
      <Suspense fallback={null}>
        <PackagingStylesGrid />
      </Suspense>
      <PackagingStylesCta />
    </SiteLayout>
  );
}

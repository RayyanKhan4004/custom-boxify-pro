import { SiteLayout } from "@/components/layout/site-layout";
import {
  PackagingStylesCta,
  PackagingStylesGrid,
  PackagingStylesHero,
} from "@/features/marketing/components/packaging-styles";

export default function PackagingStylesPage() {
  return (
    <SiteLayout settings={{ footer: true, navbar: true, pageContainer: false }}>
      <PackagingStylesHero />
      <PackagingStylesGrid />
      <PackagingStylesCta />
    </SiteLayout>
  );
}

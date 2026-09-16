import rigidBoxes from "@/components/images/packaging-styles/rigid-boxes.png";
import { MarketingImageHero } from "@/features/marketing/components/marketing-image-hero";

export function PackagingStylesHero() {
  return (
    <MarketingImageHero
      accentTitle="Product"
      description="Explore custom boxes and packaging styles designed around your product, brand and industry. Choose a proven box style or create a fully custom packaging solution."
      exploreHref="#styles"
      exploreLabel="Explore Styles"
      eyebrow="We Got You Covered"
      image={rigidBoxes}
      imageAlt="Custom packaging styles"
      title="Custom Packaging Styles for Every"
    />
  );
}

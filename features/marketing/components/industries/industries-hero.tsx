import industriesHeroImage from "@/components/images/industries/industries-hero-image.png";
import { MarketingImageHero } from "@/features/marketing/components/marketing-image-hero";

export function IndustriesHero() {
  return (
    <MarketingImageHero
      accentTitle="Industry"
      description="Explore custom boxes and branded packaging for food, cosmetics, jewelry, bakery, retail, coffee, personal care, and more."
      exploreHref="#industries"
      exploreLabel="Explore Packaging"
      eyebrow="Industries We Elevate"
      image={industriesHeroImage}
      imageAlt="Custom packaging for every industry"
      title="Custom Boxes & Packaging Solutions by"
    />
  );
}

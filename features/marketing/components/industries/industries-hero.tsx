import Image from "next/image";
import Link from "next/link";

import industriesHeroImage from "@/components/images/industries/industries-hero-image.png";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function IndustriesHero() {
  return (
    <section className="relative min-h-105 overflow-hidden border-b border-(--border-subtle) bg-(--surface-page) sm:min-h-117.5 xl:h-147 xl:min-h-0">
      <PageContainer className="relative flex min-h-105 items-center overflow-hidden py-14 sm:min-h-117.5 xl:h-full xl:min-h-0 xl:py-0">
        <div aria-hidden className="absolute inset-0">
          <Image
            alt=""
            className="h-full w-full object-cover object-center"
            placeholder="blur"
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            src={industriesHeroImage}
          />
        </div>
        <div className="relative z-10 max-w-137.5">
          <p className="text-sm font-semibold text-(--brand-primary)">Industries We Elevate</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-(--text-primary) sm:text-5xl lg:text-hero-heading">
            Custom Boxes &amp; Packaging
            <br />
            Solutions by <span className="text-(--brand-primary)">Industry</span>
          </h1>
          <p className="mt-5 max-w-112.5 text-base leading-7 text-(--text-muted)">
            Explore custom boxes and branded packaging for food, cosmetics, jewelry, bakery, retail, coffee, personal care, and more.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<Link href="#industries" />} size="cta" variant="marketingOutline">
              Explore Packaging
            </Button>
            <Button nativeButton={false} render={<Link href="/#quote" />} size="cta" variant="marketingPrimary">
              Contact Now
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

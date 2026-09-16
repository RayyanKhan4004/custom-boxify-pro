import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

type MarketingImageHeroProps = {
  accentTitle: string;
  description: string;
  exploreHref: string;
  exploreLabel: string;
  image: StaticImageData;
  imageAlt: string;
  eyebrow: string;
  title: string;
};

export function MarketingImageHero({
  accentTitle,
  description,
  exploreHref,
  exploreLabel,
  image,
  imageAlt,
  eyebrow,
  title,
}: MarketingImageHeroProps) {
  return (
    <section className="relative min-h-105 overflow-hidden border-b border-(--border-subtle) bg-(--surface-page) sm:min-h-117.5 xl:h-147 xl:min-h-0">
      <PageContainer className="relative flex min-h-105 items-center overflow-hidden py-14 sm:min-h-117.5 xl:h-full xl:min-h-0 xl:py-0">
        <div className="absolute inset-0">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-center"
            placeholder="blur"
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            src={image}
          />
        </div>
        <div className="relative z-10 max-w-137.5">
          <p className="text-sm font-semibold text-(--brand-primary)">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-(--text-primary) sm:text-5xl lg:text-hero-heading">
            {title} <span className="text-(--brand-primary)">{accentTitle}</span>
          </h1>
          <p className="mt-5 max-w-112.5 text-base leading-7 text-(--text-muted)">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<Link href={exploreHref} />} size="cta" variant="marketingOutline">
              {exploreLabel}
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

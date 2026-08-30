import Link from "next/link";

import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import type { Industry } from "@/features/marketing/types";

type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const smoothScroll = useSmoothScroll();

  return (
    <Link
      aria-label={`Explore ${industry.name} packaging`}
      className="group relative aspect-[349/240] overflow-hidden rounded-lg bg-(--surface-raised) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand-primary)"
      href="/#quote"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`${industry.name} packaging`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onLoad={() => smoothScroll?.resize()}
          src={industry.image}
          style={{ objectPosition: industry.objectPosition }}
        />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--surface-page) to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-base font-bold text-(--text-primary)">{industry.name}</h3>
      </div>
    </Link>
  );
}

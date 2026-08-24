import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MarketingCard } from "@/features/marketing/components/marketing-card";
import type { PackagingStyle } from "@/features/marketing/types";

type PackagingStyleCardProps = {
  style: PackagingStyle;
};

export function PackagingStyleCard({ style }: PackagingStyleCardProps) {
  return (
    <MarketingCard className="min-h-164">
      <div className="relative aspect-[560/260] overflow-hidden rounded-lg">
        <Image
          alt={`${style.name} packaging`}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          fill
          placeholder="blur"
          sizes="(min-width: 900px) 50vw, 100vw"
          src={style.image}
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold leading-7 text-(--text-primary)">{style.name}</h2>
          <span className="rounded-full border border-(--brand-primary) px-2 py-1 text-[10px] font-semibold leading-none tracking-[0.06em] uppercase text-(--brand-primary)">
            Premium Style
          </span>
        </div>
        <p className="mt-3 text-[15px] leading-[1.5] text-(--text-muted)">{style.description}</p>

        <div className="mt-4">
          <h3 className="text-xs font-semibold tracking-[0.06em] uppercase text-(--brand-primary)">Best For</h3>
          <p className="mt-1 text-sm leading-5 text-(--text-muted)">{style.bestFor}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xs font-semibold tracking-[0.06em] uppercase text-(--brand-primary)">
            Specifications &amp; Customizations
          </h3>
          <ul className="mt-2 grid gap-1.5">
            {style.specifications.map((specification) => (
              <li className="flex gap-2 text-xs leading-4 text-(--text-muted)" key={specification}>
                <CheckCircleIcon aria-hidden className="mt-0.5 size-3 shrink-0 text-(--brand-primary)" weight="fill" />
                <span>{specification}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        className="mt-5 w-full justify-between p-0 text-sm font-semibold tracking-[0.07em] uppercase hover:shadow-none sm:w-auto sm:self-start"
        nativeButton={false}
        render={<Link href="/#quote" />}
        variant="link"
      >
        Configure Style
        <ArrowRightIcon aria-hidden className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
      </Button>
    </MarketingCard>
  );
}

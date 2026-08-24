import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Industry } from "@/features/marketing/types";

type IndustryCardProps = {
  industry: Industry;
  wide?: boolean;
};

export function IndustryCard({ industry, wide = false }: IndustryCardProps) {
  return (
    <article
      className={`group relative flex min-h-110 flex-col overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--surface-card) p-4 shadow-(--shadow-card) transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-(--shadow-button) sm:p-6 ${wide ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div className="relative aspect-[349/240] overflow-hidden rounded-lg">
        <Image
          alt={`${industry.name} packaging`}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          fill
          sizes={wide ? "(min-width: 1120px) 50vw, 100vw" : "(min-width: 1120px) 33vw, 100vw"}
          src={industry.image}
          style={{ objectPosition: industry.objectPosition }}
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h2 className="text-2xl font-bold leading-7 text-(--text-primary)">{industry.name}</h2>
        <p className="mt-3 text-[15px] leading-[1.5] text-(--text-muted)">{industry.description}</p>
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
    </article>
  );
}

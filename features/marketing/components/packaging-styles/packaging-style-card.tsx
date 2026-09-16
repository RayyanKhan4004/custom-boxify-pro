import Link from "next/link";

import type { PackagingStyle } from "@/features/marketing/types";

type PackagingStyleCardProps = {
  style: PackagingStyle;
};

export function PackagingStyleCard({ style }: PackagingStyleCardProps) {
  const quantity = style.minimumOrderQuantity
    ? `Min. ${style.minimumOrderQuantity} Pieces`
    : "Custom quantities";

  return (
    <Link
      className="group block"
      href={`/#quote?style=${encodeURIComponent(style.slug)}`}
    >
      <article>
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-(--surface-card)">
          {style.imageUrl ? (
            // CMS images can be served from the media domain, outside Next Image's configured hosts.
            // eslint-disable-next-line @next/next/no-img-element
            <img alt={`${style.name} packaging`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={style.imageUrl} />
          ) : (
            <div className="h-full w-full bg-(--surface-raised)" />
          )}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-(--text-primary)">{style.name}</h2>
        <p className="mt-2 text-sm text-(--text-muted)">
          {quantity}
          <span className="mx-2 text-(--border-strong)">|</span>{style.deliveryTime}
        </p>
      </article>
    </Link>
  );
}

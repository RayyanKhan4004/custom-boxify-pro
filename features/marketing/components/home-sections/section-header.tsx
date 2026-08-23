import Link from "next/link";

import type { SectionHeaderProps } from "@/features/marketing/types";

export function SectionHeader({ id, kicker, title }: SectionHeaderProps) {
  return (
    <div
      className="mb-8 flex items-end justify-between gap-6 md:mb-12"
      id={id}
    >
      <div className="flex flex-wrap items-end gap-5">
        <h2 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl">
          {title}
        </h2>
        <p className="mb-2 text-sm font-semibold text-(--text-muted)">
          {kicker}
        </p>
      </div>
      <Link
        className="hidden text-sm font-semibold text-(--brand-primary) transition-opacity hover:opacity-80 md:inline-flex"
        href="#quote"
      >
        View All
      </Link>
    </div>
  );
}

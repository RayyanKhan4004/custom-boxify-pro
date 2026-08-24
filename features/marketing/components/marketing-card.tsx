import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type MarketingCardProps = ComponentPropsWithoutRef<"article">;

export function MarketingCard({ className, ...props }: MarketingCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--surface-card) p-4 shadow-(--shadow-card) transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-(--border-strong) hover:shadow-(--shadow-button) sm:p-6",
        className,
      )}
      {...props}
    />
  );
}

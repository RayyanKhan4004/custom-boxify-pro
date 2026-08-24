import { packagingStylePageItems } from "@/features/marketing/constants";

import { PackagingStyleCard } from "./packaging-style-card";

export function PackagingStylesGrid() {
  return (
    <section className="bg-(--surface-page) py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-310 gap-6 px-6 xl:px-0 lg:grid-cols-2">
        {packagingStylePageItems.map((style) => (
          <PackagingStyleCard key={style.name} style={style} />
        ))}
      </div>
    </section>
  );
}

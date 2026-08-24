import { industryPageItems } from "@/features/marketing/constants";

import { IndustryCard } from "./industry-card";

export function IndustriesGrid() {
  return (
    <section className="bg-(--surface-page) py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-310 gap-6 px-6 xl:px-0 lg:grid-cols-6">
        {industryPageItems.map((industry, index) => (
          <IndustryCard
            industry={industry}
            key={industry.name}
            wide={index >= industryPageItems.length - 2}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { useGetIndustries } from "@/features/marketing/services/industries";

import { IndustryCard } from "./industry-card";

export function IndustriesGrid() {
  const [search, setSearch] = useState("");
  const { data: industries = [], isError, isLoading } = useGetIndustries(search);
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    if (isLoading || !smoothScroll) return;

    const animationFrame = requestAnimationFrame(() => smoothScroll.resize());
    return () => cancelAnimationFrame(animationFrame);
  }, [industries, isLoading, smoothScroll]);

  return (
    <section className="bg-(--surface-page) py-16 lg:py-20" id="industries">
      <PageContainer>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-baseline gap-5">
            <h2 className="font-heading text-4xl font-bold text-(--text-primary)">Industries</h2>
            <p className="text-sm text-(--text-muted)">We cover 16+ industries</p>
          </div>
          <label className="relative block w-full sm:w-82.5">
            <MagnifyingGlassIcon aria-hidden className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-(--text-muted)" />
            <span className="sr-only">Search industries</span>
            <input
              className="h-13 w-full rounded-full border border-transparent bg-(--surface-raised) py-3 pr-5 pl-12 text-sm text-(--text-primary) outline-none placeholder:text-(--text-muted) focus:border-(--brand-primary)"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              inputMode="search"
              type="text"
              value={search}
            />
          </label>
        </div>

        {isLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 16 }, (_, index) => <div aria-hidden className="aspect-[349/240] animate-pulse rounded-lg bg-(--surface-raised)" key={index} />)}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard industry={industry} key={industry.slug ?? industry.name} />
            ))}
          </div>
        )}

        {isError && (
          <p className="mt-10 text-center text-(--text-muted)">Industries are unavailable right now. Please try again shortly.</p>
        )}

        {!isLoading && !isError && industries.length === 0 && (
          <p className="mt-10 text-center text-(--text-muted)">No industries match your search.</p>
        )}
      </PageContainer>
    </section>
  );
}

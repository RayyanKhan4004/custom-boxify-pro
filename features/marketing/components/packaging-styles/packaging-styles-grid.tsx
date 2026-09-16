"use client";

import {
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { useGetIndustries } from "@/features/marketing/services/industries";
import { usePackagingStyles } from "@/features/marketing/services/packaging-styles";

import { PackagingStyleCard } from "./packaging-style-card";

export function PackagingStylesGrid() {
  const [search, setSearch] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [pendingIndustries, setPendingIndustries] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { data: industries = [] } = useGetIndustries("");
  const {
    data: styles = [],
    isError,
    isLoading,
  } = usePackagingStyles(search, selectedIndustries);

  const toggleIndustry = (slug: string) =>
    setPendingIndustries((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  useEffect(() => {
    if (!filtersOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFiltersOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [filtersOpen]);

  const openFilters = () => {
    setPendingIndustries(selectedIndustries);
    setFiltersOpen(true);
  };

  const applyFilters = () => {
    setSelectedIndustries(pendingIndustries);
    setFiltersOpen(false);
  };

  const resetFilters = () => {
    setPendingIndustries([]);
    setSelectedIndustries([]);
  };

  return (
    <section className="bg-(--surface-page) py-16 lg:py-20" id="styles">
      <PageContainer>
        <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <h2 className="font-heading text-4xl font-bold leading-none text-(--text-primary)">
              Packaging Styles
            </h2>
            <p className="border-(--border-subtle) text-sm text-(--text-muted) sm:border-l sm:pl-7">
              200+ packaging styles available
            </p>
          </div>
          <div className="flex gap-3">
            <label className="relative block flex-1 md:w-82">
              <MagnifyingGlassIcon
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--text-muted)"
              />
              <span className="sr-only">Search packaging styles</span>
              <input
                className="h-13 w-full rounded-full bg-(--surface-raised) py-3 pl-11 pr-4 text-sm text-(--text-primary) outline-none focus:ring-1 focus:ring-(--brand-primary)"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
              />
            </label>
            <button
              aria-expanded={filtersOpen}
              aria-label="Filter by industry"
              className="grid size-13 place-items-center rounded-full bg-(--surface-raised) text-(--text-primary) hover:text-(--brand-primary)"
              onClick={openFilters}
              type="button"
            >
              <FunnelSimpleIcon size={20} />
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="mt-12 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                className="aspect-[4/3] animate-pulse rounded-xl bg-(--surface-raised)"
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-x-7 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
            {styles.map((style) => (
              <PackagingStyleCard key={style.id} style={style} />
            ))}
          </div>
        )}
        {!isLoading && !isError && styles.length === 0 && (
          <p className="mt-10 text-center text-(--text-muted)">
            No packaging styles match your selection.
          </p>
        )}
        {isError && (
          <p className="mt-10 text-center text-(--text-muted)">
            Packaging styles are unavailable right now. Please try again
            shortly.
          </p>
        )}
      </PageContainer>
      {filtersOpen && (
        <div
          className="fixed inset-0 z-70 flex justify-end bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="packaging-filters-title"
        >
          <div className="flex h-full w-full max-w-[22.625rem] flex-col rounded-l-3xl border-l border-t border-(--brand-primary) bg-(--surface-page) px-10 pb-8 pt-12 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2
                className="font-heading text-4xl font-bold text-(--text-primary)"
                id="packaging-filters-title"
              >
                Filter By Industry
              </h2>
              <button
                aria-label="Close filters"
                className="text-(--text-primary)"
                onClick={() => setFiltersOpen(false)}
                type="button"
              >
                <XIcon size={28} />
              </button>
            </div>
            <div className="mt-10 flex-1 space-y-5 overflow-y-auto">
              {industries.map((industry) => (
                <label
                  className="flex cursor-pointer items-center gap-3 text-base text-(--text-primary)"
                  key={industry.slug}
                >
                  <input
                    checked={pendingIndustries.includes(industry.slug ?? "")}
                  className="size-10 rounded-lg border-2 border-(--text-primary) accent-(--brand-primary)"
                    onChange={() => toggleIndustry(industry.slug ?? "")}
                    type="checkbox"
                  />
                  {industry.name}
                </label>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                className="h-13 rounded-lg bg-(--brand-primary) font-semibold text-(--brand-on-primary)"
                onClick={applyFilters}
                type="button"
              >
                Apply
              </button>
              <button
                className="h-13 rounded-lg border border-(--border-strong) text-(--brand-primary)"
                onClick={resetFilters}
                type="button"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

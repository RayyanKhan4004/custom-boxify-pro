"use client";

import {
  CheckIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { FilterDropdown } from "@/components/ui/filter-dropdown";
import { useGetIndustries } from "@/features/marketing/services/industries";

import { IndustryCard } from "./industry-card";

export function IndustriesGrid() {
  const smoothScroll = useSmoothScroll();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const industriesParameter = searchParams.get("industries") ?? "";
  const selectedIndustries = useMemo(
    () => industriesParameter.split(",").filter(Boolean),
    [industriesParameter],
  );
  const [pendingIndustries, setPendingIndustries] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterSearch, setFilterSearch] = useState("");
  const {
    data: industries = [],
    isError,
    isLoading,
  } = useGetIndustries(search);
  const { data: allIndustries = [] } = useGetIndustries("");
  const filterIndustries = useMemo(
    () =>
      Array.from(
        new Map(
          allIndustries
            .filter((industry) => industry.slug)
            .map((industry) => [industry.slug, industry]),
        ).values(),
      ),
    [allIndustries],
  );
  const visibleFilterIndustries = useMemo(() => {
    const query = filterSearch.trim().toLocaleLowerCase();
    if (!query) return filterIndustries;
    return filterIndustries.filter((industry) =>
      industry.name.toLocaleLowerCase().includes(query),
    );
  }, [filterIndustries, filterSearch]);
  const visibleIndustries = useMemo(
    () =>
      selectedIndustries.length
        ? industries.filter(
            (industry) =>
              industry.slug && selectedIndustries.includes(industry.slug),
          )
        : industries,
    [industries, selectedIndustries],
  );

  const updateSearchParameters = (
    updates: Record<string, string | undefined>,
    method: "push" | "replace" = "push",
  ) => {
    const parameters = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) parameters.set(key, value);
      else parameters.delete(key);
    });
    const query = parameters.toString();
    window.history[`${method}State`](
      null,
      "",
      query ? `${pathname}?${query}` : pathname,
    );
  };

  const toggleIndustry = (slug: string) =>
    setPendingIndustries((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );

  const openFilters = () => {
    if (filtersOpen) {
      setFiltersOpen(false);
      setFilterSearch("");
      return;
    }
    setPendingIndustries(selectedIndustries);
    setFilterSearch("");
    setFiltersOpen(true);
  };

  const closeFilters = () => {
    setFiltersOpen(false);
    setFilterSearch("");
  };

  const applyFilters = () => {
    updateSearchParameters({
      industries: pendingIndustries.length
        ? pendingIndustries.join(",")
        : undefined,
    });
    closeFilters();
  };

  const resetFilters = () => {
    setPendingIndustries([]);
    updateSearchParameters({ industries: undefined });
  };

  const removeIndustry = (slug: string) => {
    const nextIndustries = selectedIndustries.filter((item) => item !== slug);
    setPendingIndustries(nextIndustries);
    updateSearchParameters({
      industries: nextIndustries.length ? nextIndustries.join(",") : undefined,
    });
  };

  useEffect(() => {
    if (isLoading || !smoothScroll) return;

    const animationFrame = requestAnimationFrame(() => smoothScroll.resize());
    return () => cancelAnimationFrame(animationFrame);
  }, [industries, isLoading, smoothScroll]);

  return (
    <section className="bg-(--surface-page) py-16 lg:py-20" id="industries">
      <PageContainer>
        <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <h2 className="font-heading text-4xl font-bold leading-none text-(--text-primary)">
              Industries
            </h2>
            <p className="border-(--border-subtle) text-sm text-(--text-muted) sm:border-l sm:pl-7">
              We cover 16+ industries
            </p>
          </div>
          <div className="flex gap-3">
            <label className="relative block flex-1 md:w-82">
              <MagnifyingGlassIcon
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--text-muted)"
              />
              <span className="sr-only">Search industries</span>
              <input
                className="h-13 w-full rounded-full bg-(--surface-raised) py-3 pl-11 pr-4 text-sm text-(--text-primary) outline-none focus:ring-1 focus:ring-(--brand-primary)"
                value={search}
                onChange={(event) =>
                  updateSearchParameters(
                    { search: event.target.value || undefined },
                    "replace",
                  )
                }
                placeholder="Search"
              />
            </label>
            <div className="relative">
              <FilterDropdown
                title="Filter By Industry"
                selectedCount={selectedIndustries.length}
                isOpen={filtersOpen}
                onOpen={openFilters}
                onClose={closeFilters}
                onSearchChange={setFilterSearch}
                searchPlaceholder="Search industries"
                searchValue={filterSearch}
                footer={
                  <>
                    <button
                      className="h-12 rounded-lg bg-(--brand-primary) font-semibold text-(--brand-on-primary)"
                      onClick={applyFilters}
                      type="button"
                    >
                      Apply
                    </button>
                    <button
                      className="h-12 rounded-lg border border-(--border-strong) font-semibold text-(--brand-primary)"
                      onClick={resetFilters}
                      type="button"
                    >
                      Reset Filters
                    </button>
                  </>
                }
              >
                <h3 className="bg-(--surface-raised) px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-(--brand-primary)">
                  Industry
                </h3>
                <div className="py-1">
                  {visibleFilterIndustries.map((industry) => (
                    <label
                      className="group relative flex min-h-12 cursor-pointer items-center gap-3 px-5 text-base text-(--text-primary) transition-colors hover:bg-(--surface-raised)"
                      key={industry.slug}
                    >
                      <input
                        checked={pendingIndustries.includes(
                          industry.slug ?? "",
                        )}
                        className="peer absolute left-5 top-1/2 size-6 -translate-y-1/2 cursor-pointer opacity-0"
                        onChange={() =>
                          toggleIndustry(industry.slug ?? "")
                        }
                        type="checkbox"
                      />
                      <span className="grid size-6 shrink-0 place-items-center rounded-md border-2 border-(--border-strong) bg-transparent text-transparent transition-colors peer-checked:border-(--brand-primary) peer-checked:bg-(--brand-primary) peer-checked:text-(--brand-on-primary) peer-focus-visible:ring-2 peer-focus-visible:ring-(--brand-primary) peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-(--surface-page)">
                        <CheckIcon aria-hidden size={15} weight="bold" />
                      </span>
                      {industry.name}
                    </label>
                  ))}
                  {visibleFilterIndustries.length === 0 && (
                    <p className="px-5 py-8 text-center text-sm text-(--text-muted)">
                      No industries match your search.
                    </p>
                  )}
                </div>
              </FilterDropdown>
            </div>
          </div>
        </div>
        {selectedIndustries.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Applied filters">
            {selectedIndustries.map((slug) => {
              const label =
                filterIndustries.find((industry) => industry.slug === slug)
                  ?.name ?? slug;
              return (
                <span
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface-raised) px-3 text-sm text-(--text-primary)"
                  key={slug}
                >
                  <FunnelSimpleIcon
                    aria-hidden
                    className="text-(--brand-primary)"
                    size={15}
                  />
                  {label}
                  <button
                    aria-label={`Remove ${label} filter`}
                    className="grid size-5 place-items-center rounded-full text-(--text-muted) transition-colors hover:bg-(--surface-page) hover:text-(--text-primary)"
                    onClick={() => removeIndustry(slug)}
                    type="button"
                  >
                    <XIcon aria-hidden size={13} />
                  </button>
                </span>
              );
            })}
          </div>
        )}

        {isLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 16 }, (_, index) => (
              <div
                aria-hidden
                className="aspect-[349/240] animate-pulse rounded-lg bg-(--surface-raised)"
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleIndustries.map((industry) => (
              <IndustryCard
                industry={industry}
                key={industry.slug ?? industry.name}
              />
            ))}
          </div>
        )}

        {isError && (
          <p className="mt-10 text-center text-(--text-muted)">
            Industries are unavailable right now. Please try again shortly.
          </p>
        )}

        {!isLoading && !isError && visibleIndustries.length === 0 && (
          <p className="mt-10 text-center text-(--text-muted)">
            No industries match your search.
          </p>
        )}
      </PageContainer>
    </section>
  );
}

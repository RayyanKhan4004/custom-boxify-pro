import { PageContainer } from "@/components/layout/page-container";

export function IndustriesHero() {
  return (
    <section className="border-b border-(--border-subtle) bg-(--surface-page) py-20 lg:h-136.5 lg:py-30">
      <PageContainer className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <p className="inline-flex h-7 items-center rounded-full border border-(--brand-primary) px-4 text-xs font-semibold uppercase leading-none text-(--brand-primary) py-1.5">
          Industries We Elevate
        </p>

        <div className="flex max-w-225 flex-col items-center gap-5">
          <h1 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl lg:text-hero-heading">
            <span className="block">Precision Packaging For</span>
            <span className="block text-(--brand-primary)">Every Sector</span>
          </h1>
          <p className="max-w-162.5 text-base leading-7 text-(--text-muted) md:text-lg">
            Custom Boxify Pro engineers bespoke structural solutions designed to
            protect your product, convey luxury, and convert first-time buyers
            into lifetime loyalists.
          </p>
        </div>

        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="h-px w-15 bg-(--border-subtle)" />
          <span className="size-2 rounded-full bg-(--brand-primary)" />
          <span className="h-px w-15 bg-(--border-subtle)" />
        </div>
      </PageContainer>
    </section>
  );
}

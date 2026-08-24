import { PageContainer } from "@/components/layout/page-container";

type MarketingPageHeroProps = {
  accentTitle?: string;
  accentTitleOnNewLine?: boolean;
  badge: string;
  description: string;
  tall?: boolean;
  title: string;
};

export function MarketingPageHero({
  accentTitle,
  accentTitleOnNewLine = false,
  badge,
  description,
  tall = false,
  title,
}: MarketingPageHeroProps) {
  return (
    <section className={`border-b border-(--border-subtle) bg-(--surface-page) py-20 lg:py-30 ${tall ? "lg:h-136.5" : "lg:h-119"}`}>
      <PageContainer className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <p className="inline-flex min-h-7 items-center rounded-full border border-(--brand-primary) px-4 py-1.5 text-xs font-semibold uppercase leading-none text-(--brand-primary)">
          {badge}
        </p>

        <div className={`flex flex-col items-center gap-5 ${tall ? "max-w-225" : "max-w-237.5"}`}>
          <h1 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl lg:text-hero-heading">
            {title}
            {accentTitle && (
              <span className={accentTitleOnNewLine ? "block text-(--brand-primary)" : "text-(--brand-primary)"}>
                {!accentTitleOnNewLine && " "}
                {accentTitle}
              </span>
            )}
          </h1>
          <p className={`text-base leading-7 text-(--text-muted) md:text-lg ${tall ? "max-w-162.5" : "max-w-175"}`}>
            {description}
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

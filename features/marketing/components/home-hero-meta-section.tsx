import { PageContainer } from "@/components/layout/page-container";

const heroStats = [
  { label: "Customers", value: "500+" },
  { label: "Customer Satisfaction", value: "99%" },
] as const;

function FedExLogo() {
  return (
    <svg
      aria-label="FedEx"
      className="h-7 w-24 text-(--text-primary)"
      role="img"
      viewBox="0 0 120 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-2"
        x="0"
        y="25"
      >
        FedEx
      </text>
    </svg>
  );
}

function DhlLogo() {
  return (
    <svg
      aria-label="DHL"
      className="h-7 w-42 text-(--text-primary)"
      role="img"
      viewBox="0 0 180 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8H38V10H0V8Z" fill="currentColor" />
      <path d="M0 16H34V18H0V16Z" fill="currentColor" />
      <path d="M0 24H38V26H0V24Z" fill="currentColor" />
      <text
        fill="currentColor"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="28"
        fontStyle="italic"
        fontWeight="900"
        letterSpacing="-2"
        x="42"
        y="25"
      >
        DHL
      </text>
      <path d="M111 8H180V10H111V8Z" fill="currentColor" />
      <path d="M104 16H180V18H104V16Z" fill="currentColor" />
      <path d="M111 24H180V26H111V24Z" fill="currentColor" />
    </svg>
  );
}

export function HomeHeroMetaSection() {
  return (
    <section className="bg-(--surface-page) py-8">
      <PageContainer className="flex flex-col gap-8 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
        <div className="flex flex-wrap items-end gap-10 min-[900px]:gap-16">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold leading-none text-(--text-primary)">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold text-(--text-muted)">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 min-[760px]:gap-8">
          <p className="border-l border-(--border-subtle) pl-7 text-sm font-medium text-(--text-muted) min-[760px]:pl-10 min-[760px]:text-base">
            Our logistics Partners
          </p>
          <div className="flex items-center gap-6 min-[760px]:gap-8">
            <FedExLogo />
            <DhlLogo />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

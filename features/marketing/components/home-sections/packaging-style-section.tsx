import { PageContainer } from "@/components/layout/page-container";
import { packagingStyles } from "@/features/marketing/constants";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

function PackagingHeader() {
  return (
    <div
      className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-center lg:justify-between"
      id="packaging-style"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
        <h2 className="font-heading text-5xl font-bold leading-18 text-(--text-primary) lg:text-6xl">
          Packaging Style
        </h2>
        <div className="hidden h-18 w-px rounded-[1px] bg-(--border-subtle) md:block" />
        <p className="text-base leading-6 text-(--text-primary) lg:text-xl">
          200+ packaging styles available
        </p>
      </div>

      <Link
        className="inline-flex items-center gap-3 self-start text-base font-medium text-(--brand-primary) transition-opacity hover:opacity-80 lg:self-center"
        href="#quote"
      >
        View All
        <ArrowRightIcon aria-hidden="true" className="size-6" />
      </Link>
    </div>
  );
}

export function PackagingStyleSection() {
  return (
    <section className="bg-(--surface-page) py-20 lg:py-24">
      <PageContainer>
        <PackagingHeader />

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {packagingStyles.map((style) => (
            <article key={style}>
              <Link
                aria-label={`Get a quote for ${style}`}
                className="group block"
                href="#quote"
              >
                <div className="relative aspect-312/221 overflow-hidden rounded-xl bg-(--surface-card)">
                  <Image
                    alt={`${style} packaging sample`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={1470}
                    sizes="(min-width: 70rem) 19.5rem, (min-width: 40rem) calc((100vw - 4.5rem) / 2), calc(100vw - 3rem)"
                    src="/boxes/box-1-upper.webp"
                    width={1568}
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-7.5 text-(--text-primary)">
                  {style}
                </h3>
                <span className="mt-2 inline-flex text-base leading-6 text-(--text-primary) transition-colors group-hover:text-(--brand-primary)">
                  Get A Quote
                </span>
              </Link>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

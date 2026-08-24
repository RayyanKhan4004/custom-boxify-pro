import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function PackagingStylesCta() {
  return (
    <section className="border-t border-(--border-subtle) bg-(--surface-page) py-24 lg:py-30">
      <PageContainer className="flex flex-col items-center text-center">
        <span aria-hidden className="size-3 rounded-full bg-(--brand-primary)" />
        <div className="mt-8 max-w-200">
          <h2 className="text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl">
            Ready To Design Your
            <span className="block text-(--brand-primary)">Custom Solution?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-137.5 text-base leading-[1.6] text-(--text-muted)">
            Let&apos;s translate your product dimensions and brand narrative into perfect structural box geometry. Get custom prototypes and rapid quoting in under 6 minutes.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button nativeButton={false} render={<Link href="/#quote" />} size="cta" variant="marketingPrimary">
            Get A Free Quote
            <ArrowRightIcon aria-hidden weight="bold" />
          </Button>
          <Button
            nativeButton={false}
            render={<a href="https://wa.me/923366704385?text=Hello%20there!" />}
            size="cta"
            variant="marketingOutline"
          >
            Request Sample Kit
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}

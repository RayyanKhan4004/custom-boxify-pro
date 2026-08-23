import { PageContainer } from "@/components/layout/page-container";
import Image from "next/image";
import type { ReactNode } from "react";

type CustomHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions: ReactNode;
};

export function CustomHero({
  eyebrow,
  title,
  description,
  actions,
}: CustomHeroProps) {
  return (
    <main className="relative min-h-270 overflow-hidden bg-(--surface-page) xl:h-200 xl:min-h-0">
      <PageContainer className="relative h-full overflow-hidden py-14 sm:py-16 xl:py-0">
        <div className="relative z-10 flex max-w-132 flex-col xl:absolute xl:top-37.5">
          <p className="mb-6 text-xs tracking-[0.15em] text-(--brand-primary) sm:mb-8">
            {eyebrow}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-none tracking-tight text-(--text-primary) xs:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-(--text-muted) sm:mt-9 sm:text-lg">
            {description}
          </p>

          {actions}
        </div>

        <div
          aria-hidden="true"
          className="relative mt-10 h-107.5 w-full sm:mx-auto sm:h-117.5 sm:max-w-170 xl:absolute xl:inset-0 xl:mt-0 xl:h-auto xl:max-w-none"
        >
          <div className="hero-box-glow absolute left-1/2 top-1/2 h-56 w-72 rounded-full bg-(--brand-primary)/10 blur-3xl xl:left-[72%] xl:top-[48%] xl:h-80 xl:w-96" />

          <div className="absolute left-1/2 top-0 z-[10] w-105 max-w-[92vw] -translate-x-1/2 xl:left-[46%] xl:top-20 xl:w-162.5 xl:max-w-none xl:translate-x-0 2xl:left-175">
            <div className="hero-box-float">
              <Image
                alt=""
                className="h-auto w-full transition-transform duration-700 ease-out hover:-translate-y-2.5 motion-reduce:transition-none"
                height={1470}
                priority
                sizes="(min-width: 1120px) 650px, 92vw"
                src="/boxes/box-1-upper.webp"
                width={1568}
              />
            </div>
          </div>

          <Image
            alt=""
            className="hero-box-drift-slow absolute -right-36 top-4 z-[1] h-auto w-72 opacity-50 sm:-right-24 sm:w-80 xl:-right-95 xl:-top-5 xl:w-162.5 xl:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 320px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
          <Image
            alt=""
            className="hero-box-drift absolute -left-40 top-48 z-[2] h-auto w-80 opacity-60 sm:-left-24 sm:top-52 sm:w-96 xl:left-auto xl:-right-32.5 xl:top-50 xl:w-162.5 xl:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 384px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
          <Image
            alt=""
            className="hero-box-drift-reverse absolute -right-36 top-64 z-[3] h-auto w-80 opacity-70 sm:-right-20 sm:top-72 sm:w-96 xl:left-175 xl:right-auto xl:top-135 xl:w-162.5 xl:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 384px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
        </div>
      </PageContainer>
    </main>
  );
}

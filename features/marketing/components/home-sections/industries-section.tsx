"use client";

import { PageContainer } from "@/components/layout/page-container";
import { industries, industryHeightByDistance } from "@/features/marketing/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionHeader } from "./section-header";

export function IndustriesSection() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(3);
  const activateIndustry = (index: number) => {
    setActiveIndustryIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index,
    );
  };

  return (
    <section className="bg-(--surface-page) py-16">
      <PageContainer>
        <SectionHeader
          id="industries"
          kicker="We cover 16+ industries"
          title="Industries"
        />

        <div className="flex h-[600px] w-full items-center gap-6 overflow-hidden">
          {industries.map((industry, index) => {
            const distanceFromActive = Math.abs(index - activeIndustryIndex);

            const distanceState = Math.min(distanceFromActive, 3) as
              | 0
              | 1
              | 2
              | 3;

            const isActive = index === activeIndustryIndex;

            const heightClass = industryHeightByDistance[distanceState];

            return (
              <Link
                key={industry.name}
                href="#quote"
                aria-label={`Explore ${industry.name} packaging`}
                onMouseEnter={() => activateIndustry(index)}
                onFocusCapture={() => activateIndustry(index)}
                className={`
        relative
        shrink-0
        overflow-hidden
        bg-(--surface-card)
        shadow-[0_20px_40px_rgba(0,0,0,0.15)]

        ${heightClass}
        ${isActive ? "w-[648px] rounded-xl" : "w-[88px] rounded-lg"}

        transition-[width,height,border-radius]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
      `}
              >
                {/* IMAGE */}
                <Image
                  src={industry.image}
                  alt={`${industry.name} packaging`}
                  fill
                  style={{
                    objectPosition: industry.objectPosition,
                  }}
                  className="
          object-cover
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
                />

                {/* OVERLAY */}
                <div
                  className={`
          pointer-events-none
          absolute
          inset-0
          transition-colors
          duration-700

          ${
            isActive
              ? "bg-black/10"
              : distanceState === 1
                ? "bg-black/20"
                : distanceState === 2
                  ? "bg-black/30"
                  : "bg-black/50"
          }
        `}
                />

                {/* ACTIVE BOTTOM GRADIENT */}
                <div
                  className={`
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/5
          to-transparent

          transition-opacity
          duration-500

          ${isActive ? "opacity-100" : "opacity-0"}
        `}
                />

                {/* 
          SAME TITLE:
          vertical -> diagonal -> horizontal
          center -> bottom-left
      */}
                <h3
                  className={`
          pointer-events-none
          absolute
          z-20

          whitespace-nowrap
          text-[32px]
          font-bold
          text-white

          transition-[top,left,transform,letter-spacing]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isActive
              ? `
                left-8
                top-[calc(100%-112px)]
                translate-x-0
                translate-y-0
                rotate-0
                tracking-[0.02em]
              `
              : `
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                -rotate-90
                tracking-[0.57em]
                uppercase
              `
          }
        `}
                >
                  {industry.name}
                </h3>

                {/* DESCRIPTION ONLY APPEARS AFTER TITLE MOVES DOWN */}
                <p
                  className={`
          pointer-events-none
          absolute
          bottom-8
          left-8
          z-20

          whitespace-nowrap
          text-[16px]
          font-normal
          leading-6
          tracking-[0.03em]
          text-white

          transition-[opacity,transform]
          duration-400
          ease-out

          ${
            isActive
              ? "translate-y-0 opacity-100 delay-300"
              : "translate-y-4 opacity-0 delay-0"
          }
        `}
                >
                  {industry.description}
                </p>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

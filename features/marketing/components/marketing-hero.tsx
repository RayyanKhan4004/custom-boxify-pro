"use client";

import {
  FacebookNegativeIcon,
  InstagramNegativeIcon,
  LinkedInNegativeIcon,
} from "@/components/icons";
import { CustomHero } from "@/features/marketing/components/custom-hero";
import { MarketingCountdown } from "@/features/marketing/components/marketing-countdown";
import Link from "next/link";
import { defaultHomePageContent, useHomePageContent } from "@/features/marketing/services/home-page";

const socialLinks = [
  { Icon: FacebookNegativeIcon, label: "Facebook" },
  { Icon: InstagramNegativeIcon, label: "Instagram" },
  { Icon: LinkedInNegativeIcon, label: "LinkedIn" },
] as const;

type MarketingHeroVariant = "home" | "countdown";

type MarketingHeroProps = {
  variant?: MarketingHeroVariant;
};

function HomeActions() {
  const { data = defaultHomePageContent } = useHomePageContent();
  return (
    <div className="mt-7 flex flex-wrap gap-4 sm:mt-9">
      <Link
        className="inline-flex h-12 items-center justify-center rounded-[6px] border border-(--border-strong) px-6 text-sm font-semibold text-(--brand-primary) transition-colors hover:bg-(--surface-muted)"
        href={data.primaryCtaHref}
      >
        {data.primaryCtaLabel}
      </Link>
      <Link
        className="inline-flex h-12 items-center justify-center rounded-[6px] bg-(--brand-primary) px-6 text-sm font-semibold text-(--brand-on-primary) transition-opacity hover:opacity-85"
        href={data.secondaryCtaHref}
      >
        {data.secondaryCtaLabel}
      </Link>
    </div>
  );
}

function CountdownActions({ targetDate }: { targetDate?: string }) {
  return (
    <>
      <MarketingCountdown targetDate={targetDate} />

      <div className="mt-8 sm:mt-12">
        <p className="text-base text-(--text-muted) sm:text-lg">
          Follow US
        </p>
        <div className="mt-3 flex gap-6 sm:mt-4">
          {socialLinks.map(({ Icon, label }) => (
            <Link
              aria-label={label}
              className="flex size-8 items-center justify-center text-(--text-primary) transition-all duration-500 hover:scale-110 hover:text-(--brand-primary)"
              href="#"
              key={label}
            >
              <Icon className="size-7 overflow-visible sm:size-8" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export function MarketingHero({ variant = "countdown" }: MarketingHeroProps) {
  const { data = defaultHomePageContent } = useHomePageContent();
  if (variant === "home") {
    return (
      <CustomHero
        actions={<HomeActions />}
        description={data.description}
        eyebrow={data.eyebrow}
        title={<>{data.title} <span className="text-(--brand-primary)">{data.titleAccent}</span></>}
      />
    );
  }
  return (
    <CustomHero
      actions={<CountdownActions targetDate={data.countdownTargetDate} />}
      description="We're crafting a better experience for you. Our new website is launching soon."
      eyebrow="Something Exciting On its Way"
      title={<>Coming <span className="text-(--brand-primary)">Soon</span></>}
    />
  );
}

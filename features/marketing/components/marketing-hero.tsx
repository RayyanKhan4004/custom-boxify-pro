import {
  FacebookNegativeIcon,
  InstagramNegativeIcon,
  LinkedInNegativeIcon,
} from "@/components/icons";
import { CustomHero } from "@/features/marketing/components/custom-hero";
import { MarketingCountdown } from "@/features/marketing/components/marketing-countdown";
import Link from "next/link";
import type { ReactNode } from "react";

const socialLinks = [
  { Icon: FacebookNegativeIcon, label: "Facebook" },
  { Icon: InstagramNegativeIcon, label: "Instagram" },
  { Icon: LinkedInNegativeIcon, label: "LinkedIn" },
] as const;

type MarketingHeroVariant = "home" | "countdown";

type HeroContent = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions: ReactNode;
};

type MarketingHeroProps = {
  variant?: MarketingHeroVariant;
};

function HomeActions() {
  return (
    <div className="mt-7 flex flex-wrap gap-4 sm:mt-9">
      <Link
        className="inline-flex h-12 items-center justify-center rounded-[6px] border border-(--border-strong) px-6 text-sm font-semibold text-(--brand-primary) transition-colors hover:bg-(--surface-muted)"
        href="#packaging-style"
      >
        Explore Packaging
      </Link>
      <Link
        className="inline-flex h-12 items-center justify-center rounded-[6px] bg-(--brand-primary) px-6 text-sm font-semibold text-(--brand-on-primary) transition-opacity hover:opacity-85"
        href="#quote"
      >
        Contact Now
      </Link>
    </div>
  );
}

function CountdownActions() {
  return (
    <>
      <MarketingCountdown />

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

const heroContentByVariant: Record<MarketingHeroVariant, HeroContent> = {
  home: {
    eyebrow: "CUSTOM PACKAGING, ENGINEERED",
    title: (
      <>
        Every Brand Deserves A Box{" "}
        <span className="text-(--brand-primary)">Worth Opening.</span>
      </>
    ),
    description:
      "Custom Boxify Pro is a faster way to design, quote, and produce custom packaging from first sketch to finished carton.",
    actions: <HomeActions />,
  },
  countdown: {
    eyebrow: "Something Exciting On its Way",
    title: (
      <>
        Coming <span className="text-(--brand-primary)">Soon</span>
      </>
    ),
    description:
      "We're crafting a better experience for you. Our new website is launching soon.",
    actions: <CountdownActions />,
  },
};

export function MarketingHero({ variant = "countdown" }: MarketingHeroProps) {
  return <CustomHero {...heroContentByVariant[variant]} />;
}

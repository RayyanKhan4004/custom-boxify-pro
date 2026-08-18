"use client";

import {
  BrandLogoMark,
  FacebookNegativeIcon,
  InstagramNegativeIcon,
  LinkedInNegativeIcon,
} from "@/components/icons";
import { PageContainer } from "@/components/layout/page-container";
import { Input } from "@/components/ui/input";
import { Select, type SelectOption } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRightIcon,
  FileTextIcon,
  PackageIcon,
  PaintBrushIcon,
  UploadSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useState } from "react";
import styles from "./process-section.module.css";

const packagingStyles = [
  "Double Wall Coffee Cups",
  "Cigarette Boxes",
  "Cosmetic Boxes",
  "Eco Friendly Boxes",
  "Solid Gift Boxes",
  "Candle Shipping Box",
  "Double Wall Cups",
  "Tuck Boxes",
] as const;

const industries = [
  {
    name: "Shampoo",
    image: "/bg/industries/shampo-bg.png",
    description: "Custom shampoo and personal care packaging",
    objectPosition: "48% center",
  },
  {
    name: "Food",
    image: "/bg/industries/food-bg.png",
    description: "Food packaging made to protect every bite",
    objectPosition: "52% center",
  },
  {
    name: "Gift",
    image: "/bg/industries/gifting-bg.png",
    description: "Memorable gift packaging for every occasion",
    objectPosition: "50% center",
  },
  {
    name: "Cafe",
    image: "/bg/industries/cofee-bg.png",
    description: "All types of custom coffee and tea cups",
    objectPosition: "52% center",
  },
  {
    name: "Bakery",
    image: "/bg/industries/bakery-bg.png",
    description: "Fresh bakery packaging made to stand out",
    objectPosition: "50% center",
  },
  {
    name: "Cosmetics",
    image: "/bg/industries/cosmetics-bg.png",
    description: "Premium cosmetic packaging for your brand",
    objectPosition: "48% center",
  },
  {
    name: "Jewelry",
    image: "/bg/industries/jewelry-bg.png",
    description: "Elegant packaging for fine jewelry",
    objectPosition: "52% center",
  },
] as const;

const industryFlexByDistance = {
  0: 4.6,
  1: 1.9,
  2: 1.4,
  3: 1,
} as const;

const industryOverlayByDistance = {
  0: "bg-(--surface-page)/20",
  1: "bg-(--surface-page)/30",
  2: "bg-(--surface-page)/38",
  3: "bg-(--surface-page)/46",
} as const;

const steps = [
  {
    icon: FileTextIcon,
    title: "Request a Quote",
    description:
      "Tell us your packaging requirements, dimensions, quantity, and design preferences to receive a free custom quote.",
  },
  {
    icon: PaintBrushIcon,
    title: "Approve Your Design",
    description:
      "Our experts create a custom box design for your approval before production begins.",
  },
  {
    icon: PackageIcon,
    title: "We Print & Deliver",
    description:
      "Once approved, we print your custom packaging boxes and deliver them safely to your doorstep.",
  },
] as const;

const footerColumns = [
  {
    title: "Site",
    links: ["Packaging Style", "Industries", "Expert"],
  },
  {
    title: "Company",
    links: ["About", "How It Works", "Contact"],
  },
  {
    title: "Help",
    links: ["FAQs", "Privacy Policy", "Terms & Conditions"],
  },
] as const;

const packagingStyleOptions: SelectOption[] = [
  { value: "mailer-box", label: "Mailer Box" },
  { value: "tuck-box", label: "Tuck Box" },
  { value: "rigid-box", label: "Rigid Box" },
  { value: "display-box", label: "Display Box" },
];

const materialOptions: SelectOption[] = [
  { value: "kraft", label: "Kraft Paper" },
  { value: "cardstock", label: "Cardstock" },
  { value: "corrugated", label: "Corrugated Board" },
  { value: "rigid-board", label: "Rigid Board" },
];

const quantityOptions: SelectOption[] = [
  { value: "100", label: "100" },
  { value: "250", label: "250" },
  { value: "500", label: "500" },
  { value: "1000", label: "1,000" },
];

const dimensionOptions: SelectOption[] = [
  { value: "2", label: "2 in" },
  { value: "4", label: "4 in" },
  { value: "6", label: "6 in" },
  { value: "8", label: "8 in" },
];
const industryHeightByDistance = {
  0: "h-full", 
  1: "h-[90%]",
  2: "h-[80%]",
  3: "h-[70%]",
} as const;
type BoxArtworkProps = {
  alt: string;
  className: string;
  sizes: string;
};

function BoxArtwork({ alt, className, sizes }: BoxArtworkProps) {
  return (
    <Image
      alt={alt}
      className={className}
      height={1470}
      sizes={sizes}
      src="/boxes/box-1-upper.webp"
      width={1568}
    />
  );
}

function SectionHeader({
  id,
  kicker,
  title,
}: {
  id: string;
  kicker: string;
  title: string;
}) {
  return (
    <div
      className="mb-8 flex items-end justify-between gap-6 min-[760px]:mb-12"
      id={id}
    >
      <div className="flex flex-wrap items-end gap-5">
        <h2 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) min-[760px]:text-5xl">
          {title}
        </h2>
        <p className="mb-2 text-sm font-semibold text-(--text-muted)">
          {kicker}
        </p>
      </div>
      <Link
        className="hidden text-sm font-semibold text-(--brand-primary) transition-opacity hover:opacity-80 min-[760px]:inline-flex"
        href="#quote"
      >
        View All
      </Link>
    </div>
  );
}

function PackagingHeader() {
  return (
    <div
      className="mb-12 flex flex-col gap-6 min-[900px]:mb-16 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between"
      id="packaging-style"
    >
      <div className="flex flex-col gap-5 min-[760px]:flex-row min-[760px]:items-center min-[760px]:gap-8">
        <h2 className="font-heading text-5xl font-bold leading-tight text-(--text-primary) min-[900px]:text-6xl">
          Packaging Style
        </h2>
        <div className="hidden h-18 w-px rounded-[1px] bg-(--border-subtle) min-[760px]:block" />
        <p className="text-base leading-6 text-(--text-primary) min-[900px]:text-xl">
          200+ packaging styles available
        </p>
      </div>

      <Link
        className="inline-flex items-center gap-3 self-start text-base font-medium text-(--brand-primary) transition-opacity hover:opacity-80 min-[900px]:self-center"
        href="#quote"
      >
        View All
        <ArrowRightIcon aria-hidden="true" className="size-6" />
      </Link>
    </div>
  );
}

function PackagingStyleSection() {
  return (
    <section className="bg-(--surface-page) py-20 min-[900px]:py-24">
      <PageContainer>
        <PackagingHeader />

        <div className="grid gap-x-6 gap-y-10 min-[640px]:grid-cols-2 min-[1120px]:grid-cols-4">
          {packagingStyles.map((style, index) => (
            <article
              className="rounded-xl bg-(--surface-page) p-2"
              key={`${style}-${index}`}
            >
              <div className="relative aspect-296/221 overflow-hidden rounded-xl bg-(--surface-card)">
                <BoxArtwork
                  alt={`${style} packaging sample`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(min-width: 1120px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-8 text-(--text-primary)">
                {style}
              </h3>
              <Link
                className="mt-2 inline-flex text-xl leading-7 text-(--text-primary) transition-colors hover:text-(--brand-primary)"
                href="#quote"
              >
                Get A Quote
              </Link>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-(--surface-page) py-20 min-[900px]:py-24">
      <PageContainer>
        <h2 className="font-heading text-4xl font-bold leading-tight text-(--text-primary) min-[760px]:text-5xl">
          Order Custom Packaging in 3 Simple Steps
        </h2>

        <div className="mt-10 grid items-center gap-8 min-[1120px]:grid-cols-[minmax(22rem,26.5rem)_minmax(12rem,20rem)_minmax(28rem,1fr)] min-[1120px]:gap-0">
          <div className="grid gap-5">
            {steps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  className="min-h-58.5 rounded-xl bg-(--surface-card) px-6 py-10"
                  key={step.title}
                >
                  <div className="mb-6 flex size-12.5 items-center justify-center rounded-lg bg-(--surface-muted) text-(--text-primary)">
                    <StepIcon aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="text-base font-semibold leading-6 text-(--text-primary)">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-5.5 text-(--text-muted)">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <svg
            aria-hidden="true"
            className={styles.desktopConnector}
            preserveAspectRatio="none"
            viewBox="0 0 300 560"
          >
            <defs>
              <linearGradient
                id="connector-pulse-tail"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0"
                />
                <stop
                  offset="0.42"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0.48"
                />
                <stop
                  offset="0.78"
                  stopColor="var(--text-primary)"
                  stopOpacity="0.96"
                />
                <stop
                  offset="1"
                  stopColor="var(--text-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="connector-pulse-core"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stopColor="var(--brand-primary)"
                  stopOpacity="0"
                />
                <stop
                  offset="0.55"
                  stopColor="var(--text-primary)"
                  stopOpacity="0.96"
                />
                <stop
                  offset="1"
                  stopColor="var(--text-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              className={styles.connectorTrack}
              d="M0 90 H128 Q148 90 148 110 V280"
            />
            <path className={styles.connectorTrack} d="M0 280 H148" />
            <path
              className={styles.connectorTrack}
              d="M0 470 H128 Q148 470 148 450 V280"
            />
            <path className={styles.connectorTrack} d="M148 280 H320" />
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 90 H128 Q148 90 148 110 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 90 H128 Q148 90 148 110 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 280 H148"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 280 H148"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorSourcePulse}>
              <ellipse
                className={styles.connectorPulseNodeTail}
                rx="10"
                ry="3.25"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 470 H128 Q148 470 148 450 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorPulseNodeCore}
                rx="4.5"
                ry="1.5"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.03;0.312;1"
                  path="M0 470 H128 Q148 470 148 450 V280"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <g className={styles.connectorMergedPulse}>
              <ellipse
                className={styles.connectorMergedNodeTail}
                rx="12"
                ry="3.75"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.3155;0.498;1"
                  path="M148 280 H320"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
              <ellipse
                className={styles.connectorMergedNodeCore}
                rx="5.5"
                ry="1.75"
              >
                <animateMotion
                  calcMode="linear"
                  dur="4.8s"
                  keyPoints="0;0;1;1"
                  keyTimes="0;0.3155;0.498;1"
                  path="M148 280 H320"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </ellipse>
            </g>
            <path
              className={styles.connectorArrow}
              d="M300 268 L312 280 L300 292"
            />
          </svg>

          <div className="flex justify-center min-[1120px]:hidden">
            <svg
              aria-hidden="true"
              className={styles.mobileConnector}
              viewBox="0 0 40 88"
            >
              <path className={styles.connectorTrack} d="M20 0 V76" />
              <path
                className={styles.connectorPulseCore}
                d="M20 0 V76"
                pathLength="1"
              />
              <path className={styles.connectorArrow} d="M8 64 L20 76 L32 64" />
            </svg>
          </div>

          <div className={styles.boxStage}>
            <svg
              aria-hidden="true"
              className={styles.boxImpactOutline}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1568 1470"
            >
              <path
                className={styles.boxImpactOutlinePath}
                d="M744 4 L1432 396 L1432 912 L744 1310 L52 912 L52 396 Z M52 396 L744 804 L1432 396 M744 804 V1310"
              />
            </svg>
            <BoxArtwork
              alt="Custom packaging box production process"
              className="relative z-1 h-auto w-full"
              sizes="(min-width: 1120px) 620px, 90vw"
            />
            <svg
              aria-hidden="true"
              className={styles.boxBandPulse}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1568 1470"
            >
              <defs>
                <clipPath id="process-box-gold-bands">
                  <polygon points="50,625 282,761 282,823 50,687" />
                  <polygon points="596,958 744,1045 744,1107 596,1020" />
                </clipPath>
                <linearGradient
                  id="process-box-band-sweep"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop
                    offset="0"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="0.38"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="0.5"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="0.62"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="1"
                    stopColor="var(--brand-primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <rect
                className={styles.boxBandGlow}
                clipPath="url(#process-box-gold-bands)"
                fill="var(--brand-primary)"
                height="620"
                width="820"
                x="0"
                y="520"
              />
              <g className={styles.boxBandImpact}>
                <polygon
                  fill="var(--brand-primary)"
                  points="50,625 282,761 282,823 50,687"
                />
                <polygon
                  fill="var(--brand-primary)"
                  points="596,958 744,1045 744,1107 596,1020"
                />
              </g>
              <rect
                className={styles.boxBandSweep}
                clipPath="url(#process-box-gold-bands)"
                fill="url(#process-box-band-sweep)"
                height="620"
                width="240"
                x="-240"
                y="520"
              />
            </svg>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function IndustriesSection() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(3);
  const industryColumns = industries
    .map((_, index) => {
      const distance = Math.min(Math.abs(index - activeIndustryIndex), 3) as
        | 0
        | 1
        | 2
        | 3;

      return `${industryFlexByDistance[distance]}fr`;
    })
    .join(" ");

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

function QuoteSection() {
  const inputClass =
    "h-15 rounded-xl border border-transparent bg-(--text-primary)/10 px-5 text-sm text-(--text-primary) outline-none placeholder:text-white/50 focus:border-(--brand-primary)";

  return (
    <section
      className="relative isolate overflow-hidden border-y border-(--border-subtle) bg-(--surface-raised) py-16 min-[900px]:h-[671px]"
      id="quote"
    >
      <Image
        alt=""
        aria-hidden
        className="-z-10 object-cover opacity-90"
        fill
        sizes="100vw"
        src="/bg/book-a-demo-bg.png"
      />
      <PageContainer className="relative z-1">
        <h2 className="font-heading text-2xl font-bold leading-tight text-(--text-primary) min-[760px]:text-3xl min-[900px]:leading-12">
          Get a free Packaging Quote in{" "}
          <span className="text-(--brand-primary)">6 Minutes</span>
        </h2>

        <form className="mt-7 grid gap-x-6 gap-y-6 min-[900px]:grid-cols-[repeat(4,1fr)]">
          <Input
            aria-label="Full Name"
            className={inputClass}
            placeholder="Full Name"
            type="text"
          />
          <Input
            aria-label="Email"
            className={inputClass}
            placeholder="Email"
            type="email"
          />
          <Input
            aria-label="Phone Number"
            className={inputClass}
            placeholder="Phone Number"
            type="tel"
          />
          <div className="min-[900px]:row-span-5">
            <p className="text-lg leading-7 font-medium text-(--text-primary)">
              Upload Reference Image/Art work
            </p>
            <label className="mt-6 flex min-h-[345px] cursor-pointer flex-col items-center justify-center rounded-xl border border-transparent bg-(--text-primary)/10 p-6 text-center text-xs leading-[18px] text-(--text-primary) outline-none transition-colors hover:border-(--brand-primary)">
              <UploadSimpleIcon
                className="h-16 w-16 text-(--text-primary)"
                weight="regular"
              />
              <span className="mt-2">Png, Jpg Dimensions 40 x 40</span>
              <span>File size limit 30 MB</span>
              <input
                accept="image/png,image/jpeg"
                className="sr-only"
                type="file"
              />
            </label>
          </div>
          <Select
            aria-label="Packaging Style"
            options={packagingStyleOptions}
            placeholder="Packaging Style"
          />
          <Select
            aria-label="Material"
            options={materialOptions}
            placeholder="Material"
          />
          <Select
            aria-label="Quantity"
            options={quantityOptions}
            placeholder="Quantity"
          />
          <Select
            aria-label="Length"
            options={dimensionOptions}
            placeholder="Length"
          />
          <Textarea
            aria-label="Additional Information"
            className={`${inputClass} min-h-[228px] p-5 min-[900px]:col-span-2 min-[900px]:row-span-3`}
            placeholder="Additional Information"
          />
          <Select
            aria-label="Width"
            options={dimensionOptions}
            placeholder="Width"
          />
          <Select
            aria-label="Height"
            options={dimensionOptions}
            placeholder="Height"
          />
          <div className="pt-2 min-[900px]:col-span-4 min-[900px]:text-center">
            <button
              className="h-15 w-52 rounded-[8px] border border-(--border-strong) bg-(--surface-page) text-base font-semibold text-(--brand-primary) transition-colors hover:bg-(--surface-muted)"
              type="submit"
            >
              Get A Free Quote Now
            </button>
          </div>
        </form>
      </PageContainer>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    { Icon: FacebookNegativeIcon, label: "Facebook" },
    { Icon: InstagramNegativeIcon, label: "Instagram" },
    { Icon: LinkedInNegativeIcon, label: "LinkedIn" },
  ] as const;

  return (
    <footer className="bg-(--surface-page) py-16">
      <PageContainer>
        <div className="grid gap-12 min-[900px]:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <BrandLogoMark className="h-auto w-24 overflow-visible" />
            <p className="mt-6 max-w-64 text-sm leading-6 text-(--text-muted)">
              Custom packaging design, quoting, and production built for brands
              who care how their product arrives.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-bold text-(--text-primary)">
                {column.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      className="text-sm text-(--text-muted) transition-colors hover:text-(--brand-primary)"
                      href="#"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-bold text-(--text-primary)">
              Follow Us
            </h3>
            <div className="mt-5 flex gap-4">
              {socialLinks.map(({ Icon, label }) => (
                <Link
                  aria-label={label}
                  className="text-(--text-primary) transition-colors hover:text-(--brand-primary)"
                  href="#"
                  key={label}
                >
                  <Icon className="size-7 overflow-visible" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-(--text-muted)">
          &copy; Customboxifypro. 2026. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  );
}

export function HomePageSections() {
  return (
    <>
      <PackagingStyleSection />
      <ProcessSection />
      <IndustriesSection />
      <QuoteSection />
      <Footer />
    </>
  );
}

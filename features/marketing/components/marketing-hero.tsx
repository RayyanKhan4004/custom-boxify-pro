import {
  FacebookNegativeIcon,
  InstagramNegativeIcon,
  LinkedInNegativeIcon,
} from "@/components/icons";
import { MarketingCountdown } from "@/features/marketing/components/marketing-countdown";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { Icon: FacebookNegativeIcon, label: "Facebook" },
  { Icon: InstagramNegativeIcon, label: "Instagram" },
  { Icon: LinkedInNegativeIcon, label: "LinkedIn" },
] as const;

export function MarketingHero() {
  return (
    <main className="relative min-h-270 overflow-hidden bg-(--background) min-[1120px]:h-200 min-[1120px]:min-h-0">
      <section className="relative mx-auto h-full max-w-360 px-6 py-14 min-[640px]:py-16 min-[1120px]:px-15 min-[1120px]:py-0">
        <div className="relative z-10 flex max-w-132 flex-col min-[1120px]:absolute min-[1120px]:top-37.5">
          <p className="mb-6 text-xs tracking-[0.15em] text-(--primary) min-[640px]:mb-8">
            Something Exciting On its Way
          </p>
          <h1 className="font-heading text-5xl font-bold leading-none tracking-tight text-(--foreground) min-[480px]:text-6xl">
            Coming <span className="text-(--primary)">Soon</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-(--muted-foreground) min-[640px]:mt-9 min-[640px]:text-lg">
            We&apos;re crafting a better experience for you. Our new website is
            launching soon.
          </p>

          <MarketingCountdown />

          <div className="mt-8 min-[640px]:mt-12">
            <p className="text-base text-(--muted-foreground) min-[640px]:text-lg">
              Follow US
            </p>
            <div className="mt-3 flex gap-6 min-[640px]:mt-4">
              {socialLinks.map(({ Icon, label }) => (
                <Link
                  aria-label={label}
                  className="text-(--foreground) hover:text-(--primary) transition-all duration-500 hover:scale-3d hover:scale-110"
                  href="#"
                  key={label}
                >
                  <Icon className="size-7 min-[640px]:size-8" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 h-107.5 w-full min-[640px]:mx-auto min-[640px]:h-117.5 min-[640px]:max-w-170 min-[1120px]:absolute min-[1120px]:inset-0 min-[1120px]:mt-0 min-[1120px]:h-auto min-[1120px]:max-w-none"
          aria-hidden="true"
        >
          <div className="hero-box-glow absolute left-1/2 top-1/2 h-56 w-72 rounded-full bg-(--primary)/10 blur-3xl min-[1120px]:left-[72%] min-[1120px]:top-[48%] min-[1120px]:h-80 min-[1120px]:w-96" />

          <div className="absolute left-1/2 top-0 z-[10] w-105 max-w-[92vw] -translate-x-1/2 min-[1120px]:left-[46%] min-[1120px]:top-20 min-[1120px]:w-162.5 min-[1120px]:max-w-none min-[1120px]:translate-x-0 min-[1280px]:left-175">
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
            className="hero-box-drift-slow absolute -right-36 top-4 z-[1] h-auto w-72 opacity-50 min-[640px]:-right-24 min-[640px]:w-80 min-[1120px]:-right-95 min-[1120px]:-top-5 min-[1120px]:w-162.5 min-[1120px]:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 320px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
          <Image
            alt=""
            className="hero-box-drift absolute -left-40 top-48 z-[2] h-auto w-80 opacity-60 min-[640px]:-left-24 min-[640px]:top-52 min-[640px]:w-96 min-[1120px]:left-auto min-[1120px]:-right-32.5 min-[1120px]:top-50 min-[1120px]:w-162.5 min-[1120px]:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 384px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
          <Image
            alt=""
            className="hero-box-drift-reverse absolute -right-36 top-64 z-[3] h-auto w-80 opacity-70 min-[640px]:-right-20 min-[640px]:top-72 min-[640px]:w-96 min-[1120px]:left-175 min-[1120px]:right-auto min-[1120px]:top-135 min-[1120px]:w-162.5 min-[1120px]:opacity-100"
            height={1470}
            sizes="(min-width: 1120px) 650px, 384px"
            src="/boxes/box-1-upper.webp"
            width={1568}
          />
        </div>
      </section>
    </main>
  );
}

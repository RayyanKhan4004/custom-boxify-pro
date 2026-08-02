const DEFAULT_SITE_URL = "https://www.customboxifypro.com";
const DEFAULT_GOOGLE_SITE_VERIFICATION =
  "U4zmC1kOaR3axpg8_fAQL_FdHbRQ2MLr0dyGrs9w4pY";

function normalizeSiteUrl(url: string): string {
  const urlWithProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;

  return urlWithProtocol.replace(/\/+$/, "");
}

function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
}

export const siteConfig = {
  name: "Boxify",
  title: "Custom Packaging & Branded Boxes | Boxify",
  description:
    "Boxify creates premium custom packaging and branded boxes designed to protect products and elevate every unboxing experience. Our new website is coming soon.",
  url: getSiteUrl(),
  locale: "en_US",
  contactPhone: "+923366704385",
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ?? DEFAULT_GOOGLE_SITE_VERIFICATION,
  bingSiteVerification: process.env.BING_SITE_VERIFICATION,
  yandexSiteVerification: process.env.YANDEX_SITE_VERIFICATION,
} as const;

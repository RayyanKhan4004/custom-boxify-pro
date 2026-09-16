export type HomePageContent = {
  customersValue: string;
  description: string;
  eyebrow: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  pageMode: "countdown" | "home";
  countdownTargetDate?: string;
  satisfactionValue: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  title: string;
  titleAccent: string;
};

type ApiEnvelope<T> = { data: T; success: boolean };

export const defaultHomePageContent: HomePageContent = {
  pageMode: "home",
  countdownTargetDate: undefined,
  eyebrow: "CUSTOM PACKAGING, ENGINEERED",
  title: "Every Brand Deserves A Box",
  titleAccent: "Worth Opening.",
  description:
    "Custom Boxify Pro is a faster way to design, quote, and produce custom packaging from first sketch to finished carton.",
  primaryCtaLabel: "Explore Packaging",
  primaryCtaHref: "#packaging-style",
  secondaryCtaLabel: "Contact Now",
  secondaryCtaHref: "#quote",
  customersValue: "500+",
  satisfactionValue: "99%",
};

export async function getHomePageContent(): Promise<HomePageContent> {
  const response = await fetch("/api/v1/home-page");
  if (!response.ok) throw new Error("Unable to load home page content.");
  const body = (await response.json()) as ApiEnvelope<HomePageContent>;
  if (!body.success || !body.data) throw new Error("Invalid home page response.");
  return body.data;
}

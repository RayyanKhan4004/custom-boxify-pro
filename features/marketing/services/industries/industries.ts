import type { Industry, IndustryApiResponse } from "@/features/marketing/types";

type ApiEnvelope<T> = {
  data: T;
  success: boolean;
};

export async function getIndustries(search = ""): Promise<Industry[]> {
  const params = new URLSearchParams();
  if (search.trim()) params.set("search", search.trim());
  const query = params.toString();
  const response = await fetch(query ? `/api/v1/industries?${query}` : "/api/v1/industries");
  if (!response.ok) {
    throw new Error("Unable to load industries.");
  }

  const body = (await response.json()) as ApiEnvelope<IndustryApiResponse[]>;
  if (!body.success || !Array.isArray(body.data)) {
    throw new Error("Invalid industries response.");
  }

  return body.data
    .filter((industry) => Boolean(industry.imageUrl))
    .map((industry) => ({
      name: industry.name,
      slug: industry.slug,
      imageKey: industry.imageKey,
      imageUrl: industry.imageUrl,
      image: industry.imageUrl!,
    }));
}

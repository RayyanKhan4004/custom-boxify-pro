import type { PackagingStyle } from "@/features/marketing/types";

type ApiEnvelope<T> = { data: T; success: boolean };

export async function getPackagingStyles(search = "", industries: string[] = []): Promise<PackagingStyle[]> {
  const parameters = new URLSearchParams();
  if (search.trim()) parameters.set("search", search.trim());
  if (industries.length) parameters.set("industries", industries.join(","));
  const response = await fetch(`/api/v1/packaging-styles${parameters.size ? `?${parameters}` : ""}`);
  if (!response.ok) throw new Error("Unable to load packaging styles.");
  const body = (await response.json()) as ApiEnvelope<PackagingStyle[]>;
  if (!body.success || !Array.isArray(body.data)) throw new Error("Invalid packaging styles response.");
  return body.data;
}

import { useQuery } from "@tanstack/react-query";

import { getIndustries } from "./industries";

export const industryQueryKeys = {
  all: ["industries"] as const,
  list: (search: string) => [...industryQueryKeys.all, "list", search] as const,
};

export function useGetIndustries(search: string) {
  return useQuery({
    queryKey: industryQueryKeys.list(search),
    queryFn: () => getIndustries(search),
    staleTime: 5 * 60_000,
    gcTime: 30 * 60_000,
  });
}

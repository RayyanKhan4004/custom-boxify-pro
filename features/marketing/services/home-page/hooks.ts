import { useQuery } from "@tanstack/react-query";

import { getHomePageContent } from "./home-page";

export function useHomePageContent() {
  return useQuery({
    queryKey: ["home-page"],
    queryFn: getHomePageContent,
    staleTime: 5 * 60_000,
  });
}

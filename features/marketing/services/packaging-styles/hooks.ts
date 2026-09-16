import { useQuery } from "@tanstack/react-query";
import { getPackagingStyles } from "./packaging-styles";

export function usePackagingStyles(search: string, industries: string[]) {
  return useQuery({ queryKey: ["packaging-styles", search, industries], queryFn: () => getPackagingStyles(search, industries), staleTime: 5 * 60_000 });
}

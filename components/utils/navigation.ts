import type { NavigationAction } from "@/components/types";

export function getNavigationHref(action: NavigationAction): string {
  switch (action.action) {
    case "id":
      return action.id;
    case "link":
      return action.link;
    case "action_open":
      return `https://wa.me/${action.id}?text=Hello%20there!`;
  }
}

import type { NavigationItem } from "@/components/types";

export const navLinks = [
  {
    label: "Packaging Style",
    name: "packaging-style",
    action: "link",
    link: "/packaging-styles",
  },
  {
    label: "Industries",
    name: "industries",
    action: "link",
    link: "/industries",
  },
  {
    label: "Success Stories",
    name: "success-stories",
    action: "id",
    id: "#success-stories",
  },
  {
    label: "Speak With An Expert",
    name: "speak-with-an-expert",
    action: "action_open",
    id: "+923366704385",
  },
] satisfies readonly NavigationItem[];

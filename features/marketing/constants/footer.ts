import {
  FacebookNegativeIcon,
  InstagramNegativeIcon,
  LinkedInNegativeIcon,
} from "@/components/icons";
import type { FooterColumn } from "@/features/marketing/types";

export const footerColumns = [
  {
    title: "Site",
    links: [
      { href: "/packaging-styles", label: "Packaging Style" },
      { href: "#industries", label: "Industries" },
      { href: "#quote", label: "Expert" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "How it Works" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "#", label: "FAQs" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const footerSocialLinks = [
  { Icon: FacebookNegativeIcon, href: "#", label: "Facebook" },
  { Icon: InstagramNegativeIcon, href: "#", label: "Instagram" },
  { Icon: LinkedInNegativeIcon, href: "#", label: "LinkedIn" },
] as const;

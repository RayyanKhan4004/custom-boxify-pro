export type FooterLink = {
  href: string;
  label: string;
};

export type FooterColumn = {
  links: readonly FooterLink[];
  title: string;
};

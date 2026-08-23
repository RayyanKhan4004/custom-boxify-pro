import type { ReactNode } from "react";

export type LayoutSettings = {
  footer: boolean;
  navbar: boolean;
  pageContainer: boolean;
};

export type SiteLayoutProps = {
  children: ReactNode;
  settings: LayoutSettings;
};

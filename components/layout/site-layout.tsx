import type { SiteLayoutProps } from "@/components/types";
import { SiteFooter } from "@/features/marketing/components/home-sections/site-footer";

import Navbar from "./nav-bar";
import { PageContainer } from "./page-container";

export function SiteLayout({ children, settings }: SiteLayoutProps) {
  const content = settings.pageContainer ? (
    <PageContainer>{children}</PageContainer>
  ) : (
    children
  );

  return (
    <>
      {settings.navbar && <Navbar />}
      <main>{content}</main>
      {settings.footer && <SiteFooter />}
    </>
  );
}

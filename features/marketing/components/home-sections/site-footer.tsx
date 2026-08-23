import { BrandLogoMark } from "@/components/icons";
import { PageContainer } from "@/components/layout/page-container";
import {
  footerColumns,
  footerSocialLinks,
} from "@/features/marketing/constants";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-(--border-subtle) bg-(--surface-page) py-16 lg:h-92.5 lg:py-0">
      <PageContainer className="xl:pr-11.25">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_106px_103px_132px_128px] lg:gap-x-15 lg:pt-19">
          <div>
            <BrandLogoMark
              className="-mt-4.5 block overflow-visible"
              height={82}
              width={127}
            />
            <p className="mt-6 max-w-80 text-base leading-6 text-(--text-muted)">
              Custom packaging design, quoting, and production built for brands
              who care how their product arrives.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-2xl font-semibold leading-9 text-(--text-primary)">
                {column.title}
              </h3>
              <ul className="mt-5 grid gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="text-base leading-6 text-(--text-muted) transition-colors hover:text-(--brand-primary)"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-2xl font-semibold leading-9 text-(--text-primary)">
              Follow Us
            </h3>
            <div className="mt-5 flex gap-4">
              {footerSocialLinks.map(({ Icon, href, label }) => (
                <Link
                  aria-label={label}
                  className="text-(--text-primary) transition-colors hover:text-(--brand-primary)"
                  href={href}
                  key={label}
                >
                  <Icon className="size-8 overflow-visible" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-base leading-6 text-(--text-muted) lg:absolute lg:left-1/2 lg:top-71 lg:mt-0 lg:-translate-x-1/2">
          &copy; Customboxifypro. 2026. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  );
}

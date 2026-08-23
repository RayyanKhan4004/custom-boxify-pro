"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import { nav_links } from "../constants/nav-bar";
import { BrandLogo, BrandLogoMark } from "../icons";
import { PageContainer } from "./page-container";
import { Button } from "../ui/button";

type NavigationLinksProps = {
  onNavigate?: () => void;
};

function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <>
      {nav_links.map((link) => (
        <li key={link.name}>
          <a
            className="text-(--text-muted) text-base font-semibold no-underline"
            href={link.action === "action_open" ? `https://wa.me/${link.id}?text=Hello%20there!` : link.id}
            onClick={onNavigate}
          >
            {link.lable}
          </a>
        </li>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b border-b-(--border-subtle) bg-(--surface-page)">
      <PageContainer className="relative flex h-20 items-center justify-between gap-10">
        <BrandLogoMark className="h-auto w-[51px] overflow-visible xl:hidden" />
        <BrandLogo className="hidden h-auto w-[294px] overflow-visible xl:block" />

        <ul className="hidden items-center gap-10 xl:flex">
          <NavigationLinks />
          <li>
            <Button className="h-11.25" variant="outline">
              <a href="mailto:mohamd.27125@gamil.com">Get A Quote</a>
            </Button>
          </li>
        </ul>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="z-[1] ml-auto inline-flex items-center justify-center border-0 bg-transparent p-0 text-(--text-primary) xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
        </button>
      </PageContainer>

      {isOpen && (
        <div
          className="overflow-hidden border-t border-t-(--border-subtle) bg-(--surface-page) xl:hidden"
          id="mobile-navigation"
        >
          <ul className="flex list-none flex-col gap-6 p-6">
            <NavigationLinks onNavigate={() => setIsOpen(false)} />
            <li>
              <Button className="h-11.25" variant="outline">
                <a href="mailto:mohamd.27125@gamil.com" onClick={() => setIsOpen(false)}>Get A Quote</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

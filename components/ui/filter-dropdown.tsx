"use client";

import {
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type FilterDropdownProps = {
  title: string;
  selectedCount: number;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  footer: ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
};

export function FilterDropdown({
  title,
  selectedCount,
  onOpen,
  onClose,
  isOpen,
  children,
  footer,
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search filters",
}: FilterDropdownProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const [style, setStyle] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const positionPanel = useCallback(() => {
    if (window.innerWidth < 768) {
      setStyle(null);
      return;
    }

    const trigger = triggerRef.current;
    const panel = panelRef.current;
    if (!trigger || !panel) return;

    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const gap = 12;
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    const openUp = spaceBelow < 480 && spaceAbove > spaceBelow;
    const availableHeight = openUp
      ? triggerRect.top - gap - 16
      : window.innerHeight - triggerRect.bottom - gap - 16;
    const maxHeight = Math.max(160, availableHeight);

    const panelWidth = panelRect.width;
    let left = triggerRect.left + triggerRect.width / 2 - panelWidth / 2;
    left = Math.max(16, Math.min(left, window.innerWidth - panelWidth - 16));

    if (openUp) {
      setStyle({
        position: "fixed",
        top: "auto",
        bottom: `${window.innerHeight - triggerRect.top + gap}px`,
        left: `${left}px`,
        right: "auto",
        maxHeight: `${maxHeight}px`,
      });
    } else {
      setStyle({
        position: "fixed",
        top: `${triggerRect.bottom + gap}px`,
        bottom: "auto",
        left: `${left}px`,
        right: "auto",
        maxHeight: `${maxHeight}px`,
      });
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    requestAnimationFrame(() => positionPanel());

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        !triggerRef.current?.contains(event.target as Node) &&
        !panelRef.current?.contains(event.target as Node)
      ) {
        onCloseRef.current();
      }
    };
    const onResize = () => positionPanel();
    const preventBackgroundWheel = (event: WheelEvent) => {
      if (!scrollAreaRef.current?.contains(event.target as Node)) {
        event.preventDefault();
      }
    };
    const preventBackgroundTouch = (event: TouchEvent) => {
      if (!scrollAreaRef.current?.contains(event.target as Node)) {
        event.preventDefault();
      }
    };
    const preventBackgroundKeyboardScroll = (event: KeyboardEvent) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
        " ",
      ];
      if (
        scrollKeys.includes(event.key) &&
        !panelRef.current?.contains(document.activeElement)
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("keydown", preventBackgroundKeyboardScroll);
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("wheel", preventBackgroundWheel, {
      passive: false,
    });
    document.addEventListener("touchmove", preventBackgroundTouch, {
      passive: false,
    });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("keydown", preventBackgroundKeyboardScroll);
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("wheel", preventBackgroundWheel);
      document.removeEventListener("touchmove", preventBackgroundTouch);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen, positionPanel]);

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Filter by industry"
        className="relative grid size-13 place-items-center rounded-full bg-(--surface-raised) text-(--text-primary) hover:text-(--brand-primary)"
        onClick={() => {
          setStyle(null);
          onOpen();
        }}
        ref={triggerRef}
        type="button"
      >
        <FunnelSimpleIcon size={20} />
        {selectedCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-(--brand-primary) text-[10px] font-bold text-(--brand-on-primary)">
            {selectedCount}
          </span>
        )}
      </button>
      {isOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              aria-hidden="true"
              onClick={onClose}
            />
            <div
              className={`fixed inset-x-0 bottom-0 z-[70] flex max-h-[85vh] w-full flex-col overflow-clip rounded-t-2xl border border-(--border-subtle) bg-(--surface-page) shadow-2xl md:inset-x-auto md:bottom-auto md:rounded-2xl md:max-h-[min(38rem,calc(100vh-2rem))] md:w-[min(32rem,calc(100vw-2rem))] ${style ? "md:opacity-100" : "md:pointer-events-none md:opacity-0"}`}
              ref={panelRef}
              role="dialog"
              aria-labelledby="filter-dropdown-title"
              style={style ?? undefined}
            >
              <div className="flex items-center justify-between px-5 py-5">
                <h2
                  className="font-heading text-2xl font-bold text-(--text-primary)"
                  id="filter-dropdown-title"
                >
                  {title}
                </h2>
                <button
                  aria-label="Close filters"
                  className="grid size-9 place-items-center rounded-full text-(--text-primary) transition-colors hover:bg-(--surface-raised)"
                  onClick={onClose}
                  type="button"
                >
                  <XIcon size={24} />
                </button>
              </div>

              {onSearchChange && (
                <label className="relative mx-5 mb-4 block">
                  <MagnifyingGlassIcon
                    aria-hidden
                    className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--text-muted)"
                  />
                  <span className="sr-only">{searchPlaceholder}</span>
                  <input
                    className="h-12 w-full rounded-full border border-(--border-subtle) bg-(--surface-raised) py-3 pl-11 pr-4 text-sm text-(--text-primary) outline-none placeholder:text-(--text-muted) focus:border-(--brand-primary) focus:ring-1 focus:ring-(--brand-primary)"
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder={searchPlaceholder}
                    type="search"
                    value={searchValue}
                  />
                </label>
              )}

              <div
                data-lenis-prevent
                ref={scrollAreaRef}
                className="min-h-0 flex-1 overscroll-contain overflow-y-auto border-y border-(--border-subtle)"
              >
                {children}
              </div>

              <div className="grid grid-cols-2 gap-3 bg-(--surface-page) p-4">
                {footer}
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}

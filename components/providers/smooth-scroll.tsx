"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type SmoothScrollController = {
  resize: () => void;
};

const SmoothScrollContext = createContext<SmoothScrollController | null>(null);

export function useSmoothScroll(): SmoothScrollController | null {
  return useContext(SmoothScrollContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const controller = useMemo<SmoothScrollController>(() => ({
    resize: () => lenisRef.current?.resize(),
  }), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      anchors: { duration: 1.1, offset: -80 },
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = instance;
    let animationFrame = 0;
    const animate = (time: number) => {
      instance.raf(time);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => controller.resize());
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [controller, pathname]);

  return (
    <SmoothScrollContext.Provider value={controller}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

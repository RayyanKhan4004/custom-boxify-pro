"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { foldingBoxFrames } from "@/features/marketing/constants";

import styles from "../process-section.module.css";

export function FoldingBoxAutoplay() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(
    () =>
      typeof window !== "undefined" && !("IntersectionObserver" in window),
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const closedFrame = foldingBoxFrames[5];
  const activeFrame = prefersReducedMotion
    ? closedFrame
    : foldingBoxFrames[frameIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview) return;

    const supportsIntersectionObserver =
      typeof window.IntersectionObserver === "function";

    if (!supportsIntersectionObserver) {
      const fallbackTimerId = window.setTimeout(
        () => setIsInViewport(true),
        0,
      );

      return () => window.clearTimeout(fallbackTimerId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(preview);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInViewport || prefersReducedMotion) return;

    const timerId = window.setTimeout(() => {
      setFrameIndex((currentIndex) =>
        currentIndex === foldingBoxFrames.length - 1 ? 0 : currentIndex + 1,
      );
    }, activeFrame.duration);

    return () => window.clearTimeout(timerId);
  }, [activeFrame.duration, isInViewport, prefersReducedMotion]);

  return (
    <div className={styles.foldingBoxAutoplay} ref={previewRef}>
      <Image
        alt=""
        aria-hidden="true"
        className={styles.foldingBoxFrame}
        key={activeFrame.label}
        sizes="(min-width: 70rem) 42rem, 90vw"
        src={activeFrame.src}
      />
    </div>
  );
}

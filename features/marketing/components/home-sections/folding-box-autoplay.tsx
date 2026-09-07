"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import closedBox from "@/components/images/folding_box_autoplay_assets/06_closed_box.png";

import styles from "../process-section.module.css";

export function FoldingBoxAutoplay() {
  const previewRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInViewport, setIsInViewport] = useState(
    () =>
      typeof window !== "undefined" && !("IntersectionObserver" in window),
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    const video = videoRef.current;

    if (!video || !isInViewport || prefersReducedMotion) return;

    void video.play().catch((error: unknown) => {
      // Pausing during navigation or a visibility change cancels pending playback.
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.warn("Folding box video could not autoplay:", error);
    });

    return () => video.pause();
  }, [isInViewport, prefersReducedMotion]);

  return (
    <div className={styles.foldingBoxAutoplay} ref={previewRef}>
      {prefersReducedMotion ? (
        <Image
          alt=""
          aria-hidden="true"
          className={styles.foldingBoxFrame}
          sizes="(min-width: 70rem) 42rem, 90vw"
          src={closedBox}
        />
      ) : (
        <video
          ref={videoRef}
          aria-hidden="true"
          className={styles.foldingBoxFrame}
          loop
          muted
          playsInline
          poster={closedBox.src}
          preload="none"
          src="/videos/box-animation-transparent-hq.webm"
        />
      )}
    </div>
  );
}

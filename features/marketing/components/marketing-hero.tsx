"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon, CubeIcon, SparkleIcon } from "@phosphor-icons/react";

const cubeFaces = [
  "cube-face-top",
  "cube-face-left",
  "cube-face-right",
] as const;

export function MarketingHero() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="landing-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Boxify home">
          <span className="brand-mark">
            <CubeIcon aria-hidden="true" weight="bold" />
          </span>
          Boxify
        </a>
        <a className="nav-link" href="#contact">
          Join the waitlist{" "}
          <ArrowUpRightIcon aria-hidden="true" weight="bold" />
        </a>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <SparkleIcon aria-hidden="true" weight="fill" /> Custom packaging,
            made personal
          </p>
          <p className="coming-soon-label">Coming soon</p>
          <h1 id="hero-title">Your next box starts here.</h1>
          <p className="hero-description">
            We’re shaping a better way to create custom packaging—from the first
            sketch to the final unboxing.
          </p>
          <a className="hero-cta" href="#contact">
            Get launch updates{" "}
            <ArrowUpRightIcon aria-hidden="true" weight="bold" />
          </a>
        </div>

        <motion.div
          className="cube-stage"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          aria-label="Custom packaging box preview"
          role="img"
        >
          <motion.div
            className="cube"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotateX: [0, 2, 0],
                    rotateY: [-24, -18, -24],
                    y: [0, -8, 0],
                  }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={
              reduceMotion
                ? undefined
                : { rotateX: 8, rotateY: -38, scale: 1.04 }
            }
          >
            {cubeFaces.map((face) => (
              <div className={face} key={face} />
            ))}
            <div className="cube-badge">
              <CubeIcon aria-hidden="true" weight="bold" />
            </div>
            <div className="cube-title">
              Custom
              <br />
              Packaging
            </div>
            <span className="cube-est">Est. 2026</span>
            <span className="cube-brand">Boxify</span>
          </motion.div>
        </motion.div>
      </section>

  
    </main>
  );
}

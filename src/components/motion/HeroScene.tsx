"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Scroll choreography for the hero: the video drifts slower than the page and the copy lifts away and fades,
 * so leaving the hero feels like a camera pulling back.
 */
export function HeroScene({ background, children }: { background: ReactNode; children: ReactNode }) {
  const reduce = useReducedMotion();
  // The hero always opens the page, so its scroll-out maps to the first ~900px of page scroll
  const { scrollY } = useScroll();
  const progress = useSpring(useTransform(scrollY, [0, 900], [0, 1], { clamp: true }), { stiffness: 120, damping: 28, restDelta: 0.001 });
  const bgY = useTransform(progress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(progress, [0, 1], [1, 1.12]);
  const copyY = useTransform(progress, [0, 1], [0, -140]);
  const copyOpacity = useTransform(progress, [0, 0.6], [1, 0]);
  const copyBlur = useTransform(progress, [0, 0.6], ["blur(0px)", "blur(8px)"]);

  return (
    <>
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <div className="absolute inset-0 animate-hero-zoom">{background}</div>
      </motion.div>
      <motion.div
        className="container-page flex flex-1 flex-col items-center justify-center pb-28 pt-36 text-center"
        style={reduce ? undefined : { y: copyY, opacity: copyOpacity, filter: copyBlur }}
      >
        {children}
      </motion.div>
    </>
  );
}

// Fixed values (not Math.random) so server and client render the same petals
const PETALS = [
  { left: 6, size: 14, delay: 0, duration: 15, drift: 80, hue: "#ebddbf" },
  { left: 17, size: 10, delay: 5, duration: 18, drift: -60, hue: "#d8576b" },
  { left: 28, size: 12, delay: 9, duration: 14, drift: 110, hue: "#f4ece3" },
  { left: 41, size: 9, delay: 2.5, duration: 19, drift: -90, hue: "#c2a878" },
  { left: 55, size: 13, delay: 7, duration: 16, drift: 70, hue: "#d8576b" },
  { left: 66, size: 11, delay: 11, duration: 17, drift: -70, hue: "#ebddbf" },
  { left: 77, size: 15, delay: 3.5, duration: 15.5, drift: 95, hue: "#f4ece3" },
  { left: 88, size: 10, delay: 8.5, duration: 18.5, drift: -50, hue: "#d8576b" },
  { left: 95, size: 12, delay: 13, duration: 16.5, drift: -100, hue: "#c2a878" },
];

/** Petals drifting down through the hero. Pure CSS animation; hidden for reduced motion. */
export function FloatingPetals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden motion-reduce:hidden">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal-fall absolute -top-8 block rounded-[100%_0_100%_0] opacity-0"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.25,
              background: `linear-gradient(135deg, ${p.hue}, color-mix(in srgb, ${p.hue} 60%, #7d1529))`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--petal-drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Splits a line into words that rise out of a mask one after another (CSS, so it plays before hydration). */
export function MaskWords({ text, start = 0, step = 80 }: { text: string; start?: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className="inline-block animate-word-rise" style={{ animationDelay: `${start + i * step}ms` }}>
            {word}
          </span>
          {" "}
        </span>
      ))}
    </>
  );
}

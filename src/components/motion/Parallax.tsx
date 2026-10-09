"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

/** Drifts its content vertically against the scroll. `offset` is the travel in px (positive = slower than page). */
export function Parallax({ children, offset = 60, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} className={cn(className)} style={{ y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}

/** Image that zooms out slowly as its frame crosses the viewport. Wrap it in an overflow-hidden frame. */
export function ScrollZoom({ children, from = 1.18, to = 1, className }: { children: ReactNode; from?: number; to?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <motion.div ref={ref} className={cn("absolute inset-0", className)} style={{ scale: reduce ? 1 : scale }}>
      {children}
    </motion.div>
  );
}

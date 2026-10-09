"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Subtle 3D tilt with a soft light sheen that follows the pointer. Listens on the nearest [data-tilt-root]
 * ancestor when there is one, so cards whose link overlay covers the image still tilt.
 */
export function TiltCard({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 20 };
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.35), transparent 55%)`;
  const glareOpacity = useSpring(0, spring);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const root = el.closest<HTMLElement>("[data-tilt-root]") ?? el;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      px.set(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
      py.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
      glareOpacity.set(1);
    };
    const onLeave = () => {
      px.set(0.5);
      py.set(0.5);
      glareOpacity.set(0);
    };
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, px, py, glareOpacity]);

  return (
    <div className="[perspective:1100px]">
      <motion.div ref={ref} className={cn("relative", className)} style={{ rotateX, rotateY }}>
        {children}
        <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light" style={{ background: glare, opacity: glareOpacity }} />
      </motion.div>
    </div>
  );
}

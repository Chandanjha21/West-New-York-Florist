"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/** Counts the leading number in `value` up from `from` when scrolled into view, keeping any suffix ("70+", "4.9★"). */
export function CountUp({ value, from = 0, duration = 2 }: { value: string; from?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!el || !match || !inView || reduce) return;
    const target = Number(match[1]);
    const decimals = match[1].split(".")[1]?.length ?? 0;
    const controls = animate(from, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${v.toFixed(decimals)}${match[2]}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, duration, value]);

  return <span ref={ref}>{value}</span>;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useVelocity } from "motion/react";

const INTERACTIVE = "a, button, [role='button'], label, summary, select";
const TEXT = "input:not([type='checkbox']):not([type='radio']):not([type='range']), textarea, [contenteditable='true']";
// Bloom tip of the rose sits on the pointer's hotspot
const SIZE = 64;
// Tip of the bloom in /cursors/rose.svg (44-unit viewBox), scaled to SIZE
const HOTSPOT = { x: (10 / 44) * SIZE, y: (5 / 44) * SIZE };
const ORIGIN = `${HOTSPOT.x}px ${HOTSPOT.y}px`;

type Petal = { id: number; x: number; y: number; angle: number; distance: number; spin: number; size: number };
let petalId = 0;

/**
 * Replaces the pointer with a rose on fine-pointer devices: it sways with movement, leans in and grows over
 * links, and clicks scatter petals.
 * Touch devices and reduced-motion users keep the static rose cursor from globals.css.
 */
export function RoseCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [overText, setOverText] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);
  const hoverTarget = useRef<Element | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const velocityX = useVelocity(x);
  const sway = useSpring(useTransform(velocityX, [-1600, 0, 1600], [-28, 0, 28], { clamp: true }), { stiffness: 180, damping: 18 });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("rose-cursor-on");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const interactive = target?.closest(INTERACTIVE) ?? null;
      if (interactive !== hoverTarget.current) {
        hoverTarget.current = interactive;
        setHovering(!!interactive);
      }
      setOverText(!!target?.closest(TEXT));
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setPressed(true);
      const burst = Array.from({ length: 7 }, (_, i): Petal => ({
        id: petalId++,
        x: e.clientX,
        y: e.clientY,
        angle: (i / 7) * Math.PI * 2 + Math.random() * 0.6,
        distance: 28 + Math.random() * 30,
        spin: (Math.random() - 0.5) * 540,
        size: 7 + Math.random() * 5,
      }));
      setPetals((p) => [...p.slice(-21), ...burst]);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      root.classList.remove("rose-cursor-on");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const shown = visible && !overText;

  return (
    <div aria-hidden="true" className="rose-cursor pointer-events-none fixed inset-0 z-[100]">
      {/* The rose itself tracks the pointer exactly so clicks land where they look */}
      <motion.div className="absolute left-0 top-0" style={{ x, y }}>
        <motion.div style={{ rotate: sway, transformOrigin: ORIGIN, marginLeft: -HOTSPOT.x, marginTop: -HOTSPOT.y }}>
          <motion.div
            initial={false}
            animate={{ scale: pressed ? 0.85 : hovering ? 1.15 : 1, rotate: hovering ? -12 : 0, opacity: shown ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 20 }}
            style={{ transformOrigin: ORIGIN }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG shared with the CSS fallback cursor */}
            <img src="/cursors/rose.svg" alt="" width={SIZE} height={SIZE} draggable={false} className="block drop-shadow-[0_4px_6px_rgb(35_38_34/0.3)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className="absolute left-0 top-0 block rounded-[100%_0_100%_0] bg-[#b8304a]"
            style={{ width: p.size, height: p.size * 1.3 }}
            initial={{ x: p.x, y: p.y, opacity: 1, rotate: 0, scale: 0.4 }}
            animate={{
              x: p.x + Math.cos(p.angle) * p.distance,
              y: [p.y, p.y + Math.sin(p.angle) * p.distance, p.y + Math.sin(p.angle) * p.distance + 46],
              opacity: [1, 1, 0],
              rotate: p.spin,
              scale: 1,
            }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setPetals((all) => all.filter((q) => q.id !== p.id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

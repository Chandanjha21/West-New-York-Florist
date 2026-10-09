"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Lenis inertia scrolling for the whole page. Skipped for reduced motion; dialogs keep native scroll. */
export function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let lenis: Lenis | null = null;
    const sync = () => {
      lenis?.destroy();
      lenis = query.matches
        ? new Lenis({
            autoRaf: true,
            lerp: 0.09,
            wheelMultiplier: 0.95,
            anchors: { offset: -112 },
            allowNestedScroll: true,
            // Wheel inside an open <dialog> (cart, menu, lightbox) must scroll the dialog, never the page behind it
            prevent: (node) => !!node.closest("dialog"),
          })
        : null;
    };
    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return null;
}

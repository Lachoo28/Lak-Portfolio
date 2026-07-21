"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    scrollToSection?: (href: string) => void;
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global function on window so React components can trigger smooth scroll directly
    window.scrollToSection = (href: string) => {
      const targetEl = document.querySelector(href) as HTMLElement;
      if (targetEl) {
        lenis.scrollTo(targetEl, {
          offset: -80, // Offset for sticky navbar
          duration: 1.2,
        });
      }
    };

    // Global click listener to intercept hash links and scroll smoothly using Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          const targetEl = document.querySelector(href) as HTMLElement;
          if (targetEl) {
            lenis.scrollTo(targetEl, {
              offset: -80, // Offset for sticky navbar
              duration: 1.2,
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      delete window.scrollToSection;
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}


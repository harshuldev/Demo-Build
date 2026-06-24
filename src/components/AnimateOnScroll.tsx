"use client";

/**
 * AnimateOnScroll.tsx
 *
 * Wrapper component that adds a fade-in-up animation when
 * its children enter the viewport via IntersectionObserver.
 *
 * Usage:
 *   <AnimateOnScroll>
 *     <YourSection />
 *   </AnimateOnScroll>
 *
 * Respects prefers-reduced-motion via CSS (in globals.css).
 */

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Fraction of the element that must be visible before animating (0–1) */
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* If IntersectionObserver is not supported, just show content */
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // animate once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

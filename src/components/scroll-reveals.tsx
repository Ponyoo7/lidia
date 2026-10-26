"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    root.classList.add("has-scroll-reveals");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    const observeRevealElements = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((element) => observer.observe(element));
    };

    // App Router mantiene este layout montado al cambiar de página. Al volver
    // al inicio hay que registrar de nuevo los elementos que se han renderizado.
    observeRevealElements();

    const mutationObserver = new MutationObserver(observeRevealElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("has-scroll-reveals");
    };
  }, [pathname]);

  return null;
}

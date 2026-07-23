"use client";

import { useEffect } from "react";

const revealTargetSelector = "main > section, body > footer";

export default function SectionRevealController() {
  useEffect(() => {
    const pageRoot = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(revealTargetSelector),
    );

    if (targets.length === 0) {
      return;
    }

    targets.forEach((target) => target.classList.add("scroll-reveal-section"));

    let observer: IntersectionObserver | null = null;

    const showEverything = () => {
      observer?.disconnect();
      observer = null;
      pageRoot.classList.remove("scroll-reveal-ready");
      targets.forEach((target) =>
        target.classList.add("scroll-reveal-visible"),
      );
    };

    const watchSections = () => {
      observer?.disconnect();

      targets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const isInitiallyVisible =
          bounds.top < window.innerHeight * 0.9 &&
          bounds.bottom > window.innerHeight * 0.08;

        target.classList.toggle(
          "scroll-reveal-visible",
          isInitiallyVisible,
        );
      });

      pageRoot.classList.add("scroll-reveal-ready");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "scroll-reveal-visible",
              entry.isIntersecting,
            );
          });
        },
        {
          rootMargin: "-8% 0px -10% 0px",
          threshold: 0,
        },
      );

      targets.forEach((target) => observer?.observe(target));
    };

    const updateMotion = () => {
      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        showEverything();
        return;
      }

      watchSections();
    };

    updateMotion();
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", updateMotion);
      pageRoot.classList.remove("scroll-reveal-ready");
      targets.forEach((target) => {
        target.classList.remove(
          "scroll-reveal-section",
          "scroll-reveal-visible",
        );
      });
    };
  }, []);

  return null;
}

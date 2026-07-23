"use client";

import { useEffect } from "react";

const revealTargetSelector = "main > section, body > footer";
const revealContentSelector = "[data-scroll-reveal]";

export default function SectionRevealController() {
  useEffect(() => {
    const pageRoot = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const sectionTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealTargetSelector),
    );
    const contentTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealContentSelector),
    );

    if (sectionTargets.length === 0) {
      return;
    }

    sectionTargets.forEach((target) =>
      target.classList.add("scroll-reveal-section"),
    );

    let sectionObserver: IntersectionObserver | null = null;
    let contentObserver: IntersectionObserver | null = null;

    const showEverything = () => {
      sectionObserver?.disconnect();
      contentObserver?.disconnect();
      sectionObserver = null;
      contentObserver = null;
      pageRoot.classList.remove("scroll-reveal-ready");
      sectionTargets.forEach((target) =>
        target.classList.add("scroll-reveal-visible"),
      );
      contentTargets.forEach((target) =>
        target.classList.add("scroll-reveal-content-visible"),
      );
    };

    const watchSections = () => {
      sectionObserver?.disconnect();
      contentObserver?.disconnect();

      sectionTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const isInitiallyVisible =
          bounds.top < window.innerHeight * 0.9 &&
          bounds.bottom > window.innerHeight * 0.08;

        target.classList.toggle(
          "scroll-reveal-visible",
          isInitiallyVisible,
        );
      });

      contentTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const isInitiallyVisible =
          bounds.top < window.innerHeight &&
          bounds.bottom > window.innerHeight * 0.1;

        target.classList.toggle(
          "scroll-reveal-content-visible",
          isInitiallyVisible,
        );
      });

      pageRoot.classList.add("scroll-reveal-ready");

      sectionObserver = new IntersectionObserver(
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

      contentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "scroll-reveal-content-visible",
              entry.isIntersecting,
            );
          });
        },
        {
          rootMargin: "-10% 0px 0px 0px",
          threshold: 0,
        },
      );

      sectionTargets.forEach((target) =>
        sectionObserver?.observe(target),
      );
      contentTargets.forEach((target) =>
        contentObserver?.observe(target),
      );
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
      sectionObserver?.disconnect();
      contentObserver?.disconnect();
      motionPreference.removeEventListener("change", updateMotion);
      pageRoot.classList.remove("scroll-reveal-ready");
      sectionTargets.forEach((target) => {
        target.classList.remove(
          "scroll-reveal-section",
          "scroll-reveal-visible",
        );
      });
      contentTargets.forEach((target) =>
        target.classList.remove("scroll-reveal-content-visible"),
      );
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

const revealTargetSelector = "main > section, body > footer";
const revealContentSelector = "[data-scroll-reveal]";

const isSectionInView = (target: HTMLElement) => {
  const bounds = target.getBoundingClientRect();

  return (
    bounds.top < window.innerHeight * 0.9 &&
    bounds.bottom > window.innerHeight * 0.08
  );
};

const isContentInView = (target: HTMLElement) => {
  const bounds = target.getBoundingClientRect();

  return (
    bounds.top < window.innerHeight &&
    bounds.bottom > window.innerHeight * 0.1
  );
};

export default function SectionRevealController() {
  useEffect(() => {
    const pageRoot = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const sectionTargets = new Set<HTMLElement>();
    const contentTargets = new Set<HTMLElement>();

    let animationEnabled = false;
    let sectionObserver: IntersectionObserver | null = null;
    let contentObserver: IntersectionObserver | null = null;

    const syncTargets = () => {
      const currentSections = new Set(
        document.querySelectorAll<HTMLElement>(revealTargetSelector),
      );
      const currentContent = new Set(
        document.querySelectorAll<HTMLElement>(revealContentSelector),
      );

      sectionTargets.forEach((target) => {
        if (currentSections.has(target)) {
          return;
        }

        sectionObserver?.unobserve(target);
        target.classList.remove(
          "scroll-reveal-section",
          "scroll-reveal-visible",
        );
        sectionTargets.delete(target);
      });

      contentTargets.forEach((target) => {
        if (currentContent.has(target)) {
          return;
        }

        contentObserver?.unobserve(target);
        target.classList.remove("scroll-reveal-content-visible");
        contentTargets.delete(target);
      });

      currentSections.forEach((target) => {
        sectionTargets.add(target);
        target.classList.add("scroll-reveal-section");
        target.classList.toggle(
          "scroll-reveal-visible",
          !animationEnabled || isSectionInView(target),
        );
        sectionObserver?.observe(target);
      });

      currentContent.forEach((target) => {
        contentTargets.add(target);
        target.classList.toggle(
          "scroll-reveal-content-visible",
          !animationEnabled || isContentInView(target),
        );
        contentObserver?.observe(target);
      });
    };

    const showEverything = () => {
      animationEnabled = false;
      sectionObserver?.disconnect();
      contentObserver?.disconnect();
      sectionObserver = null;
      contentObserver = null;
      pageRoot.classList.remove("scroll-reveal-ready");
      syncTargets();
    };

    const watchSections = () => {
      animationEnabled = true;
      sectionObserver?.disconnect();
      contentObserver?.disconnect();

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

      syncTargets();
      pageRoot.classList.add("scroll-reveal-ready");
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

    const mutationObserver = new MutationObserver(syncTargets);

    updateMotion();
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      mutationObserver.disconnect();
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

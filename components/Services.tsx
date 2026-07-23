"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Design",
    description:
      "Clear interfaces, useful flows, and visual systems that make digital products easy to understand.",
    image: "/assets/services/design.webp",
    position: "object-center",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Responsive frontends and dependable backends built with modern, maintainable technology.",
    image: "/assets/services/develop.webp",
    position: "object-center",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Performance, accessibility, and product polish that turn a working build into a strong experience.",
    image: "/assets/services/improve.webp",
    position: "object-center",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Practical iteration after launch, with thoughtful fixes and steady improvements as the product grows.",
    image: "/assets/services/support.webp",
    position: "object-center",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-[var(--ink)] px-6 py-24 text-[var(--paper)] sm:px-10 lg:px-14 lg:py-32 xl:px-20"
      id="services"
    >
      <div className="mx-auto max-w-[1460px]">
        <header
          className="grid gap-8 border-b border-white/20 pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end"
          data-scroll-reveal="intro"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">
            02 / What I do
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-4xl text-[clamp(3.25rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.07em]">
              From first idea
              <br />
              to final detail.
            </h2>
            <span className="mb-2 hidden size-7 shrink-0 rounded-full bg-[var(--accent)] sm:block" />
          </div>
        </header>

        <div
          className="mt-6 flex items-center justify-between gap-6 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:mt-8"
          data-scroll-reveal="intro"
          data-reveal-order="1"
        >
          <p>Hover or tap to explore</p>
          <p className="hidden sm:block">04 capabilities</p>
        </div>

        <div
          className="mt-5 flex h-[52rem] flex-col overflow-hidden border border-white/20 sm:h-[58rem] lg:mt-8 lg:h-[43rem] lg:flex-row"
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              setActiveIndex(null);
            }
          }}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const descriptionId = `service-description-${service.number}`;

            return (
              <article
                key={service.title}
                data-scroll-reveal="content"
                data-reveal-order={index + 1}
                data-active={isActive}
                className="relative min-h-0 min-w-0 overflow-hidden border-b border-white/20 transition-[flex] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                style={{ flex: isActive ? "3 1 0%" : "1 1 0%" }}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={descriptionId}
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  onFocus={() => setActiveIndex(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setActiveIndex(index);
                    }
                  }}
                  className="group relative block h-full min-h-32 w-full cursor-pointer overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--accent)]"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className={`object-cover ${service.position} transition-[filter,opacity,scale] duration-700 ease-out ${
                      isActive
                        ? "scale-100 opacity-80 grayscale-0"
                        : "scale-[1.04] opacity-30 grayscale"
                    }`}
                  />

                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 transition-colors duration-700 ${
                      isActive
                        ? "bg-gradient-to-t from-black via-black/35 to-black/5"
                        : "bg-gradient-to-t from-black via-black/60 to-black/25"
                    }`}
                  />

                  <span className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7 lg:p-8">
                    <span
                      className={`text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--accent)]"
                          : "text-white/55"
                      }`}
                    >
                      Service {service.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid size-10 place-items-center rounded-full border text-lg transition-all duration-500 ${
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)]"
                          : "border-white/35 text-white/65"
                      }`}
                    >
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        {!isActive && <path d="M12 5v14" />}
                      </svg>
                    </span>
                  </span>

                  <span
                    className={`absolute inset-x-0 bottom-0 block p-5 transition-transform duration-500 sm:p-7 lg:p-8 ${
                      isActive ? "translate-y-0" : "translate-y-2"
                    }`}
                  >
                    <span className="block text-[clamp(2.25rem,4.5vw,5rem)] font-black leading-[0.88] tracking-[-0.065em] text-white">
                      {service.title}
                      <span className="text-[var(--accent)]">.</span>
                    </span>
                    <span
                      id={descriptionId}
                      className={`block max-w-xl overflow-hidden text-sm leading-6 text-white/72 transition-all duration-700 sm:text-base sm:leading-7 ${
                        isActive
                          ? "mt-5 max-h-32 translate-y-0 opacity-100"
                          : "mt-0 max-h-0 translate-y-4 opacity-0"
                      }`}
                    >
                      {service.description}
                    </span>
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

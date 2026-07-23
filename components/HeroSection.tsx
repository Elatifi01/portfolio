import Image from "next/image";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Elatifi01",
    icon: (
      <path
        fill="currentColor"
        d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.28-1.29-5.28-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.94 10.94 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
      />
    ),
  },
  {
    label: "Email",
    href: "mailto:elatifi.haitam@gmail.com",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3.75 5.75h16.5v12.5H3.75zM4.5 6.5 12 12l7.5-5.5"
      />
    ),
  },
  {
    label: "Download CV",
    href: "/assets/Haitam_El_Atifi.pdf",
    download: true,
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M12 3.75v10.5m0 0 4-4m-4 4-4-4M5 19.25h14"
      />
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--paper)] pt-20 text-[var(--ink)]"
      id="home"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 h-px bg-[var(--line)]/70"
      />

      <div className="relative mx-auto min-h-[calc(100svh-5rem)] max-w-[1600px] px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="hero-copy relative z-30 max-w-xs pt-12 sm:pt-16 lg:absolute lg:left-[6%] lg:top-[21%] lg:pt-0">
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
            Full-stack developer
          </p>
          <p className="text-base leading-[1.42] sm:text-lg">
            I turn complex ideas into fast, useful digital products with clean
            code and thoughtful design.
          </p>
          <a
            href="#projects"
            className="group mt-5 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-sm font-bold"
          >
            Explore my work
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>

        <h1 className="hero-title relative z-30 mt-12 text-[clamp(3rem,14.5vw,6rem)] font-black leading-[0.78] tracking-[-0.075em] sm:mt-14 lg:absolute lg:right-[2%] lg:top-[33%] lg:mt-0 lg:text-[clamp(4.6rem,7.2vw,7.5rem)]">
          <span className="block whitespace-nowrap">clean code.</span>
          <span className="block whitespace-nowrap">clear impact.</span>
        </h1>

        <div className="hero-portrait relative left-1/2 z-10 mt-16 w-[min(104vw,34rem)] -translate-x-1/2 sm:mt-12 lg:absolute lg:bottom-[-9rem] lg:mt-0 lg:w-[min(46vw,44rem)]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[4%] z-0 aspect-square w-[76%] -translate-x-1/2 rounded-full bg-[var(--accent)]"
          />
          <Image
            src="/assets/haitam-cutout.png"
            alt="Haitam El Atifi, full-stack developer"
            width={1122}
            height={1402}
            priority
            sizes="(max-width: 1023px) 100vw, 46vw"
            className="relative z-10 h-auto w-full"
          />
        </div>

        <div className="relative z-30 -mt-8 flex items-end justify-between gap-6 pb-8 sm:-mt-12 lg:absolute lg:inset-x-[3.5%] lg:bottom-8 lg:mt-0 lg:pb-0">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)] transition-transform duration-300 hover:-translate-y-1"
              >
                <svg
                  aria-hidden="true"
                  className="size-[1.1rem]"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>

          <div className="max-w-[10rem] text-right text-xs font-semibold leading-snug sm:max-w-none sm:text-sm">
            Casablanca, Morocco
            <span className="mt-1 flex items-center justify-end gap-2 text-[var(--muted)]">
              <span className="size-2 rounded-full bg-[var(--accent)]" />
              Available for work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

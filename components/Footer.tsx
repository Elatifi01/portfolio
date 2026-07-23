import ArrowUpRightIcon from "./ArrowUpRightIcon";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--accent)] px-6 pb-8 pt-20 text-[var(--ink)] sm:px-10 lg:px-14 lg:pt-28 xl:px-20"
      id="contact"
    >
      <div className="mx-auto max-w-[1460px]">
        <p
          className="text-xs font-bold uppercase tracking-[0.24em]"
          data-scroll-reveal="intro"
        >
          05 / Start a project
        </p>

        <div className="mt-12 flex flex-col items-start justify-between gap-12 border-b border-black/25 pb-20 lg:flex-row lg:items-end">
          <h2
            className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-black leading-[0.76] tracking-[-0.085em]"
            data-scroll-reveal="intro"
            data-reveal-order="1"
          >
            Let&apos;s make
            <br />
            it real.
          </h2>
          <a
            href="mailto:elatifi.haitam@gmail.com"
            className="group grid size-24 shrink-0 place-items-center rounded-full bg-[var(--ink)] text-[var(--accent)] sm:size-32"
            aria-label="Email Haitam El Atifi"
            data-scroll-reveal="content"
            data-reveal-order="2"
          >
            <ArrowUpRightIcon className="size-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-10" />
          </a>
        </div>

        <div className="grid gap-10 pt-8 text-sm md:grid-cols-3 md:items-end">
          <div data-scroll-reveal="content" data-reveal-order="1">
            <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/55">
              Say hello
            </p>
            <a
              href="mailto:elatifi.haitam@gmail.com"
              className="font-bold underline decoration-1 underline-offset-4"
            >
              elatifi.haitam@gmail.com
            </a>
          </div>

          <p
            className="text-black/60 md:text-center"
            data-scroll-reveal="content"
            data-reveal-order="2"
          >
            Design · Development · Product thinking
          </p>

          <p
            className="text-black/60 md:text-right"
            data-scroll-reveal="content"
            data-reveal-order="3"
          >
            © {new Date().getFullYear()} Haitam El Atifi
            <br />
            Casablanca, Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}

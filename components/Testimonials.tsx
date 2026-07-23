const principles = [
  {
    number: "01",
    title: "Purpose before pixels",
    description:
      "Every screen and feature should solve a real problem. I keep the why visible while building the how.",
  },
  {
    number: "02",
    title: "Simple scales better",
    description:
      "Clear architecture and focused interfaces make products easier to use, maintain, and grow.",
  },
  {
    number: "03",
    title: "Details build trust",
    description:
      "Performance, accessibility, responsive behavior, and polish are part of the product—not an afterthought.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[var(--paper)] px-6 py-24 text-[var(--ink)] sm:px-10 lg:px-14 lg:py-32 xl:px-20"
      id="about"
    >
      <div className="mx-auto max-w-[1460px]">
        <header className="grid gap-10 md:grid-cols-[0.55fr_1.45fr]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
            03 / How I work
          </p>
          <div>
            <p className="max-w-5xl text-[clamp(2.5rem,5.8vw,6rem)] font-black leading-[0.94] tracking-[-0.065em]">
              Good software feels simple because the thinking behind it
              wasn&apos;t.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-14 bg-[var(--ink)]" />
              <p className="text-sm font-semibold text-[var(--muted)]">
                Haitam El Atifi · Full-stack developer
              </p>
            </div>
          </div>
        </header>

        <div className="mt-20 grid border-t border-[var(--line)] md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="border-b border-[var(--line)] py-9 md:min-h-80 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-sm font-bold text-[var(--muted)]">
                {principle.number}
              </span>
              <h3 className="mt-16 max-w-xs text-3xl font-black leading-tight tracking-[-0.045em]">
                {principle.title}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

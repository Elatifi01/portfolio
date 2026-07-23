const services = [
  {
    number: "01",
    title: "Design",
    description:
      "Clear interfaces, useful flows, and visual systems that make digital products easy to understand.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Responsive frontends and dependable backends built with modern, maintainable technology.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Performance, accessibility, and product polish that turn a working build into a strong experience.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Practical iteration after launch, with thoughtful fixes and steady improvements as the product grows.",
  },
];

export default function Services() {
  return (
    <section
      className="bg-[var(--ink)] px-6 py-24 text-[var(--paper)] sm:px-10 lg:px-14 lg:py-32 xl:px-20"
      id="services"
    >
      <div className="mx-auto max-w-[1460px]">
        <header className="grid gap-8 border-b border-white/20 pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end">
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

        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-80 flex-col justify-between border-b border-white/20 px-0 py-9 transition-colors duration-300 hover:bg-[var(--accent)] hover:text-[var(--ink)] md:min-h-96 md:border-r md:px-8 md:first:pl-0 md:nth-[2]:border-r-0 xl:border-b-0 xl:nth-[2]:border-r xl:last:border-r-0 xl:last:pr-0"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold">{service.number}</span>
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-full border border-current text-lg opacity-50 transition-transform duration-300 group-hover:rotate-45 group-hover:opacity-100"
                >
                  ↗
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                  {service.title}.
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-white/58 transition-colors group-hover:text-black/70">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

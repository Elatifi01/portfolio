const testimonials = [
  {
    name: "Youssef",
    role: "web designer",
    initials: "YO",
    quote:
      "Professional, reliable, and highly skilled. He transformed our design ideas into a fully functional and smooth website. The performance and user experience improved significantly.",
  },
  {
    name: "MOhammed",
    role: "Founder, CloudSync Solutions",
    initials: "MO",
    quote:
      "Working with him was a great experience. He built a fast, responsive website for our business and paid attention to every detail. Communication was clear throughout the project, and the final result exceeded our expectation",
  },
  {
    name: "Ismail Elimlahi",
    role: "Marketing Director, GrowthPeak",
    initials: "AR",
    quote:
      "An excellent web developer who truly understands modern web technologies. The website he delivered was clean, optimized, and mobile-friendly. I would definitely work with him again on future projects.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[var(--surface)] px-6 py-24 text-[var(--ink)] sm:px-10 lg:px-14 lg:py-32 xl:px-20"
      id="testimonials"
    >
      <div className="mx-auto max-w-[1460px]">
        <header
          className="grid gap-8 border-b border-[var(--line)] pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end"
          data-scroll-reveal="intro"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
            04 / Testimonials
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-4xl text-[clamp(3.25rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Kind words.
              <br />
              Real results.
            </h2>
            <span className="mb-2 hidden size-7 shrink-0 rounded-full bg-[var(--accent)] sm:block" />
          </div>
        </header>

        <div className="grid border-b border-[var(--line)] md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-scroll-reveal="content"
              data-reveal-order={index + 1}
              className="group flex min-h-[25rem] flex-col justify-between border-b border-[var(--line)] px-0 py-9 transition-colors duration-300 hover:bg-[var(--accent)] md:border-r md:px-8 md:last:border-r-0"
            >
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-full bg-[var(--ink)] text-3xl font-black text-[var(--accent)]"
              >
                “
              </span>

              <blockquote className="my-12 text-xl font-semibold leading-[1.35] tracking-[-0.025em] sm:text-2xl">
                “{testimonial.quote}”
              </blockquote>

              <footer className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-current text-xs font-black">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted)] transition-colors group-hover:text-black/65">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

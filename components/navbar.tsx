const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[var(--line)]/70 bg-[var(--paper)]/92 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-20">
        <a
          href="#home"
          className="text-xl font-black tracking-[-0.06em] sm:text-2xl"
          aria-label="Haitam El Atifi, home"
        >
          h.el atifi.
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold uppercase tracking-[0.08em] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--ink)] after:transition-[width] hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:elatifi.haitam@gmail.com"
            className="hidden items-center gap-2 text-xs font-semibold xl:flex"
          >
            <span className="size-2 rounded-full bg-[var(--accent)]" />
            Let&apos;s work together
          </a>

          <details className="group relative lg:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-[var(--line)] transition-colors hover:bg-[var(--accent)] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </summary>

            <nav
              className="absolute right-0 top-[calc(100%+0.75rem)] hidden w-56 border border-[var(--line)] bg-[var(--surface)] p-3 shadow-[0_18px_45px_rgba(23,23,23,0.12)] group-open:block"
              aria-label="Menu navigation"
            >
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-[var(--line)] px-3 py-3 text-sm font-semibold last:border-0 hover:bg-[var(--accent)]"
                >
                  {item.label}
                  <span className="text-[0.65rem] text-[var(--muted)]">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

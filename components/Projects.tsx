import Image from "next/image";
import type { CSSProperties } from "react";

const projects = [
  {
    number: "01",
    category: "Management platform",
    title: "HSE Audit",
    description:
      "A clear, structured system for managing safety protocols, incident reporting, and environmental compliance.",
    image: "/assets/hsepage.png",
    imageWidth: 1896,
    imageHeight: 915,
    href: "https://audithse.isi-dev.com/",
    tags: ["Full stack", "Dashboards", "UX"],
  },
  {
    number: "02",
    category: "Desktop application",
    title: "Hospital Management System",
    description:
      "A Java application for organizing patient records and appointments through a focused, practical interface.",
    image: "/assets/HosmanagementSystem.webp",
    imageWidth: 1200,
    imageHeight: 675,
    href: "https://github.com/Elatifi01/gestion-hopitalier",
    tags: ["Java", "OOP", "Data management"],
  },
  {
    number: "03",
    category: "Web application",
    title: "SkillTracker",
    description:
      "An interactive learning platform that helps people practice skills, monitor progress, and keep momentum.",
    image: "/assets/dashboardSkillTracker.png",
    imageWidth: 1897,
    imageHeight: 890,
    href: "https://github.com/Elatifi01/Capstone_Project",
    tags: ["React", "Laravel", "Product design"],
  },
];

export default function Projects() {
  return (
    <section
      className="bg-[var(--surface)] px-6 py-24 text-[var(--ink)] sm:px-10 lg:px-14 lg:py-32 xl:px-20"
      id="projects"
    >
      <div className="mx-auto max-w-[1460px]">
        <header
          className="grid gap-8 border-b border-[var(--line)] pb-12 md:grid-cols-[0.55fr_1.45fr] md:items-end"
          data-scroll-reveal="intro"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
            01 / Selected work
          </p>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl text-[clamp(3.25rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Work that
              <br />
              earns attention.
            </h2>
            <span className="mb-2 size-5 shrink-0 rounded-full bg-[var(--accent)] sm:size-7" />
          </div>
        </header>

        <div className="project-stack mt-10 lg:mt-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              style={
                {
                  "--stack-top": `${96 + index * 34}px`,
                  "--stack-z": index + 1,
                } as CSSProperties
              }
              className={`project-stack-card group mb-8 overflow-hidden border border-[var(--line)] ${
                index % 2 === 1
                  ? "bg-[var(--paper)]"
                  : "bg-[var(--surface)]"
              }`}
            >
              <div
                className="flex min-h-14 items-center justify-between border-b border-[var(--line)] px-5 sm:px-7"
                data-scroll-reveal="content"
              >
                <span className="text-sm font-bold">
                  Project {project.number}
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {project.category}
                </span>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16 xl:p-12">
                <div
                  className="flex flex-col justify-between gap-10 lg:py-3"
                  data-scroll-reveal="content"
                  data-reveal-order="1"
                >
                  <div>
                    <h3 className="max-w-xl text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold"
                    >
                      View project
                      <span className="grid size-9 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)] transition-transform duration-300 group-hover:rotate-45">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  data-scroll-reveal="content"
                  data-reveal-order="2"
                  className={`relative self-center overflow-hidden border border-[var(--line)] bg-[var(--paper)] p-3 sm:p-5 ${
                    index % 2 === 1 ? "lg:rotate-[0.35deg]" : ""
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#deddd7]">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface`}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      sizes="(max-width: 1023px) 100vw, 64vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

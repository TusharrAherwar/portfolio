import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI Code Review Platform",
    description:
      "An AI-powered platform that reviews code, identifies potential issues, and provides actionable suggestions to improve code quality.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Gemini",
      "Docker",
    ],
    github: "https://github.com/TusharrAherwar",
    category: "AI / Developer Tools",
  },
  {
    number: "02",
    title: "Backend Processing System",
    description:
      "A backend system designed for reliable background processing, asynchronous jobs, API integrations, and efficient data handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "Redis",
      "BullMQ",
      "PostgreSQL",
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    category: "Backend Engineering",
  },
  {
    number: "03",
    title: "REST API Platform",
    description:
      "A structured API backend featuring authentication, role-based access control, database operations, and consistent error handling.",
    technologies: [
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Prisma",
    ],
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    category: "API Development",
  },
];

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-[#111116] px-5 py-20 text-[#E6E1D9] sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#B6A4D0]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-14"
        >
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B6A4D0]"
            />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#AAA3B5]">
              Selected work
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-3xl font-semibold tracking-tight text-[#E6E1D9] sm:text-4xl"
          >
            Projects<span className="text-[#B6A4D0]">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#B8B3C2] sm:text-base">
            A collection of projects exploring backend engineering, AI
            integration, and reliable software systems.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 32 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#19191F]/80 p-5 transition-[border-color,background-color] duration-300 hover:border-[#B6A4D0]/30 hover:bg-[#19191F] sm:p-6"
            >
              {/* Subtle top accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B6A4D0]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Card header */}
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-sm tracking-widest text-[#B6A4D0]">
                  {project.number}
                </span>

                <span className="rounded-full border border-[#B6A4D0]/20 bg-[#B6A4D0]/[0.05] px-3 py-1 text-[11px] font-medium text-[#C9C4CF]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold leading-snug text-[#E6E1D9] transition-colors duration-300 group-hover:text-[#D0C9D8]">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#B8B3C2]">
                {project.description}
              </p>

              {/* Technology list */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/[0.07] bg-[#111116] px-2.5 py-1.5 text-xs text-[#C9C4CF] transition-colors duration-300 group-hover:border-white/[0.10]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className="mt-7 border-t border-white/[0.08] pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#B8B3C2] transition-colors duration-300 hover:text-[#B6A4D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A4D0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#19191F]"
                >
                  View on GitHub
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
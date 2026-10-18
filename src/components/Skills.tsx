import { skillGroups } from "../config/skills";

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative flex min-h-screen flex-col justify-center
        overflow-hidden bg-[#111116]
        px-5 py-10 text-[#B8B3C2]
        sm:px-8
        lg:h-screen lg:min-h-[600px] lg:px-12 lg:py-8
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-7 sm:mb-8 lg:mb-9">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B6A4D0]"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#AAA3B5] sm:text-xs">
              Technical expertise
            </span>
          </div>

          <h2
            id="skills-heading"
            className="
              text-3xl font-medium leading-tight
              tracking-[-0.04em] text-[#E6E1D9]
              sm:text-4xl lg:text-5xl
            "
          >
            Technologies{" "}
            <span className="text-[#B6A4D0]">I work with.</span>
          </h2>
        </header>

        <div className="border-t border-white/[0.10]">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="
                group/row relative border-b border-white/[0.10]
                py-4 transition-colors duration-200
                hover:border-[#B6A4D0]/30
                sm:py-5 lg:py-4 xl:py-5
              "
            >
              <div
                className="
                  grid gap-3 sm:grid-cols-[190px_minmax(0,1fr)]
                  sm:items-center lg:grid-cols-[220px_minmax(0,1fr)]
                  lg:gap-8
                "
              >
                <div className="flex items-center gap-3">
  

                  <h3
                    className="
                      text-[10px] font-semibold uppercase
                      tracking-[0.15em] text-[#AAA3B5]
                      transition-colors duration-200
                      group-hover/row:text-[#D0C9D8]
                      sm:text-[11px] lg:text-xs
                    "
                  >
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6 lg:gap-x-7">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li key={skill.name}>
                        <div
                          className="
                            group/skill inline-flex items-center gap-2.5
                            transition-transform duration-200
                            hover:-translate-y-0.5
                            motion-reduce:transform-none
                            motion-reduce:transition-none
                          "
                        >
                          {Icon ? (
                            <Icon
                              aria-hidden="true"
                              className="
                                h-5 w-5 shrink-0
                                transition-transform duration-200
                                group-hover/skill:scale-105
                              "
                              style={{
                                color: skill.color ?? "#B6A4D0",
                              }}
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6A4D0]/80"
                            />
                          )}

                          <span
                            className="
                              text-[13px] font-medium text-[#C9C4CF]
                              transition-colors duration-200
                              group-hover/skill:text-[#E6E1D9]
                              sm:text-sm
                            "
                          >
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
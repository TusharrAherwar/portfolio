import { useEffect, useRef, useState } from "react";
import { experiences } from "../config/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollToExperience = (index: number) => {
    setActiveIndex(index);

    document.getElementById(`experience-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(
        "article[id^='experience-']",
      ),
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - 120) -
              Math.abs(b.boundingClientRect.top - 120),
          );

        if (!visibleCards.length) return;

        const activeCard = visibleCards[0].target as HTMLElement;
        const index = cards.indexOf(activeCard);

        if (index !== -1) setActiveIndex(index);
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: 0,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="
        relative min-h-screen overflow-clip
        bg-[#111116] px-5 pt-[5px] pb-16
        text-[#E6E1D9]
        sm:px-8 lg:px-12
      "
    >
      <div
        className="
          relative mx-auto grid w-full max-w-6xl
          items-start gap-10
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-16
        "
      >
        <aside className="h-fit self-start lg:sticky lg:top-24">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#B6A4D0]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AAA3B5]">
                Career
              </p>
            </div>

            <h2
              id="experience-heading"
              className="
                text-4xl font-semibold tracking-[-0.035em]
                text-[#E6E1D9] sm:text-5xl
              "
            >
              Experience
              <span className="text-[#B6A4D0]">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#B8B3C2]">
              Where I've been, what I've built, and how I've grown as a
              software engineer.
            </p>
          </div>

          <nav aria-label="Experience navigation" className="space-y-3">
            {experiences.map((experience, index) => (
              <button
                key={`${experience.company}-${experience.period}`}
                type="button"
                aria-controls={`experience-${index}`}
                aria-current={
                  activeIndex === index ? "location" : undefined
                }
                onClick={() => scrollToExperience(index)}
                className={`
                  group w-full rounded-xl border p-4 text-left
                  transition-colors duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#B6A4D0]
                  ${
                    activeIndex === index
                      ? "border-[#B6A4D0]/30 bg-[#19191F]"
                      : "border-white/[0.10] bg-[#111116] hover:border-[#B6A4D0]/25 hover:bg-[#19191F]"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`
                        font-semibold transition-colors
                        ${
                          activeIndex === index
                            ? "text-[#E6E1D9]"
                            : "text-[#C9C4CF] group-hover:text-[#E6E1D9]"
                        }
                      `}
                    >
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-[#B8B3C2]">
                      {experience.company}
                    </p>
                  </div>

                  {experience.current && (
                    <span className="mt-1 flex shrink-0 items-center gap-2 text-xs text-[#C9C4CF]">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#B6A4D0]"
                      />
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs tracking-wide text-[#77717F]">
                  {experience.period}
                </p>
              </button>
            ))}
          </nav>
        </aside>

        <div ref={cardsRef} className="mt-22 min-w-0 space-y-6">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              id={`experience-${index}`}
              aria-labelledby={`experience-title-${index}`}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                scroll-mt-24 rounded-2xl border p-5
                transition-colors duration-200 sm:p-7
                ${
                  activeIndex === index
                    ? "border-[#B6A4D0]/25 bg-[#19191F]"
                    : "border-white/[0.10] bg-[#111116]"
                }
              `}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3
                    id={`experience-title-${index}`}
                    className="text-xl font-semibold tracking-tight text-[#E6E1D9] sm:text-2xl"
                  >
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-medium text-[#B6A4D0]">
                    {experience.company}
                  </p>

                  <p className="mt-1 text-sm text-[#B8B3C2]">
                    {experience.location}
                  </p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-[#B6A4D0]/20 bg-[#B6A4D0]/[0.05] px-3 py-1.5 text-xs font-medium text-[#C9C4CF]">
                  {experience.period}
                </span>
              </div>

              <div
                aria-hidden="true"
                className="my-6 h-px bg-gradient-to-r from-[#B6A4D0]/30 via-white/[0.08] to-transparent"
              />

              <ul className="space-y-4">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-7 text-[#B8B3C2] sm:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6A4D0]"
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#AAA3B5]">
                  Technologies
                </h4>

                <ul className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="
                        rounded-lg border border-white/[0.10]
                        bg-white/[0.025] px-3 py-1.5
                        text-xs font-medium text-[#C9C4CF]
                        transition-colors duration-200
                        hover:border-[#B6A4D0]/30
                        hover:bg-[#B6A4D0]/[0.05]
                        hover:text-[#E6E1D9]
                        motion-reduce:transition-none
                      "
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
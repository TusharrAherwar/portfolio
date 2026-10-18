import profilePhoto from "../images/profile.jpg";
import { aboutContent } from "../config/about";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative flex min-h-screen items-center
        overflow-hidden bg-[#111116]
        px-5 py-16 text-[#E6E1D9]
        sm:px-8 sm:py-20
        lg:px-12 lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B6A4D0]"
            />

            <h2
              id="about-heading"
              className="
                text-xs font-medium uppercase
                tracking-[0.24em] text-[#AAA3B5]
              "
            >
              About me
            </h2>
          </div>

          <p
            className="
              mt-2 max-w-2xl text-sm leading-6
              text-[#B8B3C2] sm:text-base sm:leading-7
            "
          >
            {aboutContent.intro}
          </p>
        </header>

        <div
          className="
            grid items-center gap-8
            md:grid-cols-[0.85fr_1.15fr]
            lg:gap-14
          "
        >

          <div
            className="
              mx-auto w-full max-w-[280px]
              sm:max-w-[300px]
              md:max-w-[310px]
              lg:max-w-[350px]
            "
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  absolute -right-2.5 -top-2.5
                  h-full w-full rounded-2xl
                  border border-[#B6A4D0]/25
                "
              />

              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-[#19191F] p-1.5
                "
              >
                <div className="relative aspect-[4/5.2] overflow-hidden rounded-xl">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Tushar Aherwar"
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full w-full object-cover object-center
                      transition-transform duration-700
                      motion-reduce:transition-none
                      motion-safe:hover:scale-[1.025]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t
                      from-[#111116]/25
                      via-transparent
                      to-[#111116]/5
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p
              className="
                text-xs font-medium uppercase
                tracking-[0.18em] text-[#B6A4D0]
              "
            >
              {aboutContent.eyebrow}
            </p>

            <h3
              className="
                mt-3 max-w-xl text-2xl font-medium
                leading-snug tracking-tight text-[#E6E1D9]
                sm:text-3xl lg:text-4xl
              "
            >
              {aboutContent.heading}
            </h3>

            <div
              className="
                mt-5 max-w-2xl space-y-4
                text-sm leading-6 text-[#B8B3C2]
                sm:text-[15px] sm:leading-7
              "
            >
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul
              aria-label="Areas of focus"
              className="mt-6 flex flex-wrap gap-2"
            >
              {aboutContent.focusAreas.map((area) => (
                <li
                  key={area}
                  className="
                    rounded-full border border-[#B6A4D0]/20
                    bg-[#B6A4D0]/[0.05] px-3 py-1.5
                    text-xs text-[#C9C4CF]
                    transition-colors duration-300
                    hover:border-[#B6A4D0]/40
                    hover:bg-[#B6A4D0]/[0.10]
                    motion-reduce:transition-none
                  "
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
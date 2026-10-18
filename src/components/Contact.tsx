import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const email = "tusharaherwar33@gmail.com";

const socials = [
  {
    name: "GitHub",
    description: "Repositories & projects",
    href: "https://github.com/TusharrAherwar",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    description: "Professional connections",
    href: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    description: "Problem-solving journey",
    href: "https://leetcode.com/u/YOUR_LEETCODE_USERNAME/",
    icon: SiLeetcode,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-[#111116] px-5 py-20 text-[#E6E1D9] sm:px-8 sm:py-24 lg:min-h-[600px] lg:px-12"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-80 w-80 rounded-full bg-[#B6A4D0]/[0.06] blur-[110px]"
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <header className="mb-9 sm:mb-11">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B6A4D0]"
            />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#AAA3B5]">
              Get in touch
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-[#E6E1D9] sm:text-4xl lg:text-5xl"
          >
            Have a project{" "}
            <span className="text-[#B6A4D0]">in mind?</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#B8B3C2] sm:text-base">
            Open to backend engineering opportunities, collaborations,
            and conversations about building reliable software.
          </p>
        </header>

        {/* Contact panels */}
        <div className="grid items-stretch gap-5 md:grid-cols-[1.1fr_0.9fr]">
          {/* Email panel */}
          <div className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#19191F] p-5 transition-colors duration-300 hover:border-[#B6A4D0]/30 sm:p-7 lg:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B6A4D0]/20 bg-[#B6A4D0]/[0.06] text-[#B6A4D0] transition-colors duration-300 group-hover:bg-[#B6A4D0]/[0.10]">
                <FiMail className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#E6E1D9] sm:text-2xl">
                Let's start a conversation.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-[#B8B3C2]">
                Have an opportunity or an interesting idea? I'd love
                to hear from you.
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#77717F]">
                Email address
              </p>

              <a
                href={`mailto:${email}`}
                className="group/email inline-flex max-w-full items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A4D0]"
              >
                <span className="break-all text-sm font-medium text-[#E6E1D9] transition-colors duration-300 group-hover/email:text-[#B6A4D0] sm:text-base">
                  {email}
                </span>

                <FiArrowUpRight className="h-5 w-5 shrink-0 text-[#B6A4D0] transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Social links panel */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#19191F]/70 p-5 sm:p-7 lg:p-8">
            <h3 className="text-lg font-semibold text-[#E6E1D9]">
              Find me online
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#B8B3C2]">
              Connect and explore my work.
            </p>

            <div className="mt-5">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name}: ${social.description}`}
                    className={`group/social flex items-center gap-3 rounded-lg py-3 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A4D0] ${
                      index > 0 ? "border-t border-white/[0.07]" : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111116] text-[#B6A4D0] transition-all duration-300 group-hover/social:border-[#B6A4D0]/25 group-hover/social:bg-[#B6A4D0]/[0.07]">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-[#E6E1D9] transition-colors duration-300 group-hover/social:text-[#B6A4D0]">
                        {social.name}
                      </span>

                      <span className="mt-1 block text-xs text-[#77717F]">
                        {social.description}
                      </span>
                    </span>

                    <FiArrowUpRight className="h-4 w-4 shrink-0 text-[#77717F] transition-all duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5 group-hover/social:text-[#B6A4D0]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
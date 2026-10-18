import { useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";
import ShapeGridBackground from "./backgrounds/ShapeGrid/ShapeGridBackground";
import "../styles/animations.css";

function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.85));

        content.style.opacity = String(fade);
        content.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
        content.style.filter = `blur(${Math.min(scrollY * 0.008, 4)}px)`;

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="
        hero-section relative isolate flex min-h-svh items-center
        overflow-hidden bg-[#111116]
        px-5 pb-16 pt-24 text-[#E6E1D9]
        sm:px-8 lg:px-12
      "
    >
      <ShapeGridBackground />

      <div
        ref={contentRef}
        className="
          relative z-10 mx-auto w-full max-w-6xl
          transition-[opacity,filter,transform]
          duration-150 ease-out
          motion-reduce:transition-none
        "
      >
        <div className="max-w-3xl pl-0 sm:pl-10 lg:pl-24">
          <p
            className="
              hero-reveal mb-6 flex items-center gap-3
              text-xs font-semibold uppercase tracking-[0.22em]
              text-[#AAA3B5] sm:text-sm
            "
          >
            <span className="h-px w-9 bg-[#B6A4D0]" />
            Software Engineer
          </p>

          <h1
            className="
              hero-reveal hero-reveal-delay-1 hero-title
              text-5xl font-semibold leading-[1.02]
              tracking-[-0.055em] text-[#E6E1D9]
              sm:text-7xl lg:text-8xl xl:text-[6rem]
            "
          >
            Tushar
            <br />
            Aherwar
            <span className="text-[#B6A4D0]">.</span>
          </h1>

          <p
            className="
              hero-reveal hero-reveal-delay-2 mt-7 max-w-xl
              text-base leading-7 text-[#B8B3C2]
              sm:text-lg sm:leading-8
            "
          >
            I build reliable backend systems, scalable APIs, and applications
            that solve real-world problems.
          </p>

          <div
            className="
              hero-reveal hero-reveal-delay-3 mt-9
              flex flex-wrap items-center gap-3 sm:gap-4
            "
          >
            <a
              href="#projects"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-[#B6A4D0]/30
                bg-[#B6A4D0] px-6 py-3
                text-sm font-semibold text-[#111116]
                transition-colors duration-200
                hover:bg-[#C7B9DA]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#B6A4D0]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#111116]
              "
            >
              View my work
            </a>

            <a
              href="#contact"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-white/[0.10]
                bg-[#19191F] px-6 py-3
                text-sm font-medium text-[#E6E1D9]
                transition-colors duration-200
                hover:border-[#B6A4D0]/40
                hover:bg-[#B6A4D0]/[0.07]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#B6A4D0]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#111116]
              "
            >
              Get in touch
            </a>
          </div>

          <div className="hero-reveal hero-reveal-delay-4 mt-9">
            <SocialLinks />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          absolute bottom-5 left-1/2 z-10
          flex -translate-x-1/2 flex-col items-center gap-1.5
          text-[10px] font-medium uppercase tracking-[0.2em]
          text-[#77717F] transition-colors duration-200
          hover:text-[#B6A4D0] sm:bottom-7
        "
      >
        <span>Scroll to explore</span>
        <span className="hero-scroll-indicator text-lg text-[#B6A4D0]">↓</span>
      </a>
    </section>
  );
}

export default Hero;

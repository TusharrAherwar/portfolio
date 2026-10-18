import { useEffect, useState } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineCancel,
} from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

import { navigationLinks } from "../config/navigation";
import { useActiveSection } from "../hooks/useActiveSection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const light = savedTheme === "light";

    setIsLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;

    setIsLight(nextIsLight);

    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";

    localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    setActiveSection(href.slice(1));
    closeMenu();
  };

  return (
    <header className="fixed inset-x-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="
          relative mx-auto flex max-w-7xl items-center justify-between
          rounded-2xl border border-[var(--nav-border)]
          bg-[var(--navbar-bg)] px-3 py-3
          shadow-[0_6px_25px_var(--nav-shadow)]
          backdrop-blur-xl sm:px-6
        "
      >
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border border-[var(--nav-border)]
            bg-[var(--surface)] text-sm font-bold tracking-tight
            transition-colors duration-200
            hover:border-[var(--accent)]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-[var(--accent)]
          "
        >
          <span className="text-[var(--text-primary)]">T</span>
          <span className="text-[var(--accent)]">A</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`
                  group relative py-2 text-sm font-medium
                  transition-colors duration-200 xl:text-base
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[var(--accent)]
                  ${
                    isActive
                      ? "text-[var(--accent-highlight)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute -bottom-0.5 left-0 h-px
                    bg-[var(--accent-highlight)]
                    transition-all duration-300
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                    }
                  `}
                />
              </a>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-[var(--nav-border)]
              bg-[var(--surface)] text-lg text-[var(--text-secondary)]
              transition-colors duration-200
              hover:text-[var(--accent-highlight)]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[var(--accent)]
            "
          >
            {isLight ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden items-center gap-2 rounded-full
              border border-[var(--nav-border)]
              bg-[var(--resume-bg)] px-5 py-2.5
              text-sm font-medium text-[var(--text-primary)]
              transition-colors duration-200
              hover:border-[var(--accent)]/50
              hover:bg-[var(--accent)]/10
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[var(--accent)]
              sm:inline-flex
            "
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-[var(--nav-border)]
              bg-[var(--surface)] text-xl text-[var(--text-primary)]
              transition-colors duration-200
              hover:text-[var(--accent-highlight)] lg:hidden
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[var(--accent)]
            "
          >
            {menuOpen ? <MdOutlineCancel /> : <CiMenuFries />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          inert={!menuOpen}
          aria-hidden={!menuOpen}
          className={`
            absolute left-0 right-0 top-[calc(100%+12px)]
            rounded-2xl border border-[var(--nav-border)]
            bg-[var(--navbar-bg)] p-5
            shadow-[0_12px_30px_var(--nav-shadow)]
            backdrop-blur-xl transition-all duration-200
            lg:hidden
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  aria-current={isActive ? "location" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`
                    flex items-center justify-between
                    border-b border-[var(--nav-border)]
                    px-1 py-3 text-sm font-medium
                    transition-colors duration-200 last:border-b-0
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[var(--accent)]
                    ${
                      isActive
                        ? "text-[var(--accent-highlight)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }
                  `}
                >
                  {link.label}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="text-xs text-[var(--accent)]"
                    >
                      —
                    </span>
                  )}
                </a>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="
                mt-4 flex items-center justify-center gap-2
                rounded-full border border-[var(--nav-border)]
                bg-[var(--resume-bg)] px-4 py-3
                text-sm font-medium text-[var(--text-primary)]
                transition-colors duration-200
                hover:border-[var(--accent)]/50
                hover:bg-[var(--accent)]/10
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--accent)]
              "
            >
              View Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
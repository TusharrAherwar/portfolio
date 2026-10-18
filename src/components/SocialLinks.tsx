
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-aherwar3",
    Icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/TusharrAherwar",
    Icon: SiGithub,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/TusharAherwar3333",
    Icon: SiLeetcode,
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8170B0]/70 hover:bg-[#211A30] hover:text-[#C4B5FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A99BCB]"
        >
          <Icon
            size={19}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

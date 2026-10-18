import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGitlab,
  SiGooglegemini,
  SiGoogle,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export interface Skill {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#E9E2F2" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Prisma", icon: SiPrisma, color: "#A8B4D0" },
      { name: "Caching" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "REST APIs" },
      { name: "Authentication & Authorization" },
      { name: "RBAC" },
      { name: "WebSockets" },
      { name: "BullMQ" },
      { name: "Microservices" },
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      { name: "Gemini", icon: SiGooglegemini, color: "#8E75FF" },
      { name: "Google GenAI SDK", icon: SiGoogle, color: "#4285F4" },
      { name: "LLM Integration" },
      { name: "Webhooks" },
      { name: "Payment Gateways" },
      { name: "Agile" },
    ],
  },
];
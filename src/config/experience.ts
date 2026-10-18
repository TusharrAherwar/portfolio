
import type { ExperienceItem } from "../types/experience";

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer I",
    company: "Homeville Group",
    location: "Mumbai, Maharashtra",
    period: "Sep 2025 – Present",
    current: true,
    points: [
      "Reduced API response times by 60% across 20+ REST APIs through query optimization and backend improvements.",
      "Scaled pre-EMI monitoring to 10,000+ loan accounts using Account Aggregator and cron-driven processing.",
      "Integrated PhonePe EMI collections into the loan repayment workflow.",
      "Improved report generation performance by 30–40% by eliminating N+1 queries and implementing chunked processing.",
      "Built a ZIP-based bulk ingestion pipeline supporting six entity types.",
      "Refactored transaction management across 44+ backend files to improve consistency and maintainability.",
      "Improved loan lifecycle workflows and background processing to reduce manual corrections and payment failures.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "Redis",
    ],
  },
  {
    role: "Developer Intern",
    company: "Homeville Group",
    location: "Mumbai, Maharashtra",
    period: "Jan 2025 – Jul 2025",
    current: false,
    points: [
      "Developed and maintained backend APIs for internal loan management and business workflows.",
      "Worked on database queries, API integrations, and backend bug fixes.",
      "Collaborated with the development team to improve application reliability and deliver assigned features.",
    ],
    technologies: [
      "JavaScript",
      "REST APIs",
      "MySQL",
      "Backend Development",
    ],
  },
];

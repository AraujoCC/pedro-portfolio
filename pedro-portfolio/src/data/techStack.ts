export interface TechItem {
  name: string;
  file: string;
  color: string;
  orbit: number;
  speed: number; // degrees per second
  phase: number; // initial angle in radians
  category: "frontend" | "backend" | "database" | "tools";
  proficiency: number; // 0–1
}

export const techItems: TechItem[] = [
  { name: "React",      file: "react.svg",      color: "#61DAFB", orbit: 112, speed: 22, phase: 0,    category: "frontend", proficiency: 0.92 },
  { name: "Next.js",    file: "nextjs.svg",     color: "#ffffff", orbit: 152, speed: 17, phase: 1.05, category: "frontend", proficiency: 0.88 },
  { name: "TypeScript", file: "typescript.svg", color: "#3178C6", orbit: 190, speed: 13, phase: 2.09, category: "frontend", proficiency: 0.85 },
  { name: "Java",       file: "java.svg",       color: "#F89820", orbit: 220, speed: 10, phase: 3.14, category: "backend",  proficiency: 0.90 },
  { name: "Node.js",    file: "nodejs.svg",     color: "#68A063", orbit: 185, speed: 15, phase: 0.52, category: "backend",  proficiency: 0.82 },
  { name: "SQL",        file: "sql.svg",        color: "#a0c4ff", orbit: 128, speed: 20, phase: 3.67, category: "database", proficiency: 0.88 },
];

export const techColumns = [
  {
    name: "Frontend",
    items: [
      { label: "React",       proficiency: 0.92 },
      { label: "Next.js",     proficiency: 0.88 },
      { label: "TypeScript",  proficiency: 0.85 },
      { label: "JavaScript",  proficiency: 0.90 },
      { label: "Tailwind CSS",proficiency: 0.84 },
      { label: "HTML / CSS",  proficiency: 0.95 },
    ],
  },
  {
    name: "Backend",
    items: [
      { label: "Java",        proficiency: 0.90 },
      { label: "Spring Boot", proficiency: 0.87 },
      { label: "Node.js",     proficiency: 0.82 },
      { label: "REST APIs",   proficiency: 0.90 },
    ],
  },
  {
    name: "Database",
    items: [
      { label: "PostgreSQL",    proficiency: 0.85 },
      { label: "SQL",           proficiency: 0.88 },
      { label: "JPA/Hibernate", proficiency: 0.80 },
    ],
  },
  {
    name: "Tools",
    items: [
      { label: "Git",    proficiency: 0.95 },
      { label: "GitHub", proficiency: 0.95 },
      { label: "Vercel", proficiency: 0.80 },
      { label: "Render", proficiency: 0.75 },
    ],
  },
];

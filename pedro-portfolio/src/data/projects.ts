export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  github: string;
  demo?: string;
  glowColor: string;
  architecture?: string[];
}

export const projects: Project[] = [
  {
    id: "agendapro",
    number: "01",
    title: "AgendaPro",
    description:
      "Full stack appointment management system simulating a real corporate environment. REST API with layered architecture and a responsive React dashboard.",
    features: [
      "CRUD for appointments with advanced filtering",
      "Deadline alerts & client management module",
      "Dashboard with KPI indicators & dark mode",
      "Global exception handling and bean validation",
    ],
    architecture: ["React Frontend", "Spring Boot API", "PostgreSQL"],
    tags: ["Spring Boot", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/AraujoCC",
    demo: "https://agendapro-mu.vercel.app/agenda",
    glowColor: "#3366cc",
  },
  {
    id: "hayhgang",
    number: "02",
    title: "HayhGang",
    description:
      "Full stack e-commerce platform built from scratch with modern design and real-world architecture. Frontend on Vercel, backend on Render.",
    features: [
      "Full stack frontend + backend integration",
      "Node.js REST API for product & cart management",
      "Deployed on Vercel (FE) + Render (BE)",
      "Responsive & modern TailwindCSS UI",
    ],
    architecture: ["React Frontend", "Node.js API", "Render Deploy"],
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    github: "https://github.com/AraujoCC",
    demo: "https://hayh-gang-projeto-emww.vercel.app/",
    glowColor: "#888888",
  },
  {
    id: "carstorage",
    number: "03",
    title: "Car Storage",
    description:
      "Full stack vehicle management system simulating a vehicle store. Focused on backend architecture, OOP design, and clean project structure.",
    features: [
      "Complete CRUD — register, update, delete vehicles",
      "OOP-driven backend architecture",
      "JPA / Hibernate database integration",
      "Clean, maintainable layered project structure",
    ],
    architecture: ["Spring Boot API", "JPA/Hibernate", "PostgreSQL"],
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA"],
    github: "https://github.com/AraujoCC",
    glowColor: "#446655",
  },
];
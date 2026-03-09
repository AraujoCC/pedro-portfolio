"use client";
import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const EXPERIENCE = [
  {
    dates: "March 2024 — Present",
    badge: "Remote",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description:
      "Working as a freelance web developer building websites and web applications for clients, from requirements definition to final deployment.",
    bullets: [
      "Development of web applications using HTML, CSS and JavaScript",
      "Creation of responsive and modern user interfaces",
      "Structuring projects following clean code and best practices",
      "Version control using Git and GitHub",
      "Direct communication with clients for requirements gathering",
      "Deployment and maintenance of web applications",
    ],
  },
];

const EDUCATION = [
  {
    years: "2025 — 2028",
    status: "In progress",
    degree: "Bachelor of Science in Computer Science",
    institution: "Universidade Salvador",
    tags: [
      "Software Development",
      "Backend Systems",
      "Computer Architecture",
      "Algorithms",
      "System Modeling",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Experience */}
      <section
        id="experience"
        ref={sectionRef}
        className="py-28 lg:py-36"
        style={{ background: "linear-gradient(180deg,#000 0%,#080808 100%)" }}
      >
        <Container>
          <div className="reveal">
            <SectionEyebrow number="03" label="Experience" />
          </div>
          <h2
            className="reveal font-body font-bold tracking-[-0.035em] leading-[1.04] mb-14"
            style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", transitionDelay: "0.05s" }}
          >
            Work
            <br />
            <span className="font-light text-white/55">history.</span>
          </h2>

          <div className="max-w-[820px]">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="reveal grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-white/[0.07] last:border-b-0"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] text-white/30 leading-[1.7] mb-1.5">
                    {exp.dates}
                  </p>
                  <span className="inline-block font-mono text-[0.56rem] tracking-[0.1em] uppercase text-white/38 border border-white/[0.08] px-2.5 py-0.5 rounded-sm">
                    {exp.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-body font-bold text-[1.15rem] tracking-[-0.025em] text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[0.88rem] text-white/55 mb-5">{exp.company}</p>
                  <p className="text-[0.9rem] leading-[1.78] text-white/55 mb-5">
                    {exp.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-[0.875rem] text-white/50 pl-5 relative leading-[1.65] before:content-['--'] before:absolute before:left-0 before:text-white/25 before:font-mono"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section id="education" className="py-28 lg:py-36" style={{ background: "linear-gradient(180deg,#080808 0%,#000 100%)" }}>
        <Container>
          <SectionEyebrow number="05" label="Education" />
          <h2
            className="reveal font-body font-bold tracking-[-0.035em] leading-[1.04] mb-12"
            style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}
          >
            Academic
            <br />
            <span className="font-light text-white/55">background.</span>
          </h2>

          {EDUCATION.map((ed, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.026] max-w-[820px] grid grid-cols-[180px_1fr] gap-10 p-8 transition-all duration-400 hover:border-white/[0.15] hover:bg-white/[0.04]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.07em] text-white/30 leading-[1.7]">
                  <strong className="block text-[0.78rem] text-white/55 mb-1">{ed.years}</strong>
                  {ed.status}
                </p>
              </div>
              <div>
                <h3 className="font-body font-bold text-[1.12rem] tracking-[-0.025em] text-white mb-1">
                  {ed.degree}
                </h3>
                <p className="text-[0.88rem] text-white/55 mb-5">{ed.institution}</p>
                <div className="flex flex-wrap gap-2">
                  {ed.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.6rem] tracking-[0.07em] text-white/30 border border-white/[0.08] px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

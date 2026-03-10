"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import Container from "./layout/Container";
import SectionEyebrow from "./ui/SectionEyebrow";
import Card from "./ui/Card";

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-36 lg:py-48 bg-black">
      <Container>
        <SectionEyebrow number="04" label="Projects" />
        <h2
          className="reveal font-body font-bold tracking-[-0.035em] leading-[1.04] mb-14"
          style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}
        >
          Selected
          <br />
          <span className="font-light text-white/55">work.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className={`reveal flex flex-col cursor-none`}
              style={{ transitionDelay: `${idx * 0.08}s` } as React.CSSProperties}
            >
              {/* Visual header */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(135deg,#080808,#0f0f10)" }}
              >
                {/* Glow blob */}
                <div
                  className="absolute rounded-full opacity-10 blur-[42px] transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    width: 220,
                    height: 220,
                    background: project.glowColor,
                    top: -50,
                    left: -30,
                  }}
                />
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-400"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
                {/* Number */}
                <span className="absolute bottom-1 right-4 font-body font-bold text-[4rem] text-white/[0.04] leading-none select-none">
                  {project.number}
                </span>
                {/* Decorative SVG */}
                <ProjectIcon index={idx} />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.56rem] tracking-[0.08em] uppercase text-white/30 border border-white/[0.08] px-2 py-0.5 rounded-sm transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-body font-bold text-[1.1rem] tracking-[-0.02em] text-white mb-2 transition-all duration-300 hover:text-metal">
                  {project.title}
                </h3>

                <p className="text-[0.875rem] leading-[1.72] text-white/55 mb-4 flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-col gap-1.5 mb-5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="font-mono text-[0.62rem] tracking-[0.03em] text-white/30 pl-4 relative leading-relaxed before:content-['>'] before:absolute before:left-0 before:text-white/25"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white/30 hover:text-white transition-colors duration-300 cursor-none"
                  >
                    <ArrowIcon /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white/30 hover:text-white transition-colors duration-300 cursor-none"
                    >
                      <ArrowIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectIcon({ index }: { index: number }) {
  if (index === 0)
    return (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="relative z-10">
        <rect x="7" y="7" width="23" height="23" rx="2" stroke="rgba(255,255,255,.22)" strokeWidth="1.2" fill="rgba(255,255,255,.04)" />
        <rect x="38" y="7" width="23" height="23" rx="2" stroke="rgba(255,255,255,.12)" strokeWidth="1.2" fill="rgba(255,255,255,.02)" />
        <rect x="7" y="38" width="23" height="23" rx="2" stroke="rgba(255,255,255,.12)" strokeWidth="1.2" fill="rgba(255,255,255,.02)" />
        <rect x="38" y="38" width="23" height="23" rx="2" stroke="rgba(255,255,255,.08)" strokeWidth="1.2" fill="rgba(255,255,255,.02)" />
        <line x1="30" y1="18" x2="38" y2="18" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        <line x1="18" y1="30" x2="18" y2="38" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        <line x1="49" y1="30" x2="49" y2="38" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <line x1="30" y1="49" x2="38" y2="49" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
      </svg>
    );
  if (index === 1)
    return (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="relative z-10">
        <rect x="10" y="18" width="48" height="28" rx="3" stroke="rgba(255,255,255,.18)" strokeWidth="1.2" fill="rgba(255,255,255,.025)" />
        <rect x="18" y="24" width="13" height="13" rx="2" fill="rgba(255,255,255,.07)" />
        <rect x="37" y="24" width="14" height="4" rx="1" fill="rgba(255,255,255,.1)" />
        <rect x="37" y="32" width="10" height="3" rx="1" fill="rgba(255,255,255,.06)" />
        <line x1="18" y1="46" x2="50" y2="46" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
      </svg>
    );
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="relative z-10">
      <rect x="9" y="22" width="50" height="8" rx="2" stroke="rgba(255,255,255,.18)" strokeWidth="1.2" fill="rgba(255,255,255,.025)" />
      <rect x="9" y="34" width="50" height="8" rx="2" stroke="rgba(255,255,255,.1)" strokeWidth="1.2" fill="rgba(255,255,255,.015)" />
      <rect x="9" y="46" width="50" height="8" rx="2" stroke="rgba(255,255,255,.07)" strokeWidth="1.2" fill="rgba(255,255,255,.01)" />
      <circle cx="16" cy="26" r="2.5" fill="rgba(255,255,255,.28)" />
      <rect x="23" y="24.5" width="18" height="3" rx="1" fill="rgba(255,255,255,.14)" />
    </svg>
  );
}

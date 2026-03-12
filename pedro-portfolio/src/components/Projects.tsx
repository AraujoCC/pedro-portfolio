Vejo o problema — as tags <a estão sumindo toda vez que você cola o código. Isso acontece porque o editor está interpretando o <a como HTML.
Abra o arquivo no VS Code, seleciona tudo (Ctrl+A), deleta tudo e cola exatamente isto:
tsx"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PROJECT_IMAGES: Record<string, string> = {
  agendapro: "/projects/agendapro.png",
  hayhgang: "/projects/hayhgang.png",
};

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  fontFamily: "var(--font-mono)",
  fontSize: "0.62rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.3)",
  textDecoration: "none",
  transition: "color 0.28s",
};

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-wrap">
      <div className="section-inner">
        <div className="eyebrow reveal">
          <span className="eyebrow-num">04</span>
          <div className="eyebrow-line" />
          <span className="eyebrow-label">Projects</span>
        </div>
        <h2 className="section-title reveal">
          Selected<br /><span className="dim">work.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", width: "100%", margin: "0 auto" }}>
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="card reveal"
              style={{ display: "flex", flexDirection: "column", transitionDelay: `${idx * 0.08}s` } as React.CSSProperties}
            >
              <div style={{ height: 200, position: "relative", overflow: "hidden", background: "#080808" }}>
                {PROJECT_IMAGES[project.id] ? (
                  <Image
                    src={PROJECT_IMAGES[project.id]}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#080808,#0f0f10)", position: "relative" }}>
                    <div style={{ width: "70%", background: "#0a0a0a", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
                      <div style={{ background: "#111", padding: "6px 10px", display: "flex", gap: 5, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                      </div>
                      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ width: "60%", height: 5, background: "rgba(255,255,255,0.15)", borderRadius: 3 }} />
                        <div style={{ width: "40%", height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2 }} />
                      </div>
                    </div>
                    <span style={{ position: "absolute", bottom: 4, right: 14, fontWeight: 800, fontSize: "3.5rem", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>
                      {project.number}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ padding: "1.5rem 1.75rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.875rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.18rem 0.6rem", borderRadius: 2 }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.45rem" }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: "0.875rem", lineHeight: 1.72, color: "rgba(255,255,255,0.55)", marginBottom: "1rem", flex: 1 }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.32rem", marginBottom: "1.25rem" }}>
                  {project.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", paddingLeft: "0.875rem", position: "relative", letterSpacing: "0.03em" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.2)" }}>{">"}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", gap: "0.875rem", marginTop: "auto" }}>
                  <ProjectLink href={project.github}>
                    <ArrowIcon /> GitHub
                  </ProjectLink>
                  {project.demo && (
                    <ProjectLink href={project.demo}>
                      <ArrowIcon /> Live Demo
                    </ProjectLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
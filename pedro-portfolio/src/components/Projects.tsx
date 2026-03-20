"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

const PROJECT_IMAGES: Record<string, string> = {
  agendapro: "/projects/agendapro.png",
  hayhgang: "/projects/hayhgang.png",
};

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 11L11 1M11 1H5M11 1v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  fontFamily: "var(--font-mono)",
  fontSize: "0.62rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: 3,
  transition: "all 0.28s",
  cursor: "none",
  fontWeight: 500,
};

const btnGhost: React.CSSProperties = {
  ...btnBase,
  color: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "transparent",
};

const btnSolid: React.CSSProperties = {
  ...btnBase,
  color: "#000",
  background: "#fff",
  border: "1px solid #fff",
};

function ArchLayer({ label, index }: { label: string; index: number }) {
  const colors = ["rgba(255,255,255,0.12)", "rgba(255,255,255,0.07)", "rgba(255,255,255,0.04)"];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <div style={{
        padding: "0.22rem 0.75rem",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.12)",
        background: colors[index] ?? "rgba(255,255,255,0.03)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.56rem",
        color: "rgba(255,255,255,0.55)",
        letterSpacing: "0.06em",
        whiteSpace: "nowrap" as const,
      }}>
        {label}
      </div>
      {index < 2 && (
        <div style={{ width: 1, height: 10, background: "rgba(255,255,255,0.15)" }} />
      )}
    </div>
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
              {/* Image */}
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

              {/* Body */}
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

                {/* Architecture layers */}
                {project.architecture && (
                  <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "0.5rem" }}>Architecture</p>
                    {project.architecture.map((layer, i) => (
                      <ArchLayer key={layer} label={layer} index={i} />
                    ))}
                  </div>
                )}

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.32rem", marginBottom: "1.25rem" }}>
                  {project.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", paddingLeft: "0.875rem", position: "relative", letterSpacing: "0.03em" }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.2)" }}>{">"}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "0.6rem", marginTop: "auto", flexWrap: "wrap" }}>
                  
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnGhost}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <GitHubIcon /> GitHub
                  </a>
                  {project.demo && (
                    
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={btnSolid}
                      onMouseEnter={e => { e.currentTarget.style.background = "#e8e8e8"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}
                    >
                      <ExternalIcon /> Live Demo
                    </a>
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
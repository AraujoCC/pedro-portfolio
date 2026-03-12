"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";

function BrowserMockup({ color, number }: { color: string; number: string }) {
  return (
    <div style={{
      width: "100%", height: "100%", position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #080808, #0f0f10)",
      overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", width: 200, height: 200, borderRadius: "50%",
        background: color, filter: "blur(60px)", opacity: 0.08,
        top: -40, left: -20, pointerEvents: "none",
      }} />

      {/* Browser frame */}
      <div style={{
        width: "78%", background: "#0a0a0a",
        borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.8)",
        overflow: "hidden", position: "relative", zIndex: 1,
      }}>
        {/* Title bar */}
        <div style={{
          background: "#111", padding: "6px 10px",
          display: "flex", alignItems: "center", gap: 5,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
          <div style={{
            flex: 1, height: 12, background: "rgba(255,255,255,0.05)",
            borderRadius: 20, marginLeft: 6,
          }} />
        </div>

        {/* Screen content */}
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          {/* Navbar sim */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div style={{ width: 28, height: 5, background: "rgba(255,255,255,0.15)", borderRadius: 3 }} />
            <div style={{ display: "flex", gap: 5 }}>
              {[1,2,3].map(i => <div key={i} style={{ width: 18, height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2 }} />)}
            </div>
          </div>
          {/* Hero block */}
          <div style={{ background: `rgba(${hexToRgb(color)},0.06)`, borderRadius: 4, padding: "8px 10px" }}>
            <div style={{ width: "60%", height: 6, background: "rgba(255,255,255,0.18)", borderRadius: 3, marginBottom: 5 }} />
            <div style={{ width: "40%", height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginBottom: 8 }} />
            <div style={{ width: 32, height: 10, background: `rgba(${hexToRgb(color)},0.35)`, borderRadius: 2 }} />
          </div>
          {/* Cards row */}
          <div style={{ display: "flex", gap: 5, marginTop: 2 }}>
            {[0.9, 0.6, 0.75].map((op, i) => (
              <div key={i} style={{
                flex: 1, height: 22, borderRadius: 3,
                background: `rgba(255,255,255,${op * 0.05})`,
                border: "1px solid rgba(255,255,255,0.06)",
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Big number bg */}
      <span style={{
        position: "absolute", bottom: 4, right: 14,
        fontFamily: "var(--font-body)", fontWeight: 800,
        fontSize: "3.5rem", color: "rgba(255,255,255,0.04)", lineHeight: 1,
        userSelect: "none",
      }}>{number}</span>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

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
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-wrap" style={{ background: "#000" }}>
      <div className="section-inner">
        <div className="eyebrow reveal">
          <span className="eyebrow-num">04</span>
          <div className="eyebrow-line" />
          <span className="eyebrow-label">Projects</span>
        </div>
        <h2 className="section-title reveal">Selected<br /><span className="dim">work.</span></h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="card reveal"
              style={{
                display: "flex", flexDirection: "column",
                transitionDelay: `${idx * 0.08}s`,
              } as React.CSSProperties}
            >
              {/* Mockup visual */}
              <div style={{ height: 175, position: "relative", overflow: "hidden" }}>
                <BrowserMockup color={project.glowColor} number={project.number} />
              </div>

              {/* Body */}
              <div style={{ padding: "1.5rem 1.75rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.875rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.56rem",
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "0.18rem 0.6rem", borderRadius: 2,
                    }}>{tag}</span>
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
                    <li key={f} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                      color: "rgba(255,255,255,0.3)", paddingLeft: "0.875rem",
                      position: "relative", letterSpacing: "0.03em",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.2)" }}>{">"}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", gap: "0.875rem", marginTop: "auto" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "0.3rem",
                    fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.3)", textDecoration: "none",
                    transition: "color 0.28s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >
                    <ArrowIcon /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: "0.3rem",
                      fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.3)", textDecoration: "none",
                      transition: "color 0.28s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                    >
                      <ArrowIcon /> Live Demo
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
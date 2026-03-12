"use client";
import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    dates: "March 2024 — Present",
    badge: "Remote",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description: "Working as a freelance web developer building websites and web applications for clients, from requirements definition to final deployment.",
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
    years: "2025 — 2028", status: "In progress",
    degree: "Bachelor of Science in Computer Science",
    institution: "Universidade Salvador",
    tags: ["Software Development", "Backend Systems", "Computer Architecture", "Algorithms", "System Modeling"],
  },
];

export default function Experience() {
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
    <>
      <section id="experience" ref={sectionRef} className="section-wrap" style={{ background: "linear-gradient(180deg,#000 0%,#080808 100%)" }}>
        <div className="section-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-num">03</span>
            <div className="eyebrow-line" />
            <span className="eyebrow-label">Experience</span>
          </div>
          <h2 className="section-title reveal">Work<br /><span className="dim">history.</span></h2>
          <div style={{ maxWidth: 820 }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="ex-card reveal">
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginBottom: "0.5rem" }}>{exp.dates}</p>
                  <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.18rem 0.6rem", borderRadius: 2 }}>{exp.badge}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", marginBottom: "0.3rem" }}>{exp.role}</h3>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.25rem" }}>{exp.company}</p>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "rgba(255,255,255,0.55)", marginBottom: "1.1rem" }}>{exp.description}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", paddingLeft: "1.2rem", position: "relative", lineHeight: 1.65 }}>
                        <span style={{ position: "absolute", left: 0, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)" }}>--</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-wrap" style={{ background: "linear-gradient(180deg,#080808 0%,#000 100%)" }}>
        <div className="section-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-num">05</span>
            <div className="eyebrow-line" />
            <span className="eyebrow-label">Education</span>
          </div>
          <h2 className="section-title reveal">Academic<br /><span className="dim">background.</span></h2>
          {EDUCATION.map((ed, i) => (
            <div key={i} className="ed-card reveal">
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
                  <strong style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.5rem" }}>{ed.years}</strong>
                  {ed.status}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.12rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", marginBottom: "0.3rem" }}>{ed.degree}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.1rem" }}>{ed.institution}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {ed.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.07em", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.22rem 0.7rem", borderRadius: 2 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
"use client";
import { useEffect, useRef } from "react";

const PILLS = [
  "Clean Architecture", "SOLID Principles", "REST APIs",
  "Design Patterns", "Full Stack", "Backend Focus",
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-wrap" style={{ background: "linear-gradient(180deg,#000 0%,#080808 100%)" }}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <div className="eyebrow reveal">
              <span className="eyebrow-num">01</span>
              <div className="eyebrow-line" />
              <span className="eyebrow-label">About</span>
            </div>
            <h2 className="section-title reveal">Engineering<br /><span className="dim">with purpose.</span></h2>
            <p className="reveal">I am a <strong>Computer Science student</strong> focused on Software Engineering and backend development. My main interest is designing and building scalable, well-structured systems using modern engineering practices.</p>
            <p className="reveal">I have experience developing backend APIs with <strong>Java and Spring Boot</strong>, applying concepts such as Clean Architecture, SOLID principles, Design Patterns, and RESTful APIs. I also build modern web interfaces using <strong>React and TypeScript</strong>, creating complete full stack applications.</p>
            <p className="reveal">I have developed several end-to-end projects simulating real-world systems — always prioritizing <strong>clean code, maintainability, and professional project structure</strong>.</p>
            <div className="about-pills reveal">
              {PILLS.map((pill) => <span key={pill} className="about-pill">{pill}</span>)}
            </div>
          </div>

          <div className="reveal">
            <div className="card" style={{ padding: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.8rem 1.2rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                <span style={{ marginLeft: "0.35rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>pedro-isaac.ts</span>
              </div>
              <pre style={{ padding: "1.5rem 1.6rem", fontFamily: "var(--font-mono)", fontSize: "0.775rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", overflowX: "auto" }}>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>{"// Computer Science Student · Backend Focus\n\n"}</span>
                <span style={{ color: "#b8d4f0" }}>const</span>{" "}<span style={{ color: "rgba(255,255,255,0.9)" }}>developer</span>{" = {\n"}
                {"  name:      "}<span style={{ color: "#a8c8a8" }}>"Pedro Isaac"</span>{",\n"}
                {"  location:  "}<span style={{ color: "#a8c8a8" }}>"Bahia, Brazil"</span>{",\n"}
                {"  degree:    "}<span style={{ color: "#a8c8a8" }}>"B.Sc. Computer Science"</span>{",\n"}
                {"  status:    "}<span style={{ color: "#a8c8a8" }}>"Seeking Internship"</span>{",\n\n"}
                {"  backend:   ["}<span style={{ color: "#a8c8a8" }}>"Java"</span>{", "}<span style={{ color: "#a8c8a8" }}>"Spring Boot"</span>{", "}<span style={{ color: "#a8c8a8" }}>"Node.js"</span>{"]\n"}
                {"  frontend:  ["}<span style={{ color: "#a8c8a8" }}>"React"</span>{", "}<span style={{ color: "#a8c8a8" }}>"Next.js"</span>{", "}<span style={{ color: "#a8c8a8" }}>"TypeScript"</span>{"]\n"}
                {"  database:  ["}<span style={{ color: "#a8c8a8" }}>"PostgreSQL"</span>{", "}<span style={{ color: "#a8c8a8" }}>"JPA/Hibernate"</span>{"]\n\n"}
                {"  principles: [\n    "}<span style={{ color: "#a8c8a8" }}>"Clean Architecture"</span>{",\n    "}<span style={{ color: "#a8c8a8" }}>"SOLID"</span>{", "}<span style={{ color: "#a8c8a8" }}>"Design Patterns"</span>{",\n  ],\n\n"}
                {"  "}<span style={{ color: "rgba(255,255,255,0.9)" }}>available</span>{": () => "}<span style={{ color: "#b8d4f0" }}>true</span>{",\n};"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
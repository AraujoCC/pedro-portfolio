"use client";
import { useEffect, useRef } from "react";
import { techColumns } from "@/data/techStack";

export default function Tech() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("bars-alive");
          e.target.querySelectorAll<HTMLElement>("[data-proficiency]").forEach((bar) => {
            bar.style.transform = `scaleX(${bar.dataset.proficiency})`;
          });
        });
      },
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
    sectionRef.current?.querySelectorAll(".tech-col").forEach((el) => barObs.observe(el));
    return () => { revealObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="section-wrap">
      <div className="section-inner">
        <div className="eyebrow reveal">
          <span className="eyebrow-num">02</span>
          <div className="eyebrow-line" />
          <span className="eyebrow-label">Tech Stack</span>
        </div>
        <h2 className="section-title reveal">The engineering<br /><span className="dim">toolkit.</span></h2>
        <div className="tech-grid reveal">
          {techColumns.map((col) => (
            <div key={col.name} className="tech-col">
              <div className="tech-col-name">{col.name}</div>
              <div className="tech-items">
                {col.items.map((item) => (
                  <div key={item.label} className="tech-item">
                    <span>{item.label}</span>
                    <div className="tech-bar">
                      <div className="tech-bar-fill" data-proficiency={item.proficiency} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { techColumns } from "@/data/techStack";

export default function Tech() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -45px 0px" }
    );

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const col = entry.target;
          col.classList.add("bars-alive");
          col.querySelectorAll<HTMLElement>("[data-proficiency]").forEach((bar) => {
            bar.style.transform = `scaleX(${bar.dataset.proficiency})`;
          });
        });
      },
      { threshold: 0.2 }
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
    sectionRef.current?.querySelectorAll(".tc-col").forEach((el) => barObs.observe(el));
    return () => {
      revealObs.disconnect();
      barObs.disconnect();
    };
  }, []);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="py-36 lg:py-48 bg-black"
    >
      <Container>
        <div className="reveal">
          <SectionEyebrow number="02" label="Tech Stack" />
        </div>
        <h2
          className="reveal font-body font-bold tracking-[-0.035em] leading-[1.04] mb-14"
          style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", transitionDelay: "0.05s" }}
        >
          The engineering
          <br />
          <span className="font-light text-white/55">toolkit.</span>
        </h2>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px]" style={{ transitionDelay: "0.1s" }}>
          {techColumns.map((col) => (
            <div
              key={col.name}
              className="tc-col relative overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.026] p-6 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.042] hover:-translate-y-1"
            >
              {/* top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

              <div className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-white/30 mb-5">
                {col.name}
              </div>

              <div className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between text-[0.875rem] text-white/55"
                  >
                    <span>{item.label}</span>
                    <div className="w-12 h-px bg-white/[0.07] overflow-hidden rounded-sm">
                      <div
                        className="h-full rounded-sm transition-transform duration-[1100ms] ease-out origin-left"
                        style={{
                          background:
                            "linear-gradient(90deg,rgba(255,255,255,.85),rgba(200,200,200,.5))",
                          transform: "scaleX(0)",
                        }}
                        data-proficiency={item.proficiency}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

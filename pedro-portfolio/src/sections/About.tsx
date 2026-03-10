"use client";
import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PILLS = [
  "Clean Architecture",
  "SOLID Principles",
  "REST APIs",
  "Design Patterns",
  "Full Stack",
  "Backend Focus",
];

export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-36 lg:py-48"
      style={{ background: "linear-gradient(180deg,#000 0%,#080808 100%)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1100px]">
          {/* Left: Text */}
          <div>
            <div className="reveal">
              <SectionEyebrow number="01" label="About" />
            </div>
            <h2
              className="reveal font-body font-bold tracking-[-0.035em] leading-[1.04] mb-8"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", transitionDelay: "0.05s" }}
            >
              Engineering
              <br />
              <span className="font-light text-white/55">with purpose.</span>
            </h2>

            <p className="reveal text-[0.96rem] leading-[1.85] text-white/55 mb-5" style={{ transitionDelay: "0.10s" }}>
              I am a{" "}
              <strong className="text-white font-semibold">Computer Science student</strong>{" "}
              focused on Software Engineering and backend development. My main interest
              is designing and building scalable, well-structured systems using modern
              engineering practices.
            </p>
            <p className="reveal text-[0.96rem] leading-[1.85] text-white/55 mb-5" style={{ transitionDelay: "0.16s" }}>
              I have experience developing backend APIs with{" "}
              <strong className="text-white font-semibold">Java and Spring Boot</strong>,
              applying concepts such as Clean Architecture, SOLID principles, Design
              Patterns, and RESTful APIs. I also build modern web interfaces using{" "}
              <strong className="text-white font-semibold">React and TypeScript</strong>,
              creating complete full stack applications.
            </p>
            <p className="reveal text-[0.96rem] leading-[1.85] text-white/55 mb-8" style={{ transitionDelay: "0.22s" }}>
              I have developed several end-to-end projects simulating real-world systems
              — always prioritizing{" "}
              <strong className="text-white font-semibold">
                clean code, maintainability, and professional project structure
              </strong>
              .
            </p>

            <div className="reveal flex flex-wrap gap-2" style={{ transitionDelay: "0.28s" }}>
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-[0.6rem] tracking-[0.07em] text-white/55 border border-white/[0.08] px-3 py-1 rounded-sm transition-all duration-300 hover:border-white/[0.18] hover:text-white hover:bg-white/[0.04] cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div className="reveal" style={{ transitionDelay: "0.16s" }}>
            <div className="relative overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.026]">
              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[0.6rem] tracking-[0.05em] text-white/30">
                  pedro-isaac.ts
                </span>
              </div>

              {/* Code */}
              <pre className="px-6 py-6 font-mono text-[0.76rem] leading-[1.9] text-white/55 overflow-x-auto">
                <span className="text-white/25">{"// Computer Science Student · Backend Focus\n"}</span>
                {"\n"}
                <span className="text-[#b8d4f0]">const</span>
                {" "}
                <span className="text-white/90">developer</span>
                {" = {\n"}
                {"  name:      "}
                <span className="text-[#a8c8a8]">"Pedro Isaac"</span>
                {",\n"}
                {"  location:  "}
                <span className="text-[#a8c8a8]">"Bahia, Brazil"</span>
                {",\n"}
                {"  degree:    "}
                <span className="text-[#a8c8a8]">"B.Sc. Computer Science"</span>
                {",\n"}
                {"  status:    "}
                <span className="text-[#a8c8a8]">"Seeking Internship"</span>
                {",\n\n"}
                {"  backend:   ["}
                <span className="text-[#a8c8a8]">"Java"</span>
                {", "}
                <span className="text-[#a8c8a8]">"Spring Boot"</span>
                {", "}
                <span className="text-[#a8c8a8]">"Node.js"</span>
                {"],\n"}
                {"  frontend:  ["}
                <span className="text-[#a8c8a8]">"React"</span>
                {", "}
                <span className="text-[#a8c8a8]">"Next.js"</span>
                {", "}
                <span className="text-[#a8c8a8]">"TypeScript"</span>
                {"],\n"}
                {"  database:  ["}
                <span className="text-[#a8c8a8]">"PostgreSQL"</span>
                {", "}
                <span className="text-[#a8c8a8]">"JPA/Hibernate"</span>
                {"],\n\n"}
                {"  principles: [\n"}
                {"    "}
                <span className="text-[#a8c8a8]">"Clean Architecture"</span>
                {",\n"}
                {"    "}
                <span className="text-[#a8c8a8]">"SOLID"</span>
                {", "}
                <span className="text-[#a8c8a8]">"Design Patterns"</span>
                {",\n"}
                {"  ],\n\n"}
                {"  "}
                <span className="text-white/90">available</span>
                {": () => "}
                <span className="text-[#b8d4f0]">true</span>
                {",\n"}
                {"};"}
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

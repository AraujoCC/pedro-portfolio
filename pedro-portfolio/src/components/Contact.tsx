"use client";
import { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";
import SectionEyebrow from "./ui/SectionEyebrow";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1300);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 lg:py-40 bg-black flex flex-col items-center text-center"
    >
      <Container className="flex flex-col items-center">
        <div className="reveal flex justify-center">
          <SectionEyebrow number="06" label="Contact" />
        </div>

        <h2
          className="reveal font-body font-extrabold tracking-[-0.045em] leading-[1] mb-6"
          style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
        >
          Let's work
          <br />
          <span className="text-metal">together.</span>
        </h2>

        <p className="reveal text-[0.96rem] text-white/55 max-w-[400px] leading-[1.75] mb-10">
          Open to backend and full stack developer internship opportunities.
          Let's connect.
        </p>

        {/* Contact rows */}
        <div className="reveal flex flex-col gap-3.5 mb-12 items-center">
          {[
            { label: "Email",    href: "mailto:pedroisaacofc@gmail.com", value: "pedroisaacofc@gmail.com" },
            { label: "GitHub",   href: "https://github.com/AraujoCC",    value: "github.com/AraujoCC" },
            { label: "LinkedIn", href: "#",                              value: "linkedin.com/in/pedro-isaac" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-4">
              <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-white/30 w-16 text-right">
                {row.label}
              </span>
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="relative text-[0.88rem] text-white/55 hover:text-white transition-colors duration-300 cursor-none group"
              >
                {row.value}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal w-full max-w-[460px] flex flex-col gap-3.5"
        >
          <div className="grid grid-cols-2 gap-3.5">
            <FormField label="Name">
              <input
                type="text"
                placeholder="Your name"
                required
                className="f-inp"
              />
            </FormField>
            <FormField label="Email">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="f-inp"
              />
            </FormField>
          </div>
          <FormField label="Message">
            <textarea
              placeholder="Tell me about your opportunity..."
              required
              rows={4}
              className="f-inp resize-none"
            />
          </FormField>
          <button
            type="submit"
            disabled={sending || sent}
            className="bg-white text-black font-body font-bold text-[0.72rem] uppercase tracking-widest py-3.5 rounded-sm cursor-none transition-all duration-300 hover:bg-silver-2 hover:shadow-[0_6px_22px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 disabled:opacity-65 disabled:translate-y-0"
          >
            {sent ? "Sent ✓" : sending ? "Sending…" : "Send Message →"}
          </button>
        </form>
      </Container>

      <style jsx>{`
        .f-inp {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          padding: 0.7rem 0.95rem;
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.28s, background 0.28s, box-shadow 0.28s;
          cursor: none;
        }
        .f-inp:focus {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.04);
        }
        .f-inp::placeholder {
          color: rgba(255, 255, 255, 0.22);
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label className="font-mono text-[0.56rem] tracking-[0.15em] uppercase text-white/30">
        {label}
      </label>
      {children}
    </div>
  );
}

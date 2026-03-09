"use client";
import dynamic from "next/dynamic";
import Button from "./ui/Button";

// Lazy-load the galaxy (canvas, heavy)
const TechGalaxy = dynamic(() => import("./TechGalaxy"), { ssr: false });

const STACK = ["React", "Next.js", "Node.js", "Java", "TypeScript", "SQL"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 lg:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 28%, rgba(255,255,255,0.028) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 42%, black, transparent)",
        }}
      />

      {/* Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-[1fr_520px] gap-12 items-center">
        {/* LEFT — Text */}
        <div className="max-w-[640px]">
          {/* Location */}
          <div
            className="flex items-center gap-2.5 mb-10 opacity-0"
            style={{
              animation:
                "fade-up 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-white/30">
              Vila de Abrantes, Bahia — Brazil
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-body font-extrabold leading-[0.9] tracking-[-0.045em] mb-8 opacity-0"
            style={{
              fontSize: "clamp(4rem,11vw,9.5rem)",
              animation:
                "fade-up 0.95s 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            Pedro
            <span className="block text-metal">Isaac</span>
          </h1>

          {/* Role + stack */}
          <div
            className="flex items-center gap-4 flex-wrap mb-4 opacity-0"
            style={{
              animation:
                "fade-up 0.7s 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            <span className="text-[1.05rem] font-normal text-white/60">
              Full Stack Developer
            </span>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="font-mono text-[0.68rem] text-white/30 tracking-[0.04em] leading-relaxed">
              {STACK.join(" · ")}
            </span>
          </div>

          {/* Description */}
          <p
            className="max-w-[510px] text-[0.96rem] leading-[1.85] text-white/55 mb-11 opacity-0"
            style={{
              animation:
                "fade-up 0.7s 0.88s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            Computer Science student focused on building scalable backend
            systems and modern full stack applications.
            <br />
            <br />
            Currently seeking an opportunity as a{" "}
            <strong className="text-white font-semibold">
              Backend or Full Stack Developer Intern
            </strong>
            .
          </p>

          {/* Actions */}
          <div
            className="flex flex-wrap gap-3.5 opacity-0"
            style={{
              animation:
                "fade-up 0.7s 1.04s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            <Button href="#projects" variant="solid">
              View Projects
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 6h10M6 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              href="https://github.com/AraujoCC"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        {/* RIGHT — Galaxy (hidden below xl) */}
        <div className="hidden xl:flex justify-center">
          <TechGalaxy />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-8 lg:left-16 z-10 flex items-center gap-2.5 opacity-0"
        style={{
          animation:
            "fade-up 0.6s 1.55s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        <div
          className="w-px h-10 animate-scroll-line"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35), transparent)",
          }}
        />
        <span className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-white/30 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  );
}

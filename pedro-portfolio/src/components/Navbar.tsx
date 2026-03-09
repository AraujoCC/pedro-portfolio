"use client";
import { useScrolled } from "@/hooks/useScroll";
import { scrollTo } from "@/utils/scrollTo";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "About",      id: "about"      },
  { label: "Stack",      id: "tech"       },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects"   },
  { label: "Education",  id: "education"  },
];

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500",
        scrolled
          ? "px-8 lg:px-16 py-3.5 bg-black/90 backdrop-blur-[18px] border-b border-white/[0.07]"
          : "px-8 lg:px-16 py-7 border-b border-transparent"
      )}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("hero")}
        className="flex items-center gap-2 font-mono text-[0.8rem] font-bold text-white cursor-none hover:opacity-70 transition-opacity duration-300"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"
          style={{ animationDuration: "2.5s" }}
        />
        PI.dev
      </button>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollTo(link.id)}
              className="relative font-body text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors duration-300 cursor-none group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("contact")}
        className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.06em] text-black bg-white px-5 py-2 rounded-sm cursor-none transition-all duration-300 hover:bg-silver-2 hover:shadow-[0_4px_18px_rgba(255,255,255,0.18)] hover:-translate-y-px"
      >
        Contact
      </button>
    </nav>
  );
}

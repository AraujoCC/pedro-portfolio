"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  minOpacity: number;
  maxOpacity: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.7 + 0.35,
    duration: 3 + Math.random() * 5.5,
    delay: Math.random() * 7,
    minOpacity: 0.04 + Math.random() * 0.1,
    maxOpacity: 0.2 + Math.random() * 0.7,
  }));
}

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const stars = generateStars(240);
    const frag = document.createDocumentFragment();

    stars.forEach((s) => {
      const el = document.createElement("div");
      el.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:#fff;
        width:${s.size}px;
        height:${s.size}px;
        left:${s.x}%;
        top:${s.y}%;
        --duration:${s.duration}s;
        --delay:${s.delay}s;
        animation:twinkle var(--duration) var(--delay) ease-in-out infinite;
        opacity:${s.minOpacity};
      `;
      frag.appendChild(el);
    });

    containerRef.current.appendChild(frag);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg,#000 0%,#060608 55%,#0a0a0e 100%)",
      }}
    />
  );
}

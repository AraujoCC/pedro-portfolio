"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  maxOpacity: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.4,
    duration: 3 + Math.random() * 6,
    delay: Math.random() * 8,
    opacity: 0.04 + Math.random() * 0.12,
    maxOpacity: 0.3 + Math.random() * 0.7,
  }));
}

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const stars = generateStars(350);
    const frag = document.createDocumentFragment();

    stars.forEach((s) => {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: #fff;
        width: ${s.size}px;
        height: ${s.size}px;
        left: ${s.x}%;
        top: ${s.y}%;
        opacity: ${s.opacity};
        animation: twinkle ${s.duration}s ${s.delay}s ease-in-out infinite;
      `;
      frag.appendChild(el);
    });

    containerRef.current.appendChild(frag);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000005 0%, #00000a 40%, #000008 70%, #000010 100%)",
      }}
    />
  );
}
"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { techItems } from "@/data/techStack";
import { tickGalaxy, type GalaxyState } from "@/lib/galaxy";

function buildInitialState(): GalaxyState {
  return {
    selectedIndex: -1,
    paused: false,
    nodes: techItems.map((t, i) => ({
      index: i,
      angle: t.phase,
      orbitR: t.orbit,
      speed: t.speed,
    })),
  };
}

export function useGalaxy() {
  const [state, setState] = useState<GalaxyState>(buildInitialState);
  const lastTime = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  const tick = useCallback((now: number) => {
    if (lastTime.current !== null) {
      const dt = (now - lastTime.current) / 1000;
      setState((prev) => (prev.paused ? prev : tickGalaxy(prev, dt)));
    }
    lastTime.current = now;
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const select = useCallback((index: number) => {
    setState((prev) => {
      if (prev.selectedIndex === index) return prev;
      return { ...prev, selectedIndex: index, paused: true };
    });
  }, []);

  const reset = useCallback(() => {
    setState((prev) => {
      if (prev.selectedIndex === -1) return prev;
      const nodes = prev.nodes.map((n, i) => ({
        ...n,
        orbitR: techItems[i].orbit,
      }));
      return { ...prev, selectedIndex: -1, paused: false, nodes };
    });
  }, []);

  // Reset on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      if (Math.abs(window.scrollY - lastY) > 50) {
        reset();
        lastY = window.scrollY;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [reset]);

  return { state, select, reset };
}

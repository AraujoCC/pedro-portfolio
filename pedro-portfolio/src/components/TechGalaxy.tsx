"use client";
import { useCallback, useEffect, useRef } from "react";
import { techItems } from "@/data/techStack";
import { nodePosition } from "@/lib/galaxy";
import { useGalaxy } from "@/hooks/useGalaxy";
import OrbitItem from "./galaxy/OrbitItem";
import CenterDisplay from "./galaxy/CenterDisplay";

const SIZE = 520;
const CX = SIZE / 2;
const CY = SIZE / 2;
const NODE_SIZE = 50;

export default function TechGalaxy() {
  const { state, select, reset } = useGalaxy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Draw canvas (orbit connections, center glow)
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, SIZE, SIZE);

    // Center ambient glow
    const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, 65);
    grd.addColorStop(0, "rgba(255,255,255,0.07)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(CX, CY, 65, 0, Math.PI * 2);
    ctx.fill();

    // Dashed line to selected node
    if (state.selectedIndex >= 0) {
      const n = state.nodes[state.selectedIndex];
      const sx = CX + Math.cos(n.angle) * n.orbitR;
      const sy = CY + Math.sin(n.angle) * n.orbitR;
      const lg = ctx.createLinearGradient(CX, CY, sx, sy);
      lg.addColorStop(0, "rgba(255,255,255,0.32)");
      lg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = lg;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(CX, CY);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [state]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);

  const selectedTech =
    state.selectedIndex >= 0 ? techItems[state.selectedIndex] : null;

  return (
    <div
      className="relative flex-shrink-0 opacity-0 animate-[fade-up_0.9s_1.1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ width: SIZE, height: SIZE }}
      onClick={(e) => {
        if (
          e.target === e.currentTarget ||
          (e.target as HTMLElement).id === "g-scene"
        )
          reset();
      }}
    >
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        className="absolute inset-0 pointer-events-none z-[1]"
      />

      {/* Scene */}
      <div className="absolute inset-0" id="g-scene">
        {/* Orbit rings */}
        {techItems.map((t, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border border-white/[0.055] pointer-events-none"
            style={{
              width: t.orbit * 2,
              height: t.orbit * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}

        {/* Core dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none">
          <div
            className="w-2 h-2 rounded-full bg-white"
            style={{
              boxShadow: "0 0 12px rgba(255,255,255,0.8), 0 0 35px rgba(255,255,255,0.3)",
            }}
          />
        </div>

        {/* Orbit nodes */}
        {techItems.map((t, i) => {
          const n = state.nodes[i];
          const { x, y } = nodePosition(CX, CY, n.angle, n.orbitR, NODE_SIZE);
          return (
            <OrbitItem
              key={t.name}
              name={t.name}
              file={t.file}
              color={t.color}
              x={x}
              y={y}
              isSelected={state.selectedIndex === i}
              isDimmed={state.selectedIndex !== -1 && state.selectedIndex !== i}
              onClick={() => (state.selectedIndex === i ? reset() : select(i))}
            />
          );
        })}
      </div>

      {/* Center label */}
      <CenterDisplay
        name={selectedTech?.name ?? null}
        visible={state.selectedIndex >= 0}
      />
    </div>
  );
}

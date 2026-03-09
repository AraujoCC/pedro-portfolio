"use client";
import Image from "next/image";
import clsx from "clsx";

interface OrbitItemProps {
  name: string;
  file: string;
  color: string;
  x: number;
  y: number;
  isSelected: boolean;
  isDimmed: boolean;
  onClick: () => void;
}

export default function OrbitItem({
  name,
  file,
  color,
  x,
  y,
  isSelected,
  isDimmed,
  onClick,
}: OrbitItemProps) {
  return (
    <div
      className="absolute top-0 left-0 cursor-none"
      style={{ transform: `translate(${x}px,${y}px)`, width: 50, height: 50, zIndex: 10 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div className="flex flex-col items-center gap-1.5 group">
        {/* Icon container */}
        <div
          className={clsx(
            "flex items-center justify-center rounded-xl border backdrop-blur-md relative overflow-hidden",
            "transition-all duration-500",
            isSelected
              ? "w-16 h-16 border-white/50 bg-white/[0.14] shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_0_42px_rgba(255,255,255,0.14)]"
              : isDimmed
              ? "w-[50px] h-[50px] border-white/[0.05] bg-white/[0.02] opacity-40"
              : "w-[50px] h-[50px] border-white/[0.10] bg-white/[0.055] group-hover:bg-white/[0.11] group-hover:border-white/30 group-hover:shadow-[0_4px_28px_rgba(0,0,0,0.65),0_0_16px_rgba(255,255,255,0.09)] group-hover:scale-110"
          )}
          style={{ boxShadow: isSelected ? `0 0 28px ${color}22` : undefined }}
        >
          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          <Image
            src={`/tech/${file}`}
            alt={name}
            width={28}
            height={28}
            className="relative z-10 object-contain"
            style={{ filter: isDimmed ? "grayscale(1) brightness(0.5)" : undefined }}
          />
        </div>

        {/* Label */}
        <span
          className={clsx(
            "font-mono text-[0.5rem] tracking-widest uppercase transition-all duration-300 whitespace-nowrap",
            isSelected
              ? "opacity-0"
              : isDimmed
              ? "opacity-0"
              : "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 text-white/60"
          )}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

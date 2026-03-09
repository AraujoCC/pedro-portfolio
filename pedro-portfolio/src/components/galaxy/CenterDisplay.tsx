import clsx from "clsx";

interface CenterDisplayProps {
  name: string | null;
  visible: boolean;
}

export default function CenterDisplay({ name, visible }: CenterDisplayProps) {
  return (
    <div
      className={clsx(
        "absolute pointer-events-none z-20 text-center transition-all duration-500",
        "left-1/2 -translate-x-1/2",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ top: "calc(50% + 52px)" }}
    >
      <div
        className="font-mono text-[0.78rem] font-bold tracking-[0.14em] uppercase text-white"
        style={{ textShadow: "0 0 14px rgba(255,255,255,0.5)" }}
      >
        {name}
      </div>
      <div className="font-mono text-[0.48rem] tracking-[0.12em] text-white/28 mt-1">
        click to deselect
      </div>
    </div>
  );
}

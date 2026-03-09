import { type ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.026] backdrop-blur-sm",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.14] before:to-transparent",
        hover && "transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.042] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      {children}
    </div>
  );
}

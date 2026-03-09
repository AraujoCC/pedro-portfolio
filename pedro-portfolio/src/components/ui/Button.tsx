import { type ReactNode } from "react";
import clsx from "clsx";

type Variant = "solid" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center gap-2 rounded-sm font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 px-6 py-3 cursor-none";

const variants: Record<Variant, string> = {
  solid:
    "bg-white text-black hover:bg-silver-2 hover:shadow-[0_6px_28px_rgba(255,255,255,0.18)] hover:-translate-y-0.5",
  outline:
    "border border-white/[0.18] text-white hover:border-white/50 hover:bg-white/[0.05] hover:-translate-y-0.5",
};

export default function Button({
  children,
  variant = "solid",
  href,
  onClick,
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

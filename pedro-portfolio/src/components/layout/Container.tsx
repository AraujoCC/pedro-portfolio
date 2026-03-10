import { type ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1140px] px-8 lg:px-16", className)}>
      {children}
    </Tag>
  );
}
 
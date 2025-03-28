import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={twMerge(
        clsx("bg-base-200 rounded-2xl p-8 shadow", props.className),
      )}
    >
      {children}
    </div>
  );
}

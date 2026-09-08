import { type ReactNode } from "react";

export type CardColorScheme = "primary" | "cyan" | "amber" | "rose";

export type CardProps = {
  children?: ReactNode;
  color?: CardColorScheme;
  className?: string;
};

const BASE_CLASS =
  "sm:rounded-2xl border p-2 py-4 sm:p-4 shadow-[0_16px_40px_rgba(5,10,20,0.45)] backdrop-blur-sm";

const COLOR_SCHEME_CLASS: Record<CardColorScheme, string> = {
  primary:
    "border-styles-primary-border bg-styles-primary-bg text-styles-primary-fg",
  cyan: "border-cyan-700/70 bg-cyan-900/30 text-cyan-100",
  amber: "border-amber-700/70 bg-amber-900/25 text-amber-100",
  rose: "border-rose-900/70 bg-zinc-950 text-rose-200",
};

export const Card = ({
  children,
  color = "primary",
  className = "",
}: CardProps) => (
  <section
    className={`${BASE_CLASS} ${COLOR_SCHEME_CLASS[color]} ${className}`}
  >
    {children}
  </section>
);

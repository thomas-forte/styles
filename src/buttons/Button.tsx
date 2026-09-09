import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  color?: ButtonColorScheme;
  title?: string;
};

export type ButtonSize = "sm" | "md" | "lg";

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

export type ButtonColorScheme = "slate" | "cyan" | "amber" | "rose" | "zinc";

const COLOR_SCHEME_CLASS: Record<ButtonColorScheme, string> = {
  slate: "border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700",
  cyan: "border-cyan-700/70 bg-cyan-900/30 text-cyan-100 hover:bg-cyan-800/40",
  amber:
    "border-amber-700/70 bg-amber-900/25 text-amber-100 hover:bg-amber-800/35",
  rose: "border-rose-900/70 bg-zinc-950 text-rose-200 hover:bg-zinc-900",
  zinc: "border-zinc-600 bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
};

const BASE_BUTTON_CLASS =
  "inline-flex h-fit w-fit self-start items-center leading-none cursor-pointer rounded-md border font-medium transition disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  children,
  className = "",
  size = "md",
  color = "slate",
  title = "",
  ...props
}: ButtonProps) {
  const classes = `${BASE_BUTTON_CLASS} ${SIZE_CLASS[size]} ${className} ${COLOR_SCHEME_CLASS[color]}`;
  return (
    <button
      {...props}
      className={classes}
      // oxlint-disable-next-line typescript/no-base-to-string
      title={title || (children?.toString() ?? undefined)}
    >
      {children}
    </button>
  );
}

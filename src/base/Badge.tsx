import { type ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  className?: string;
  /** Defaults to `"gray"`. */
  color?: BadgeColorScheme;
  /** Defaults to `"sm"`. */
  size?: BadgeSize;
  /** Native tooltip on hover. */
  title?: string;
  /** Break the badge into multiple lines. */
  breakLines?: boolean;
  /** Prevent the badge from being selected. */
  noSelect?: boolean;
};

export type BadgeSize = "sm" | "md" | "lg";

const SIZE_CLASS: Record<BadgeSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-2 py-1 text-sm",
  lg: "px-2 py-1 text-base",
};

export type BadgeColorScheme =
  | "yellow"
  | "green"
  | "red"
  | "blue"
  | "purple"
  | "orange"
  | "pink"
  | "gray"
  | "black"
  | "white"
  | "code";

const COLOR_SCHEME_CLASS: Record<BadgeColorScheme, string> = {
  yellow: "bg-yellow-50 text-yellow-800 inset-ring-yellow-600/40",
  green: "bg-green-50 text-green-800 inset-ring-green-600/40",
  red: "bg-red-50 text-red-800 inset-ring-red-600/40",
  blue: "bg-blue-50 text-blue-800 inset-ring-blue-600/40",
  purple: "bg-purple-50 text-purple-800 inset-ring-purple-600/40",
  orange: "bg-orange-50 text-orange-800 inset-ring-orange-600/40",
  pink: "bg-pink-50 text-pink-800 inset-ring-pink-600/40",
  gray: "bg-gray-50 text-gray-800 inset-ring-gray-600/40",
  black: "bg-black text-white",
  white: "bg-white text-black inset-ring-black/40",
  code: "bg-zinc-950 text-emerald-300 inset-ring-emerald-600/40",
};

const BASE_CLASSES =
  "inline-flex h-fit w-fit self-auto items-center leading-none gap-1 rounded-md font-medium tracking-normal font-sans inset-ring cursor-default";

/** Compact status / label chip. */
export const Badge = ({
  children,
  color = "gray",
  size = "sm",
  className = "",
  title,
  breakLines = false,
  noSelect = false,
}: BadgeProps) => {
  const classes = `${BASE_CLASSES} ${COLOR_SCHEME_CLASS[color]} ${SIZE_CLASS[size]} ${className} ${breakLines ? "break-all" : "text-nowrap"} ${noSelect ? "select-none" : ""}`;
  return (
    <span
      className={classes}
      title={title}
    >
      {children}
    </span>
  );
};

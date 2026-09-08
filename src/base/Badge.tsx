import { type ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  className?: string;
  color?: BadgeColorScheme;
  size?: BadgeSize;
  title?: string;
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
  | "white";

const COLOR_SCHEME_CLASS: Record<BadgeColorScheme, string> = {
  yellow: "bg-yellow-50 text-yellow-800 inset-ring-yellow-600/20",
  green: "bg-green-50 text-green-800 inset-ring-green-600/20",
  red: "bg-red-50 text-red-800 inset-ring-red-600/20",
  blue: "bg-blue-50 text-blue-800 inset-ring-blue-600/20",
  purple: "bg-purple-50 text-purple-800 inset-ring-purple-600/20",
  orange: "bg-orange-50 text-orange-800 inset-ring-orange-600/20",
  pink: "bg-pink-50 text-pink-800 inset-ring-pink-600/20",
  gray: "bg-gray-50 text-gray-800 inset-ring-gray-600/20",
  black: "bg-black text-white inset-ring-black/20",
  white: "bg-white text-black inset-ring-white/20",
};

const BASE_CLASSES =
  "inline-flex h-fit w-fit self-start items-center leading-none gap-1 rounded-md font-medium tracking-normal font-sans inset-ring";

export const Badge = ({
  children,
  color = "gray",
  size = "sm",
  className = "",
  title,
}: BadgeProps) => {
  const classes = `${BASE_CLASSES} ${COLOR_SCHEME_CLASS[color]} ${SIZE_CLASS[size]} ${className}`;
  return (
    <span
      className={classes}
      title={title}
    >
      {children}
    </span>
  );
};

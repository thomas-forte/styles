import { type ReactNode } from "react";
import { Link } from "react-router";

import { hasRenderableChildren } from "./BaseHelper";

type TitleProps = {
  text: string;
  size?: TitleSize;
  to?: string;
  title?: string;
  className?: string;
  children?: ReactNode;
};

export type TitleSize = "sm" | "md" | "lg" | "xl";

const SIZE_CLASSES: Record<TitleSize, string> = {
  sm: "text-lg tracking-[0.18em] md:text-xl",
  md: "text-xl tracking-[0.2em] md:text-2xl",
  lg: "text-2xl tracking-[0.24em] md:text-3xl",
  xl: "text-3xl tracking-[0.28em] md:text-4xl",
};

const BASE_CLASSES = "font-audiowide text-orange-200/85";

export const Title = ({
  text,
  size = "md",
  to = "",
  title = "",
  className = "",
  children,
}: TitleProps) => {
  const layoutClasses = hasRenderableChildren(children)
    ? "flex items-center gap-2"
    : "";
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${layoutClasses} ${className}`;

  const titleText = title || text;

  if (to) {
    return (
      <Link
        to={to}
        className={classes + " block transition hover:text-orange-100"}
        title={titleText}
      >
        {text}
        {children}
      </Link>
    );
  }

  return (
    <h2
      className={classes + " cursor-default"}
      title={titleText}
    >
      {text}
      {children}
    </h2>
  );
};

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
} from "react";
import { Link } from "react-router";

import { hasRenderableChildren } from "./BaseHelper";

type TitleProps = {
  text: string;
  /** Defaults to `"md"`. */
  size?: TitleSize;
  /** When set, renders as a react-router `Link`. */
  to?: string;
  /** Native tooltip; defaults to `text`. */
  title?: string;
  className?: string;
  /** Optional trailing content (e.g. badges) beside the text. */
  children?: ReactNode;
};

export type TitleSize = "sm" | "md" | "lg" | "xl";

const SIZE_CLASSES: Record<TitleSize, string> = {
  sm: "text-lg tracking-[0.18em] md:text-xl",
  md: "text-xl tracking-[0.2em] md:text-2xl",
  lg: "text-2xl tracking-[0.24em] md:text-3xl",
  xl: "text-3xl tracking-[0.28em] md:text-4xl",
};

const CORRECT_TRACKING_CLASSES: Record<TitleSize, string> = {
  sm: "-ml-[0.18em]",
  md: "-ml-[0.2em]",
  lg: "-ml-[0.24em]",
  xl: "-ml-[0.28em]",
};

const BASE_CLASSES = "font-primary text-orange-200/85";

/** Brand display heading; optional link via `to`. */
export const Title = ({
  text,
  size = "md",
  to = "",
  title = "",
  className = "",
  children,
}: TitleProps) => {
  const hasChildren = hasRenderableChildren(children);
  const layoutClasses = hasChildren ? "flex items-center gap-2" : "";
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${layoutClasses} ${className}`;

  const correctedChildren = (): ReactNode => {
    if (!hasChildren) return null;

    const childArray = Children.toArray(children);
    const [first, ...rest] = childArray;
    if (!isValidElement<{ className?: string }>(first)) {
      return children;
    }

    return [
      cloneElement(first, {
        className: [CORRECT_TRACKING_CLASSES[size], first.props.className]
          .filter(Boolean)
          .join(" "),
      }),
      ...rest,
    ];
  };

  const titleText = title || text;
  const trailing = correctedChildren();

  if (to) {
    return (
      <Link
        to={to}
        className={classes + " block transition hover:text-orange-100"}
        title={titleText}
      >
        {text}
        {trailing}
      </Link>
    );
  }

  return (
    <h2
      className={classes + " cursor-default"}
      title={titleText}
    >
      {text}
      {trailing}
    </h2>
  );
};

import { type ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
  /** Native tooltip. */
  title?: string;
  /** Additional classes. */
  className?: string;
  /** Whether to apply error styles. */
  isError?: boolean;
};

const BASE_CLASSES = "font-sans tracking-normal text-sm cursor-default";

const COLOR_CLASSES = {
  error: "text-rose-300",
  default: "text-slate-300",
};

/** Primary body text. */
export const Body = ({ children, title, className, isError }: BodyProps) => {
  let classes = BASE_CLASSES;

  if (className) classes += " " + className;

  if (isError) classes += " " + COLOR_CLASSES.error;
  else classes += " " + COLOR_CLASSES.default;

  return (
    <p
      className={classes}
      title={title}
    >
      {children}
    </p>
  );
};

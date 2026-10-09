import { type ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
  /** Native tooltip. */
  title?: string;
  /** Additional classes. */
  className?: string;
};

const BASE_CLASSES =
  "font-sans tracking-normal text-sm text-slate-300 cursor-default";

/** Primary body text. */
export const Body = ({ children, title, className }: BodyProps) => {
  let classes = BASE_CLASSES;
  if (className) classes += " " + className;
  return (
    <p
      className={classes}
      title={title}
    >
      {children}
    </p>
  );
};

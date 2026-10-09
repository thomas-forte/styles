import { type ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  /** The heading element to render. Defaults to `"h2"`. */
  as?: HeadingType;
  /** Native tooltip. */
  title?: string;
  /** Additional classes. */
  className?: string;
};

export type HeadingType = Extract<
  keyof React.JSX.IntrinsicElements,
  `h${1 | 2 | 3 | 4 | 5 | 6}`
>;

const COLOR_CLASSES: Record<HeadingType, string> = {
  h1: "text-orange-200/85",
  h2: "text-orange-200/80",
  h3: "text-orange-200/75",
  h4: "text-orange-200/70",
  h5: "text-orange-200/65",
  h6: "text-orange-200/60",
};

const SIZE_CLASSES: Record<HeadingType, string> = {
  h1: "text-3xl tracking-[0.28em] md:text-4xl",
  h2: "text-2xl tracking-[0.24em] md:text-3xl",
  h3: "text-xl tracking-[0.2em] md:text-2xl",
  h4: "text-lg tracking-[0.18em] md:text-xl",
  h5: "text-base tracking-[0.16em] md:text-lg",
  h6: "text-sm tracking-[0.14em] md:text-base",
};

const BASE_CLASSES = "font-primary cursor-default in-[a]:cursor-pointer";

/** Heading element. */
export const Heading = ({
  children,
  as: Tag = "h2",
  title,
  className,
}: HeadingProps) => {
  let classes = `${BASE_CLASSES} ${COLOR_CLASSES[Tag]} ${SIZE_CLASSES[Tag]}`;
  if (className) classes += " " + className;
  return (
    <Tag
      className={classes}
      title={title}
    >
      {children}
    </Tag>
  );
};

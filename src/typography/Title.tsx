import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { Link } from "react-router";

import { hasRenderableChildren } from "../utils/base";
import { Heading, type HeadingType } from "./Heading";

type TitleProps = {
  text: string;
  /** The type of heading to render. h2 by default.*/
  as?: HeadingType;
  /** When set, renders as a react-router `Link`. */
  to?: string;
  /** Native tooltip; defaults to `text`. */
  title?: string;
  /** Additional classes. */
  className?: string;
  /** Optional trailing content (e.g. badges) beside the text. */
  children?: ReactNode;
};

const CORRECT_TRACKING_CLASSES: Record<HeadingType, string> = {
  h1: "-ml-[0.28em]",
  h2: "-ml-[0.24em]",
  h3: "-ml-[0.2em]",
  h4: "-ml-[0.18em]",
  h5: "-ml-[0.16em]",
  h6: "-ml-[0.14em]",
};

const LAYOUT_CLASSES = "flex items-center gap-2";
const LINK_CLASSES = "block transition hover:text-orange-100";

/** Brand display heading; optional link via `to`. */
export const Title = ({
  text,
  as = "h2",
  to = "",
  title = "",
  className = "",
  children,
}: TitleProps) => {
  const hasChildren = hasRenderableChildren(children);
  let classes = "";
  if (hasChildren) {
    classes += " " + LAYOUT_CLASSES;
  }
  if (to) {
    classes += " " + LINK_CLASSES;
  }
  if (className) {
    classes += " " + className;
  }

  const correctedChildren = (): ReactNode => {
    if (!hasChildren) return null;

    const childArray = Children.toArray(children);
    const [first, ...rest] = childArray;
    if (!isValidElement<{ className?: string }>(first)) {
      return children;
    }

    return [
      cloneElement(first, {
        className: [CORRECT_TRACKING_CLASSES[as], first.props.className]
          .filter(Boolean)
          .join(" "),
      }),
      ...rest,
    ];
  };

  const titleText = title || text;
  const trailing = correctedChildren();

  const content = (
    <Heading
      as={as}
      className={classes.trim()}
      title={titleText}
    >
      {text}
      {trailing}
    </Heading>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};

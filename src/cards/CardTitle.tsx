import { type ReactNode } from "react";

import { Hr } from "../base/Hr";
import { hasRenderableChildren } from "../utils/base";
import { resolveCardSubtitle, resolveCardTitle } from "./cardText";

type CardTitleProps = {
  /** String becomes {@link Title}; nodes render as-is. */
  title?: ReactNode;
  /** String becomes {@link Body}; nodes render as-is. */
  subtitle?: ReactNode;
  /** Skip the divider under the header. Defaults to `false`. */
  hideHr?: boolean;
  /** Trailing header content (usually actions). */
  children?: ReactNode;
};

/** Card header: title, subtitle, trailing children, optional `hr`. */
export const CardTitle = ({
  title,
  subtitle,
  hideHr = false,
  children,
}: CardTitleProps) => {
  const layoutClasses = hasRenderableChildren(children)
    ? "flex flex-col justify-between items-start md:flex-row md:items-center"
    : "";

  return (
    <>
      <div className={layoutClasses}>
        <div>
          {resolveCardTitle(title)}
          {resolveCardSubtitle(subtitle)}
        </div>
        <div className="self-end md:self-auto">{children}</div>
      </div>
      {!hideHr && <Hr />}
    </>
  );
};

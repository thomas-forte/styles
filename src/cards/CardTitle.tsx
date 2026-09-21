import { type ReactNode } from "react";

import { hasRenderableChildren } from "../base/BaseHelper";
import { resolveCardSubtitle, resolveCardTitle } from "./cardText";

type CardTitleProps = {
  /** String becomes {@link Title}; nodes render as-is. */
  title?: ReactNode;
  /** String becomes {@link Subtitle}; nodes render as-is. */
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
      {!hideHr && <hr className="my-4 border-slate-700" />}
    </>
  );
};

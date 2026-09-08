import { type ReactNode } from "react";

import { hasRenderableChildren } from "../base/BaseHelper";
import { resolveCardSubtitle, resolveCardTitle } from "./cardText";

type CardTitleProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  hideHr?: boolean;
  children?: ReactNode;
};

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

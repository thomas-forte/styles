import { type AnchorHTMLAttributes, type ReactNode } from "react";

export type BaseLinkProps = {
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  title?: string;
  children?: ReactNode;
};

type LinkProps = BaseLinkProps & {
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export const BASE_CLASSES =
  "font-medium text-slate-200/85 hover:text-orange-300/70 transition text-nowrap";

/** Generic link component. */
export const Link = ({
  href,
  target = "_blank",
  className = "",
  onClick,
  title,
  children,
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className={`${BASE_CLASSES} ${className}`}
      onClick={onClick}
      title={title ?? href}
    >
      {children}
    </a>
  );
};

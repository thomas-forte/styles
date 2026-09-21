import { createElement, isValidElement, type ReactNode } from "react";

import { hasRenderableChildren } from "../base/BaseHelper";
import { type IconComponent } from "../base/IconBadge";
import { Button, type ButtonProps, type ButtonSize } from "./Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  /** Component type or element rendered before the optional label. */
  icon: IconComponent | ReactNode;
  /** Optional text beside the icon. */
  children?: ReactNode;
};

const ICON_SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

/** {@link Button} with a leading icon; label is optional. */
export function IconButton({
  icon,
  children,
  size = "md",
  className = "",
  title,
  ...props
}: IconButtonProps) {
  const hasLabel = hasRenderableChildren(children);
  const isValidIconElement = isValidElement(icon);
  const renderedIcon = isValidIconElement
    ? icon
    : createElement(icon as IconComponent, {
        className: ICON_SIZE_CLASS[size],
        "aria-hidden": true,
      });
  const resolvedTitle =
    title ||
    (typeof children === "string" || typeof children === "number"
      ? String(children)
      : undefined);

  return (
    <Button
      size={size}
      className={`gap-1 ${className}`}
      title={resolvedTitle}
      {...props}
    >
      <span
        className={`inline-flex ${
          hasLabel && !isValidIconElement ? "translate-y-px" : ""
        }`}
      >
        {renderedIcon}
      </span>
      {hasLabel ? children : null}
    </Button>
  );
}

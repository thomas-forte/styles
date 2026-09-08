import { createElement, isValidElement, type ReactNode } from "react";

import { hasRenderableChildren } from "../base/BaseHelper";
import { type IconComponent } from "../base/IconBadge";
import { Button, type ButtonProps, type ButtonSize } from "./Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  icon: IconComponent | ReactNode;
  children?: ReactNode;
};

const ICON_SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

export function IconButton({
  icon,
  children,
  size = "md",
  className = "",
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

  return (
    <Button
      size={size}
      className={`gap-1 ${className}`}
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

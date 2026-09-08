import {
  createElement,
  isValidElement,
  type ComponentType,
  type ReactNode,
  type SVGProps,
} from "react";

import { Badge, type BadgeProps, type BadgeSize } from "./Badge";
import { hasRenderableChildren } from "./BaseHelper";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type IconBadgeProps = Omit<BadgeProps, "children"> & {
  icon: IconComponent | ReactNode;
  children?: ReactNode;
};

const ICON_SIZE_CLASS: Record<BadgeSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

export const IconBadge = ({
  icon,
  children,
  size = "sm",
  ...props
}: IconBadgeProps) => {
  const hasLabel = hasRenderableChildren(children);
  const isValidIconElement = isValidElement(icon);
  const renderedIcon = isValidIconElement
    ? icon
    : createElement(icon as IconComponent, {
        className: ICON_SIZE_CLASS[size],
        "aria-hidden": true,
      });

  return (
    <Badge
      size={size}
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
    </Badge>
  );
};

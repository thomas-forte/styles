import { Children, type ReactNode } from "react";

export const hasRenderableChildren = (
  children: ReactNode | undefined,
): boolean => {
  return Children.toArray(children).some((child) => {
    if (child == null || typeof child === "boolean") {
      return false;
    }
    if (typeof child === "string") {
      return child.trim().length > 0;
    }
    return true;
  });
};

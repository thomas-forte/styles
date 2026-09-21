import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { IconButton, type IconButtonProps } from "./IconButton";

export type ShowHideButtonProps = Omit<IconButtonProps, "icon"> & {
  /** Swaps chevron up/down. Consumer owns expand state. */
  isExpanded: boolean;
};

/** Expand/collapse trigger; chevron reflects `isExpanded`. */
export function ShowHideButton({ isExpanded, ...props }: ShowHideButtonProps) {
  return (
    <IconButton
      icon={isExpanded ? ChevronUpIcon : ChevronDownIcon}
      {...props}
    />
  );
}

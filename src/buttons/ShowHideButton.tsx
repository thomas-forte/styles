import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { IconButton, type IconButtonProps } from "./IconButton";

export type ShowHideButtonProps = Omit<IconButtonProps, "icon"> & {
  isExpanded: boolean;
};

export function ShowHideButton({ isExpanded, ...props }: ShowHideButtonProps) {
  return (
    <IconButton
      icon={isExpanded ? ChevronUpIcon : ChevronDownIcon}
      {...props}
    />
  );
}

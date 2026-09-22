import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  type MenuItemsProps,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router";

import { Hr } from "../base/Hr";
import { Button, type ButtonProps } from "./Button";
import { ICON_SIZE_CLASS } from "./buttonStyles";

export type ButtonMenuItem = {
  label: string;
  /** Router path. Ignored when `onClick` is set. */
  path?: string;
  /** When set, runs instead of navigating via `path`. */
  onClick?: () => void;
  divider?: "before" | "after";
};

export type ButtonMenuProps = Omit<ButtonProps, "onClick" | "type"> & {
  items: ButtonMenuItem[];
  /** Show trailing chevron. Defaults to `true`. */
  showChevron?: boolean;
  /** Headless UI menu panel anchor. Defaults to `"bottom start"`. */
  anchor?: MenuItemsProps["anchor"];
};

const ITEM_CLASS =
  "block w-full rounded px-2 py-2 text-left data-focus:bg-slate-800";

/**
 * {@link Button}-styled Headless UI menu. Items support `path` or `onClick`
 * (`onClick` wins when both are set).
 */
export const ButtonMenu = ({
  items,
  children,
  className = "",
  size = "md",
  color = "slate",
  showChevron = true,
  anchor = "bottom start",
  title,
  disabled,
  ...props
}: ButtonMenuProps) => (
  <Menu
    as="div"
    className="relative"
  >
    <MenuButton
      as={Button}
      size={size}
      color={color}
      className={`gap-2 ${className}`}
      title={title}
      disabled={disabled}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronDownIcon
          className={ICON_SIZE_CLASS[size]}
          aria-hidden
        />
      )}
    </MenuButton>
    <MenuItems
      anchor={anchor}
      className={`z-50 mt-2 w-56 rounded-md border border-slate-700 bg-slate-900 p-1 text-sm text-slate-100 shadow-lg focus:outline-none ${
        typeof anchor === "string" && anchor.includes("end")
          ? "origin-top-right"
          : "origin-top-left"
      }`}
    >
      {items.map((item, index) => (
        <Fragment key={item.path ?? item.label}>
          {item.divider === "before" && index > 0 && <Hr spacing="sm" />}
          <MenuItem>
            {item.onClick ? (
              <button
                type="button"
                className={`${ITEM_CLASS} cursor-pointer`}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                to={item.path ?? ""}
                className={ITEM_CLASS}
              >
                {item.label}
              </NavLink>
            )}
          </MenuItem>
          {item.divider === "after" && index < items.length - 1 && (
            <Hr spacing="sm" />
          )}
        </Fragment>
      ))}
    </MenuItems>
  </Menu>
);

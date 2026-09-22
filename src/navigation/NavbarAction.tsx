import { MenuItem } from "@headlessui/react";
import { NavLink } from "react-router";

import type { NavbarActionItem } from "./NavbarActionItem";

export type NavbarActionProps = {
  action: NavbarActionItem;
};

const ACTION_CLASS =
  "block w-full rounded px-2 py-2 text-left data-focus:bg-slate-800";

export const NavbarAction = ({ action }: NavbarActionProps) => {
  if (action.onClick) {
    return (
      <MenuItem>
        <button
          type="button"
          className={`${ACTION_CLASS} cursor-pointer`}
          onClick={action.onClick}
        >
          {action.label}
        </button>
      </MenuItem>
    );
  }

  return (
    <MenuItem>
      <NavLink
        to={action.path ?? ""}
        className={ACTION_CLASS}
      >
        {action.label}
      </NavLink>
    </MenuItem>
  );
};

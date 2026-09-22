import { Fragment } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import type { NavbarActionItem } from "./NavbarActionItem";
import { NavbarAction } from "./NavbarAction";
import { Hr } from "../base/Hr";

export type NavbarActionsProps = {
  label: string;
  icon: React.ReactNode;
  actions: NavbarActionItem[];
};

export const NavbarActions = ({ label, icon, actions }: NavbarActionsProps) => (
  <Menu
    as="div"
    className="relative hidden md:block"
  >
    <MenuButton className="cursor-pointer inline-flex items-center gap-2 rounded-md border border-slate-500/80 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-100 transition hover:bg-slate-700">
      {icon}
      {label}
      <ChevronDownIcon className="size-4" />
    </MenuButton>
    <MenuItems
      anchor="bottom end"
      className="z-50 mt-2 w-56 origin-top-right rounded-md border border-slate-700 bg-slate-900 p-1 text-sm text-slate-100 shadow-lg focus:outline-none"
    >
      {actions.map((action, index) => (
        <Fragment key={action.path ?? action.label}>
          {action.divider === "before" && index > 0 && <Hr spacing="sm" />}
          <NavbarAction action={action} />
          {action.divider === "after" && index < actions.length - 1 && (
            <Hr spacing="sm" />
          )}
        </Fragment>
      ))}
    </MenuItems>
  </Menu>
);

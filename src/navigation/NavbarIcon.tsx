import { NavLink } from "react-router";

import { type NavbarItem } from "./NavbarItem";

export type NavbarIconProps = {
  item: NavbarItem;
};

export const NavbarIcon = ({ item }: NavbarIconProps) => (
  <NavLink
    to={item.path}
    className={({ isActive }) =>
      `rounded-md p-2 text-xl transition ${
        isActive
          ? "bg-slate-700 text-orange-200"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`
    }
    aria-label={item.label}
    title={item.label}
  >
    {item.icon}
  </NavLink>
);

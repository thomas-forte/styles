import { NavLink } from "react-router";

import { type NavbarItem } from "./NavbarItem";

export type NavbarListItemProps = {
  item: NavbarItem;
  onClick?: () => void;
};

export const NavbarListItem = ({ item, onClick }: NavbarListItemProps) => (
  <li>
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition ${
          isActive
            ? "bg-slate-700 text-orange-200"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {item.icon}
      {item.label}
    </NavLink>
  </li>
);

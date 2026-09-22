import { ButtonMenu } from "../buttons/ButtonMenu";
import type { NavbarActionItem } from "./NavbarActionItem";

export type NavbarActionsProps = {
  label: string;
  icon: React.ReactNode;
  actions: NavbarActionItem[];
};

/** Desktop actions dropdown; wraps {@link ButtonMenu}. */
export const NavbarActions = ({ label, icon, actions }: NavbarActionsProps) => (
  <div className="hidden md:block">
    <ButtonMenu
      items={actions}
      size="sm"
      anchor="bottom end"
    >
      {icon}
      {label}
    </ButtonMenu>
  </div>
);

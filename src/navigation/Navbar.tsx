import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router";

import { Fragment, useState } from "react";

import type { NavbarItem } from "./NavbarItem";
import type { NavbarActionItem } from "./NavbarActionItem";
import { NavbarIcon } from "./NavbarIcon";
import { NavbarIconDivider } from "./NavbarIconDivider";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarActions } from "./NavbarActions";
import { NavbarListItemDivider } from "./NavbarListItemDivider";

type NavbarProps = {
  /** Desktop icon links and mobile drawer entries. */
  items: NavbarItem[];
  /** Actions menu (desktop) and drawer section (mobile). */
  actions: NavbarActionItem[];
  /** Brand mark on the left. */
  logo: React.ReactNode;
  /** Leading icon for the actions menu button. */
  actionsIcon: React.ReactNode;
  /** Label for the actions menu button. */
  actionsLabel: string;
};

/**
 * App chrome: logo, desktop icon nav, desktop actions menu, and a mobile
 * drawer for `items` and `actions`. Skip edge dividers on first/last entries.
 */
export const Navbar = ({
  items,
  actions,
  logo,
  actionsIcon,
  actionsLabel,
}: NavbarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-styles-primary-border bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-[0_10px_40px_rgba(6,12,24,0.55)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center">
            {logo}
            <div className="hidden items-center gap-2 md:flex">
              {items.map((item, index) => (
                <Fragment key={item.path}>
                  {item.divider === "before" && index > 0 && (
                    <NavbarIconDivider />
                  )}
                  <NavbarIcon item={item} />
                  {item.divider === "after" && index < items.length - 1 && (
                    <NavbarIconDivider />
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer rounded-md border border-slate-700 p-2 text-slate-200 md:hidden"
              aria-label="Open navigation"
            >
              <Bars3Icon
                className={`size-6 transition-transform duration-300 ease-in-out ${sidebarOpen ? "rotate-90" : ""}`}
                title={sidebarOpen ? "Close" : "Open"}
              />
            </button>
            <NavbarActions
              label={actionsLabel}
              icon={actionsIcon}
              actions={actions}
            />
          </div>
        </div>
      </nav>

      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 md:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 transition-opacity duration-300 ease-linear data-closed:opacity-0 mt-19"
        />

        <div className="fixed inset-0 flex justify-end mt-19">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="relative flex grow flex-col gap-y-5 overflow-y-auto px-6 py-4 bg-slate-950 ring ring-white/10 before:pointer-events-none before:absolute before:inset-0 before:bg-black/10">
              <div className="mb-4 flex items-center justify-between">
                <DialogTitle className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Navigation
                </DialogTitle>
              </div>
              <nav className="relative flex flex-1 flex-col gap-y-6">
                <ul
                  role="list"
                  className="-mx-2 space-y-1"
                >
                  {items.map((item, index) => (
                    <Fragment key={item.path}>
                      {item.divider === "before" && index > 0 && (
                        <NavbarListItemDivider />
                      )}
                      <NavbarListItem
                        item={item}
                        onClick={() => setSidebarOpen(false)}
                      />
                      {item.divider === "after" &&
                        index < items.length - 1 && (
                          <NavbarListItemDivider />
                        )}
                    </Fragment>
                  ))}
                </ul>

                {actions.length > 0 && (
                  <div>
                    <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {actionsLabel}
                    </p>
                    <ul
                      role="list"
                      className="-mx-2 space-y-1"
                    >
                      {actions.map((action, index) => (
                        <Fragment key={action.path ?? action.label}>
                          {action.divider === "before" && index > 0 && (
                            <NavbarListItemDivider />
                          )}
                          <li>
                            {action.onClick ? (
                              <button
                                type="button"
                                onClick={() => {
                                  action.onClick?.();
                                  setSidebarOpen(false);
                                }}
                                className="block w-full cursor-pointer rounded-md px-2 py-2 text-left text-sm/6 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                              >
                                {action.label}
                              </button>
                            ) : (
                              <NavLink
                                to={action.path ?? ""}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                  `block rounded-md px-2 py-2 text-sm/6 font-semibold transition ${
                                    isActive
                                      ? "bg-slate-700 text-orange-200"
                                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                  }`
                                }
                              >
                                {action.label}
                              </NavLink>
                            )}
                          </li>
                          {action.divider === "after" &&
                            index < actions.length - 1 && (
                              <NavbarListItemDivider />
                            )}
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                )}
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

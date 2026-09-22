import { Title } from "../base/Title";
import { Navbar } from "./Navbar";

import {
  HomeIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { NavbarIcon } from "./NavbarIcon";
import { NavbarActions } from "./NavbarActions";
import { NavbarIconDivider } from "./NavbarIconDivider";

export const NavigationDemoContent = () => {
  return (
    <div className="space-y-4">
      <div>
        <Navbar
          items={[
            {
              label: "Home",
              icon: <HomeIcon className="size-6" />,
              path: "/",
              divider: "after",
            },
            {
              label: "About",
              icon: <InformationCircleIcon className="size-6" />,
              path: "/about",
            },
            {
              label: "Settings",
              icon: <Cog6ToothIcon className="size-6" />,
              path: "/settings",
              divider: "before",
            },
          ]}
          actions={[
            {
              label: "Profile",
              path: "/profile",
            },
            {
              label: "Preferences",
              path: "/preferences",
              divider: "after",
            },
            {
              label: "Sign out",
              onClick: () => undefined,
            },
          ]}
          actionsIcon={<RocketLaunchIcon className="size-6" />}
          actionsLabel="User"
          logo={<Title text="Company Name" />}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <NavbarIcon
          item={{
            label: "Home",
            icon: <HomeIcon className="size-6" />,
            path: "/",
          }}
        />
        <NavbarIconDivider />
        <NavbarIcon
          item={{
            label: "About",
            icon: <InformationCircleIcon className="size-6" />,
            path: "/about",
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <NavbarActions
          actions={[
            {
              label: "Profile",
              path: "/profile",
            },
            {
              label: "Preferences",
              path: "/preferences",
              divider: "after",
            },
            {
              label: "Sign out",
              onClick: () => undefined,
            },
          ]}
          label="User"
          icon={<RocketLaunchIcon className="size-6" />}
        />
      </div>
    </div>
  );
};

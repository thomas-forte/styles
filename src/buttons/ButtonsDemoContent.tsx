import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { Button } from "./Button";
import { ButtonMenu } from "./ButtonMenu";
import { IconButton } from "./IconButton";
import { ShowHideButton } from "./ShowHideButton";

export const ButtonsDemoContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuNote, setMenuNote] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button>slate (default)</Button>
        <Button color="cyan">cyan</Button>
        <Button color="amber">amber</Button>
        <Button color="rose">rose</Button>
        <Button color="zinc">zinc</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">sm</Button>
        <Button size="md">md (default)</Button>
        <Button size="lg">lg</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <IconButton
          color="cyan"
          size="sm"
          icon={CheckCircleIcon}
        />
        <IconButton
          color="cyan"
          icon={CheckCircleIcon}
        />
        <IconButton
          color="cyan"
          size="lg"
          icon={CheckCircleIcon}
        />
        <IconButton
          color="cyan"
          size="sm"
          icon={CheckCircleIcon}
        >
          Complete
        </IconButton>
        <IconButton
          color="cyan"
          icon={CheckCircleIcon}
        >
          Complete
        </IconButton>
        <IconButton
          color="cyan"
          size="lg"
          icon={CheckCircleIcon}
        >
          Complete
        </IconButton>
        <IconButton
          color="amber"
          icon={<CheckCircleIcon className="size-4" />}
        >
          node icon
        </IconButton>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <ShowHideButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded((previous) => !previous)}
        />
        <ShowHideButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded((previous) => !previous)}
        >
          Show hide
        </ShowHideButton>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <ButtonMenu
          size="sm"
          items={[
            { label: "Profile", path: "/profile" },
            { label: "Settings", path: "/settings", divider: "after" },
            {
              label: "Action",
              onClick: () => setMenuNote("sm action"),
            },
          ]}
        >
          sm menu
        </ButtonMenu>
        <ButtonMenu
          items={[
            { label: "Profile", path: "/profile" },
            { label: "Settings", path: "/settings", divider: "after" },
            {
              label: "Action",
              onClick: () => setMenuNote("md action"),
            },
          ]}
        >
          md menu (default)
        </ButtonMenu>
        <ButtonMenu
          size="lg"
          anchor="bottom end"
          items={[
            { label: "Profile", path: "/profile" },
            { label: "Settings", path: "/settings", divider: "after" },
            {
              label: "Action",
              onClick: () => setMenuNote("lg action"),
            },
          ]}
        >
          lg menu (bottom end)
        </ButtonMenu>
      </div>
      {menuNote && (
        <p className="text-sm text-slate-400">Last menu action: {menuNote}</p>
      )}
    </div>
  );
};

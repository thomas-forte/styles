import { useState } from "react";

import { Button } from "../buttons/Button";
import { ConfirmDialog } from "./ConfirmDialog";
import { Dialogify } from "./Dialogify";
import { NotificationDialog } from "./NotificationDialog";

export const DialogsDemoContent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setDialogOpen(true)}>Open Dialogify</Button>
        <Dialogify
          title="Dialogify demo"
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <p className="mt-2 text-sm text-slate-300">Dialog body content.</p>
          <div className="mt-4">
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </div>
        </Dialogify>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <ConfirmDialog
          title="Confirm Dialog"
          message="This is a confirm dialog."
          triggerLabel="Confirm"
        />
        <Button onClick={() => setNotificationMessage("Operation completed.")}>
          Notify
        </Button>
        <NotificationDialog
          title="Notification"
          message={notificationMessage}
        />
      </div>
    </div>
  );
};

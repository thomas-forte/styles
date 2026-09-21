import { useEffect, useState } from "react";

import { Button } from "../buttons/Button";
import { DialogBody } from "./DialogBody";
import { Dialogify } from "./Dialogify";

export type NotificationDialogProps = {
  title: string;
  /**
   * Opens when non-empty. Close only dismisses the UI; clear `message` yourself
   * if you need to reopen with the same string.
   */
  message: string;
};

/**
 * Read-only result modal. Opens when `message` becomes truthy.
 * No trigger button — mount it and drive `message` from parent state.
 */
export const NotificationDialog = ({
  title,
  message,
}: NotificationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(!!message);
  }, [message]);

  return (
    <>
      <Dialogify
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogBody message={message} />
        <div className="mt-4 flex justify-end items-center gap-2">
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </Dialogify>
    </>
  );
};

import { useEffect, useState } from "react";

import { Button } from "../buttons/Button";
import { DialogBody } from "./DialogBody";
import { Dialogify } from "./Dialogify";

export type NotificationDialogProps = {
  title: string;
  message: string;
};

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

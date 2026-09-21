import { useState } from "react";

import {
  Button,
  type ButtonColorScheme,
  type ButtonSize,
} from "../buttons/Button";
import { Dialogify } from "./Dialogify";
import { DialogBody } from "./DialogBody";

export type ConfirmDialogProps = {
  title: string;
  message: string;
  /** Runs when the confirm button is clicked, then the dialog closes. */
  onConfirm?: () => void;
  /** Confirm button label; defaults to `triggerLabel`. */
  confirmLabel?: string;
  /** Confirm button color; defaults to `triggerButtonColor`. */
  confirmButtonType?: ButtonColorScheme;
  triggerLabel: string;
  /** Defaults to `"slate"`. */
  triggerButtonColor?: ButtonColorScheme;
  /** Defaults to `"md"`. */
  triggerButtonSize?: ButtonSize;
  triggerDisabled?: boolean;
};

/**
 * Trigger button + confirm/cancel modal.
 * Owns its own open state; confirm closes after `onConfirm`.
 */
export const ConfirmDialog = ({
  title,
  message,
  onConfirm,
  confirmLabel,
  confirmButtonType,
  triggerLabel,
  triggerButtonColor = "slate",
  triggerButtonSize = "md",
  triggerDisabled = false,
}: ConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size={triggerButtonSize}
        color={triggerButtonColor}
        disabled={triggerDisabled}
      >
        {triggerLabel}
      </Button>
      <Dialogify
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogBody message={message} />
        <div className="mt-4 flex justify-between items-center gap-2">
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleConfirm}
            color={confirmButtonType || triggerButtonColor}
          >
            {confirmLabel || triggerLabel}
          </Button>
        </div>
      </Dialogify>
    </>
  );
};

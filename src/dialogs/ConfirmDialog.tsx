import { useState } from "react";

import {
  Button,
  type ButtonColorScheme,
  type ButtonSize,
} from "../buttons/Button";
import { Dialogify } from "./Dialogify";

export type ConfirmDialogProps = {
  title: string;
  message: string;
  onConfirm?: () => void;
  confirmLabel?: string;
  confirmButtonType?: ButtonColorScheme;
  triggerLabel: string;
  triggerButtonColor?: ButtonColorScheme;
  triggerButtonSize?: ButtonSize;
  triggerDisabled?: boolean;
};

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
        <p className="text-sm font-medium text-slate-200">{message}</p>
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

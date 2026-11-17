import { type ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import { Title } from "../typography/Title";

export type DialogifySize = "sm" | "md" | "lg" | "xl";

const SIZE_CLASS: Record<DialogifySize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export type DialogifyProps = {
  title: string;
  /**
   * Optional subtitle under the title.
   * Declared for API symmetry; not currently rendered.
   */
  description?: string;
  /** Defaults to `"md"`. */
  size?: DialogifySize;
  isOpen: boolean;
  onClose: () => void;
  /** Body content under the title (forms, {@link DialogBody}, actions, etc.). */
  children: ReactNode;
};

/** Headless UI modal shell. Control open state with `isOpen` / `onClose`. */
export const Dialogify = ({
  title,
  isOpen,
  onClose,
  size = "md",
  children,
}: DialogifyProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-1 sm:p-2 md:p-4">
            <DialogPanel
              transition
              className={`w-full rounded-xl bg-white/5 p-2 pt-4 sm:p-4 md:p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 ${SIZE_CLASS[size]}`}
            >
              <DialogTitle
                as="div"
                className="mb-4"
              >
                <Title
                  as="h3"
                  text={title}
                />
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

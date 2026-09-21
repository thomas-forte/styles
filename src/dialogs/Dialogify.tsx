import { type ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export type DialogifyProps = {
  title: string;
  /**
   * Optional subtitle under the title.
   * Declared for API symmetry; not currently rendered.
   */
  description?: string;
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
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {title}
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

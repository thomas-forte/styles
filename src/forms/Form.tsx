import type { ReactNode } from "react";

export type FormProps = {
  /** React 19 form action; receives `FormData`. */
  action: (formData: FormData) => void | Promise<void>;
  children: ReactNode;
  className?: string;
};

/** Form shell with vertical spacing; uses the React `action` prop. */
export const Form = ({ action, children, className = "" }: FormProps) => (
  <form
    action={action}
    className={`space-y-3 ${className}`}
  >
    {children}
  </form>
);

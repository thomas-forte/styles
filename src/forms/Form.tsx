import type { ReactNode } from "react";

export type FormProps = {
  action: (formData: FormData) => void | Promise<void>;
  children: ReactNode;
  className?: string;
};

export const Form = ({ action, children, className = "" }: FormProps) => (
  <form
    action={action}
    className={`space-y-3 ${className}`}
  >
    {children}
  </form>
);

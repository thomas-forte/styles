export type DialogBodyProps = {
  message: string;
};

/** Styled message paragraph for dialog bodies. */
export const DialogBody = ({ message }: DialogBodyProps) => (
  <p className="text-sm font-medium text-slate-200">{message}</p>
);

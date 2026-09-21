export type DialogBodyProps = {
  message: string;
};

export const DialogBody = ({ message }: DialogBodyProps) => (
  <p className="text-sm font-medium text-slate-200">{message}</p>
);

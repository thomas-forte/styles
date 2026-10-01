export type BodyProps = {
  children: string;
  /** Native tooltip; falls back to children attribute when omitted. */
  title?: string;
  /** Use monospace font. Defaults to `false`. */
  mono?: boolean;
  /** Use italic font. Defaults to `false`. */
  italic?: boolean;
};

export const BASE_CLASSES = "text-sm text-slate-300 cursor-default";

/** Primary body text. */
export const Body = ({
  children,
  title,
  mono = false,
  italic = false,
}: BodyProps) => {
  const classes = `${BASE_CLASSES} ${mono ? "font-mono" : ""} ${italic ? "italic" : ""}`;
  return (
    <p
      className={classes}
      title={title ?? children}
    >
      {children}
    </p>
  );
};

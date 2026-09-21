type SubtitleProps = {
  text: string;
  /** Native tooltip; falls back to no title attribute when omitted. */
  title?: string;
  /** Use monospace font. Defaults to `false`. */
  mono?: boolean;
};

const BASE_CLASSES = "text-sm text-slate-300 cursor-default";

/** Secondary heading under a {@link Title} or card header. */
export const Subtitle = ({ text, title, mono = false }: SubtitleProps) => {
  const classes = `${BASE_CLASSES} ${mono ? "font-mono" : ""}`;
  return (
    <h4
      className={classes}
      title={title}
    >
      {text}
    </h4>
  );
};

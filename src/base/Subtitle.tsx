import { type BodyProps, BASE_CLASSES } from "./Body";

type SubtitleProps = BodyProps;

/** Secondary heading under a {@link Title} or card header. */
export const Subtitle = ({
  children,
  title,
  mono = false,
  italic = false,
}: SubtitleProps) => {
  const classes = `${BASE_CLASSES} ${mono ? "font-mono" : ""} ${italic ? "italic" : ""}`;
  return (
    <h4
      className={classes}
      title={title ?? children}
    >
      {children}
    </h4>
  );
};

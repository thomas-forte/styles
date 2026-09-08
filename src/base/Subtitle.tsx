type SubtitleProps = {
  text: string;
  title?: string;
  mono?: boolean;
};

const BASE_CLASSES = "text-sm text-slate-300 cursor-default";

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

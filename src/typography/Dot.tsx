export type DotProps = {
  symbol?: string;
};

const BASE_CLASSES = "text-slate-300/85 cursor-default select-none";

/** Dot separator, or really any character. */
export const Dot = ({ symbol = "·" }: DotProps) => (
  <span className={BASE_CLASSES}>{symbol}</span>
);

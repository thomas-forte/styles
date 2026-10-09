export type HrProps = {
  /** Vertical margin around the rule. Defaults to `"md"`. */
  spacing?: HrSpacing;
};

type HrSpacing = "sm" | "md" | "lg";

const SPACING_CLASS: Record<HrSpacing, string> = {
  sm: "my-1",
  md: "my-2",
  lg: "my-4",
};

/** Horizontal divider. */
export const Hr = ({ spacing = "md" }: HrProps) => (
  <hr className={`border-slate-700 ${SPACING_CLASS[spacing]}`} />
);

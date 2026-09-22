export type HrProps = {
  spacing?: "sm" | "md" | "lg";
};

const SIZE_CLASS: Record<NonNullable<HrProps["spacing"]>, string> = {
  sm: "my-1",
  md: "my-2",
  lg: "my-4",
};

export const Hr = ({ spacing = "md" }: HrProps) => (
  <hr className={`border-slate-700 ${SIZE_CLASS[spacing]}`} />
);

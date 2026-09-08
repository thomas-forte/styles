type LoadingProps = {
  size?: LoadingSize;
  color?: LoadingColor;
};

export type LoadingSize = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<LoadingSize, string> = {
  sm: "size-8",
  md: "size-12",
  lg: "size-20",
};

export type LoadingColor = "slate" | "emerald";

const COLOR_CLASSES: Record<LoadingColor, string> = {
  slate: "border-slate-100",
  emerald: "border-emerald-300",
};

export const Loading = ({ size = "lg", color = "slate" }: LoadingProps) => {
  const className = `${SIZE_CLASSES[size]} border-y-2 ${COLOR_CLASSES[color]}`;
  return (
    <div className="flex justify-center items-center h-full">
      <div className={`animate-spin rounded-full ${className}`}></div>
    </div>
  );
};

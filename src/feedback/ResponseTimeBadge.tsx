import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

const BASE_CLASS =
  "flex items-center gap-1 justify-end text-xs text-slate-500 text-right select-none mt-3";

type ResponseTimeBadgeProps = {
  processTime: number;
  threshold?: number;
};

/**
 * Formats a process-time header value as `RT: N.NNNms`.
 * Non-finite `processTime` shows `N/A`.
 */
export const ResponseTimeBadge = ({
  processTime,
  threshold = 25,
}: ResponseTimeBadgeProps) => {
  let responseTime: string;
  let className = "";
  if (Number.isFinite(processTime)) {
    responseTime = processTime.toFixed(3) + "ms";
    className = processTime > threshold ? "text-red-400!" : "";
  } else {
    responseTime = "N/A";
  }
  return (
    <div
      className={`${BASE_CLASS} ${className}`}
      title={`Response Time: ${responseTime}`}
    >
      <ArrowsRightLeftIcon className="size-3" /> {responseTime}
    </div>
  );
};

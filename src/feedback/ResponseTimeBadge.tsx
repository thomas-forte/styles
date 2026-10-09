const BASE_CLASS = "text-xs text-slate-500 text-right select-none mt-3";

/**
 * Formats a process-time header value as `RT: N.NNNms`.
 * Non-finite `processTime` shows `N/A`.
 */
export const ResponseTimeBadge = ({ processTime }: { processTime: number }) => {
  const responseTime = Number.isFinite(processTime)
    ? `${processTime.toFixed(3)}ms`
    : "N/A";
  return (
    <div
      className={BASE_CLASS}
      title={`Response Time: ${responseTime}`}
    >
      RT: {responseTime}
    </div>
  );
};

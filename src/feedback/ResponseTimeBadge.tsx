const BASE_CLASS = "text-xs text-slate-500 text-right select-none mt-3";

export const ResponseTimeBadge = ({ processTime }: { processTime: string }) => {
  const responseTime = Number(processTime || "?").toFixed(3);
  return (
    <div
      className={BASE_CLASS}
      title={`Response Time: ${responseTime}ms`}
    >
      RT: {responseTime !== "NaN" ? `${responseTime}ms` : "N/A"}
    </div>
  );
};

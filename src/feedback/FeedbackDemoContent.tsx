import { Loading } from "./Loading";
import { ResponseTimeBadge } from "./ResponseTimeBadge";

export const FeedbackDemoContent = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap items-center gap-6">
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <p className="text-sm text-gray-300">Large is the default size.</p>
    </div>
    <div className="flex flex-wrap items-center gap-6">
      <Loading size="sm" />
      <Loading
        size="sm"
        color="emerald"
      />
      <p className="text-sm text-gray-300">Slate is the default color.</p>
    </div>
    <div>
      <ResponseTimeBadge processTime="42.5" />
      <ResponseTimeBadge processTime="COW" />
      <ResponseTimeBadge processTime="42.555555555555" />
    </div>
  </div>
);

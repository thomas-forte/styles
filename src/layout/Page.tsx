import { type ReactNode } from "react";

import { Loading } from "../feedback/Loading";
import { ResponseTimeBadge } from "../feedback/ResponseTimeBadge";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageProps = {
  children: ReactNode;
  /** Replaces the page with {@link Loading}. Defaults to `false`. */
  isLoading?: boolean;
  /** When defined (including `""`), shows {@link ResponseTimeBadge}. */
  processTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Centered footer actions under the page. */
  actions?: ReactNode;
};

/** Page chrome: breadcrumbs, body, optional RT badge and footer actions. */
export const Page = ({
  children,
  processTime,
  breadcrumbs,
  actions,
  isLoading = false,
}: PageProps) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {children}
      </div>
      {processTime != undefined && (
        <ResponseTimeBadge processTime={processTime} />
      )}
      {actions && (
        <div className="flex justify-center items-center mb-4">{actions}</div>
      )}
    </>
  );
};

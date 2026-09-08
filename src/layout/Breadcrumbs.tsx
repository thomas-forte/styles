import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

export type BreadcrumbItem = {
  name: string;
  to?: string;
  current?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex px-4 md:px-0"
    >
      <ol
        role="list"
        className="flex items-center space-x-4"
      >
        <li>
          <div>
            <Link
              to="/"
              className="text-slate-500 transition hover:text-orange-300"
            >
              <HomeIcon
                aria-hidden="true"
                className="size-5 shrink-0"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {items.map((item) => (
          <li key={`${item.name}-${item.to ?? "current"}`}>
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="size-5 shrink-0 text-slate-700"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              {item.to && !item.current ? (
                <Link
                  to={item.to}
                  className="ml-4 text-sm font-medium text-slate-400 transition hover:text-orange-200"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-slate-200"
                >
                  {item.name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

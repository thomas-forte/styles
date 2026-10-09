import { Link } from "react-router";
import { BASE_CLASSES, type BaseLinkProps } from "./Link";

type RouterLinkProps = BaseLinkProps & {
  to: string;
};

/** Generic router link component. */
export const RouterLink = ({
  to,
  className = "",
  onClick,
  title,
  children,
}: RouterLinkProps) => {
  return (
    <Link
      to={to}
      className={`${BASE_CLASSES} ${className}`}
      onClick={onClick}
      title={title ?? to}
    >
      {children}
    </Link>
  );
};

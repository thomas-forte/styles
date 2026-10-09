import { Body } from "../typography/Body";

export type ListProps<T> = {
  /** Items to display in the list. */
  items?: T[];
  /** Message to display when the list is empty or undefined. */
  emptyMessage?: string;
  /** Function to render each item in the list. */
  renderItem: (item: T) => React.ReactNode;
  /** Direction of the list. Defaults to `"col"`. */
  direction?: ListDirection;
  /** Whether to display dividers between items. Defaults to `false`. */
  dividers?: boolean;
  /** Spacing between items. Defaults to `"md"`. */
  spacing?: ListSpacing;
  /** Additional classes to apply to the list. */
  className?: string;
};

export type ListDirection = "row" | "col";

const DIRECTION_CLASS: Record<ListDirection, string> = {
  row: "flex-row",
  col: "flex-col",
};

const DIVIDE_CLASS: Record<ListDirection, string> = {
  row: "divide-x",
  col: "divide-y",
};

export type ListSpacing = "sm" | "md" | "lg" | "none";

const COL_SPACING_CLASS: Record<ListSpacing, string> = {
  sm: "py-1 first:pt-0 last:pb-0",
  md: "py-3 first:pt-0 last:pb-0",
  lg: "py-5 first:pt-0 last:pb-0",
  none: "",
};

const ROW_SPACING_CLASS: Record<ListSpacing, string> = {
  sm: "px-1 first:pl-0 last:pr-0",
  md: "px-2 first:pl-0 last:pr-0",
  lg: "px-3 first:pl-0 last:pr-0",
  none: "",
};

const BASE_CLASSES = "flex divide-styles-primary-border";

/** List of items. */
export const List = <T,>({
  items,
  emptyMessage = "No items",
  renderItem,
  direction = "col",
  dividers = false,
  spacing = "md",
  className = "",
}: ListProps<T>) => {
  let classes = `${BASE_CLASSES} ${DIRECTION_CLASS[direction]}`;
  if (dividers) classes += " " + DIVIDE_CLASS[direction];
  if (className) classes += " " + className;

  const itemClasses =
    direction === "row"
      ? ROW_SPACING_CLASS[spacing]
      : COL_SPACING_CLASS[spacing];

  return (
    <ul className={classes}>
      {!items || items.length === 0 ? (
        <li>
          <Body>{emptyMessage}</Body>
        </li>
      ) : (
        items.map((item, index) => (
          <li
            key={`${index}`}
            className={itemClasses}
          >
            {renderItem(item)}
          </li>
        ))
      )}
    </ul>
  );
};

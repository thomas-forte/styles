export type NavbarActionItem = {
  label: string;
  /** Router path. Ignored when `onClick` is set. */
  path?: string;
  /** When set, runs instead of navigating via `path`. */
  onClick?: () => void;
  divider?: "before" | "after";
};

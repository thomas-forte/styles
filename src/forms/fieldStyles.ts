type ColorScheme = "primary" | "code";

export const FIELD_COLOR_SCHEME_CLASS_LABEL: Record<ColorScheme, string> = {
  primary: "text-styles-primary-fg-muted",
  code: "text-cyan-100",
};

const FIELD_CONTROL_BASE =
  "block w-full rounded-md border px-3 py-1.5 text-base leading-6 sm:text-sm/6";

export const FIELD_COLOR_SCHEME_CLASS_CONTROL: Record<ColorScheme, string> = {
  primary: [
    FIELD_CONTROL_BASE,
    "text-styles-primary-fg placeholder:text-styles-primary-placeholder border-styles-primary-border-strong bg-styles-primary-bg-control",
    "transition focus:border-styles-primary-ring-border focus:ring-2 focus:ring-styles-primary-ring outline-none",
  ].join(" "),
  code: [
    FIELD_CONTROL_BASE,
    "text-cyan-100 placeholder:text-cyan-500 border-cyan-600 bg-cyan-950/80",
    "outline-none transition",
  ].join(" "),
};

const CHEVRON_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2394a3b8'%3E%3Cpath fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z' clip-rule='evenodd'/%3E%3C/svg%3E\")";

export const FIELD_SELECT_CLASS =
  "appearance-none bg-size-[1.25rem_1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10";

export const fieldSelectStyle = {
  backgroundImage: CHEVRON_ICON,
};

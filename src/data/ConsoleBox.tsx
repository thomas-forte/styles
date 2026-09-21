import { Loading } from "../feedback/Loading";

type ConsoleBoxProps = {
  children: React.ReactNode;
  loading?: boolean;
  /** `[field, message]` pairs rendered as error lines. */
  errors?: string[][];
  /** Preserve whitespace. Defaults to `false`. */
  preformatted?: boolean;
  /** Surrounds content with `[]`, `{}`, or nothing. */
  wrapper: "array" | "object" | "none";
};

/** Monospace console panel for API/debug output. */
export const ConsoleBox = ({
  children,
  loading,
  errors,
  preformatted = false,
  wrapper,
}: ConsoleBoxProps) => {
  const wrapperMap = {
    array: {
      open: "[",
      close: "]",
    },
    object: {
      open: "{",
      close: "}",
    },
    none: {
      open: "",
      close: "",
    },
  };
  return (
    <div
      className={`overflow-auto rounded-xl border border-zinc-700/60 bg-zinc-950 font-mono text-[13px] leading-6 text-emerald-300 px-[clamp(1rem,3vw,2.75rem)] py-[clamp(0.75rem,2vw,1.75rem)] shadow-inner select-none ${preformatted ? "whitespace-pre" : ""}`}
    >
      {wrapperMap[wrapper]["open"]}
      {loading && <Loading color="emerald" />}
      {errors &&
        errors.map((error, index) => (
          <div
            key={index}
            className="ml-6"
          >
            {error[1]}
          </div>
        ))}
      {children}
      {wrapperMap[wrapper]["close"]}
    </div>
  );
};

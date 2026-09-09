import { StarIcon } from "@heroicons/react/24/solid";
import { useRef, type ChangeEvent, type MouseEvent } from "react";

type ColorScheme = "primary" | "code";

type InputRatingProps = {
  id?: string;
  color?: ColorScheme;
  label: string;
  name: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

const COLOR_SCHEME_CLASS_LABEL: Record<ColorScheme, string> = {
  primary: "text-styles-primary-fg-muted",
  code: "text-cyan-100",
};

const COLOR_SCHEME_CLASS_INPUT: Record<ColorScheme, string> = {
  primary:
    "text-styles-primary-fg border border-styles-primary-border-strong bg-styles-primary-bg-control transition focus:border-styles-primary-ring-border focus:ring-2 focus:ring-styles-primary-ring outline-none",
  code: "text-cyan-100 border border-cyan-600 bg-cyan-950/80 outline-none transition",
};

export const InputRating = ({
  id,
  color = "primary",
  label,
  name,
  value,
  onChange,
  required,
  disabled,
}: InputRatingProps) => {
  const clearRatingRef = useRef<HTMLInputElement>(null);

  const handleStarClick = (
    index: number,
    event: MouseEvent<HTMLLabelElement>,
  ) => {
    if (disabled) {
      return;
    }

    const clickedValue = (index + 1).toString();
    if (value === clickedValue) {
      event.preventDefault();
      clearRatingRef.current?.click();
    }
  };

  return (
    <div>
      <label
        htmlFor={id ?? name}
        className={`block text-sm/6 font-medium ${COLOR_SCHEME_CLASS_LABEL[color]}`}
      >
        {label}
      </label>
      <div className="mt-2 flex justify-around items-center gap-2">
        <input
          ref={clearRatingRef}
          id={`${id ?? name}-none`}
          name={name}
          type="radio"
          value=""
          checked={!value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`hidden rounded-md px-3 py-1.5 text-base sm:text-sm/6 ${COLOR_SCHEME_CLASS_INPUT[color]}`}
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <input
              id={`${id ?? name}-${index}`}
              name={name}
              type="radio"
              value={index + 1}
              checked={value === (index + 1).toString()}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={`hidden rounded-md px-3 py-1.5 text-base sm:text-sm/6 ${COLOR_SCHEME_CLASS_INPUT[color]}`}
            />
            <label
              htmlFor={`${id ?? name}-${index}`}
              className="cursor-pointer"
              onClick={(event) => handleStarClick(index, event)}
            >
              <StarIcon
                className={`size-4 ${index < (Number(value) || 0) ? "text-orange-500" : "text-slate-300/85"}`}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

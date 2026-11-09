import { Radio, RadioGroup } from "@headlessui/react";

import { Button, type ButtonColorScheme, type ButtonSize } from "./Button";

export type ButtonGroupOption<T extends string | number | boolean> = {
  value: T;
  label: string;
  title?: string;
  disabled?: boolean;
};

export type ButtonGroupProps<T extends string | number | boolean> = {
  options: readonly ButtonGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Accessible name for the group. */
  label: string;
  /** Defaults to `"md"`. */
  size?: ButtonSize;
  /** Selected option color. Defaults to `"amber"`. */
  color?: ButtonColorScheme;
  className?: string;
  disabled?: boolean;
};

const segmentRadius = (index: number, count: number) => {
  if (count <= 1) {
    return "rounded-md";
  }
  if (index === 0) {
    return "rounded-l-md";
  }
  if (index === count - 1) {
    return "rounded-r-md";
  }
  return "rounded-none";
};

/** Joined {@link Button}s. One option is selected. */
export function ButtonGroup<T extends string | number | boolean>({
  options,
  value,
  onChange,
  label,
  size = "md",
  color = "amber",
  className = "",
  disabled = false,
}: ButtonGroupProps<T>) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-label={label}
      className={`inline-flex ${className}`}
    >
      {options.map((option, index) => {
        const selected = value === option.value;
        return (
          <Radio
            key={String(option.value)}
            as={Button}
            value={option.value}
            type="button"
            size={size}
            color={selected ? color : "slate"}
            rounded={false}
            disabled={disabled || option.disabled}
            title={option.title ?? option.label}
            className={`${segmentRadius(index, options.length)} ${
              index > 0 ? "-ml-px" : ""
            } ${selected ? "relative z-10" : "relative"}`}
          >
            {option.label}
          </Radio>
        );
      })}
    </RadioGroup>
  );
}

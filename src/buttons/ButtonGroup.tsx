import { type ReactNode } from "react";
import { Radio, RadioGroup } from "@headlessui/react";

import { Button, type ButtonColorScheme, type ButtonSize } from "./Button";

export type ButtonGroupOption<T extends string | number | boolean> = {
  value: T;
  label: ReactNode;
  title?: string;
  disabled?: boolean;
};

export type ButtonGroupProps<T extends string | number | boolean> = {
  options: readonly ButtonGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Defaults to `"md"`. */
  size?: ButtonSize;
  /** Selected option color. Defaults to `"slate"`. */
  color?: ButtonColorScheme;
  /** Color of the selected option. Defaults to `"amber"`. */
  activeColor?: ButtonColorScheme;
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

/** Joined {@link Button}s that fill their container and share the row evenly. */
export function ButtonGroup<T extends string | number | boolean>({
  options,
  value,
  onChange,
  size = "md",
  color = "slate",
  activeColor = "amber",
  className = "",
  disabled = false,
}: ButtonGroupProps<T>) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`flex w-full justify-evenly ${className}`}
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
            color={selected ? activeColor : color}
            rounded={false}
            disabled={disabled || option.disabled}
            title={
              option.title ??
              (typeof option.label === "string" ||
              typeof option.label === "number"
                ? String(option.label)
                : undefined)
            }
            className={`${segmentRadius(index, options.length)} ${
              index > 0 ? "-ml-px" : ""
            } min-w-0 flex-1 justify-center h-full ${
              selected ? "relative z-10" : "relative"
            }`}
          >
            {option.label}
          </Radio>
        );
      })}
    </RadioGroup>
  );
}

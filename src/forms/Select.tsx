import type { ChangeEvent, CSSProperties } from "react";

import {
  FIELD_COLOR_SCHEME_CLASS_CONTROL,
  FIELD_COLOR_SCHEME_CLASS_LABEL,
  FIELD_SELECT_CLASS,
  fieldSelectStyle,
} from "./fieldStyles";

type ColorScheme = "primary" | "code";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id?: string;
  color?: ColorScheme;
  label: string;
  name: string;
  value?: string;
  options: SelectOption[];
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const Select = ({
  id,
  color = "primary",
  label,
  name,
  value,
  options,
  placeholder,
  onChange,
  required,
  disabled,
}: SelectProps) => {
  const selectStyle: CSSProperties = fieldSelectStyle;

  return (
    <div>
      <label
        htmlFor={id ?? name}
        className={`block text-sm/6 font-medium ${FIELD_COLOR_SCHEME_CLASS_LABEL[color]}`}
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={id ?? name}
          name={name}
          className={`${FIELD_COLOR_SCHEME_CLASS_CONTROL[color]} ${FIELD_SELECT_CLASS}`}
          style={selectStyle}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        >
          {placeholder !== undefined && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

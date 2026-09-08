import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

import {
  FIELD_COLOR_SCHEME_CLASS_CONTROL,
  FIELD_COLOR_SCHEME_CLASS_LABEL,
} from "./fieldStyles";

type ColorScheme = "primary" | "code";

type InputProps = {
  id?: string;
  color?: ColorScheme;
  label: string;
  name: string;
  autoComplete?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const Input = ({
  id,
  color = "primary",
  label,
  name,
  autoComplete,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: InputProps) => {
  const formId = id ? id : name.toLowerCase().replace(/\W/g, "-");
  return (
    <div>
      <label
        htmlFor={formId}
        className={`block text-sm/6 font-medium ${FIELD_COLOR_SCHEME_CLASS_LABEL[color]}`}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={formId}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={FIELD_COLOR_SCHEME_CLASS_CONTROL[color]}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

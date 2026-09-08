import type { ChangeEvent } from "react";

type InputProps = {
  id?: string;
  label: string;
  description?: string;
  name: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const InputCheck = ({
  id,
  label,
  description,
  name,
  checked,
  onChange,
  disabled,
}: InputProps) => {
  const inputId = id ?? name;
  const descriptionId = `${inputId}-description`;

  return (
    <div className="flex items-center justify-between">
      <span className="flex grow flex-col pr-4">
        <label
          htmlFor={inputId}
          className="text-sm/6 font-medium text-slate-200"
        >
          {label}
        </label>
        {description && (
          <span
            id={descriptionId}
            className="text-sm text-slate-400"
          >
            {description}
          </span>
        )}
      </span>
      <div className="group relative inline-flex w-11 shrink-0 rounded-full border border-slate-600/80 bg-slate-800 p-0.5 outline-offset-2 outline-cyan-500/60 transition-colors duration-200 ease-in-out has-checked:border-cyan-400/70 has-checked:bg-cyan-500/70 has-disabled:cursor-not-allowed has-disabled:opacity-55 has-focus-visible:outline-2">
        <span className="relative size-5 rounded-full bg-slate-100 shadow-xs ring-1 ring-slate-700/40 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in group-has-checked:opacity-0 group-has-checked:duration-100 group-has-checked:ease-out"
          ></span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-has-checked:opacity-100 group-has-checked:duration-200 group-has-checked:ease-in"
          ></span>
        </span>
        <input
          id={inputId}
          name={name}
          type="checkbox"
          aria-label={label}
          aria-describedby={description ? descriptionId : undefined}
          checked={checked}
          className="absolute inset-0 size-full cursor-pointer appearance-none focus:outline-hidden disabled:cursor-not-allowed"
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

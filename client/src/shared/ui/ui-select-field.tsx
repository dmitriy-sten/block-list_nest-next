import clsx from "clsx";
import React, { PropsWithoutRef, SelectHTMLAttributes, useId } from "react";

export type UiSelectOptions = {
  value: string;
  label: string;
};

interface Props {
  className?: string;
  error?: string;
  label?: string;
  selectProps?: PropsWithoutRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options: UiSelectOptions[];
}

export const UiSelectField: React.FC<Props> = ({
  className,
  label,
  error,
  selectProps,
  options,
}) => {
  const id = useId();
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label className="block " htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-4 h-10 outline-0"
        )}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-red-400 text-sm">{error}</div>}
    </div>
  );
};

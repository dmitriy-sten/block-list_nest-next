import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: UiButtonVariant;
}

export const UiButton: React.FC<Props> = ({
  className,

  variant,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-4  h-10 rounded cursor-pointer flex gap-2 items-center justify-center transition-all transition-300",
        className,
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30",
          outlined:
            "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30",
          secondary:
            "border border-slate-300 hover:bg-slate-500 hover:text-white disabled:opacity-50",
        }[variant]
      )}
      {...props}
    />
  );
};

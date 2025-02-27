import React from "react";
import { UiSpinner } from "./ui-spinner";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const UiPageSpinner: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-slate-100/80",
        className
      )}
    >
      <UiSpinner className="size-20 text-teal-500" />
    </div>
  );
};

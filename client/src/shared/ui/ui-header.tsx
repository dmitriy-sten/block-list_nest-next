import clsx from "clsx";
import React from "react";
import { UiLogo } from "./ui-logo";

interface Props {
  className?: string;
  right?: React.ReactNode;
}

export const UiHeader: React.FC<Props> = ({ className, right }) => {
  return (
    <header
      className={clsx(
        " px-4 py-5 border-b bg-white border-slate-300 flex justify-between items-center",
        className
      )}
    >
      <UiLogo className="size-10" />
      {right}
    </header>
  );
};

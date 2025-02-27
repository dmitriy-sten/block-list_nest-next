import clsx from "clsx";
import React from "react";
import { UiLogo } from "./ui-logo";

interface Props {
  className?: string;
}

export const UiHeader: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        "w-screen px-4 border-b border-slate-300 flex justify-between",
        className
      )}
    >
      <UiLogo className="size-10" />
    </header>
  );
};

import { UiTextField } from "@/shared/ui/ui-textfield";
import clsx from "clsx";
import React from "react";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";

interface Props {
  className?: string;
}

export const BlockList: React.FC<Props> = ({ className }) => {
  const { q, setQ, isLoading, items } = useBlockItems();

  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={clsx("", className)}>
      <UiTextField
        className="mb-2"
        label="Search..."
        inputProps={{ value: q, onChange: ({ target }) => setQ(target.value) }}
      />

      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-4">
        {isLoading && <UiSpinner className="text-teal-600 size-10 mx-auto" />}

        {isEmptyText && <div className="tex-xl py-1 text-center ">List is empty </div>}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

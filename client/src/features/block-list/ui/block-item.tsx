import { useRemoveBlockItemMutation } from "@/entities/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}

export const BlockItem: React.FC<Props> = ({ className, id, type, data }) => {
  const { mutate, isPending } = useRemoveBlockItemMutation();

  return (
    <div className={clsx("flex gap-2", className)}>
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>

      <button
        disabled={isPending}
        onClick={() => mutate(id)}
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50"
      >
        <Trash className="size-7" />
      </button>
    </div>
  );
};

const Trash = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
      ></path>
    </svg>
  );
};

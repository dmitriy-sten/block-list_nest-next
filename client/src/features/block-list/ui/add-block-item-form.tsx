import { useAddBlockItemMutation } from "@/entities/block-list/queries";
import React from "react";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import clsx from "clsx";
import { UiTextField } from "@/shared/ui/ui-textfield";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

interface Props {
  className?: string;
}

const typeOptions = [
  { label: "WebSite", value: AddBlockItemDtoType.WebSite },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export const AddBlockItemForm: React.FC<Props> = ({ className }) => {
  const { handleSubmit, isLoading, type, register } = useAddBlockItemForm();

  return (
    <form onSubmit={handleSubmit} className={clsx("flex gap-2", className)}>
      <UiSelectField
        className="grow min-w-[200px]"
        selectProps={{
          ...register("type", { required: "Required" }),
        }}
        options={typeOptions}
      />

      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter Website",
          ...register("data", { required: "Required" }),
        }}
      />

      <UiButton disabled={isLoading} variant="primary">
        Add Block Item
      </UiButton>
    </form>
  );
};

import { useAddBlockItemMutation } from "@/entities/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {

    const { register, handleSubmit, watch, reset } = useForm<{
        type: AddBlockItemDtoType,
        data: string
    }>({})

    const addBlockItemMutation = useAddBlockItemMutation()

    const type = watch('type')

    return {
        handleSubmit: handleSubmit(data => addBlockItemMutation.mutate(data, { onSuccess: () => reset() })),
        isLoading: addBlockItemMutation.isPending,
        register,
        type
    }

}
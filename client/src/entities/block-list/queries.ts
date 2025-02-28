import { blockListControllerAddBlockItem, blockListControllerGetList, blockListControllerRemoveBlockItem } from "@/shared/api/generated"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const blockListKey = ['block-list'] as unknown[]


export function useBlockListQuery({ q }: { q: string }) {

    return useQuery({
        queryFn: () => blockListControllerGetList({ q }),
        queryKey: blockListKey.concat([{ q }])
    })
}


export function useAddBlockItemMutation() {

    const queryCLient = useQueryClient()

    return useMutation({
        mutationFn: blockListControllerAddBlockItem,
        async onSettled() {
            await queryCLient.invalidateQueries({ queryKey: blockListKey })

        }
    })
}


export function useRemoveBlockItemMutation() {

    const queryCLient = useQueryClient()

    return useMutation({
        mutationFn: blockListControllerRemoveBlockItem,
        async onSettled() {
            await queryCLient.invalidateQueries({ queryKey: blockListKey })


        }
    })
}

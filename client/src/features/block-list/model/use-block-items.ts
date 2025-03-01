import { useBlockListQuery } from "@/entities/block-list/queries";
import { useDebauncedValue } from "@/shared/hooks/use-debounce";
import { useState } from "react";




export function useBlockItems() {

    const [q, setQ] = useState('')

    const blockListQuery = useBlockListQuery({ q: useDebauncedValue(q, 500) })


    const items = blockListQuery.data?.items ?? []



    return {
        items,
        isLoading: blockListQuery.isLoading,
        q,
        setQ
    }


}
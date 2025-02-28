


import { useResetSession } from "@/entities/session/queries"
import { authControllerSignOut } from "@/shared/api/generated"
import { ROUTES } from "@/shared/constants/routes"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"




export const useSignOut = () => {

    const router = useRouter()
    const resetSession = useResetSession()

    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess: () => {
            router.replace(ROUTES.signIn)
            resetSession()
        }
    })




    return {
        signOut: signOutMutation.mutate,
        isPending: signOutMutation.isPending
    }

}



import { authControllerSignOut } from "@/shared/api/generated"
import { ROUTES } from "@/shared/constants/routes"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"




export const useSignOut = () => {

    const router = useRouter()


    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess: () => {
            router.replace(ROUTES.signIn)
        }
    })




    return {
        signOut: signOutMutation.mutate,
        isPending: signOutMutation.isPending
    }

}
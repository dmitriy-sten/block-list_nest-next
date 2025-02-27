import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";



export const useSignUpForm = () => {
    const { push } = useRouter();

    const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<{
        email: string;
        password: string;
    }>({
        mode: "onBlur",
    });

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess: () => {
            reset(), push(ROUTES.home);
        },
    });

    const errorServerMessage = signUpMutation?.error
        ? signUpMutation?.error.response?.data?.message : undefined

    return {
        register, reset, signUpMutation,
        handleSubmit: handleSubmit(data => signUpMutation.mutate(data)),
        errors,
        errorServerMessage

    }
}
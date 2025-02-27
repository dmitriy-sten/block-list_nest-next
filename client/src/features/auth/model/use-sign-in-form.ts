import {
  authControllerSignIn,
  authControllerSignUp,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useSignInForm = () => {
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

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      reset(), push(ROUTES.home);
    },
  });

  const errorServerMessage = signInMutation?.error
    ? signInMutation?.error.response?.data?.message : undefined

  return {
    register,
    reset,
    signInMutation,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    errors,
    errorServerMessage,
  };
};

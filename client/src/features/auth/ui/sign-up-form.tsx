"use client";

import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-textfield";
import React from "react";
import { useSignUpForm } from "../model/use-sign-up-form";
import { UiLink } from "@/shared/ui/ui-link";
import { ROUTES } from "@/shared/constants/routes";

export const SignUpForm: React.FC = () => {
  const { handleSubmit, register, signUpMutation, errors, errorServerMessage } =
    useSignUpForm();

  return (
    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
      <UiTextField
        inputProps={{
          type: "email",
          ...register("email", { required: "Required" }),
        }}
        label="Email"
        error={errors?.email?.message}
      />
      <UiTextField
        inputProps={{
          type: "password",
          ...register("password", { required: "Required" }),
        }}
        label="Password"
        error={errors?.password?.message}
      />
      <UiButton
        disabled={signUpMutation.isPending}
        type="submit"
        variant="primary"
      >
        {signUpMutation.isPending ? "Enter..." : "Sign Up"}
      </UiButton>
      <p className="text-red-400 text-center">{errorServerMessage}</p>
      <UiLink className="text-center" href={ROUTES.signIn}>
        Sign In
      </UiLink>
    </form>
  );
};

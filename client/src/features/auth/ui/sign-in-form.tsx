"use client";

import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-textfield";
import React from "react";
import { UiLink } from "@/shared/ui/ui-link";
import { ROUTES } from "@/shared/constants/routes";
import { useSignInForm } from "../model/use-sign-in-form";

export const SignInForm: React.FC = () => {
  const { handleSubmit, register, signInMutation, errors, errorServerMessage } =
    useSignInForm();

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
        disabled={signInMutation.isPending}
        type="submit"
        variant="primary"
      >
        {signInMutation.isPending ? "Enter..." : "Sign In"}
      </UiButton>
      <p className="text-red-400 text-center">{errorServerMessage}</p>
      <UiLink className="text-center" href={ROUTES.signUp}>
        Sign Up
      </UiLink>
    </form>
  );
};

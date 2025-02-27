import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { UiFormLayout } from "@/shared/ui/layouts/ui-form-layout";
import React from "react";

export const SignInPage: React.FC = () => {
  return <UiFormLayout title="Sign In" form={<SignInForm />} />;
};

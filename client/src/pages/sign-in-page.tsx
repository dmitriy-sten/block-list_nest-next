import { SignInForm } from "@/features/auth";
import { UiFormLayout } from "@/shared/ui/layouts/ui-form-layout";
import React from "react";

export const SignInPage: React.FC = () => {
  return <UiFormLayout title="Sign In" form={<SignInForm />} />;
};

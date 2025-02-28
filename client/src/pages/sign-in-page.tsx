import { SignInForm } from "@/features/auth";
import { UiFormLayout } from "@/shared/ui/layouts/ui-form-layout";
import { UiHeader } from "@/shared/ui/ui-header";
import React from "react";

export const SignInPage: React.FC = () => {
  return (
    <>
      <UiHeader />
      <UiFormLayout title="Sign In" form={<SignInForm />} />;
    </>
  );
};

import { SignUpForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/ui-header";
import React from "react";

export const SignUpPage: React.FC = () => {
  return (
    <main className="grow flex flex-col pt-24">
      <div>
        <SignUpForm />
      </div>
    </main>
  );
};

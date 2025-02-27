"use client";

import { authControllerSignIn } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  useQuery({
    queryKey: ["sign-in"],
    queryFn: () =>
      authControllerSignIn({
        email: "test@gmail.com",
        password: "1234",
      }),
  });

  return (
    <div className={className}>
      <UiHeader />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton disabled variant="primary">
        Hey
      </UiButton>
      <UiSpinner className="text-teal-600 size-20" />
      {/* <UiPageSpinner /> */}
    </div>
  );
};

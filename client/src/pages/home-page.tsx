"use client";

import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  const { isSuccess } = useQuery({
    queryKey: ["signin"],
    queryFn: () =>
      authControllerSignIn({
        email: "test@gmail.com",
        password: "1234",
      }),
  });

  const { data } = useQuery({
    queryKey: ["sign-in"],
    queryFn: () => authControllerGetSessionInfo(),
    enabled: !!isSuccess,
  });

  return (
    <div className={className}>
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

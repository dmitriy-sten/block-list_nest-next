"use client";

import dynamic from "next/dynamic";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProtectedProvider: React.FC<Props> = ({ children }) => {
  const { isSuccess, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: authControllerGetSessionInfo,
  });

  console.log("query");

  if (isLoading) {
    return <UiPageSpinner />;
  }

  if (isSuccess) {
    return <>{children}</>;
  }

  return null;
};

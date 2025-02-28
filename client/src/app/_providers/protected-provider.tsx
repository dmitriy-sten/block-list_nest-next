"use client";

import dynamic from "next/dynamic";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { useSessionQuery } from "@/entities/session/queries";

interface Props {
  children: ReactNode;
}

export const ProtectedProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const { isLoading, isError } = useSessionQuery();
  
  if (isLoading) {
    return <UiPageSpinner />;
  }
  if (isError) {
    router.replace(ROUTES.signIn);
  }

  return children;
};

// export const ProtectedProvider = dynamic(
//   () => Promise.resolve(ProtectedProviderComponent),
//   {
//     ssr: false,
//   }
// );

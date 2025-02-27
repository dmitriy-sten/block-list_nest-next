"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}


interface ApiError {
  message:string
}

type AxiosApiError = AxiosError<ApiError>;

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosApiError;
  }
}



export const Provider: React.FC<Props> = ({ children }) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

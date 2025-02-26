"use client";

import {
  authControllerSignIn,
} from "@/shared/api/generated";
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

  return <div className={className}></div>;
};

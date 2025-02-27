'use client'

import { UiButton } from "@/shared/ui/ui-button";
import clsx from "clsx";
import React from "react";
import { useSignOut } from "../model/use-sign-out";

interface Props {
  className?: string;
}

export const SignOutButton: React.FC<Props> = ({ className }) => {
  const { signOut, isPending } = useSignOut();

  return (
    <UiButton
      onClick={() => signOut({})}
      disabled={isPending}
      className={clsx("", className)}
      variant="outlined"
    >
      Sign out
    </UiButton>
  );
}; 

"use client";

import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import {  useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {

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

"use client";

import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets/profile";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <UiHeader right={<Profile />} />
        <div className="grid grid-cols-[200px_1fr]">
          <aside className="px-5 pt-10">
            <ToggleBlockingButton />
          </aside>
          <main>...</main>
        </div>
      </div>
    </>
  );
};

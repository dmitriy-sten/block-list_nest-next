import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";
import React from "react";

interface Props {
  className?: string;
}

export const Profile: React.FC<Props> = ({ className }) => {
  const { data: session } = useSessionQuery();

  if (!session) return null;

  return (
    <div className="flex gap-2 items-center">
      {session?.email}
      <SignOutButton />
    </div>
  );
};

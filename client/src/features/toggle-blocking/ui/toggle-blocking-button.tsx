import { UiButton } from "@/shared/ui/ui-button";
import React from "react";
import { useToggleBlocking } from "../model/use-toggle-blocking";

interface Props {
  className?: string;
}

export const ToggleBlockingButton: React.FC<Props> = ({ className }) => {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {!isBlockingEnabled ? "Enable" : "Disable"}
    </UiButton>
  );
};

import { ReactNode, Suspense } from "react";
import { ProtectedProvider } from "../_providers/protected-provider";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <ProtectedProvider>{children}</ProtectedProvider>
    </Suspense>
  );
}

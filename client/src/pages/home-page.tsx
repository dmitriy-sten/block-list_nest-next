"use client";

import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";

import { UiHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets/profile";


export const HomePage: React.FC = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <UiHeader right={<Profile />} />
        <div className="grid grid-cols-[200px_1fr]">
          <aside className="px-5 pt-10">
            <ToggleBlockingButton />
          </aside>
          <main className="pt-10 px-5">
            <h1 className="text-2xl mb-8">Block list</h1>
            <AddBlockItemForm/>
            <BlockList className="mt-3" />
          </main>
        </div>
      </div>
    </>
  );
};

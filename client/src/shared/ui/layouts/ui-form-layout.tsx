import React from "react";

interface Props {
  title: string;
  form: React.ReactNode;
}

export const UiFormLayout: React.FC<Props> = ({ form, title }) => {
  return (
    <main className="grow flex flex-col pt-24">
      <div className="rounded-xl border border-slate-300 px-14 py-8 pb-16 w-full max-w-[400px] bg-white/70 self-center">
        <h1 className="text-2xl mb-6 mx-auto">{title}</h1>
        {form}
      </div>
    </main>
  );
};

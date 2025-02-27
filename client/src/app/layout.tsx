import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./_providers/provider";
import { UiHeader } from "@/shared/ui/ui-header";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";
import { SignOutButton } from "@/features/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Block List",
  description: "App for site blocking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="min-h-screen w-screen flex flex-col bg-slate-100">
            <UiHeader
              right={
                <div className="flex gap-2 items-center">
                  <Link href={ROUTES.home}>Home</Link>
                  <SignOutButton/>
                </div>
              }
            />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";
import "~/styles/globals.css";
import { Nav } from "~/components/nav";

export const metadata: Metadata = {
  title: "Task Master",
  description:
    "A simple and efficient todo application to manage your daily tasks",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ClerkProvider>
          <TRPCReactProvider>
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02326d] to-[#15162c] text-white">
              {children}
            </main>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

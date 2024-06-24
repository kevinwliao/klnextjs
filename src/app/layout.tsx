import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";
import Header from "@/components/ui/header";
import Image from "next/image";
import Sidenav from "@/components/ui/sidenav";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Kevin Liao",
  description: "Developer and Musician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <body className={`${roboto.className} text-slate-950 dark:text-slate-50`}>
        {/* @ts-ignore */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidenav></Sidenav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

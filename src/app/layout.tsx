import type { Metadata } from "next";
import { lexend_exa } from "./fonts";
import "./globals.css";
import Header from "@/components/ui/header";
import Image from "next/image";
import Sidenav from "@/components/ui/sidenav";
import { ThemeProvider } from "next-themes";
import TopNav from "@/components/ui/topnav";

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
      <body
        className={`${lexend_exa.className} text-slate-950 dark:text-slate-50`}
      >
        {/* @ts-ignore */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <TopNav></TopNav> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { inter } from "./fonts";
import { playfair_display } from "./fonts";
import "./globals.css";
import Header from "@/components/ui/header";
import Image from "next/image";
import Sidenav from "@/components/ui/sidenav";

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
    <html lang="en">
      <body className={`${inter.className}`}>
        <Sidenav></Sidenav>
        {children}
      </body>
    </html>
  );
}

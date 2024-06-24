"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur px-3 lg:px-8 py-4 bg-white transition text-black border-b">
      <NavigationMenu className="block max-w-none">
        <NavigationMenuList className="justify-between min-w-full">
          <NavigationMenuItem className="items-center">
            <NavigationMenuLink
              className={`text-2xl font-semibold tracking-tighter flex items-center gap-1`}
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-teal-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
              Kevin Liao
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="items-center justify-between gap-4 hidden sm:flex">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-md text-slate-700 hover:text-slate-900 font-medium "
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-md text-slate-700 hover:text-slate-900 font-medium "
                href="/writing"
              >
                Writing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-md text-slate-700 hover:text-slate-900 font-medium "
                href="#"
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-md text-slate-700 hover:text-slate-900 font-medium "
                href="#"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

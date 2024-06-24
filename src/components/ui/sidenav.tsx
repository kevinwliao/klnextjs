"use client";
import Link from "next/link";
import ModeToggle from "@/components/ui/modeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const items = ["Home", "About", "Web", "Sound", "Writing"];

export default function Sidenav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed left-6 h-screen hidden xl:block uppercase w-48">
        <ul className="h-full flex flex-col justify-center p-4 gap-4 w-full ">
          {items.map((item, i) => (
            <li
              className={`font-medium text-2xl tracking-tight w-full hover:tracking-wide transition-all hover:text-cyan-500 ${
                pathname === `/#3` ? "bg-white text-blue-900" : ""
              }`}
              key={i}
            >
              <Link href={`#${i}`}>{item}</Link>
            </li>
          ))}
          <li>
            <ModeToggle></ModeToggle>
          </li>
        </ul>
      </nav>
    </>
  );
}

function mobileNav() {
  return (
    <nav className="mobile xl:hidden fixed w-screen bg-white">
      <button>
        <Menu></Menu>
      </button>
    </nav>
  );
}

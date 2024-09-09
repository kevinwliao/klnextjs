"use client";
import Link from "next/link";
import ModeToggle from "@/components/ui/modeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const items = ["Home", "About", "Skills", "Projects", "Writing"];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky bg-inherit">
      <nav>
        <ul className="flex h-full w-full flex-row justify-center gap-4 p-4">
          {items.map((item, i) => (
            <li
              className={`w-full text-2xl font-medium tracking-tight transition-all hover:tracking-wide hover:text-cyan-500 ${
                pathname === `/#3` ? "bg-white text-blue-900" : ""
              }`}
              key={i}
            >
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
          <li>
            <ModeToggle></ModeToggle>
          </li>
        </ul>
      </nav>
    </header>
  );
}

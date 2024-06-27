"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Loader } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-between">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Sun strokeWidth={3}></Sun>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <Moon strokeWidth={3}></Moon>
        </button>
      )}
    </div>
  );
}

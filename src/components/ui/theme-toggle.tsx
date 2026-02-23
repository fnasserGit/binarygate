"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 dark:border-white/10 dark:text-white">
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => {
        const newTheme = isDark ? "light" : "dark";
        setTheme(newTheme);
      }}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-[#f5f5f2] dark:border-white/10 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

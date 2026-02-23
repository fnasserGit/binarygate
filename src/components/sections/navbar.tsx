"use client";

import Link from "next/link";
import Image from "next/image";
import { navMenus } from "@/data/navigation";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto relative flex w-full max-w-[1240px] items-center px-6 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-0.5 text-[#E9EEF3] -ml-4">
          <span className="relative h-[4.2rem] w-[4.2rem] overflow-hidden rounded-lg">
            <Image src="/logo.png" alt="BinaryGate" fill className="object-contain" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9EEF3] -ml-1">
            BINARYGATE
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm text-[#E9EEF3]/80 lg:flex">
          {navMenus.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleEnter(item.label)}
              onMouseLeave={handleLeave}
            >
              <button
                className="flex items-center gap-1 transition hover:text-[#E9EEF3]"
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                aria-haspopup="menu"
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === item.label && (
                <div className="absolute left-1/2 top-full z-40 mt-3 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0f1113]/95 p-2 shadow-2xl backdrop-blur-xl">
                  <div className={`${item.items.length > 6 ? "grid grid-cols-2 gap-0.5 w-[520px]" : "w-[280px]"}`}>
                    {item.items.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <div
                          className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10"
                          style={{ backgroundColor: `${child.color}18` }}
                        >
                          <child.icon className="h-4 w-4" style={{ color: child.color }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white/90 group-hover:text-white">
                            {child.label}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-white/55 group-hover:text-white/70">
                            {child.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden lg:block" />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

      </div>
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#0f1113]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-6 py-4 sm:px-8">
            {navMenus.map((item) => {
              const expanded = expandedLabel === item.label;
              return (
                <div key={item.label} className="rounded-lg px-2 py-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-sm font-medium text-[#E9EEF3]"
                    onClick={() => setExpandedLabel(expanded ? null : item.label)}
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#E9EEF3]/60 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="mt-2 space-y-1 pl-2">
                      {item.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-sm text-[#E9EEF3]/80 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg px-2 py-2 text-sm font-medium text-[#E9EEF3]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

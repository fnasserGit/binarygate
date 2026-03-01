"use client";

import Link from "next/link";
import Image from "next/image";
import { navMenus } from "@/data/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { SERVICES_HREF } from "@/config/navigation";
import { navigateToHash } from "@/lib/scroll-to-hash";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const containerClass = "mx-auto w-full max-w-[1440px] px-6 py-2 sm:px-8 sm:py-2 lg:px-10";
  const getMenuItems = (menu: (typeof navMenus)[number]) =>
    menu.label === "What we do"
      ? whatWeDoItems.map((item) => ({
          title: item.title,
          description: item.description,
          href: item.href,
          noWrap: false,
        }))
      : menu.items.map((item) => ({
          title: item.label,
          description: menu.label === "Industries" ? "" : item.description,
          href: item.href,
          noWrap: item.label === "Software Development Services",
        }));
  const whatWeDoItems = [
    {
      title: "Cloud Transformation",
      description:
        "Design, migrate, and optimize secure cloud-native infrastructure on AWS, Azure, and hybrid environments.",
      href: "/services/cloud",
    },
    {
      title: "Hybrid & On-Prem Modernization",
      description:
        "Modernize legacy systems, redesign architectures, and build scalable hybrid platforms with zero disruption.",
      href: "/services/hybrid-on-prem",
    },
    {
      title: "DevOps & Automation",
      description:
        "CI/CD pipelines, GitOps, infrastructure as code, observability, and performance-driven engineering.",
      href: "/services/devops-platform-enablement",
    },
    {
      title: "Cybersecurity & Compliance",
      description:
        "Zero-trust architecture, WAF hardening, DDoS protection, IAM governance, and secure DevSecOps workflows.",
      href: "/services/network-security-engineering",
    },
    {
      title: "Managed Services",
      description:
        "Ongoing cloud operations, monitoring, cost optimization, reliability engineering, and continuous improvement.",
      href: "/services/managed-cloud-operations",
    },
  ] as const;

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className="sticky top-0 z-[100] bg-white text-black border-b border-black/10"
      onMouseLeave={handleLeave}
      style={{ minHeight: "var(--header-height)" }}
    >
      <div className={`relative flex items-center ${containerClass}`}>
        <Link href="/" className="flex items-center gap-0.5 text-black -ml-4">
          <span className="relative h-[3.2rem] w-[3.2rem] overflow-hidden rounded-lg">
            <Image src="/logo.png" alt="BinaryGate" fill className="object-contain" />
          </span>
          <span className="text-[0.85rem] font-bold uppercase tracking-[0.26em] text-black -ml-1 whitespace-nowrap">
            BINARYGATE
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm text-black/70 lg:flex"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
          }}
        >
          {navMenus.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleEnter(item.label)}
            >
              {item.label === "Expertise" ? (
                <div className="flex items-center gap-1">
                  <Link
                    href={SERVICES_HREF}
                    onClick={(event) => {
                      event.preventDefault();
                      setOpenDropdown(null);
                      navigateToHash(SERVICES_HREF, router);
                    }}
                    className="relative transition hover:text-black"
                    onFocus={() => handleEnter(item.label)}
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                  >
                    Expertise
                  </Link>
                  <button
                    type="button"
                    className="relative flex items-center transition hover:text-black"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                    onFocus={() => handleEnter(item.label)}
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label ? (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--spark)]" />
                  ) : null}
                </div>
              ) : (
                <button
                  type="button"
                  className="relative flex items-center gap-1 transition hover:text-black"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.label}
                  onFocus={() => handleEnter(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                  {openDropdown === item.label ? (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--spark)]" />
                  ) : null}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden lg:flex items-center gap-4" />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-black lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

      </div>
      <div
        className={`absolute left-0 right-0 top-full z-20 hidden border-t border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out lg:block ${
          openDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }}
        onMouseLeave={handleLeave}
        aria-hidden={!openDropdown}
      >
        <div className="mx-auto w-full max-w-[1240px] px-6 py-12">
          {navMenus
            .filter((menu) => menu.label === openDropdown)
            .map((menu) => {
              const items = getMenuItems(menu);

              const columnCount = 5;
              const itemsPerColumn = Math.ceil(items.length / columnCount);
              const columns = Array.from({ length: columnCount }, (_, index) =>
                items.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
              );

              return (
                <div
                  key={menu.label}
                  className="grid grid-cols-5 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-5"
                >
                  {columns.map((col, colIndex) => (
                    <div key={`${menu.label}-${colIndex}`} className="space-y-10">
                      {col.map((item) => (
                        <div key={item.href} className="group space-y-3 max-w-[260px]">
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`dropdownItemLink block text-base font-semibold text-black transition-all duration-300 hover:translate-x-1 ${item.noWrap ? "whitespace-nowrap" : ""}`}
                          >
                            <span className="dropdownItemTitle">
                              {item.title} <span className="text-[var(--spark)]">→</span>
                            </span>
                          </Link>
                          {item.description ? (
                            <p className="dropdownItemDesc text-sm leading-relaxed text-black/60">
                              {item.description}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-6 py-4 sm:px-8">
            {navMenus.map((item) => {
              const expanded = expandedLabel === item.label;
              return (
                <div key={item.label} className="rounded-lg px-2 py-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-sm font-medium text-black"
                    onClick={() => setExpandedLabel(expanded ? null : item.label)}
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-black/60 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="mt-2 space-y-1 pl-2">
                      {getMenuItems(item).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="dropdownItemLink group block border-b border-black/10 px-4 py-4"
                        >
                          <span className={`dropdownItemTitle block text-base font-semibold text-black ${child.noWrap ? "whitespace-nowrap" : ""}`}>
                            {child.title} <span className="text-[var(--spark)]">→</span>
                          </span>
                          {child.description ? (
                            <span className="dropdownItemDesc mt-1.5 block text-sm text-black/60 leading-relaxed">
                              {child.description}
                            </span>
                          ) : null}
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
              className="dropdownItemLink mt-2 rounded-lg px-2 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

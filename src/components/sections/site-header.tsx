"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { navMenus, type NavMenu } from "@/data/navigation";

/* ─── Desktop dropdown panel ─── */
function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavMenu;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (item.items.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  const timeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    onOpen();
  };

  const handleLeave = () => {
    timeout.current = setTimeout(onClose, 150);
  };

  const handleFocus = () => {
    if (timeout.current) clearTimeout(timeout.current);
    onOpen();
  };

  const handleBlur = () => {
    timeout.current = setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        onClose();
      }
    }, 120);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <button
        className="group flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:text-neutral-400 dark:hover:text-white"
        onClick={isOpen ? onClose : onOpen}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2"
          >
            <div
              className={`rounded-xl border border-neutral-200 bg-white/95 backdrop-blur-xl p-2 shadow-2xl dark:border-white/[0.08] dark:bg-black/95 ${
                item.items.length > 6 ? "w-[520px] grid grid-cols-2 gap-0.5" : "w-[280px]"
              }`}
              role="menu"
            >
              {item.items.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#f5f5f2] dark:hover:bg-white/[0.05]"
                  role="menuitem"
                >
                  <div
                    className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.06] transition-colors group-hover/item:border-white/[0.12]"
                    style={{ backgroundColor: `${child.color}10` }}
                  >
                    <child.icon className="h-4 w-4" style={{ color: child.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-800 transition-colors group-hover/item:text-black dark:text-neutral-200 dark:group-hover/item:text-white">
                      {child.label}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-neutral-600 transition-colors group-hover/item:text-neutral-700 dark:text-neutral-500 dark:group-hover/item:text-neutral-400">
                      {child.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile accordion item ─── */
function MobileAccordionItem({
  item,
  onClose,
}: {
  item: NavMenu;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasItems = item.items.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-neutral-800 transition hover:bg-[#f5f5f2] hover:text-black dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:text-white">
        <Link
          href={item.href}
          onClick={onClose}
          className="flex-1 rounded-lg px-2 py-1.5 text-left"
        >
          {item.label}
        </Link>
        {hasItems ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex h-8 w-8 items-center justify-center rounded-md"
            aria-label={`${item.label} submenu`}
            aria-expanded={expanded}
          >
            <ChevronDown
              className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        ) : null}
      </div>
      <AnimatePresence>
        {hasItems && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 pb-2 pl-4">
              {item.items.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/[0.04]"
                >
                  <div
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: `${child.color}12` }}
                  >
                    <child.icon className="h-3.5 w-3.5" style={{ color: child.color }} />
                  </div>
                  <span className="text-[13px] text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white">
                    {child.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Header ─── */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], [0, 0.85]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bgValue, setBgValue] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = headerBg.on("change", (v) => setBgValue(v));
    return unsubscribe;
  }, [headerBg]);

  // Close dropdown when clicking outside
  const handleCloseAll = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  useEffect(() => {
    if (openDropdown) {
      const handler = () => handleCloseAll();
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  }, [openDropdown, handleCloseAll]);

  useEffect(() => {
    if (!openDropdown) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseAll();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [openDropdown, handleCloseAll]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: bgValue > 0 ? `rgba(245,245,242,${bgValue})` : undefined,
          borderBottomColor: bgValue > 0.3 ? `rgba(0,0,0,0.08)` : undefined,
        }}
        className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors"
      >
        <div className="mx-auto relative flex h-16 w-full max-w-7xl items-center px-4 md:px-6">
          {/* Logo */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="flex items-center gap-1 text-black dark:text-white group">
              <span className="relative h-20 w-20 overflow-visible rounded-lg">
              <Image
                src="/logo.png"
                alt="BinaryGate"
                fill
                className="object-contain scale-[1.4]"
              />
              </span>
              <span className="text-[1.15rem] font-bold tracking-[0.26em] uppercase whitespace-nowrap">
                BINARYGATE
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-6 lg:flex absolute left-1/2 -translate-x-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {navMenus.map((item) => (
              <DesktopDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={handleCloseAll}
              />
            ))}
            <Link
              href="/contact"
              className="relative text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden dark:border-white/10 dark:text-white"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          height: openDropdown ? "260px" : "0px",
          transition: "height 180ms ease",
        }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-white/95 backdrop-blur-lg dark:bg-black/95 lg:hidden"
          >
            <nav className="flex flex-col gap-0.5 p-3">
              {navMenus.map((item) => (
                <MobileAccordionItem
                  key={item.label}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-lg px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-[#f5f5f2] hover:text-black dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

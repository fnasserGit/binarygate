"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { navigation, type NavItem } from "@/data/navigation";

/* ─── Desktop dropdown panel ─── */
function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    onOpen();
  };

  const handleLeave = () => {
    timeout.current = setTimeout(onClose, 150);
  };

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className="relative text-sm text-neutral-400 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="group flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white"
        onClick={isOpen ? onClose : onOpen}
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
              className={`rounded-xl border border-white/[0.08] bg-black/95 backdrop-blur-xl p-2 shadow-2xl ${
                item.children.length > 4 ? "w-[520px] grid grid-cols-2 gap-0.5" : "w-[280px]"
              }`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                >
                  <div
                    className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.06] transition-colors group-hover/item:border-white/[0.12]"
                    style={{ backgroundColor: `${child.color}10` }}
                  >
                    <child.icon className="h-4 w-4" style={{ color: child.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-200 transition-colors group-hover/item:text-white">
                      {child.label}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-neutral-500 transition-colors group-hover/item:text-neutral-400">
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
  item: NavItem;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        onClick={onClose}
        className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/5 hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/5 hover:text-white"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 pb-2 pl-4">
              {item.children.map((child) => (
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
                  <span className="text-[13px] text-neutral-400 transition-colors hover:text-white">
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

  return (
    <>
      <motion.header
        style={{
          backgroundColor: `rgba(0,0,0,${bgValue})`,
          borderBottomColor: `rgba(255,255,255,${bgValue > 0.3 ? 0.1 : 0})`,
        }}
        className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors"
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-white group">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="BinaryGate"
                fill
                className="object-contain"
              />
            </span>
            <span className="text-base font-semibold tracking-wide hidden sm:inline">BinaryGate</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex" onClick={(e) => e.stopPropagation()}>
            {navigation.map((item) => (
              <DesktopDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={handleCloseAll}
              />
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Book a Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-black/95 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-0.5 p-3">
              {navigation.map((item) => (
                <MobileAccordionItem
                  key={item.label}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

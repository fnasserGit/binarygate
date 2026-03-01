"use client";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function navigateToHash(href: string, router: AppRouterInstance) {
  const [path, hash] = href.split("#");
  const targetId = hash ? hash.trim() : "";

  if (path && path !== window.location.pathname) {
    router.push(`${path}${hash ? `#${hash}` : ""}`);
  }

  if (!targetId) return;

  const scroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  requestAnimationFrame(scroll);
  setTimeout(scroll, 120);
}

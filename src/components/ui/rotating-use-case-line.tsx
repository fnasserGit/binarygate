"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Update this list to add/remove lines shown in the hero.
const USE_CASE_LINES = [
  "Migrating to the cloud? We plan and execute zero-drama migrations.",
  "Running hybrid or on-prem? We modernize without disrupting operations.",
  "Need DevOps? We automate CI/CD, IaC, and releases you can trust.",
  "Kubernetes troubles? We stabilize clusters and improve reliability.",
  "Security gaps? We harden infrastructure and reduce attack surface.",
  "High cloud bills? We optimize cost without sacrificing performance.",
  "Scaling fast? We build architectures that handle real traffic.",
  "Incidents happening often? We set observability, runbooks, and response playbooks.",
  "Need an outsourced team? Embedded engineers that act like your own.",
  "Need a second opinion? Architecture review with clear next steps.",
];

// Change this value to adjust the rotation interval.
const ROTATION_INTERVAL_MS = 4000;

export function RotatingUseCaseLine({
  className = "",
  textClassName = "",
}: {
  className?: string;
  textClassName?: string;
}) {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [index, setIndex] = useState(0);
  const seen = useRef<Set<number>>(new Set([0]));
  const logged = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(!!reduceMotionPref);
  }, [reduceMotionPref]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % USE_CASE_LINES.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    seen.current.add(index);
    if (
      !logged.current &&
      seen.current.size === USE_CASE_LINES.length &&
      process.env.NODE_ENV !== "production"
    ) {
      logged.current = true;
      // Runtime check: confirm the rotation cycles through every line.
      console.info("[RotatingUseCaseLine] Completed a full rotation.");
    }
  }, [index]);

  return (
    <div
      className={`mt-4 min-h-[4.5rem] sm:min-h-[3.75rem] md:min-h-[3.25rem] ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          className={`text-[0.98rem] leading-relaxed sm:text-[1.05rem] md:text-[1.1rem] ${textClassName}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span>{USE_CASE_LINES[index]}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

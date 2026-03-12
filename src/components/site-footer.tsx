import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type FooterSocial = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const FOOTER_LINKS = {
  siteMap: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  section2: {
    title: "Sections",
    links: [
      { label: "Expertise", href: "/expertise" },
      { label: "What we do", href: "/what-we-do" },
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
    ],
  },
  company: [
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Industries", href: "/industries" },
  ],
  contact: {
    email: "hello@binary-gate.com",
    ctaLabel: "Use contact form →",
    ctaHref: "/contact",
    socials: [] as FooterSocial[],
  },
} as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#070B10] text-white/70">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Site Map
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {FOOTER_LINKS.siteMap.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--spark)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              {FOOTER_LINKS.section2.title}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {FOOTER_LINKS.section2.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--spark)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Company
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--spark)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Contact
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${FOOTER_LINKS.contact.email}`}
                className="block transition hover:text-[var(--spark)]"
              >
                {FOOTER_LINKS.contact.email}
              </a>
              <Link
                href={FOOTER_LINKS.contact.ctaHref}
                className="inline-flex items-center rounded-full bg-[var(--spark)] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
              >
                {FOOTER_LINKS.contact.ctaLabel}
              </Link>
              {FOOTER_LINKS.contact.socials.length > 0 ? (
                <div className="pt-4">
                  <p className="text-xs text-white/50">Follow us on:</p>
                  <div className="mt-3 flex gap-3 text-white/70">
                    {FOOTER_LINKS.contact.socials.map((social) => (
                      <Link
                        key={social.href}
                        href={social.href}
                        aria-label={social.label}
                        className="transition hover:text-[var(--spark)]"
                      >
                        <social.icon className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50">
          © {new Date().getFullYear()} BinaryGate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

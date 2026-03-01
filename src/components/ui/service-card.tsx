import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  className?: string;
  descriptionClassName?: string;
  readMoreClassName?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  eyebrow,
  className = "",
  descriptionClassName = "",
  readMoreClassName = "",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`bgServiceCard group flex h-full flex-col border border-slate-200 p-7 focus-visible:ring-2 focus-visible:ring-[var(--spark)] focus-visible:ring-offset-2 block ${className}`}
    >
      {eyebrow ? (
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
          {eyebrow}
        </span>
      ) : null}
      <h3 className="bgServiceCardTitle mt-3 text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed text-neutral-600 ${descriptionClassName}`}>
        {description}
      </p>
      <span className={`bgServiceCardReadMore mt-6 inline-flex items-center gap-2 text-sm font-semibold ${readMoreClassName}`}>
        Read more
        <ArrowUpRight className="bgServiceCardArrow h-4 w-4" />
      </span>
    </Link>
  );
}

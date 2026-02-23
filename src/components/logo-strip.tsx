"use client";

import Image from "next/image";

const LOGOS = [
  { src: "/logos/Amazon.svg.png", alt: "AWS" },
  { src: "/logos/Microsoft_Azure.svg", alt: "Microsoft Azure" },
  { src: "/logos/GCP company logo.png", alt: "Google Cloud" },
  { src: "/logos/Oracle-Symbol.png", alt: "Oracle Cloud Infrastructure" },
  { src: "/logos/Kubernetes.svg.png", alt: "Kubernetes" },
  { src: "/logos/CF-Logo.png", alt: "Cloudflare" },
  { src: "/logos/fortin.png", alt: "Fortinet" },
  { src: "/logos/cisco.png", alt: "Cisco" },
];

export function LogoStrip() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-2 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/45">
          Cloud & Platform Expertise
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="logo-marquee flex w-max items-center gap-8 opacity-85 sm:gap-10 motion-reduce:animate-none">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="relative h-7 w-24 transition-opacity duration-200 hover:opacity-100 sm:h-9 sm:w-28"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes logo-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-marquee {
            animation: logo-marquee 24s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .logo-marquee { animation: none; }
          }
        `}
      </style>
    </section>
  );
}

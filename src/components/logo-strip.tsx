"use client";

import Image from "next/image";

const LOGOS = [
  { src: "/logos/aws-svgrepo-com.svg", alt: "AWS" },
  { src: "/logos/microsoft-azure-svgrepo-com.svg", alt: "Microsoft Azure" },
  { src: "/logos/google-cloud-svgrepo-com.svg", alt: "Google Cloud" },
  { src: "/logos/oracle-svgrepo-com.svg", alt: "Oracle Cloud Infrastructure" },
  { src: "/logos/kubernetes-svgrepo-com.svg", alt: "Kubernetes" },
  { src: "/logos/cloudflare-svgrepo-com.svg", alt: "Cloudflare" },
  { src: "/logos/cisco-svgrepo-com.svg", alt: "Cisco" },
  { src: "/logos/terraform-svgrepo-com.svg", alt: "Terraform" },
  { src: "/logos/docker-svgrepo-com.svg", alt: "Docker" },
  { src: "/logos/github-142-svgrepo-com.svg", alt: "GitHub" },
  { src: "/logos/gitlab-svgrepo-com.svg", alt: "GitLab" },
  { src: "/logos/grafana-svgrepo-com.svg", alt: "Grafana" },
  { src: "/logos/helm-svgrepo-com.svg", alt: "Helm" },
  { src: "/logos/vmware-svgrepo-com.svg", alt: "VMware" },
];

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full pb-6 pt-2">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/45">
          Cloud & Platform Expertise
        </p>
        <div className="mt-6 overflow-hidden bg-white">
          <div className="logo-marquee flex w-max items-center gap-8 opacity-90 sm:gap-10 motion-reduce:animate-none">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-12 w-24 items-center justify-center transition-opacity duration-200 hover:opacity-100 sm:h-14 sm:w-28"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={56}
                  className={`h-8 w-auto object-contain sm:h-10 ${
                    logo.alt === "Cloudflare" ? "translate-y-[2px] scale-105" : ""
                  }`}
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
    </div>
  );
}

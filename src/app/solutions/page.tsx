import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-20 text-[#101316] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Solutions</h1>
        <p className="mt-3 text-sm text-[#101316]/70">
          Explore BinaryGate solutions for modern infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/solutions/cloud-migration" className="underline underline-offset-4">
            Cloud Migration
          </Link>
          <Link href="/solutions/devsecops" className="underline underline-offset-4">
            DevSecOps
          </Link>
          <Link href="/solutions/infrastructure-modernization" className="underline underline-offset-4">
            Infrastructure Modernization
          </Link>
          <Link href="/solutions/managed-cloud" className="underline underline-offset-4">
            Managed Cloud Services
          </Link>
        </div>
      </div>
    </main>
  );
}

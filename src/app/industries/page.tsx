import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-20 text-[#101316] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Industries</h1>
        <p className="mt-3 text-sm text-[#101316]/70">
          Industry-specific infrastructure expertise.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/industries/healthcare" className="underline underline-offset-4">
            Healthcare
          </Link>
          <Link href="/industries/telecommunications" className="underline underline-offset-4">
            Telecommunications
          </Link>
          <Link href="/industries/government" className="underline underline-offset-4">
            Government
          </Link>
          <Link href="/industries/ecommerce" className="underline underline-offset-4">
            E-Commerce &amp; Retail
          </Link>
          <Link href="/industries/technology" className="underline underline-offset-4">
            Technology &amp; SaaS
          </Link>
        </div>
      </div>
    </main>
  );
}

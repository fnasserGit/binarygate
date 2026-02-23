import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-20 text-[#101316] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Insights</h1>
        <p className="mt-3 text-sm text-[#101316]/70">
          Research, case studies, and infrastructure best practices.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/insights/blog" className="underline underline-offset-4">
            Blog
          </Link>
          <Link href="/insights/case-studies" className="underline underline-offset-4">
            Case Studies
          </Link>
          <Link href="/insights/whitepapers" className="underline underline-offset-4">
            Whitepapers
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-20 text-[#101316] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-3 text-sm text-[#101316]/70">
          Learn more about BinaryGate, our team, and our mission.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/about/story" className="underline underline-offset-4">
            Our Story
          </Link>
          <Link href="/about/team" className="underline underline-offset-4">
            Team
          </Link>
          <Link href="/about/careers" className="underline underline-offset-4">
            Careers
          </Link>
          <Link href="/about/partners" className="underline underline-offset-4">
            Partners
          </Link>
        </div>
      </div>
    </main>
  );
}

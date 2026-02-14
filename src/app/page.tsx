import { HeroEffectsSection } from "@/components/sections/hero-effects";
import { SiteHeader } from "@/components/sections/site-header";
import { StandardSections } from "@/components/sections/standard-sections";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black transition-colors">
      <SiteHeader />
      <HeroEffectsSection />
      <StandardSections />
    </main>
  );
}

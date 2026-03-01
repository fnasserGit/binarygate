import { Hero } from "@/components/sections/hero";
import { StandardSections } from "@/components/sections/standard-sections";

export default function Home() {
  return (
    <main>
      <div className="bg-[#0B0F14]">
        <Hero />
      </div>
      <div className="bg-white">
        <StandardSections />
      </div>
    </main>
  );
}

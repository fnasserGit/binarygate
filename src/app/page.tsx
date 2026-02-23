import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { LogoStrip } from "@/components/logo-strip";
import { ServicesSection } from "@/components/sections/services-section";
import { StandardSections } from "@/components/sections/standard-sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[#0B0F14]">
          <Hero />
          <LogoStrip />
        </div>
        <div className="bg-[#f5f5f2]">
          <ServicesSection />
          <StandardSections />
        </div>
      </main>
    </>
  );
}

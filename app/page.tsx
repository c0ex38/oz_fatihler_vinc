import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <Hero />
      
      <section className="animate-in fade-in slide-in-from-bottom duration-1000 fill-mode-both">
        <CategoryGrid />
      </section>

      <EngineeringSection />

      <section className="animate-in fade-in duration-1000 fill-mode-both">
        <AboutSection />
      </section>
      
      <ContactCTA />
    </div>
  );
}

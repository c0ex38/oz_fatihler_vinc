import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";

export const ContactCTA = () => {
  return (
    <section className="relative py-40 bg-brand-dark overflow-hidden group">
      {/* 1. Deep Technical Background */}
      <div className="absolute inset-0 z-0">
         <Image
           src="/images/hero_crane.png"
           alt="Industrial Background"
           fill
           className="object-cover opacity-5 grayscale group-hover:opacity-10 transition-opacity duration-1000 saturate-0"
         />
         
         {/* Technical Grid Overlay */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="border-r border-white/20 h-full" />
               ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 w-full h-full">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="border-b border-white/20 w-full" />
               ))}
            </div>
         </div>
      </div>

      {/* 2. Scanning Beam Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent animate-pulse delay-700" />

      {/* 3. Narrative & CTA Content */}
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 opacity-40">
             <span className="w-12 h-px bg-white" />
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Project Inquiry</span>
             <span className="w-12 h-px bg-white" />
          </div>

          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-10 uppercase tracking-tighter leading-[0.85] transition-all duration-700">
             MÜHENDİSLİKTE <br />
             <span className="text-brand-yellow">SINIRLARI</span> ZORLAYIN
          </h2>
          
          <p className="text-zinc-500 text-base md:text-xl font-medium mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed tracking-tight px-4 md:px-0">
             Projenize özel vinç sistemleri ve ağır sanayi çözümleri için <br className="hidden md:block" /> 
             uzman mühendislik ekibimizle şimdi bağlantı kurun.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 px-4 md:px-0">
            {/* Main Action */}
            <Link
              href="/iletisim#teklif-formu"
              className="group/btn relative w-full md:w-auto px-8 md:px-20 py-6 md:py-7 bg-white text-brand-dark font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-brand-yellow shadow-2xl"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow group-hover/btn:bg-brand-dark transition-colors" />
              <span className="relative z-10 flex items-center justify-center gap-4 text-xs md:text-sm">
                HEMEN TEKLİF ALIN
                <span className="text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </span>
            </Link>

            {/* Support Marker */}
            <div className="flex flex-col items-center md:items-start gap-1">
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-2">Hızlı Destek Hattı</span>
               <Link 
                 href="tel:4447592" 
                 className="text-4xl font-black text-white hover:text-brand-yellow transition-colors tracking-tighter"
               >
                 444 75 92
               </Link>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-20 filter grayscale invert">
             {["SAFETY FIRST", "HI-TECH CRANES", "ELITE ENGINEERING"].map((tag) => (
                <span key={tag} className="text-[9px] font-black uppercase tracking-[0.5em] text-white">{tag}</span>
             ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

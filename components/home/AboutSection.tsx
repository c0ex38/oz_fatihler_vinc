import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";

export const AboutSection = () => {
  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden relative">
      {/* 1. Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50 border-l border-zinc-100 pointer-events-none" />
      
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center relative z-10">
        {/* Visual Content - Cinematic Collage */}
        <div className="relative group px-4 md:px-0">
          <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 pl-0 md:pl-24">
            {/* Top Image - Floating Animation */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl animate-in fade-in duration-1000 group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/images/hero_crane.png"
                alt="Production Excellence"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale saturate-50 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
            </div>
            
            {/* Bottom Image - Delayed Floating Animation */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl md:translate-y-24 group-hover:md:translate-y-20 transition-all duration-1000 group-hover:scale-[1.02]">
              <Image
                src="/images/portal_crane.png"
                alt="Quality Integration"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale saturate-50 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
          
          {/* Glassmorphic Stats Badge */}
          <div className="absolute top-[40%] -left-2 md:top-1/2 md:left-0 z-20 bg-brand-dark/95 backdrop-blur-3xl p-6 md:p-12 shadow-[40px_40px_100px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700 border-l-4 border-brand-yellow max-w-[150px] md:max-w-none">
             <span className="block text-4xl md:text-7xl font-black text-brand-yellow mb-2 md:mb-4 leading-none tracking-tighter">35+</span>
             <span className="block text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 leading-tight">Yıllık Güven <br />ve Sürdürülebİlİrlİk</span>
          </div>

          {/* Heritage Marker */}
          <div className="absolute -bottom-10 md:-bottom-16 -left-4 md:-left-12 flex flex-col items-center gap-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <span className="text-[80px] md:text-[120px] font-black text-brand-dark tracking-tighter leading-none">EST</span>
            <span className="text-[80px] md:text-[120px] font-black text-brand-dark tracking-tighter leading-none -mt-10 md:-mt-16">1990</span>
          </div>
        </div>

        {/* Narrative Content - Legacy & Authority */}
        <div className="lg:pl-8 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <span className="w-12 h-px bg-brand-yellow" />
               <h2 className="text-brand-dark font-black uppercase tracking-[0.6em] text-[10px]">Kurumsal Miras</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.85] tracking-tighter uppercase">
              Endüstriyel <br />
              <span className="text-zinc-300 tracking-[-0.05em]">Liderliğin İzinde.</span>
            </h3>
            <p className="text-lg text-zinc-500 leading-relaxed font-medium italic-none max-w-xl">
              Özfatihler Vinç, 1990'lı yılların başında Abdullah Çimen'in vizyoner liderliğinde 
              üretim yolculuğuna başladı. Bugün Türkiye'nin mühendislik gücünü global arenada temsil eden dev bir köprüye dönüştü.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
             <div className="space-y-4">
                <span className="block h-[2px] w-12 bg-brand-yellow" />
                <h4 className="font-black uppercase text-xs tracking-widest text-brand-dark">Teknoloji Odaklılık</h4>
                <p className="text-zinc-400 text-[11px] font-bold uppercase leading-relaxed tracking-tight">İnovatif Mühendislik anlayışıyla her projede en yüksek standartları koruyoruz.</p>
             </div>
             <div className="space-y-4">
                <span className="block h-[2px] w-12 bg-brand-yellow" />
                <h4 className="font-black uppercase text-xs tracking-widest text-brand-dark">Global Etki</h4>
                <p className="text-zinc-400 text-[11px] font-bold uppercase leading-relaxed tracking-tight">35'ten fazla ülkeye Türk mühendisliğini ve kalitesini gururla taşıyoruz.</p>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center pt-8">
            <Link
              href="/kurumsal"
              className="group/btn relative px-16 py-6 bg-brand-dark text-white font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-brand-yellow hover:text-brand-dark shadow-2xl text-[10px] w-full md:w-auto text-center"
            >
              Hikayemizi Keşfedin
            </Link>
            
            <div className="flex items-center gap-6 group/sign cursor-default select-none">
               <div className="w-px h-16 bg-zinc-200 group-hover/sign:h-20 transition-all duration-700" />
               <div className="flex flex-col">
                  <span className="text-brand-dark font-black text-2xl uppercase tracking-[0.2em] leading-none mb-2 group-hover/sign:text-brand-yellow transition-colors">Abdullah Çimen</span>
                  <span className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.5em] leading-tight flex items-center gap-2">
                     Yönetim Kurulu Başkanı
                     <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-pulse" />
                  </span>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

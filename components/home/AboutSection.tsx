import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";

export const AboutSection = () => {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/5 clip-path-diagonal pointer-events-none" />
      
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Visuals - High Impact Collage */}
        <div className="relative group">
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-4">
              <Image
                src="/images/hero_crane.png"
                alt="Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 translate-y-16 hover:translate-y-12">
              <Image
                src="/images/portal_crane.png"
                alt="Quality"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
          
          {/* Branded Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-yellow p-10 shadow-[0_30px_60px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform duration-500">
             <span className="block text-6xl font-black text-brand-dark mb-2 leading-none">35+</span>
             <span className="block text-xs font-black uppercase tracking-[0.2em] text-brand-dark leading-tight">Yıllık Güven <br />ve Tecrübe</span>
          </div>

          <div className="absolute -bottom-8 -left-8 text-[180px] font-black text-brand-dark/5 leading-none select-none pointer-events-none uppercase">
            EST
          </div>
        </div>

        {/* Content - Strong Narrative */}
        <div className="lg:pl-12">
          <div className="flex items-center gap-4 mb-8">
             <span className="w-12 h-1 bg-brand-yellow" />
             <h2 className="text-brand-dark font-black uppercase tracking-[0.4em] text-xs">Biz Kimiz?</h2>
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase mb-10">
            Türkiye'nin <br />
            <span className="text-zinc-400">En Güçlü Eli</span>
          </h3>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-medium">
            Özfatihler Vinç Makine Sanayi, 1990'lı yılların başında Abdullah Çimen'in vizyoner liderliğinde 
            Konya'da üretim yolculuğuna başladı. Bugün Türkiye'nin sanayideki gücünü temsil eden dev bir markaya dönüştü.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
             <div>
                <span className="block h-1 w-8 bg-brand-yellow mb-4" />
                <p className="text-zinc-500 text-sm leading-relaxed">
                  İnovatif Mühendislik anlayışıyla her projede yüksek standartları koruyoruz.
                </p>
             </div>
             <div>
                <span className="block h-1 w-8 bg-brand-yellow mb-4" />
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Global pazarda 35'ten fazla ülkeye Türk kalitesini taşıyoruz.
                </p>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <Link
              href="/kurumsal"
              className="w-full sm:w-auto px-12 py-5 bg-brand-dark text-white font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-dark transition-all text-xs text-center"
            >
              Hikayemizi Keşfedin
            </Link>
            <div className="flex items-center gap-4">
               <div className="w-12 h-px bg-zinc-300" />
               <div className="flex flex-col">
                  <span className="text-brand-dark font-black text-xs uppercase tracking-widest">Abdullah Çimen</span>
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">Yönetim Kurulu Başkanı</span>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

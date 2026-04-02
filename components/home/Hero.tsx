import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-brand-dark">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/ozfatihler-websitesi-slider-son-1.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-end items-end pb-32 md:pb-48">
        <div className="max-w-xl text-right animate-in fade-in slide-in-from-right-10 duration-1000 fill-mode-both translate-x-4 md:translate-x-12">
          <h1 className="text-xl md:text-2xl font-black text-white tracking-[0.4em] uppercase drop-shadow-2xl leading-relaxed">
            Geleceğin Yükünü <br />
            Birlikte Kaldıralım
          </h1>
        </div>
      </Container>
      {/* Bottom stats bar - High Contrast Upgrade */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 border-t border-white/5 backdrop-blur-xl py-8 hidden xl:block shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Container className="flex justify-between items-center text-white">
          <div className="flex items-center gap-6 group">
            <span className="text-5xl font-black text-brand-yellow group-hover:scale-110 transition-transform">35+</span>
            <span className="text-[11px] font-black uppercase tracking-widest leading-tight text-zinc-400">Ülkeye <br />İhracat</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex items-center gap-6 group">
            <span className="text-5xl font-black text-brand-yellow group-hover:scale-110 transition-transform">1000+</span>
            <span className="text-[11px] font-black uppercase tracking-widest leading-tight text-zinc-400">Tamamlanan <br />Proje</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex items-center gap-6 group">
            <span className="text-5xl font-black text-brand-yellow group-hover:scale-110 transition-transform">%100</span>
            <span className="text-[11px] font-black uppercase tracking-widest leading-tight text-zinc-400">Müşteri <br />Memnuniyeti</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="hidden 2xl:flex items-center gap-6 text-[10px] font-bold uppercase max-w-xs tracking-widest text-zinc-500">
            "Mühendislik ve yönetim bilimlerindeki en son teknolojik olanakları kullanarak daima yüksek kalite."
          </div>
        </Container>
      </div>
    </section>
  );
};

import Image from "next/image";
import { Container } from "@/components/shared/Container";

export const EngineeringSection = () => {
  return (
    <section className="py-32 md:py-48 bg-brand-dark relative overflow-hidden group">
      {/* 1. Technical Blueprint Overlay (Animated Dots) */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="border-r border-white/20 h-full relative">
                    <div className="absolute top-1/4 -right-[2px] w-[4px] h-[4px] bg-brand-yellow rounded-full animate-pulse" />
                    <div className="absolute top-3/4 -right-[2px] w-[4px] h-[4px] bg-brand-yellow rounded-full animate-pulse delay-500" />
                 </div>
               ))}
            </div>
         </div>
      </div>

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center relative z-10">
        {/* Visual Content - Industrial Excellence */}
        <div className="relative group/img">
           <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/jib_crane.png"
                alt="Elite Engineering"
                fill
                className="object-cover transition-all duration-[2000ms] group-hover/img:scale-110 grayscale saturate-50 group-hover/img:saturate-100"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover/img:bg-transparent transition-colors duration-1000" />
           </div>
           
           {/* Static Stats Badge - Sophisticated Finish */}
           <div className="absolute -bottom-6 -right-4 md:bottom-20 md:-right-20 p-8 md:p-12 bg-brand-yellow shadow-[30px_30px_80px_rgba(0,0,0,0.5)] z-20 group-hover/img:scale-105 transition-transform duration-700 max-w-[180px] md:max-w-none">
              <div className="relative">
                 <span className="block text-5xl md:text-7xl font-black text-brand-dark leading-none tracking-tighter mb-2">35+</span>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark leading-tight border-l-2 border-brand-dark pl-4">
                    Yıllık <br /> Mühendİslİk <br /> Tecrübesİ
                 </p>
                 <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-brand-dark opacity-20" />
              </div>
           </div>

           {/* Background Decoration */}
           <div className="absolute -top-12 -left-12 text-[120px] font-black text-white/5 uppercase select-none pointer-events-none drop-shadow-sm font-sans tracking-tighter">
             TECH
           </div>
        </div>

        {/* Narrative Content - Progressive Authority */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="w-12 h-px bg-brand-yellow" />
               <h2 className="text-brand-yellow font-black uppercase tracking-[0.6em] text-[10px]">Geleceğin Operasyonu</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              Endüstri 4.0 <br />
              <span className="text-zinc-500 tracking-[-0.05em]">Uyumlu Güç.</span>
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium italic-none">
              Özfatihler Vinç, akıllı otomasyon ve uzaktan izleme teknolojileri ile 
              yük kaldırmanın ötesine geçer; operasyonunuzu dijitalleştiririz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-6">
             {[
               { title: "Uzaktan İzleme & Teşhis", desc: "Arıza riskini %90 oranında azaltan gerçek zamanlı takip." },
               { title: "Enerji Geri Kazanımı", desc: "Rejeneratif sürüş teknolojisi ile %30'a varan tasarruf." },
               { title: "Akıllı Limit Sis.", desc: "İş güvenliğini maksimize eden hata önleyici teknolojiler." }
             ].map((item, idx) => (
               <div key={idx} className="group/item flex items-center gap-8 p-8 bg-white/5 border border-white/5 hover:bg-brand-yellow transition-all duration-500 cursor-default">
                  <span className="text-brand-yellow font-black text-xs opacity-50 group-hover/item:opacity-100 group-hover/item:text-brand-dark transition-all">0{idx + 1}</span>
                  <div>
                    <h4 className="text-white group-hover/item:text-brand-dark font-black uppercase tracking-widest text-xs mb-1 transition-colors">{item.title}</h4>
                    <p className="text-zinc-500 group-hover/item:text-brand-dark/70 text-[10px] font-bold uppercase tracking-tight transition-colors">{item.desc}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all translate-x-4 group-hover/item:translate-x-0">
                     <span className="text-brand-yellow group-hover/item:text-brand-dark text-xl transition-colors">→</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

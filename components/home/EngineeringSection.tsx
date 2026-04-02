import Image from "next/image";
import { Container } from "@/components/shared/Container";

export const EngineeringSection = () => {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="grid grid-cols-6 h-full w-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-zinc-500/20" />
            ))}
         </div>
      </div>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square rounded-sm overflow-hidden group">
           <Image
             src="/images/jib_crane.png"
             alt="Engineering"
             fill
             className="object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-brand-yellow/10 mix-blend-overlay" />
           <div className="absolute bottom-12 left-12 right-12 p-8 bg-brand-yellow/90 backdrop-blur-md">
              <span className="text-brand-dark font-black text-4xl leading-none">35+</span>
              <p className="text-brand-dark font-bold uppercase text-[10px] tracking-widest mt-2">Yıllık Mühendislik Tecrübesi</p>
           </div>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="w-12 h-1 bg-brand-yellow" />
             <span className="text-brand-yellow font-black uppercase tracking-[0.4em] text-xs">Teknoloji & İnovasyon</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-10">
            Endüstri 4.0 <br />
            <span className="text-zinc-500">Uyumlu Çözümler</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            Özfatihler Vinç, sadece yük kaldırmaz; akıllı otomasyon sistemleri ve uzaktan izleme teknolojileri ile 
            operasyonel verimliliğinizi dijitalleştirir. Türk mühendisliğinin gücünü, küresel teknoloji standartlarıyla 
            birleştiriyoruz.
          </p>
          <div className="space-y-6">
             {[
               "Uzaktan İzleme ve Teşhis Sistemleri",
               "Enerji Geri Kazanımlı Sürücü Teknolojileri",
               "Hata Önleyici Akıllı Limit Sistemleri"
             ].map(item => (
               <div key={item} className="flex items-center gap-4 text-white font-bold uppercase text-xs tracking-widest group cursor-default">
                  <span className="w-2 h-2 bg-brand-yellow group-hover:scale-150 transition-transform" />
                  {item}
               </div>
             ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

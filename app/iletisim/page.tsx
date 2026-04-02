"use client";

import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { useState } from "react";

const branches = [
  {
    name: "Özfatihler Vinç - Marmara Bölge",
    address: "Güney Sanayi Sitesi 1286. Sokak No:17 Erenler/Sakarya",
    phone: "0505 373 00 20",
    email: "marmarabolge@ozfatihler.com.tr",
    icon: "🌊"
  },
  {
    name: "Özfatihler Vinç - Ankara Bölge",
    address: "Ostim Sanayi Sitesi 32.Sokak No:12-E Ankara",
    phone: "0535 108 44 27",
    email: "ankara@ozfatihler.com.tr",
    icon: "🏛️"
  }
];

export default function ContactPage() {
  const [openBranch, setOpenBranch] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-zinc-50/50">
      {/* Premium Hero */}
      <section className="relative pt-32 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image
             src="/images/hero_crane.png"
             alt="Contact Background"
             fill
             className="object-cover grayscale saturate-0"
             priority
           />
        </div>
        <Container className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
             <span className="w-8 h-px bg-brand-yellow/30" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-yellow">İletişim & Lokasyon</span>
             <span className="w-8 h-px bg-brand-yellow/30" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 animate-in fade-in duration-1000">
            Bİze Ulaşın
          </h1>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Fixed Headquarters (Merkez) */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-white p-12 border-l-4 border-brand-yellow shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 grayscale group-hover:opacity-10 transition-opacity">🏢</div>
                <h2 className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-8">Genel Merkez</h2>
                <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 leading-none">Konya / Türkiye</h3>
                
                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="text-2xl opacity-40">📍</div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Merkez Adres</p>
                         <p className="text-zinc-600 font-medium leading-relaxed uppercase italic-none text-sm">
                            BÜYÜKKAYACIK OSB MAH. 404 NO' LU SOK. NO: 2/1 ( 4.org.san ) Selçuklu / KONYA
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="text-2xl opacity-40">📞</div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Merkezi Hat</p>
                         <p className="text-2xl font-black text-brand-dark tracking-tighter">444 75 92</p>
                         <p className="text-zinc-500 text-sm font-medium">0 332 342 57 55</p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="text-2xl opacity-40">📧</div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">E-Posta</p>
                         <p className="text-brand-dark font-black tracking-tight hover:text-brand-yellow transition-colors cursor-pointer text-lg">
                            bilgi@ozfatihlervinc.com.tr
                         </p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-10 border-t border-zinc-100 flex items-center justify-between">
                   <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Çalışma Saatleri</span>
                   <span className="text-xs font-bold text-zinc-600">PZT - CMT / 08:30 - 18:30</span>
                </div>
              </div>

              {/* Simplified Map Trigger */}
              <div className="bg-brand-dark p-8 rounded-sm flex items-center justify-between group cursor-pointer hover:bg-brand-yellow transition-all duration-500">
                 <div>
                    <p className="text-zinc-400 group-hover:text-brand-dark font-black text-[9px] uppercase tracking-widest mb-1">Konum</p>
                    <p className="text-white group-hover:text-brand-dark font-black tracking-tighter uppercase">Haritada Görüntüle</p>
                 </div>
                 <span className="text-2xl grayscale opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">➔</span>
              </div>
            </div>

            {/* Right: Regional Branch Accordion */}
            <div className="lg:col-span-7">
               <h2 className="text-xs font-black text-zinc-400 uppercase tracking-[0.5em] mb-10 pl-2">Bölge Müdürlüklerİmİz</h2>
               
               <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-zinc-100 shadow-sm overflow-hidden transition-all duration-500"
                    >
                      <button 
                        onClick={() => setOpenBranch(openBranch === index ? null : index)}
                        className={`w-full p-8 flex items-center justify-between text-left transition-colors ${openBranch === index ? 'bg-brand-dark text-white' : 'hover:bg-zinc-50'}`}
                      >
                         <div className="flex items-center gap-6">
                            <span className={`text-2xl filter ${openBranch === index ? '' : 'grayscale opacity-40'}`}>{branch.icon}</span>
                            <span className="font-black uppercase tracking-tighter text-lg">{branch.name}</span>
                         </div>
                         <span className={`text-2xl transform transition-transform duration-500 ${openBranch === index ? 'rotate-180' : ''}`}>▾</span>
                      </button>

                      <div className={`grid transition-all duration-500 ease-in-out ${openBranch === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                         <div className="overflow-hidden">
                            <div className="p-10 space-y-8 bg-zinc-50/50">
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                  <div className="space-y-4">
                                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Bölge Adresi</p>
                                     <p className="text-zinc-600 font-medium leading-relaxed italic-none">{branch.address}</p>
                                  </div>
                                  <div className="space-y-6">
                                     <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">İletişim Hattı</p>
                                        <p className="text-xl font-black text-brand-dark tracking-tighter">{branch.phone}</p>
                                     </div>
                                     <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">E-Posta</p>
                                        <p className="text-brand-dark font-bold text-sm underline underline-offset-4 decoration-brand-yellow/30">{branch.email}</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Quick Contact Form Mini */}
               <div id="teklif-formu" className="mt-16 bg-white p-12 border border-zinc-100 shadow-xl">
                  <h3 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-8">Hızlı Mesaj</h3>
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Ad Soyad" className="w-full bg-zinc-50 px-6 py-4 border-none outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm" />
                        <input type="tel" placeholder="Telefon" className="w-full bg-zinc-50 px-6 py-4 border-none outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm" />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="email" placeholder="Mail" className="w-full bg-zinc-50 px-6 py-4 border-none outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm" />
                        <input type="text" placeholder="Ürün Adı" className="w-full bg-zinc-50 px-6 py-4 border-none outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm" />
                     </div>
                     <textarea placeholder="Mesajınız..." className="w-full bg-zinc-50 px-6 py-4 h-32 border-none outline-none focus:ring-1 focus:ring-brand-yellow transition-all text-sm resize-none"></textarea>
                     <button className="w-full py-4 bg-brand-yellow text-brand-dark font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg rounded-sm">
                        Gönder
                     </button>
                  </form>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Markers Footer Strip */}
      <section className="py-20 border-t border-zinc-100 bg-white">
         <Container className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale">
            {["GENEL MERKEZ: KONYA", "MARMARA: SAKARYA", "İÇ ANADOLU: ANKARA"].map((txt) => (
              <span key={txt} className="text-[10px] font-black tracking-[0.4em] text-zinc-900 border-b border-zinc-200 pb-2">
                {txt}
              </span>
            ))}
         </Container>
      </section>
    </div>
  );
}

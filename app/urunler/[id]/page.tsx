"use client";

import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, use } from "react";

// Enhanced Mock Data including About and Components
const categoryData: Record<string, any> = {
  portal: {
    name: "PORTAL VİNÇLER",
    variants: [
      {
        id: "tek-cikintili",
        name: "Tek Çıkıntılı",
        fullTitle: "Çift Kiriş Tek Çıkıntılı Portal Vinç",
        description: "Açık alanlarda ray üzerinde hareket eden, tek tarafı konsollu yapısıyla yükleme sahaları için ideal portal vinç sistemidir.",
        image: "/images/portal_crane.png",
        specs: {
          capacity: "5 - 50 Ton",
          span: "Up to 30m",
          height: "12m",
          duty: "FEM 2m / 3m"
        },
        features: ["Korozyona dayanıklı boya", "Hassas yürüyüş kontrolü", "Rüzgar emniyet sistemi"],
        about: "Portal vinçler, geniş açıklıkları ve yüksek tonajları kaldırma kapasiteleri ile Türkiye'nin sanayi devleri tarafından tercih edilmektedir.",
        components: ["Kirişler", "Kaldırma Grubu", "Yürütme Grubu", "Elektrik Sistemi"]
      },
      {
        id: "semi-portal",
        name: "Yarı (Semi)",
        fullTitle: "Yarı (Semi) Portal Vinç",
        description: "Bir tarafı bina kolonuna veya mevcut yola, diğer tarafı zemindeki raya oturan, hibrit yapılı özel portal vinç sistemi.",
        image: "/images/jib_crane.png",
        specs: {
          capacity: "3 - 32 Ton",
          span: "Up to 25m",
          height: "10m",
          duty: "FEM 2m"
        },
        features: ["Alan tasarrufu", "Düşük yatırım maliyeti", "Mevcut yapıya entegre"],
        about: "Fabrika içi dar alanlarda maksimum verimlilik için tasarlanmıştır.",
        components: ["Kolon Montaj Aparatı", "Tek Kiriş", "Yürütme Motoru"]
      }
    ]
  },
  pergel: {
    name: "PERGEL VİNÇLER",
    variants: [
      {
        id: "duvara-monteli",
        name: "Duvara Monteli",
        fullTitle: "Duvara Monteli Pergel Vinç",
        description: "Dar alanlarda pratik ve güvenli yük taşıma imkânı sunan, alan verimliliği odaklı vinç sistemleri.",
        image: "/images/jib_crane.png",
        specs: {
          capacity: "0.5 - 5 Ton",
          span: "Up to 7m",
          angle: "180° / 270°",
          duty: "ISO 1Am / 2m"
        },
        features: ["Hassas yükleme", "Dayanıklı Duvar Montajı", "Düşük Bakım"],
        about: "Duvara monteli pergel vinçler, dar alanlarda pratik ve güvenli yük taşıma imkânı sunan vinç sistemleridir. Duvar veya kolon üzerine monte edilen yapısı sayesinde çalışma alanını verimli kullanır ve özellikle istasyon bazlı yük transferlerinde tercih edilir.\n\nÖzfatihler Vinç tarafından üretilen duvara monteli pergel vinçler, farklı kapasite ve ölçü seçenekleriyle işletmeye uygun olarak projelendirilir. Dayanıklı yapısı, kolay kullanımı ve düşük bakım ihtiyacıyla verimli bir çözüm sunar.",
        components: [
          "Vinç elektrik panosu",
          "Köprü kirişi",
          "Kanca",
          "Portal vinç yürütme takımları",
          "Köprü yan yol",
          "Elektrik kablosu",
          "Vinç kedi",
          "Merdiven",
          "Bacak",
          "Platform"
        ]
      }
    ]
  },
  generic: {
    name: "VİNÇ SİSTEMLERİ",
    variants: [
      {
        id: "standart",
        name: "Standart Üretim",
        fullTitle: "Endüstriyel Vinç Sistemleri",
        description: "Özfatihler güvencesiyle yüksek kaliteli, standart ve özel üretim vinç çözümleri.",
        image: "/images/hero_crane.png",
        specs: { capacity: "Custom", span: "Custom" },
        features: ["Yüksek güvenlik", "Dayanıklı yapı"],
        about: "Üstün mühendislik disipliniyle üretilen vinç çözümlerimiz.",
        components: ["Ana Kiriş", "Motor Grubu"]
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = categoryData[id] || categoryData.generic;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const activeVariant = useMemo(() => category.variants[activeIndex], [category, activeIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Category Hero */}
      <section className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image
             src={activeVariant.image}
             alt="Background"
             fill
             className="object-cover transition-opacity duration-1000"
             key={`bg-${activeIndex}`}
           />
        </div>
        <Container className="relative z-10 text-center lg:text-left">
           <Link
             href="/urunler"
             className="inline-flex items-center gap-2 text-brand-yellow font-bold uppercase text-[10px] tracking-widest mb-10 hover:translate-x-[-4px] transition-transform"
           >
              ← Ürünlere Geri Dön
           </Link>
           <div className="flex flex-col gap-2 mb-8">
              <span className="text-brand-yellow font-bold tracking-[0.5em] text-xs uppercase opacity-80">
                {category.name}
              </span>
              <h1 
                key={`title-${activeIndex}`}
                className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter transition-all duration-700 animate-in fade-in"
              >
                 {activeVariant.fullTitle}
              </h1>
           </div>
           <p 
             key={`desc-${activeIndex}`}
             className="text-lg text-zinc-400 max-w-2xl leading-relaxed animate-in fade-in duration-1000 mx-auto lg:mx-0"
           >
              {activeVariant.description}
           </p>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
         <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Visuals & Body Content */}
            <div className="lg:col-span-7">
               {/* Main Display */}
               <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border border-zinc-100 mb-8 bg-zinc-50 group">
                  <Image
                    src={activeVariant.image}
                    alt={activeVariant.fullTitle}
                    fill
                    className="object-cover transition-all duration-1000 hover:scale-105"
                    priority
                    key={`main-${activeIndex}`}
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-brand-dark px-4 py-2 border-l-4 border-brand-yellow font-black text-[10px] uppercase tracking-widest shadow-xl">
                      Variant {activeIndex + 1} / {category.variants.length}
                  </div>
               </div>
               
               {/* Content Tabs / Info */}
               <div className="mt-16 space-y-16">
                  {/* About Section */}
                  <div className="space-y-8 animate-in fade-in duration-1000 delay-200">
                     <h2 className="text-sm font-black text-brand-dark uppercase tracking-[0.4em] flex items-center gap-4">
                        <span className="w-8 h-1 bg-brand-yellow" />
                        Ürün Hakkında
                     </h2>
                     <div className="text-zinc-500 leading-relaxed text-lg whitespace-pre-line font-medium">
                        {activeVariant.about}
                     </div>
                  </div>

                  {/* Components Section */}
                  <div className="space-y-10 pt-10 border-t border-zinc-100 animate-in fade-in duration-1000 delay-300">
                     <h2 className="text-sm font-black text-brand-dark uppercase tracking-[0.4em] flex items-center gap-4">
                        <span className="w-8 h-1 bg-brand-yellow" />
                        Sistem Bileşenleri
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeVariant.components.map((comp: string, idx: number) => (
                           <div key={idx} className="flex items-center gap-4 p-5 bg-zinc-50/50 hover:bg-white hover:shadow-md transition-all border border-zinc-100 group">
                              <span className="text-[10px] font-black text-brand-yellow/40 group-hover:text-brand-yellow transition-colors">0{idx + 1}</span>
                              <span className="text-xs font-black text-brand-dark uppercase tracking-tight">{comp}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Sidebar CTA & Specs */}
            <div className="lg:col-span-5">
               <div className="sticky top-12 space-y-8">
                  {/* Variant Selection (If more than 1) */}
                  {category.variants.length > 1 && (
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mb-10">
                       <p className="lg:col-span-1 text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-2 px-1">Seçenekler</p>
                       {category.variants.map((v: any, idx: number) => (
                          <button 
                            key={v.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`p-4 text-[10px] font-black uppercase tracking-widest border transition-all text-center ${
                              activeIndex === idx ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-zinc-400 border-zinc-100 hover:border-brand-yellow"
                            }`}
                          >
                             {v.name}
                          </button>
                       ))}
                    </div>
                  )}

                  {/* Specification Table */}
                  <div className="bg-brand-dark p-10 text-white rounded-sm shadow-2xl relative overflow-hidden group">
                     <h3 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-yellow relative z-10">Teknik Veriler</h3>
                     <div className="space-y-6 relative z-10">
                        {Object.entries(activeVariant.specs).map(([key, value]: any) => (
                           <div key={key} className="flex justify-between items-center border-b border-white/5 pb-4 transition-all hover:border-brand-yellow/30">
                              <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">
                                {key === 'capacity' ? 'Kapasite' : key === 'span' ? 'Açıklık' : key === 'height' ? 'Yükseklik' : key === 'duty' ? 'FEM/ISO' : key === 'angle' ? 'Açı' : key}
                              </span>
                              <span className="font-black text-brand-yellow uppercase tracking-tight">{value}</span>
                           </div>
                        ))}
                     </div>
                     
                     <Link
                       href="/iletisim#teklif-formu"
                       className="mt-12 w-full py-5 bg-brand-yellow text-brand-dark text-center font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl"
                     >
                        Teklif İste
                        <span className="animate-pulse">→</span>
                     </Link>
                  </div>

                  {/* Trust Marker */}
                  <div className="p-8 bg-zinc-50 border border-zinc-100 border-l-4 border-brand-yellow">
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Kurumsal Güvence</p>
                     <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                        Tüm pergel vinç sistemlerimiz CE ve ISO 9001 standartlarına tam uyumlu olarak Özfatihler tesislerinde üretilmektedir.
                     </p>
                  </div>
               </div>
            </div>
         </Container>
      </section>
    </div>
  );
}

"use client";

import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const newsData: Record<string, any> = {
  "vinc-kapasite-artis": {
    title: "Sektörün En Güçlü Vinçleri Özfatihler'den",
    date: "12 Mart 2026",
    category: "Üretim",
    image: "/images/hero_crane.png",
    content: `
      Özfatihler Vinç olarak, Konya Organize Sanayi Bölgesindeki üretim tesisimizde önemli bir kapasite artırımına gittik. Artan küresel talebi karşılamak ve teslimat sürelerini minimize etmek amacıyla gerçekleştirdiğimiz bu yatırım, bölge istihdamına da büyük katkı sağlayacak.
      
      Yeni nesil robotik kaynak sistemleri ve hassas CNC işleme merkezleri ile donatılan yeni ek tesisimiz, özellikle ağır hizmet portal vinçleri ve özel mühendislik ürünlerinin üretim hızını %40 oranında artıracak. Abdullah Çimen'in liderliğinde başlayan bu yolculukta, Türk mühendisliğinin gücünü dünyaya göstermeye devam ediyoruz.
      
      Sürdürülebilir üretim ilkelerimiz doğrultusunda, tesisimizin enerji ihtiyacının bir kısmını çatı tipi güneş panellerinden karşılamaya başladık. Bu yeşil dönüşüm hamlesi, hem çevresel ayak izimizi azaltacak hem de üretim maliyetlerimizi optimize ederek müşterilerimize daha rekabetçi çözümler sunmamıza olanak tanıyacak.
    `
  },
  "ihracat-rekoru-2026": {
    title: "İhracat Rekorlarımızı Tazelemeye Devam Ediyoruz",
    date: "05 Şubat 2026",
    category: "İhracat",
    image: "/images/portal_crane.png",
    content: `
      2026 yılının ilk çeyreğinde ihracat rakamlarımız beklentilerin üzerinde bir artış gösterdi. Avrupa, Orta Doğu ve Orta Asya pazarlarındaki hakimiyetimizi pekiştirirken, Güney Amerika pazarına da ilk büyük çaplı sevkiyatlarımızı gerçekleştirdik.
      
      Bugün itibarıyla 35'ten fazla ülkeye aktif olarak vinç sistemleri ihraç eden Özfatihler Vinç, global arenada güvenilir bir marka haline gelmiştir. Uluslararası kalite sertifikalarımız (ISO, CE) ve 7/24 kesintisiz servis ağımız, bizi global rakiplerimizden ayıran en önemli özelliklerimizdir.
      
      İhracat stratejimizin temelinde, sadece ürün satmak değil, müşterilerimize özel mühendislik çözümleri sunmak yer alıyor. Her ülkenin endüstriyel standartlarına (DIN, FEM, vb.) tam uyumlu üretim yaparak, güvenliği ve verimliliği en üst düzeyde tutuyoruz.
    `
  },
  "muhendislik-disiplini-vizyon": {
    title: "Üstün İş Ahlakı ve Mühendislik Disiplini",
    date: "15 Ocak 2026",
    category: "Kurumsal",
    image: "/images/hero_crane.png",
    content: `
      Özfatihler Vinç, kurulduğu günden bu yana Abdullah Çimen'in "Önce Kalite, Daima Mühendislik" vizyonuyla hareket etmektedir. Küçük bir atölyeden dev bir sanayi kuruluşuna uzanan bu başarı öyküsü, sıkı bir mühendislik disiplini ve tavizsiz iş ahlakı üzerine inşa edilmiştir.
      
      Geleceğin vinç teknolojilerini bugünden tasarlayan AR-GE ekibimiz, Endüstri 4.0 entegrasyonu ve akıllı vinç sistemleri üzerinde çalışmalarını hızlandırdı. Müşterilerimize sadece bir kaldırma ekipmanı değil; veri analitiği yapabilen, bakım zamanını önceden haber veren akıllı iş ortakları sunmayı hedefliyoruz.
      
      Konya'dan dünyaya uzanan bu profesyonel yolculukta, her bir çalışanımızın emeği ve her bir müşterimizin güveni en büyük motivasyon kaynağımızdır. Sektöre yön vermeye ve Türkiye ekonomisine değer katmaya kararlılıkla devam edeceğiz.
    `
  }
};

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const item = newsData[id] || newsData["vinc-kapasite-artis"];

  return (
    <div className="min-h-screen bg-white">
      {/* News Hero */}
      <section className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-md">
           <Image
             src={item.image}
             alt="Background"
             fill
             className="object-cover"
           />
        </div>
        <Container className="relative z-10">
           <Link
             href="/haberler"
             className="inline-flex items-center gap-2 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
           >
              ← Haberlere Geri Dön
           </Link>
           <div className="flex items-center gap-4 mb-6 transition-all animate-in fade-in slide-in-from-left-4">
              <span className="bg-brand-yellow text-brand-dark px-3 py-1 font-black text-[10px] uppercase tracking-widest">
                {item.category}
              </span>
              <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
                {item.date}
              </span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-4xl leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700">
              {item.title}
           </h1>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-24">
         <Container>
            <div className="max-w-4xl mx-auto">
               <div className="relative aspect-[21/9] rounded-sm overflow-hidden shadow-2xl mb-16 border border-zinc-100 italic group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 bg-brand-dark/80 backdrop-blur-md text-white px-4 py-2 font-black text-[10px] uppercase tracking-widest border-l-4 border-brand-yellow">
                      Özfatihler Medya Merkezi
                  </div>
               </div>

               <article className="prose prose-zinc lg:prose-xl max-w-none">
                  {item.content.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-zinc-600 text-lg leading-relaxed mb-8 font-medium italic-none first-letter:text-5xl first-letter:font-black first-letter:text-brand-dark first-letter:mr-3 first-letter:float-left first-letter:leading-[1] first-letter:mt-1 last-of-type:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
               </article>

               <div className="mt-20 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                     <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest">Paylaş:</span>
                     <div className="flex gap-2">
                        {['FB', 'TW', 'LI'].map((social) => (
                           <button key={social} className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-xs font-bold hover:bg-brand-yellow hover:border-brand-yellow transition-all">
                              {social}
                           </button>
                        ))}
                     </div>
                  </div>
                  <Link
                    href="/haberler"
                    className="px-8 py-3 bg-brand-dark text-white font-black uppercase text-xs tracking-widest hover:bg-brand-yellow hover:text-brand-dark transition-all"
                  >
                     Tüm Haberleri Gör
                  </Link>
               </div>
            </div>
         </Container>
      </section>

      {/* Suggested News Section could go here */}
    </div>
  );
}

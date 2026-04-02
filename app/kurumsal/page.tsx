import { Container } from "@/components/shared/Container";
import Image from "next/image";

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Refined Minimalist Hero - Stabilized */}
      <section className="relative pt-32 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
             src="/images/hero_crane.png"
             alt="Background"
             fill
             className="object-cover opacity-10 grayscale saturate-0"
             priority
           />
        </div>
        <Container className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700">
             <span className="w-8 h-px bg-brand-yellow/30" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-yellow">Özfatihler Vinç</span>
             <span className="w-8 h-px bg-brand-yellow/30" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 animate-in fade-in duration-1000 fill-mode-both">
            Kurumsal Kimlik
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed animate-in fade-in duration-1000 delay-300 fill-mode-both">
            Yarım asra yaklaşan mühendislik disiplini ve yenilikçi teknolojilerle <br className="hidden md:block" />
            Türkiye'nin ve dünyanın güvenli vinç çözümleri ortağıyız.
          </p>
        </Container>
      </section>

      {/* Hakkımızda - Enriched History */}
      <section className="py-24 md:py-32 border-b border-zinc-100 bg-white" id="hakkimizda">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden bg-zinc-50/50 group shadow-lg">
             <Image
               src="/images/portal_crane.png"
               alt="Factory"
               fill
               className="object-cover grayscale saturate-50 hover:grayscale-0 transition-all duration-1000"
             />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter flex items-center gap-4">
              <span className="w-12 h-1 bg-brand-yellow" />
              Hakkımızda
            </h2>
            <div className="space-y-6 text-zinc-500 leading-relaxed text-lg font-medium">
              <p>
                Özfatihler Vinç Makine Sanayi, 1990'lı yılların başında kurucusu Abdullah Çimen'in vizyoner liderliğinde, 
                Türkiye'nin sanayide yükselen yıldızı Konya'da faaliyetlerine başlamıştır. 
                Küçük bir atölyede başlayan üretim yolculuğumuz, bugün sektöründe öncü ve güvenilir markalar arasındadır.
              </p>
              <p>
                Özfatihler Vinç, üretim süreçlerinden satış sonrası hizmetlere kadar tüm aşamalarda müşteri memnuniyetini bir ilke olarak benimsemektedir. 
                Üretilen her projede dayanıklılık, güvenlik ve verimlilik kriterlerini merkeze koyarak katma değeri yüksek çözümler sunuyoruz.
              </p>
              <p className="text-sm font-bold text-zinc-400 border-l-2 border-brand-yellow pl-6 uppercase tracking-widest leading-loose">
                Türkiye'de alanında tek olmayı başaran firmamız, rakiplerinden ve sektör paydaşlarından önemli takdirler toplamıştır.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-10">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-dark">35+</span>
                  <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-[0.3em]">Yıllık Tecrübe</span>
               </div>
               <div className="w-px h-10 bg-zinc-100" />
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-dark">15K+</span>
                  <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-[0.3em]">Tamamlanan Proje</span>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Misyonumuz - Standalone Section */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100" id="misyon">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-xs font-black text-brand-yellow uppercase tracking-[0.5em] mb-10">Misyonumuz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-2xl font-black text-brand-dark uppercase tracking-tighter leading-tight">
                   Müşteri Odaklı Strateji <br />& Rekabetçi Büyüme
                </p>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Müşterilerimizin beklentilerini istikrarlı kalite anlayışı ile karşılayarak değer yaratmayı esas alan kurumsal yapımız, 
                  ve rekabetçi büyüme potansiyelimiz ile sektörde en iyi şekilde değerleri yönetmeyi hedefliyoruz.
                </p>
              </div>
              <div className="space-y-6 text-zinc-400 text-sm italic border-l border-zinc-200 pl-10 leading-relaxed font-medium">
                <p>
                  "Mühendislik ve yönetim bilimlerindeki en son teknoloji ile gelişen ihtiyaçlara uygun kaliteli vinç sistemleri üretmekteyiz."
                </p>
                <p>
                  Paydaşlarımızla üretim süreçlerini sürekli geliştirerek, ISO standartlarına uygun kalite ve güvenilirliğimizi korumayı vizyon ediniyoruz.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vizyonumuz - Standalone Section */}
      <section className="py-24 bg-white border-b border-zinc-100" id="vizyon">
        <Container>
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                 <h2 className="text-xs font-black text-brand-yellow uppercase tracking-[0.5em] mb-8">Vizyonumuz</h2>
                 <p className="text-4xl font-black text-brand-dark uppercase tracking-tighter leading-none">
                    Geleceğin <br /> Standartlarını <br /> Belİrlİyoruz.
                 </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-500 font-medium">
                 <div className="space-y-6">
                    <p>
                       Kaliteyi bir yaşam biçimi olarak benimseyen, doğruluk ve güveni en önemli değerleri olarak koruyan firmamız, 
                       ülkemiz ekonomisine katkısını sürekli olarak arttırmayı hedeflemektedir.
                    </p>
                    <p className="text-brand-dark font-bold border-b border-brand-yellow pb-4">
                       Vinç sektöründe verimlilik ve çalışan güvenliği standartlarını biz belirliyoruz.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <p>
                       Uluslararası pazarlarda Türk mühendisliğini en iyi şekilde temsil eden, güvenilir ve tercih edilen 
                       bir marka olarak küresel arenada söz sahibi olmayı hedefliyoruz.
                    </p>
                    <p>
                       AR-GE yatırımları ile teknolojik gelişmeleri yakından takip eden, yenilikçi çözümler üreten bir vizyonla sektöre yön veriyoruz.
                    </p>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* Temel İlkelerimiz - Standalone Grid */}
      <section className="py-24 bg-zinc-50/30">
        <Container>
          <div className="text-center mb-16">
             <h2 className="text-xs font-black text-brand-yellow uppercase tracking-[0.5em] mb-4">Temel İlkelerimiz</h2>
             <p className="text-3xl font-black text-brand-dark uppercase tracking-tight">Güç ve Mühendislik Prensipleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verimlilik", desc: "Maksimum operasyonel hız ve düşük enerji tüketimi.", icon: "⚡" },
              { title: "Güvenlik", desc: "Uluslararası emniyet normlarına tam uyum ve çalışan güvenliği.", icon: "🛡️" },
              { title: "İnovasyon", desc: "AR-GE odaklı akıllı vinç sistemleri ve Endüstri 4.0 çözümleri.", icon: "💡" },
              { title: "Sürdürülebilirlik", desc: "Yeşil üretim tesisleri, dayanıklı ve çevre dostu ekipmanlar.", icon: "🌱" }
            ].map((item) => (
              <div key={item.title} className="p-12 bg-white border border-zinc-100 hover:border-brand-yellow/30 transition-all duration-500 shadow-sm group">
                 <div className="text-2xl mb-8 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all">
                    {item.icon}
                 </div>
                 <h3 className="text-lg font-black text-brand-dark uppercase tracking-tighter mb-4">{item.title}</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Standards Strip - Consistent Finish */}
      <section className="py-20 border-t border-zinc-100 bg-white">
         <Container className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
            {["ISO 9001:2015", "CE EURO STANDARD", "TSE QUALIFIED", "MADE IN TURKEY"].map((badge) => (
              <span key={badge} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 border-b border-zinc-200 pb-2">
                {badge}
              </span>
            ))}
         </Container>
      </section>
    </div>
  );
}

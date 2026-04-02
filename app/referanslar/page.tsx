import { Container } from "@/components/shared/Container";

const references = [
  "TUSAŞ", "ASELSAN", "TOSYALI HOLDİNG", "ERDEMİR", "KARDEMİR", 
  "FORD OTOSAN", "TOFAŞ", "VESTEL", "ARÇELİK", "ŞİŞECAM"
];

export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-dark">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            REFERANSLARIMIZ
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Türkiye'nin ve dünyanın önde gelen sanayi kuruluşları 
            kaldırma çözümlerinde Özfatihler Vinç'i tercih ediyor.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-24">
        <Container>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {references.map((ref) => (
                <div 
                  key={ref} 
                  className="aspect-video bg-zinc-50 flex items-center justify-center p-8 border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-xl group"
                >
                   <span className="text-xl font-black text-zinc-300 group-hover:text-brand-dark transition-colors tracking-widest text-center">
                      {ref}
                   </span>
                </div>
              ))}
           </div>
           
           <div className="mt-24 bg-brand-yellow p-12 text-center shadow-2xl rounded-sm">
              <h2 className="text-3xl font-black text-brand-dark mb-6 uppercase tracking-widest">
                 Yüzlerce Mutlu Müşterİ
              </h2>
              <p className="text-brand-dark/80 text-lg mb-0 max-w-3xl mx-auto italic font-medium">
                 "Özfatihler Vinç, ürün kalitesi ve özellikle satış sonrası hizmet 
                 anlayışıyla bölgemizdeki en güvenilir çözüm ortağımız olmayı başarmıştır."
              </p>
           </div>
        </Container>
      </section>
    </div>
  );
}

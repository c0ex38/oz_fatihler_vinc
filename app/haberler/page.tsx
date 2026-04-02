import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: "vinc-kapasite-artis",
    title: "Sektörün En Güçlü Vinçleri Özfatihler'den",
    date: "12 Mart 2026",
    summary: "Konya Organize Sanayi Bölgesindeki yeni üretim tesisimizde kapasite artırımına gittik.",
    image: "/images/hero_crane.png"
  },
  {
    id: "ihracat-rekoru-2026",
    title: "İhracat Rekorlarımızı Tazelemeye Devam Ediyoruz",
    date: "05 Şubat 2026",
    summary: "Avrupa ülkeleri başta olmak üzere 30'dan fazla ülkeye vinç ihracatı gerçekleştiriyoruz.",
    image: "/images/portal_crane.png"
  },
  {
    id: "muhendislik-disiplini-vizyon",
    title: "Üstün İş Ahlakı ve Mühendislik Disiplini",
    date: "15 Ocak 2026",
    summary: "Kurucumuz Abdullah Çimen'in vizyonuyla sanayiye değer katmaya devam ediyoruz.",
    image: "/images/hero_crane.png"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-dark">
        <Container className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            HABERLER
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto uppercase text-sm tracking-widest font-bold">
            Özfatihler Vinç'ten <span className="text-brand-yellow">Son Haberler</span>
          </p>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white border border-zinc-100 shadow-lg group hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark px-3 py-1 font-bold text-xs uppercase tracking-widest">
                    Haber
                 </div>
              </div>
              <div className="p-8">
                 <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                    {item.date}
                 </span>
                 <h2 className="text-xl font-black text-brand-dark mb-4 group-hover:text-brand-yellow transition-colors leading-tight">
                    {item.title}
                 </h2>
                 <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                    {item.summary}
                 </p>
                 <Link
                   href={`/haberler/${item.id}`}
                   className="text-brand-dark font-bold uppercase tracking-widest text-xs border-b-2 border-brand-yellow pb-1 group-hover:bg-brand-yellow px-2 transition-all"
                 >
                    Daha Fazla Oku
                 </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}

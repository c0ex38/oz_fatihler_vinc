import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

const productCategories = [
  {
    id: "portal",
    title: "PORTAL VİNÇLER",
    items: [
      "Çift Kiriş Tek Çıkıntılı Portal Vinçler",
      "Çift Kiriş Çıkıntısız(Küt) Portal Vinçler",
      "Çift Kiriş Çift Çıkıntılı Portal Vinçler",
      "Yarı (Semi) Portal Vinçler"
    ],
    image: "/images/portal_crane.png"
  },
  {
    id: "koprulu",
    title: "KÖPRÜLÜ VİNÇLER",
    items: [
      "Çift Kiriş Köprülü Vinçler",
      "Tek Kiriş Köprülü Vinçler"
    ],
    image: "/images/hero_crane.png"
  },
  {
    id: "pergel",
    title: "PERGEL VİNÇLER",
    items: [
      "Duvara Monteli Pergel Vinçler",
      "Boru Tip Pergel Vinçler"
    ],
    image: "/images/portal_crane.png"
  },
  {
    id: "elektrikli",
    title: "ELEKTRİKLİ VİNÇLER",
    items: [
      "Askılı Vinç Arabaları",
      "Vinç Arabaları"
    ],
    image: "/images/hero_crane.png"
  },
  {
    id: "ozel",
    title: "ÖZEL VİNÇLER",
    items: [
      "Yer Vinçleri",
      "Döner Arabalı Vinçler",
      "Tershane Vinçleri",
      "Ex-Proof Vinçler",
      "Şaft Vinçleri"
    ],
    image: "/images/portal_crane.png"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-dark">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            ÜRÜNLERİMİZ
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Geniş ürün yelpazemizle endüstriyel tesisleriniz için en uygun, 
            verimli ve güvenli kaldırma çözümlerini sunuyoruz.
          </p>
        </Container>
      </section>

      {/* Product List */}
      <section className="py-24">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id} 
              id={category.id}
              className="bg-white border-t-4 border-brand-yellow shadow-lg flex flex-col group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                 <Image
                   src={category.image}
                   alt={category.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                 <h2 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-wider">
                    {category.title}
                 </h2>
                 <ul className="space-y-3 mb-10 flex-grow">
                    {category.items.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 group/item">
                          <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-1.5 shrink-0" />
                          <span className="group-hover/item:text-brand-dark transition-colors">{item}</span>
                       </li>
                    ))}
                 </ul>
                 
                 <Link
                   href={`/urunler/${category.id}`}
                   className="w-full text-center py-3 border-2 border-brand-dark text-brand-dark font-bold uppercase text-xs tracking-widest hover:bg-brand-dark hover:text-white transition-all"
                 >
                    İncele & Teklif Al
                 </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>
      
      {/* Catalog CTA */}
      <section className="py-24 bg-brand-dark">
         <Container className="text-center">
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-widest">
               Üretİm Standartlarımız
            </h3>
            <div className="flex flex-wrap justify-center gap-12 text-zinc-400 font-bold uppercase text-xs tracking-widest mt-12">
               <div className="flex flex-col gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-brand-yellow text-2xl">✓</div>
                  <span>ISO 9001</span>
               </div>
               <div className="flex flex-col gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-brand-yellow text-2xl">✓</div>
                  <span>CE Belgeli</span>
               </div>
               <div className="flex flex-col gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-brand-yellow text-2xl">✓</div>
                  <span>DIN Standart</span>
               </div>
               <div className="flex flex-col gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-brand-yellow text-2xl">✓</div>
                  <span>FEM Uyumlu</span>
               </div>
            </div>
         </Container>
      </section>
    </div>
  );
}

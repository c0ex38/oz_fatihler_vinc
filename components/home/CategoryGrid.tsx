import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";

const categories = [
  {
    title: "Portal Vinçler",
    description: "Açık alan ve endüstriyel sahalar için yüksek tonajlı kaldırma çözümleri.",
    image: "/images/portal_crane.png",
    href: "/urunler#portal",
  },
  {
    title: "Köprülü Vinçler",
    description: "Fabrika içi verimliliği maksimize eden tavan vinç sistemleri.",
    image: "/images/hero_crane.png", // Using hero for now as a placeholder for bridge crane
    href: "/urunler#koprulu",
  },
  {
    title: "Pergel Vinçler",
    description: "Dar alanlarda esnek ve hassas çalışma imkanı sunan pergel sistemler.",
    image: "/images/portal_crane.png", // Reusing image with different cropping/styling
    href: "/urunler#pergel",
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100 hidden lg:block" />

      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-12 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
               <span className="w-12 h-1 bg-brand-yellow" />
               <h2 className="text-brand-dark font-black uppercase tracking-[0.4em] text-xs">
                 Ürün Gruplarımız
               </h2>
            </div>
            <p className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase">
              Endüstriyel <br />
              <span className="text-zinc-300">Gücün Tanımı</span>
            </p>
          </div>
          <Link
            href="/urunler"
            className="flex items-center gap-4 text-brand-dark font-black uppercase tracking-widest text-xs group"
          >
            Tüm Kataloğu Keşfet
            <span className="p-4 bg-brand-yellow group-hover:bg-brand-dark group-hover:text-white transition-colors">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
               </svg>
            </span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-0 border border-zinc-100 w-full overflow-hidden">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative h-[650px] flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden flex flex-col justify-end p-12 border-b md:border-b-0 md:border-r border-zinc-100 last:border-r-0"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
              />
              
              {/* Number Marker */}
              <span className="absolute top-12 right-12 text-8xl font-black text-brand-dark/5 group-hover:text-brand-yellow/20 transition-colors pointer-events-none select-none">
                0{index + 1}
              </span>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="relative z-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 min-w-[300px]">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-brand-yellow transition-colors leading-none">
                  {category.title}
                </h3>
                <div className="h-1 w-12 bg-brand-yellow mb-8 transition-all group-hover:w-full duration-700" />
                <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                   Detayı Gör 
                   <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                   </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

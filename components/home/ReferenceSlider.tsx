import { Container } from "@/components/shared/Container";

const references = [
  "TUSAŞ", "ASELSAN", "TOSYALI", "ERDEMİR", "KARDEMİR", 
  "FORD", "TOFAŞ", "VESTEL", "ARÇELİK", "ŞİŞECAM"
];

export const ReferenceSlider = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
      <Container className="mb-12">
        <div className="flex items-center gap-4">
           <span className="w-8 h-px bg-brand-yellow" />
           <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Güven Rehberİ</h2>
        </div>
      </Container>

      <div className="relative flex overflow-hidden group">
        {/* First Set */}
        <div className="flex animate-scroll whitespace-nowrap gap-12 py-4 group-hover:[animation-play-state:paused]">
          {references.concat(references).map((ref, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center px-12 py-10 bg-zinc-50 border border-zinc-100 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-default select-none group/item"
            >
              <span className="text-2xl md:text-3xl font-black text-zinc-400 group-hover/item:text-brand-dark transition-colors tracking-tighter">
                {ref}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle indicator line */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />
    </section>
  );
};

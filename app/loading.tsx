export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center">
      {/* Background industrial pattern (optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
           {[...Array(144)].map((_, i) => (
             <div key={i} className="border-[0.5px] border-zinc-500/20" />
           ))}
        </div>
      </div>

      {/* Main Loader Content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Glowing Logo Text */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-[0.4em] uppercase animate-pulse">
            ÖZFATİHLER
          </h2>
          <div className="h-1.5 w-full bg-brand-yellow mt-2 animate-in slide-in-from-left duration-1000 repeat-infinite" />
        </div>

        {/* Dynamic Status / Progress */}
        <div className="flex flex-col items-center gap-4">
           <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-brand-yellow rounded-full animate-bounce" 
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
           </div>
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 animate-in fade-in duration-700">
             Endüstriyel Çözümler Yükleniyor
           </span>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
         <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest border-l-2 border-brand-yellow px-4">
           Since 1989 | Engineering Excellence
         </span>
      </div>
    </div>
  );
}

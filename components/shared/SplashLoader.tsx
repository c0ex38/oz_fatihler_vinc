"use client";

import { useEffect, useState } from "react";

export function SplashLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Check if the splash was already shown in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (!hasSeenSplash) {
      setIsVisible(true);
      setIsRendered(true);
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenSplash", "true");
        document.body.style.overflow = "auto";
        
        // Remove from DOM after fade-out (700ms)
        const unmountTimer = setTimeout(() => {
          setIsRendered(false);
        }, 700);
        return () => clearTimeout(unmountTimer);
      }, 2500);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-brand-dark flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-[-100%]"
      }`}
    >
      {/* Background industrial accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-ping duration-[4s]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Animated Headline */}
        <div className="overflow-hidden">
          <h1 className={`text-5xl md:text-8xl font-black text-white uppercase tracking-tighter transition-all duration-[2000ms] delay-300 ${
            isVisible ? "tracking-[0.6em] opacity-100" : "tracking-tighter opacity-0"
          }`}>
            ÖZFATİHLER
          </h1>
        </div>

        {/* Dynamic Line Drawing */}
        <div className={`h-1.5 bg-brand-yellow transition-all duration-[1500ms] delay-700 ease-out mt-4 ${
          isVisible ? "w-full opacity-100" : "w-0 opacity-0"
        }`} />

        {/* Subtitle with fade-in */}
        <p className={`mt-8 text-zinc-500 font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
        }`}>
          Endüstriyel Kaldırma Teknolojileri
        </p>

        {/* Since 1989 Badge */}
        <div className={`mt-16 border border-zinc-700 px-6 py-2 transition-all duration-700 delay-[1300ms] ${
          isVisible ? "opacity-40 scale-100" : "opacity-0 scale-90"
        }`}>
           <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-none">
             Since 1989 | Engineering Excellence
           </span>
        </div>
      </div>

      {/* Industrial loading bar at floor */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
         <div className={`h-full bg-brand-yellow transition-all duration-[2500ms] ease-linear ${
           isVisible ? "w-full" : "w-0"
         }`} />
      </div>
    </div>
  );
}

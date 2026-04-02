"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const footerLinks = [
  {
    title: "Kurumsal",
    links: [
      { name: "Hakkımızda", href: "/kurumsal" },
      { name: "Misyonumuz", href: "/kurumsal#misyon" },
      { name: "Vizyonumuz", href: "/kurumsal#vizyon" },
      { name: "Belgelerimiz", href: "/kurumsal#belgeler" },
    ],
  },
  {
    title: "Ürünler",
    links: [
      { name: "Portal Vinçler", href: "/urunler#portal" },
      { name: "Köprülü Vinçler", href: "/urunler#koprulu" },
      { name: "Pergel Vinçler", href: "/urunler#pergel" },
      { name: "Elektrikli Vinçler", href: "/urunler#elektrikli" },
      { name: "Özel Vinçler", href: "/urunler#ozel" },
    ],
  },
  {
    title: "Hızlı Linkler",
    links: [
      { name: "Referanslar", href: "/referanslar" },
      { name: "Medya", href: "/medya" },
      { name: "Haberler", href: "/haberler" },
      { name: "İletişim", href: "/iletisim" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <Container className="relative flex flex-col items-center">
        {/* Floating Navigation Pill - High-End UI Technique */}
        <div className="mb-12 md:mb-20 inline-flex items-center px-6 md:px-10 py-4 md:py-5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl animate-in fade-in zoom-in-95 duration-1000 fill-mode-both max-w-[90vw] md:max-w-none">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 md:gap-x-20 gap-y-3">
              {[
                { name: "Ürünler", href: "/urunler" },
                { name: "Kurumsal", href: "/kurumsal" },
                { name: "Referanslar", href: "/referanslar" },
                { name: "Haberler", href: "/haberler" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-brand-yellow transition-all text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 hover:scale-105 active:scale-95"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Brand Signature & Pulse Contact - UX Optimized Funnel */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
          <Link href="/" className="relative h-6 w-24 transition-opacity">
            <Image
              src="/ozfatihler-logo.svg"
              alt="Özfatihler Vinç Logo"
              fill
              className="object-contain"
            />
          </Link>
          
          <div className="flex flex-col items-center gap-3 group">
            <Link href="tel:4447592" className="relative flex items-center gap-4 md:gap-6 text-zinc-500 hover:text-brand-yellow transition-all duration-500 group">
              <span className="w-8 md:w-12 h-px bg-zinc-800 group-hover:w-20 group-hover:bg-brand-yellow transition-all duration-500" />
              <div className="relative">
                 <span className="text-lg md:text-2xl font-black tracking-[0.1em] md:tracking-[0.2em] leading-none">444 75 92</span>
                 {/* Subtle Pulse Effect */}
                 <span className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping opacity-60" />
                 <span className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-brand-yellow rounded-full" />
              </div>
              <span className="w-8 md:w-12 h-px bg-zinc-800 group-hover:w-20 group-hover:bg-brand-yellow transition-all duration-500" />
            </Link>
            <span className="text-[7px] md:text-[8px] text-zinc-700 uppercase font-black tracking-[0.3em] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">7/24 Teknik Destek</span>
          </div>
        </div>

        {/* Minimalist Watermark Floor - Documentary Aesthetic */}
        <div className="w-full pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-600">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
              <p>© {new Date().getFullYear()} Özfatihler Vinç Makine Sanayi</p>
              <div className="hidden md:block w-px h-2 bg-zinc-900" />
              <p>Tüm Hakları Saklıdır.</p>
           </div>

           <div className="flex items-center gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-brand-yellow transition-colors flex items-center gap-2 group"
              >
                  <span>Yukarı Git</span>
                  <svg className="w-3 h-3 group-hover:-translate-y-1 transition-transform text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7" />
                  </svg>
              </button>
           </div>
        </div>
      </Container>
    </footer>
  );
};

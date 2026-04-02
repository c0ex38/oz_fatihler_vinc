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
        <div className="mb-20 inline-flex items-center px-10 py-5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl animate-in fade-in zoom-in-95 duration-1000 fill-mode-both">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-20 gap-y-4">
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
                    className="text-zinc-500 hover:text-white transition-all text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 active:scale-95"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Brand Signature & Pulse Contact - UX Optimized Funnel */}
        <div className="flex flex-col items-center gap-8 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
          <Link href="/" className="relative h-6 w-24 opacity-40 hover:opacity-100 transition-opacity">
            <Image
              src="/ozfatihler-logo.svg"
              alt="Özfatihler Vinç Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </Link>
          
          <div className="flex flex-col items-center gap-3 group">
            <Link href="tel:4447592" className="relative flex items-center gap-6 text-zinc-500 hover:text-white transition-all duration-500 group">
              <span className="w-12 h-px bg-zinc-800 group-hover:w-20 transition-all duration-500" />
              <div className="relative">
                 <span className="text-xl md:text-2xl font-black tracking-[0.2em] leading-none">444 75 92</span>
                 {/* Subtle Pulse Effect */}
                 <span className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping opacity-60" />
                 <span className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-brand-yellow rounded-full" />
              </div>
              <span className="w-12 h-px bg-zinc-800 group-hover:w-20 transition-all duration-500" />
            </Link>
            <span className="text-[8px] text-zinc-700 uppercase font-black tracking-[0.3em] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">7/24 Teknik Destek</span>
          </div>
        </div>

        {/* Minimalist Watermark Floor - Documentary Aesthetic */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-600">
           <div className="flex items-center gap-8">
              <p>© {new Date().getFullYear()} Özfatihler Vinç Makine Sanayi</p>
              <div className="hidden md:block w-px h-2 bg-zinc-900" />
              <p>Tüm Hakları Saklıdır.</p>
           </div>

           <div className="flex items-center gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition-colors flex items-center gap-2 group"
              >
                  <span>Yukarı Git</span>
                  <svg className="w-3 h-3 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7" />
                  </svg>
              </button>
           </div>
        </div>
      </Container>
    </footer>
  );
};

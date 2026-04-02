"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Kurumsal", href: "/kurumsal" },
  { name: "Ürünler", href: "/urunler" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "Medya", href: "/medya" },
  { name: "Haberler", href: "/haberler" },
  { name: "İletişim", href: "/iletisim" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to handle visibility on white backgrounds
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both ${
      isScrolled ? "bg-transparent" : ""
    }`}>
      <Container className="flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className={`relative h-10 w-40 md:h-12 md:w-48 transition-all hover:scale-105 z-50 ${
          isScrolled ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" : "drop-shadow-md"
        }`}>
          <Image
            src="/ozfatihler-logo.svg"
            alt="Özfatihler Vinç Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav - Adaptive Premium Pill */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <nav className={`flex items-center px-10 py-5 transition-all duration-500 rounded-full shadow-2xl border ${
            isScrolled 
              ? "bg-brand-dark/90 backdrop-blur-xl border-white/10" 
              : "bg-white/[0.03] backdrop-blur-2xl border-white/10"
          }`}>
            <ul className="flex items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[9px] font-black uppercase tracking-[0.35em] transition-all duration-500 hover:text-brand-yellow hover:scale-110 block ${
                      pathname === link.href
                        ? "text-brand-yellow font-black"
                        : "text-white"
                    } drop-shadow-2xl`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-white bg-white/10 backdrop-blur-sm rounded-full"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-brand-dark transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Decorative Grid for mobile menu */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full" />
              ))}
            </div>
          </div>

          <nav className="relative z-10 flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-black uppercase tracking-widest transition-colors hover:text-brand-yellow ${
                  pathname === link.href ? "text-brand-yellow" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/iletisim#teklif-formu"
              className="mt-8 px-10 py-5 bg-brand-yellow text-brand-dark font-black uppercase tracking-widest text-sm rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TEKLİF ALIN
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

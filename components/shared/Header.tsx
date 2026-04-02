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

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5"
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="relative h-12 w-48 transition-transform hover:scale-105">
          <Image
            src="/ozfatihler-logo.svg"
            alt="Özfatihler Vinç Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-yellow drop-shadow-md ${
                pathname === link.href
                  ? "text-brand-yellow font-bold"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim#teklif-formu"
          className="hidden lg:block px-6 py-2.5 bg-brand-yellow text-brand-dark border-2 border-brand-yellow rounded-sm font-bold text-sm uppercase tracking-tight transition-all shadow-lg hover:bg-white hover:text-brand-yellow"
        >
          Teklif Al
        </Link>
        
        {/* Mobile menu button could go here */}
      </Container>
    </header>
  );
};

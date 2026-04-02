"use client";

import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { id: 1, src: "/images/portal_crane.png", title: "Portal Vinç Üretim Sahası" },
  { id: 2, src: "/images/hero_crane.png", title: "Fabrika İçi Vinç Montajı" },
  { id: 3, src: "/images/jib_crane.png", title: "Jib Vinç Detay Görüntüsü" },
  { id: 4, src: "/images/portal_crane.png", title: "Açık Saha Portal Vinç Uygulaması" },
  { id: 5, src: "/images/hero_crane.png", title: "Köprülü Vinç Köprü Yapısı" },
  { id: 6, src: "/images/jib_crane.png", title: "Duvara Monteli Pergel Vinç" },
];

export default function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-dark">
        <Container className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            MEDYA GALERİSİ
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto uppercase text-sm tracking-widest font-bold">
            Proje Alanlarımızdan ve Üretim Tesisimizden <span className="text-brand-yellow">Kareler</span>
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <button 
              key={image.id} 
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-square bg-white shadow-lg overflow-hidden border-4 border-white transition-all hover:border-brand-yellow hover:-translate-y-2 focus:outline-none"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 active:scale-95"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-all flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.197 5.197a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-brand-dark to-transparent">
                 <span className="text-white text-[10px] font-black uppercase tracking-widest">{image.title}</span>
              </div>
            </button>
          ))}
        </Container>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white hover:text-brand-yellow transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Large Image Container */}
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Büyütülmüş Görsel"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-10 text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
             Özfatihler Vinç Galeri Sistemleri
          </div>
        </div>
      )}
    </div>
  );
}

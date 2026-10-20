"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, Calendar, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "wedding" | "feast" | "buffet" | "hospitality";
  categoryLabel: string;
  image: string;
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Royal Kumbakonam Elai Saapadu",
      category: "feast",
      categoryLabel: "Traditional Feast",
      image: "/images/traditional-feast.jpg",
      description: "Authentic multi-course banana leaf wedding virundhu with traditional sambar, avial, poriyal, and golden payasam.",
    },
    {
      id: "2",
      title: "Mandapam Wedding Dining Hall",
      category: "wedding",
      categoryLabel: "Wedding Dining",
      image: "/images/wedding-catering.jpg",
      description: "Traditional South Indian wedding banquet setup with warm floral arrangements and impeccable table service.",
    },
    {
      id: "3",
      title: "Luxury Reception Dinner Buffet",
      category: "buffet",
      categoryLabel: "Buffet & Counters",
      image: "/images/buffet-spread.jpg",
      description: "Multi-tier contemporary buffet with luxury chafing dishes, live carving counters, and ambient lighting.",
    },
    {
      id: "4",
      title: "Live Crispy Ghee Roast Counter",
      category: "buffet",
      categoryLabel: "Buffet & Counters",
      image: "/images/dosa-craft.jpg",
      description: "Freshly poured golden roast dosas served piping hot with four authentic regional chutneys and sambar.",
    },
    {
      id: "5",
      title: "Kumbakonam Degree Filter Coffee",
      category: "feast",
      categoryLabel: "Traditional Feast",
      image: "/images/filter-coffee.jpg",
      description: "Signature froth-poured peaberry filter coffee frothed in traditional brass davarah-tumblers on live stalls.",
    },
    {
      id: "6",
      title: "Artisanal Seer Bakshanam Cones",
      category: "wedding",
      categoryLabel: "Wedding Dining",
      image: "/images/sweets-seer.jpg",
      description: "Handcrafted Kai Murukku, Athirasam, Mysore Pak, and towering Paruppu Thengai cones prepared for ceremonies.",
    },
    {
      id: "7",
      title: "Mandapam & Floral Stage Decor",
      category: "hospitality",
      categoryLabel: "Hospitality & Decor",
      image: "/images/mandap-decor.jpg",
      description: "Turnkey wedding floral styling, Oonjal swing decoration, Kolam Rangoli, and sacred Vaideega arrangements.",
    },
    {
      id: "8",
      title: "Morning Auspicious Tiffin Spread",
      category: "feast",
      categoryLabel: "Traditional Feast",
      image: "/images/idli-vada.jpg",
      description: "Steaming hot idlis, crispy medu vadai, and ghee pongal served with fresh coconut chutney and sambar.",
    },
    {
      id: "9",
      title: "Corporate Executive Catering",
      category: "hospitality",
      categoryLabel: "Hospitality & Decor",
      image: "/images/corporate-spread.jpg",
      description: "Hygienic, uniformed staff delivering multi-cuisine corporate lunches, mineral water, and premium hospitality.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0A2923] text-[#F8F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#C5A46D] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
            <span>Feast & Event Gallery</span>
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4EA] leading-[1.15]">
            A Visual Celebration of Hospitality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F4EA]/75 leading-relaxed font-normal">
            Glimpses of sacred wedding spreads, live interactive stalls, traditional Elai Saapadu, and gracious dining arrangements.
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: "all", label: "All Showcase" },
            { key: "wedding", label: "Wedding Dining" },
            { key: "feast", label: "Traditional Feasts" },
            { key: "buffet", label: "Buffets & Live Stalls" },
            { key: "hospitality", label: "Hospitality & Decor" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                activeFilter === tab.key
                  ? "bg-[#C5A46D] text-[#0A2923] shadow-md scale-105"
                  : "bg-[#123D32]/80 hover:bg-[#123D32] text-[#F8F4EA]/80 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#123D32] border border-[#C5A46D]/20 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A46D]">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C5A46D] font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 bg-[#0A2923]/80 backdrop-blur-sm text-[#C5A46D] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 group-hover:opacity-0 transition-opacity">
                {item.categoryLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Disclaimer below gallery */}
        <p className="mt-8 text-center text-xs text-[#F8F4EA]/50 italic">
          * Representative concept imagery illustrating Pavithram Caterers & Wedding Planners' proposed digital presentation.
        </p>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Content */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                sizes="90vw"
                className="object-contain sm:object-cover bg-black"
              />
            </div>

            {/* Captions and Info Bar */}
            <div className="mt-4 w-full bg-[#0A2923]/90 border border-[#C5A46D]/30 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D]">
                    {filteredItems[lightboxIndex].categoryLabel}
                  </span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-xs text-white/50">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <Link
                href="#enquiry"
                onClick={closeLightbox}
                className="shrink-0 inline-flex items-center gap-2 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire This Setup</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

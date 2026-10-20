"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Coffee, UtensilsCrossed, Flame, ArrowUpRight } from "lucide-react";

export default function CulinaryExperience() {
  const experiences = [
    {
      title: "The Royal Kalyana Saapadu",
      category: "Traditional Banana Leaf Feast",
      description:
        "The centerpiece of any Tamil celebration. Steaming aromatic rice, authentic Kumbakonam drumstick sambar, pepper rasam, creamy avial, poriyal, kootu, crispy medu vadai, appalam, and velvety paruppu payasam, served with ceremonial warmth on fresh plantain leaves.",
      image: "/images/rice-feast.jpg",
      badge: "Kalyana Virundhu",
    },
    {
      title: "Artisanal Seer Bakshanam",
      category: "Sacred Festive Sweets & Cones",
      description:
        "Handcrafted with pure ghee and multi-generational precision. Elaborate Kai Murukku, golden Manoharam, rich Mysore Pak, Tirupati-style Laddu, soft Athirasam, and towering Paruppu Thengai cones presented with ceremonial prestige for the bride and groom families.",
      image: "/images/sweets-seer.jpg",
      badge: "Wedding Heritage",
    },
    {
      title: "Kumbakonam Degree Filter Coffee",
      category: "Signature Beverage Experience",
      description:
        "No gathering is complete without the world-renowned Kumbakonam Degree Coffee. Brewed freshly on-site from freshly roasted chicory-infused peaberry beans, boiled in thick farm milk, and frothed in authentic brass davarah and tumblers.",
      image: "/images/filter-coffee.jpg",
      badge: "Live Stall",
    },
    {
      title: "Live Festive Tawa & Counter Service",
      category: "Hot Breakfast & Evening Stalls",
      description:
        "Live tawa stalls serving paper-thin ghee roast dosas, fluffy idlis with four regional chutneys, sizzling vadai, fresh seasonal fruit mocktails, and our celebrated Kumbakonam Beetle Seeval & Special Paan (Beeda) corner.",
      image: "/images/dosa-craft.jpg",
      badge: "Interactive Dining",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F8F4EA] text-[#20211E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A46D]/10 rounded-full blur-3xl -translate-y-1/2 -ml-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[#123D32] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
            <span>Signature Culinary Presentation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A2923] leading-[1.15]">
            Made with Care. Served with Grace.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#20211E]/80 leading-relaxed font-normal">
            Every dish we prepare carries the culinary soul of Kumbakonam. We prioritize unadulterated pure ingredients, generational spices, and heartfelt hospitality to ensure complete satisfaction in every bite.
          </p>
        </div>

        {/* Featured Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#C5A46D]/30 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 left-4 bg-[#0A2923]/90 text-[#C5A46D] border border-[#C5A46D]/40 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.badge}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#123D32] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2923] mt-1 mb-3 group-hover:text-[#123D32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#20211E]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A46D]/20 flex items-center justify-between">
                  <span className="text-xs text-[#123D32] font-medium italic">
                    #ParipoornamInEveryBite
                  </span>
                  <Link
                    href="#enquiry"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0A2923] group-hover:text-[#C5A46D] transition-colors"
                  >
                    <span>Request Menu Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#FAF6ED] border border-[#C5A46D]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#C5A46D] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0A2923]">Customized Tasting & Menu Consultation</h4>
              <p className="text-xs text-[#20211E]/70">We collaborate with you to create tailored traditional or contemporary menus for your exact guest palate.</p>
            </div>
          </div>
          <Link
            href="#enquiry"
            className="shrink-0 bg-[#0A2923] hover:bg-[#123D32] text-[#F8F4EA] text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Discuss Your Menu
          </Link>
        </div>

      </div>
    </section>
  );
}

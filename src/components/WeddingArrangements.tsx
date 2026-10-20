"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Check, 
  Crown, 
  Flower2, 
  Music, 
  HeartHandshake, 
  Layers, 
  Calendar, 
  ChevronRight,
  ShieldCheck,
  Gift
} from "lucide-react";

export default function WeddingArrangements() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const arrangementCategories = [
    {
      id: "vedic",
      title: "Sacred Vedic Rituals & Samangal",
      subtitle: "Traditional Ceremonial Essentials",
      image: "/images/kumbakonam-tradition.jpg",
      icon: Crown,
      description:
        "Every sacred ritual honored with complete Vedic precision. We supply every essential item required by the priests and family so your ceremonies proceed without a single missing element.",
      checklist: [
        "Vaideega Samangal for all Poojas, Homams & Vows",
        "Angumani items complete with traditional brass containers",
        "Kasi Yatra materials (decorated umbrella, stick, book & hand fan)",
        "Pattuppai beautifully inscribed with Bride & Groom names",
        "Traditional Mangala Vadhyam (authentic Nadaswaram & Thavil ensemble)",
        "Nichayathartham, Arathi & Pachaipidi ceremonial arrangements",
        "Printed Thamboola gift bags with auspicious coconuts",
        "Kolam & Traditional Rangoli by skilled artists",
      ],
      badge: "Vedic Essentials",
    },
    {
      id: "seer",
      title: "Artisanal Seer Bakshanam",
      subtitle: "Ceremonial Sweets, Savouries & Cones",
      image: "/images/sweets-seer.jpg",
      icon: Gift,
      description:
        "Pure ghee delicacies prepared with Kumbakonam perfection. We craft majestic towers and presentation cones that add timeless grandeur to your marriage rituals and family exchanges.",
      checklist: [
        "Traditional handcrafted Kai Murukku (5-suthu & 7-suthu)",
        "Towering Paruppu Thengai decorative cones with dry fruits",
        "Golden Manoharam, Ghee Mysore Pak, and melt-in-mouth Tirupati Laddu",
        "Authentic Kumbakonam soft Athirasam & Sweet Seedai",
        "Pocket Bakshanam boxes customized for visiting family relatives",
        "Decorative seer plates, silver-finish trays, and wrap styling",
      ],
      badge: "Pure Ghee Craftsmanship",
    },
    {
      id: "mandapam",
      title: "Mandapam, Stage & Floral Artistry",
      subtitle: "Turnkey Decor, Pandal & Procession",
      image: "/images/mandap-decor.jpg",
      icon: Flower2,
      description:
        "From the auspicious plantain trees at the mandapam gates to majestic stage backdrops and flower swings, our artisanal decor team transforms the venue into a royal celebration hall.",
      checklist: [
        "Fresh plantain trees with auspicious thoranam for pandal entrance",
        "Grand Janavasam vehicle styling & welcoming procession",
        "Custom wedding stage backdrops with fragrant natural flowers",
        "Marriage platform (Manavarai) and Oonjal (Swing) floral styling",
        "Flower Pallaku for the ceremonial bride's arrival",
        "Artistic Vegetable Carving & Ice Sculptures",
        "Festive Bride & Groom Welcome Name Board with floral halo",
        "Traditional Kalyana Kolu set & festive illumination",
      ],
      badge: "Grand Visuals",
    },
    {
      id: "hospitality",
      title: "Hospitality, Live Stalls & Execution",
      subtitle: "Uniformed Hostesses, Music & Hygiene",
      image: "/images/live-counters.jpg",
      icon: HeartHandshake,
      description:
        "A seamless wedding experience requires attentive execution. Our hospitality hosts, live counter specialists, and cleaning crew take complete ownership from morning muhurtham to evening reception.",
      checklist: [
        "Welcoming hostesses (Reception Ladies) in traditional silk sarees",
        "Live Kumbakonam Degree Filter Coffee stall with brass davarah service",
        "Fresh seasonal fruit juice corner & welcome beverage counters",
        "Spl. Kumbakonam Beetle Seeval, Rasikalal Nuts & Beeda / Paan stall",
        "Reception live music, band & traditional wedding dancers",
        "Bride & Groom makeup kit assistance & emergency dressing kits",
        "Dedicated mandapam cleaning materials & post-feast maintenance crew",
        "Uniformed service team with hygiene gloves & hairnets",
      ],
      badge: "Flawless Service",
    },
  ];

  return (
    <section id="arrangements" className="py-24 sm:py-32 bg-[#0A2923] text-[#F8F4EA] relative overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C5A46D]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#123D32]/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123D32] border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>One Call for Complete Celebration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F4EA] leading-[1.12]">
            Complete Wedding Arrangements.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F4EA]/80 leading-relaxed font-normal">
            Beyond our culinary feast, <strong className="text-[#C5A46D]">PAVITHRAM</strong> orchestrates every sacred ritual, floral decor, Seer Bakshanam, and live stall under one trusted roof. Host families can relax and celebrate with absolute peace of mind.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {arrangementCategories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeCategory === index;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(index)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? "bg-gradient-to-b from-[#1C5949] to-[#123D32] border-[#C5A46D] shadow-xl scale-[1.02]"
                    : "bg-[#061A16]/80 hover:bg-[#123D32]/60 border-white/10 text-white/70 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? "bg-[#C5A46D] text-[#0A2923]" : "bg-white/5 text-[#C5A46D]"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-[#C5A46D]" : "text-white/40"}`}>
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className={`font-serif text-sm sm:text-base font-bold leading-snug ${isActive ? "text-white" : "text-white/90"}`}>
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-[#F8F4EA]/60 mt-1 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Visual Showcase */}
        {arrangementCategories.map((cat, index) => {
          if (activeCategory !== index) return null;

          return (
            <div
              key={cat.id}
              className="bg-gradient-to-br from-[#123D32] to-[#0A2923] rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden backdrop-blur-md animate-in fade-in zoom-in-95 duration-400"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left: Photographic Panel */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[480px]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2923] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A2923]" />
                  <div className="absolute top-6 left-6 bg-[#061A16]/90 text-[#C5A46D] border border-[#C5A46D]/40 text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
                    {cat.badge}
                  </div>
                </div>

                {/* Right: Detailed Checklist */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A46D] mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{cat.subtitle}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {cat.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#F8F4EA]/80 leading-relaxed font-normal mb-8">
                      {cat.description}
                    </p>

                    {/* Verified Checklist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                      {cat.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8F4EA]/90">
                          <div className="p-0.5 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#F8F4EA]/60">
                      Available as complete turnkey package or individual additions
                    </div>

                    <Link
                      href="#enquiry"
                      className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-xs font-bold uppercase tracking-[0.16em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Wedding Arrangements</span>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

        {/* Turnkey Assurance Banner */}
        <div className="mt-14 rounded-2xl bg-[#061A16] border border-[#C5A46D]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#123D32] border border-[#C5A46D]/40 text-[#C5A46D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                All 25+ Wedding Services Under One Single Contract
              </h4>
              <p className="text-xs text-[#F8F4EA]/70 mt-0.5">
                No need to coordinate with multiple vendors for food, flowers, music, Seer, and puja items. Pavithram manages everything seamlessly.
              </p>
            </div>
          </div>

          <a
            href="tel:+919500020547"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A46D] hover:text-[#DFC79B] border border-[#C5A46D]/40 px-5 py-2.5 rounded-full transition-all"
          >
            <span>Call +91 95000 20547</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

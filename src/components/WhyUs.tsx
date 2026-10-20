"use client";

import React from "react";
import { Sparkles, Utensils, HeartHandshake, Award } from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      number: "01",
      title: "Thoughtful Preparation",
      description:
        "Every menu is grounded in three decades of Kumbakonam culinary lineage. We source pure spices, cold-pressed oils, and farm-fresh produce, honoring time-tested recipes with zero compromise on authentic taste.",
      icon: Utensils,
    },
    {
      number: "02",
      title: "Quality & Presentation",
      description:
        "From ceremonial banana leaf seating to contemporary luxury buffet spreads, our presentation seamlessly blends traditional South Indian aesthetics with modern elegance, brass accents, and pristine dining hygiene.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Warm Hospitality",
      description:
        "True South Indian catering is an act of sacred hospitality. Our service team members are uniformed, wear hygienic gloves, and serve with heartfelt grace, ensuring every guest feels celebrated and honored.",
      icon: HeartHandshake,
    },
    {
      number: "04",
      title: "Memorable Celebrations",
      description:
        "By offering turnkey arrangements — from Vaideega Samangal and Seer Bakshanam to mandapam decor and live filter coffee stalls — we free host families to be fully immersed in their sacred moments.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF6ED] text-[#20211E] relative border-y border-[#C5A46D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#123D32] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
            <span>Proposed Brand Pillars</span>
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A2923] leading-[1.15]">
            Why Families Trust Pavithram.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#20211E]/75 leading-relaxed font-normal">
            Four foundational values guiding our catering and wedding planning craft, preserving the authentic spirit of South Indian celebrations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-[#C5A46D]/30 shadow-sm hover:shadow-xl hover:border-[#C5A46D] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#C5A46D]/60 group-hover:text-[#C5A46D] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#0A2923]/5 group-hover:bg-[#0A2923] group-hover:text-[#C5A46D] text-[#0A2923] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0A2923] mb-3 group-hover:text-[#123D32] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20211E]/75 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A46D]/15 flex items-center justify-between text-[11px] font-semibold text-[#123D32] uppercase tracking-wider">
                  <span>Pillar of Excellence</span>
                  <span className="text-[#C5A46D]">✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

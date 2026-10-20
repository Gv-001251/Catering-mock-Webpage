"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, Sparkles, BookOpen } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      step: "Origin",
      title: "Roots in Kumbakonam's Culinary Heritage",
      description:
        "The story begins with a proud legacy of third-generation caterers hailing from Kumbakonam, a cultural hub famed for authentic Brahmin vegetarian gastronomy, sacred feast traditions, and legendary degree filter coffee.",
      tag: "Culinary Lineage",
    },
    {
      step: "30+ Years",
      title: "Three Decades of Celebrations",
      description:
        "Across more than thirty years of dedicated service, Pavithram Caterers & Wedding Planners has honored auspicious South Indian weddings, Upanayanams, Seemanthams, and Sashtiaptha Poorthi ceremonies with time-honored recipes.",
      tag: "Generational Mastery",
    },
    {
      step: "Innovation",
      title: "Turnkey Mandapam Coordination",
      description:
        "Recognizing the stress families face during weddings, we introduced complete end-to-end planning: uniting authentic catering, Vaideega Samangal pooja items, Seer Bakshanams, flower decor, and live festive counters under one roof.",
      tag: "All-Inclusive Planning",
    },
    {
      step: "Present",
      title: "The Standard of #Paripoornam",
      description:
        "Operating from Chennai and serving across Tamil Nadu, our mission remains steadfast: blending authentic traditional flavours with modern hygienic precision so that every client experiences completeness in every bite.",
      tag: "Contemporary Excellence",
    },
  ];

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#061A16] text-[#F8F4EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-[#C5A46D] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
            <span>Our Heritage & Approach</span>
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4EA] leading-[1.15]">
            Our Approach to Hospitality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F4EA]/75 leading-relaxed font-normal">
            A three-generation journey dedicated to honoring tradition, authentic Kumbakonam taste, and attentive personal service.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[#C5A46D]/20 -translate-y-12 z-0" />

          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative z-10 bg-[#0A2923]/90 rounded-2xl p-8 border border-[#C5A46D]/30 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:border-[#C5A46D] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#123D32] text-[#C5A46D] text-[10px] font-bold uppercase tracking-widest border border-[#C5A46D]/20">
                    {item.step}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#C5A46D]/60" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#F8F4EA] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F8F4EA]/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-semibold uppercase tracking-wider text-[#C5A46D]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Official Philosophy Quote Card */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#123D32] via-[#0A2923] to-[#123D32] p-8 sm:p-12 border border-[#C5A46D]/40 shadow-2xl text-center relative">
          <p className="font-serif italic text-xl sm:text-2xl text-[#F8F4EA] leading-relaxed">
            “Our unique strength lies in blending authentic traditional services with a modern touch, ensuring every moment is seamless and memorable.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A46D]">
            <span>Pavithram Specialty Caterers & Wedding Planners</span>
          </div>
        </div>

      </div>
    </section>
  );
}

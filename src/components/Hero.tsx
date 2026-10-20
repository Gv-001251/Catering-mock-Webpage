"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ChevronDown, 
  Sparkles, 
  Crown, 
  Flower2, 
  Gift, 
  UtensilsCrossed, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A2923] text-[#F8F4EA] pt-24 pb-16 lg:py-32"
    >
      {/* Background Image with Dark Vignette & Luxurious Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-feast.jpg"
          alt="Pavithram Caterers and Wedding Planners Grand Feast"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[zoom-out_24s_ease-out_infinite_alternate]"
        />
        {/* Multi-layered dark editorial gradient overlay for maximum readability and luxury */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A16]/95 via-[#0A2923]/88 to-[#061A16]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2923] via-transparent to-[#061A16]/70" />
        
        {/* Ornamental Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#C5A46D]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Hero & Value Proposition */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Heritage & Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#123D32]/90 border border-[#C5A46D]/50 text-[#C5A46D] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-700">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC79B]" />
              <span>PAVITHRAM · CATERERS & WEDDING PLANNERS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold tracking-tight text-[#F8F4EA] leading-[1.08] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Grand Traditional Feasts.
              <span className="block mt-1 text-gold-gradient">
                Flawless Wedding Arrangements.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#F8F4EA]/85 font-normal leading-relaxed mb-6 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
              From sacred Vedic rituals, artisanal Seer Bakshanam, and royal mandapam floral decor to our legendary pure vegetarian Kumbakonam Virundhu. Every detail curated with authentic tradition and flawless hospitality.
            </p>

            {/* Motto Highlight */}
            <div className="mb-8 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              <div className="h-0.5 w-10 bg-[#C5A46D]" />
              <span className="font-serif italic text-base sm:text-lg text-[#DFC79B] tracking-wide">
                #Paripoornam in Every Bite
              </span>
              <span className="text-[#C5A46D]/60 hidden sm:inline">•</span>
              <span className="text-xs uppercase tracking-widest text-[#F8F4EA]/75 font-medium">
                One Call for Complete Celebration
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Link
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#DFC79B] via-[#C5A46D] to-[#A48348] hover:from-[#FFF1D0] hover:to-[#C5A46D] text-[#0A2923] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-[#C5A46D]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#0A2923]" />
                <span>Plan Your Wedding & Feast</span>
              </Link>

              <Link
                href="#arrangements"
                className="inline-flex items-center justify-center gap-2 border border-[#C5A46D]/60 hover:border-[#C5A46D] bg-[#061A16]/60 hover:bg-[#123D32]/80 text-[#F8F4EA] hover:text-[#DFC79B] text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-md"
              >
                <Crown className="w-4 h-4 text-[#C5A46D]" />
                <span>Wedding Arrangements</span>
              </Link>
            </div>

            {/* Heritage & Factual Statistics Strip */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 text-xs text-[#F8F4EA]/75">
              <div className="border-r border-white/10 pr-2">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">30+</div>
                <div className="mt-0.5 uppercase tracking-wider text-[10px] text-[#F8F4EA]/70">Years Heritage</div>
              </div>
              <div className="border-r border-white/10 pr-2">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">100%</div>
                <div className="mt-0.5 uppercase tracking-wider text-[10px] text-[#F8F4EA]/70">Pure Vegetarian</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">Turnkey</div>
                <div className="mt-0.5 uppercase tracking-wider text-[10px] text-[#F8F4EA]/70">Catering & Decor</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Luxury "Wedding Capabilities" Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#123D32]/90 via-[#0A2923]/95 to-[#061A16]/95 border border-[#C5A46D]/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Golden Ornate Corner Accent */}
              <div className="absolute top-4 right-4 text-[#C5A46D]/40">
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Card Header */}
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A46D] block mb-1">
                  Complete Mandapam Planning
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Turnkey Wedding Capabilities
                </h3>
                <p className="text-xs text-[#F8F4EA]/70 mt-1">
                  One trusted partner for both culinary mastery and grand event coordination.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3.5 mb-7">
                
                {/* Item 1 */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-[#C5A46D]/30 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A46D]/20 text-[#DFC79B] flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Kumbakonam Virundhu & Live Stalls
                    </h4>
                    <p className="text-[11px] text-[#F8F4EA]/70 mt-0.5 leading-snug">
                      Traditional Elaisapadu, filter coffee, live dosas, chaat & welcome beverages.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-[#C5A46D]/30 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A46D]/20 text-[#DFC79B] flex items-center justify-center shrink-0 mt-0.5">
                    <Flower2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Mandapam, Pandal & Stage Artistry
                    </h4>
                    <p className="text-[11px] text-[#F8F4EA]/70 mt-0.5 leading-snug">
                      Fresh plantain trees, thoranam, flower pallaku, oonjal & grand backdrops.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-[#C5A46D]/30 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A46D]/20 text-[#DFC79B] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Artisanal Seer Bakshanam
                    </h4>
                    <p className="text-[11px] text-[#F8F4EA]/70 mt-0.5 leading-snug">
                      Handcrafted Kai Murukku, towering Paruppu Thengai cones & gift boxes.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-[#C5A46D]/30 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A46D]/20 text-[#DFC79B] flex items-center justify-center shrink-0 mt-0.5">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      Vedic Samangal & Hostesses
                    </h4>
                    <p className="text-[11px] text-[#F8F4EA]/70 mt-0.5 leading-snug">
                      Pooja samangal, Kasi Yatra sets, Nadaswaram troupe & silk saree hostesses.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Action */}
              <Link
                href="#enquiry"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#123D32] hover:bg-[#1C5949] border border-[#C5A46D]/40 text-[#DFC79B] text-xs font-bold uppercase tracking-wider transition-all group"
              >
                <span>Request Custom Wedding Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors">
        <span className="text-[9.5px] uppercase tracking-[0.25em] font-medium">Scroll to explore</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}

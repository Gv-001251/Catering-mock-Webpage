"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F8F4EA] text-[#20211E] relative overflow-hidden">
      {/* Decorative Subtle Background Ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A46D]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#123D32]/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/traditional-feast.jpg"
                  alt="Authentic South Indian Feast Presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F8F4EA] hidden sm:block">
                <Image
                  src="/images/curry-brass.jpg"
                  alt="Traditional Kumbakonam Culinary Preparation in Brass"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Heritage Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#0A2923] text-[#F8F4EA] p-4 rounded-xl shadow-xl border border-[#C5A46D]/40 backdrop-blur-md">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#C5A46D] leading-none">
                  3rd Gen
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#F8F4EA]/80 mt-1">
                  Kumbakonam Roots
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Brand Narrative */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-[#123D32] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
              <span>Brand Philosophy</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2923] tracking-tight leading-[1.2] mb-6">
              Hospitality, Rooted in Tradition.
            </h2>

            {/* Verified Copy from Pavithra Official Profile */}
            <div className="space-y-4 text-base sm:text-lg text-[#20211E]/80 leading-relaxed font-normal">
              <p>
                With over <strong className="text-[#0A2923] font-semibold">30 years of experience</strong> and a proud legacy as third-generation caterers hailed from Kumbakonam, <strong className="text-[#0A2923]">Pavithram Caterers & Wedding Planners</strong> is committed to delivering all-inclusive, end-to-end catering and complete wedding arrangements that make your occasions truly unforgettable.
              </p>
              <p>
                From traditional wedding feasts and milestone celebrations to theme-based receptions and corporate banquets, our unique strength lies in blending timeless culinary craftsmanship with seamless modern execution.
              </p>
            </div>

            {/* Ethos Callout Box */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[#C5A46D]/30 shadow-md relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#C5A46D] text-[#0A2923] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                Our Core Motto
              </div>
              <p className="font-serif italic text-xl text-[#0A2923] leading-snug">
                “#Paripoornam in Every Bite.”
              </p>
              <p className="mt-2 text-xs text-[#20211E]/70 leading-relaxed">
                In Tamil, <em>Paripoornam</em> means total completeness and spiritual fulfillment. That is our standard for every meal, every ritual, and every guest who sits at your feast.
              </p>
            </div>

            {/* Three Proposed Brand Tenets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C5A46D]/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#123D32]/10 text-[#123D32] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0A2923]">Kumbakonam Flavours</h4>
                  <p className="text-[11px] text-[#20211E]/70 mt-1">Authentic recipes passed down through generations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#123D32]/10 text-[#123D32] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0A2923]">Warm Hospitality</h4>
                  <p className="text-[11px] text-[#20211E]/70 mt-1">Caring, attentive service that honors every guest.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#123D32]/10 text-[#123D32] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0A2923]">Hygienic Excellence</h4>
                  <p className="text-[11px] text-[#20211E]/70 mt-1">Uniformed staff, gloves, and spotless preparation.</p>
                </div>
              </div>
            </div>

            {/* Section CTA */}
            <div className="mt-10">
              <Link
                href="#story"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#123D32] hover:text-[#C5A46D] transition-colors group"
              >
                <span>Read our complete story & approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

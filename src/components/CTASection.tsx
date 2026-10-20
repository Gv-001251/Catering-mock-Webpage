"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0A2923] text-[#F8F4EA] overflow-hidden">
      {/* Background Banquet Hall Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banquet-hall.jpg"
          alt="Pavithram Caterers and Wedding Planners Luxury Celebration Banquet"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Layered dark gradients for contrast */}
        <div className="absolute inset-0 bg-[#0A2923]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A16] via-[#0A2923]/80 to-[#061A16]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D32]/80 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Plan Your Auspicious Feast</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F4EA] leading-[1.15] mb-6">
          Let's Make Your Next Celebration Memorable.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#F8F4EA]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          Tell us about your occasion, your guest list and your vision. Let's explore how we can bring it to life with authentic flavors and gracious hospitality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Start an Enquiry</span>
          </Link>

          <a
            href="tel:+919500020547"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#C5A46D]/50 hover:border-[#C5A46D] bg-[#0A2923]/60 hover:bg-[#0A2923] text-[#F8F4EA] hover:text-[#C5A46D] text-sm font-semibold uppercase tracking-[0.14em] px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#C5A46D]" />
            <span>Call +91 95000 20547</span>
          </a>

          <a
            href="https://wa.me/919500020547?text=Hello%20Pavithram%20Caterers%20and%20Wedding%20Planners,%20I%20would%20like%20to%20enquire%20about%20catering%20and%20wedding%20arrangements%20for%20an%20upcoming%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-sm font-semibold uppercase tracking-[0.14em] px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>

        {/* Supporting Note */}
        <p className="mt-8 text-xs text-[#F8F4EA]/60 font-normal">
          Direct inquiries delivered to Pavithram Caterers & Wedding Planners · Chennai & across South India
        </p>
      </div>
    </section>
  );
}

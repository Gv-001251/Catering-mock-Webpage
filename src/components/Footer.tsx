"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles,
  ArrowUp,
  ShieldAlert,
  Crown
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#061A16] text-[#F8F4EA] pt-20 pb-12 border-t border-[#C5A46D]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Wordmark & Heritage (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1C5949] to-[#0A2923] border border-[#C5A46D]/60 flex items-center justify-center text-[#C5A46D] shadow-md group-hover:scale-105 transition-all">
                <span className="font-serif font-black text-xl text-gold-gradient">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] text-[#F8F4EA] group-hover:text-[#DFC79B] transition-colors leading-none">
                  PAVITHRAM
                </span>
                <span className="text-[9px] tracking-[0.24em] text-[#C5A46D] uppercase font-semibold mt-1">
                  Caterers & Wedding Planners
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#F8F4EA]/75 leading-relaxed font-normal max-w-md pt-2">
              With over 30 years of experience and a proud legacy as third-generation caterers hailed from Kumbakonam, we bring authentic flavours, sacred Vedic rituals, artisanal Seer Bakshanam, and gracious wedding planning under one trusted roof.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="font-serif italic text-base text-gold-gradient">
                #Paripoornam in Every Bite
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs uppercase tracking-wider text-[#F8F4EA]/60">
                One Call for Complete Celebration
              </span>
            </div>

            {/* Verified Social Connect */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/pavithram.paripoornam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123D32] hover:bg-[#C5A46D] hover:text-[#0A2923] text-xs font-semibold tracking-wider text-[#F8F4EA] transition-all border border-[#C5A46D]/20 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@pavithram.paripoornam</span>
              </a>

              <a
                href="https://wa.me/919500020547?text=Hello%20Pavithram%20Caterers%20and%20Wedding%20Planners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white text-xs font-semibold tracking-wider text-[#25D366] transition-all border border-[#25D366]/30 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#C5A46D] mb-5">
              Celebration Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium uppercase tracking-wider text-[#F8F4EA]/75">
              <li>
                <Link href="#hero" className="hover:text-[#C5A46D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="hover:text-[#C5A46D] transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="#arrangements" className="hover:text-[#C5A46D] text-[#DFC79B] transition-colors flex items-center gap-1.5">
                  <Crown className="w-3 h-3 text-[#C5A46D]" />
                  <span>Wedding Arrangements</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#C5A46D] transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-[#C5A46D] transition-colors">
                  Culinary Experience
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#C5A46D] transition-colors">
                  Photo & Event Gallery
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#C5A46D] transition-colors">
                  Our Journey & Heritage
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="hover:text-[#C5A46D] transition-colors">
                  Plan Your Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#C5A46D] mb-5">
              Verified Office & Contact
            </h4>
            
            <div className="space-y-4 text-xs text-[#F8F4EA]/80">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <strong className="text-white block font-medium">“Lakshmi Nivas”</strong>
                  A2 102 Purva Windermere, Bhavani Amman Koil Street,<br />
                  Pallikaranai, Chennai – 600100
                </address>
              </div>

              {/* Verified Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-[11px] text-[#C5A46D] uppercase tracking-wider font-semibold">Direct Bookings & Consultation</div>
                  <div>
                    <a href="tel:+919500020547" className="hover:text-[#C5A46D] font-medium">+91 95000 20547</a>,{" "}
                    <a href="tel:+919500020548" className="hover:text-[#C5A46D] font-medium">+91 95000 20548</a>
                  </div>
                  <div>
                    <a href="tel:+919789335189" className="hover:text-[#C5A46D] font-medium">+91 97893 35189</a>,{" "}
                    <a href="tel:+919500179112" className="hover:text-[#C5A46D] font-medium">+91 95001 79112</a>
                  </div>
                </div>
              </div>

              {/* Verified Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:pavithram.paripoornam@gmail.com" className="hover:text-[#C5A46D] transition-colors break-all">
                    pavithram.paripoornam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Required Pitch Concept Disclaimer Box */}
        <div className="my-10 p-5 rounded-2xl bg-[#0A2923]/90 border border-[#C5A46D]/30 text-xs text-[#F8F4EA]/75 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#C5A46D] uppercase tracking-wider block mb-1">
              Concept Presentation Notice by Lumer Labs
            </span>
            <p>
              This website is a preliminary concept created by <strong>Lumer Labs</strong> for presentation purposes. It is not the official Pavithram Caterers and Wedding Planners website. Content, images, services and visual identity are subject to client review and approval.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F4EA]/60">
          <p>
            © 2026 Pavithram Caterers & Wedding Planners Concept. Designed & Developed by <strong className="text-[#C5A46D]">Lumer Labs</strong>.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] hover:text-[#DFC79B] transition-colors uppercase tracking-wider font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

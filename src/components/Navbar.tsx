"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#philosophy" },
    { name: "Wedding Arrangements", href: "#arrangements" },
    { name: "Catering", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar (Offset for fixed top Lumer Labs watermark bar) */}
      <div className="bg-[#061A16] text-[#F8F4EA]/80 text-[11px] sm:text-xs pt-8 sm:pt-8 pb-2 px-4 border-b border-[#C5A46D]/20 transition-all z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
            <span>Kumbakonam Heritage · Authentic Speciality Catering & Full Wedding Arrangements · Chennai & Pan-India</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:+919500020547"
              className="flex items-center gap-1 text-[#C5A46D] hover:text-[#DFC79B] transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>+91 95000 20547</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://www.instagram.com/pavithram.paripoornam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#F8F4EA]/70 hover:text-[#C5A46D] transition-colors"
            >
              <InstagramIcon className="w-3 h-3" />
              <span className="hidden md:inline">@pavithram.paripoornam</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "top-7 bg-[#0A2923]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C5A46D]/30"
            : "top-7 bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5 sm:mt-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C5949] to-[#0A2923] border border-[#C5A46D]/60 flex items-center justify-center text-[#C5A46D] group-hover:border-[#DFC79B] group-hover:scale-105 transition-all shadow-md">
              <span className="font-serif font-black text-lg tracking-wider text-gold-gradient">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.14em] text-[#F8F4EA] group-hover:text-[#DFC79B] transition-colors leading-none">
                PAVITHRAM
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#C5A46D] uppercase font-semibold mt-1">
                Caterers & Wedding Planners
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#F8F4EA]/85 hover:text-[#C5A46D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123D32]/90 border border-[#C5A46D]/40 text-[#DFC79B] text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
              <span>Lumer Labs Demo</span>
            </span>

            <Link
              href="#enquiry"
              className="inline-flex items-center gap-2 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-xs font-semibold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Your Event</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="#enquiry"
              className="bg-[#C5A46D] text-[#0A2923] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F8F4EA] hover:text-[#C5A46D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0A2923] text-[#F8F4EA] p-6 shadow-2xl flex flex-col justify-between border-l border-[#C5A46D]/20 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A46D]/20">
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg tracking-wider text-[#F8F4EA]">
                    PAVITHRAM
                  </span>
                  <span className="text-[9px] tracking-widest text-[#C5A46D] uppercase font-semibold">
                    Caterers & Wedding Planners
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white rounded-lg focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm uppercase tracking-wider font-medium text-[#F8F4EA]/90 hover:text-[#C5A46D] py-2 border-b border-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A46D]/60" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom contact block in drawer */}
            <div className="pt-6 border-t border-[#C5A46D]/20 space-y-3">
              <Link
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Event</span>
              </Link>
              <div className="text-center text-xs text-[#F8F4EA]/70">
                <p>Kumbakonam Tradition · Chennai</p>
                <a href="tel:+919500020547" className="text-[#C5A46D] font-semibold block mt-1">
                  +91 95000 20547
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

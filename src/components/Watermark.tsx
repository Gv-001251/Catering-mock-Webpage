"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export default function Watermark() {
  return (
    <>
      {/* 1. Full-Webpage Repeating Diagonal Watermark Overlay (40% Visible) */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none select-none z-30 overflow-hidden"
        style={{ opacity: 0.40 }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='260' viewBox='0 0 440 260'%3E%3Cg fill='%23C5A46D' font-family='system-ui, -apple-system, sans-serif' font-weight='800' letter-spacing='0.22em' text-anchor='middle'%3E%3Ctext x='220' y='95' font-size='16' transform='rotate(-28 220 95)'%3ELUMER LABS %C2%B7 CONCEPT DEMO%3C/text%3E%3Ctext x='220' y='145' font-size='11' opacity='0.85' transform='rotate(-28 220 145)'%3EPAVITHRAM %C2%B7 PROSPECTIVE PITCH%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "440px 260px",
          }}
        />
      </div>

      {/* 2. Top Persistent Lumer Labs Concept Bar */}
      <div 
        role="region"
        aria-label="Lumer Labs Pitch Watermark Banner"
        className="fixed top-0 left-0 right-0 z-50 bg-[#061A16] text-[#DFC79B] text-[10px] sm:text-[11px] font-semibold py-1.5 px-4 border-b border-[#C5A46D]/40 shadow-md flex items-center justify-between select-none print:block"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A46D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A46D]" />
            </span>
            <span className="font-serif font-black tracking-widest text-[#FFF1D0] uppercase text-[10.5px]">
              LUMER LABS
            </span>
            <span className="text-white/30">|</span>
            <span className="uppercase tracking-wider text-[9.5px] sm:text-[10px] text-[#DFC79B]">
              Sales-Demo Concept Preview
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px]">
            <span className="text-white/70 hidden md:inline">
              Pitch Presentation for Pavithram Caterers & Wedding Planners
            </span>
            <span className="px-2.5 py-0.5 rounded bg-[#C5A46D]/20 text-[#DFC79B] font-bold text-[9px] uppercase tracking-wider border border-[#C5A46D]/30">
              Not Official Website
            </span>
          </div>
        </div>
      </div>

      {/* 3. Floating High-Contrast Lumer Labs Watermark Badge (Bottom-Right) */}
      <aside 
        aria-label="Lumer Labs Concept Watermark Badge"
        className="fixed bottom-5 right-5 z-50 select-none print:block pointer-events-none"
      >
        <div className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#061A16] via-[#0A2923] to-[#123D32] pl-3.5 pr-4 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl border border-[#C5A46D]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A46D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DFC79B]" />
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-black tracking-wider text-gold-gradient text-xs">
              LUMER LABS
            </span>
            <span className="h-3 w-px bg-[#C5A46D]/40" />
            <span className="text-[10px] uppercase tracking-widest text-[#DFC79B] font-bold">
              WATERMARK ACTIVE (40%)
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  const verifiedNumber = "919500020547";
  const defaultText = encodeURIComponent(
    "Hello Pavithram Caterers and Wedding Planners, I would like to inquire about your catering and wedding arrangements for an upcoming celebration."
  );

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 left-5 z-40 select-none print:hidden"
    >
      <a
        href={`https://wa.me/${verifiedNumber}?text=${defaultText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        title="Chat with Pavithram Caterers & Wedding Planners on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-4 h-4 text-white fill-white" />
        <span className="text-xs font-bold tracking-wider hidden sm:inline">
          WhatsApp Inquiry
        </span>
      </a>
    </aside>
  );
}

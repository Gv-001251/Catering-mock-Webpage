"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Calendar, 
  Sparkles, 
  Briefcase, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Coffee
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    {
      id: "wedding",
      title: "Traditional South Indian Weddings",
      subtitle: "Kalyana Saapadu & Complete Vedic Ritual Arrangements",
      image: "/images/wedding-catering.jpg",
      description:
        "Our signature wedding catering brings over 30 years of Kumbakonam mastery to your special day. From Mangala Vadhyam and flower decorations to elaborate Seer Bakshanam and full Katusadam arrangements, we leave no ritual or culinary detail overlooked.",
      offerings: [
        "Traditional Banana Leaf (Elai Saapadu) with authentic Kumbakonam recipes",
        "Vaideega Samangal for poojai & Angumani items with containers",
        "Handcrafted Seer Bakshanams & Paruppu Thengai cones",
        "Nichayathartham, Janavasam & Reception catering",
        "Kasi Yatra materials, Pattuppai with names & printed Thamboola bags",
        "Uniformed service personnel in gloves for spotless hospitality",
      ],
      tag: "Signature Speciality",
      eventType: "Wedding",
    },
    {
      id: "milestones",
      title: "Family Milestone Celebrations",
      subtitle: "Upanayanam, Seemantham, Sashtiaptha Poorthi & Sadabishekam",
      image: "/images/celebration-feast.jpg",
      description:
        "Sacred familial milestones demand deep ritual knowledge and heartfelt hospitality. We specialize in catering for sacred ceremonies with pure traditional menus and customized pooja arrangements.",
      offerings: [
        "Sashtiaptha Poorthi (60th) & Sadabishekam (80th) celebratory feasts",
        "Upanayanam (Brahmopadesam) sacred feast & ritual items",
        "Seemantham (Valaikappu) with traditional 5/7 variety rice spreads",
        "Grahapravesam (Housewarming) auspicious dawn & lunch menus",
        "Arathi & Pachaipidi custom ceremony arrangements",
        "Fresh flower garlands and Kolam Rangoli decorations",
      ],
      tag: "Sacred Milestones",
      eventType: "Sashtiaptha Poorthi / Sadabishekam",
    },
    {
      id: "receptions",
      title: "Theme Weddings & Receptions",
      subtitle: "Contemporary Luxury Buffets, Live Stalls & Outdoor Banquets",
      image: "/images/buffet-spread.jpg",
      description:
        "For evening receptions and theme-based celebrations, we orchestrate grand visual buffet spreads blending traditional South Indian delicacies with pan-Indian gourmet stations.",
      offerings: [
        "Grand multi-tier buffet arrangements with luxury chafing setups",
        "Live tawa counters: ghee roast dosas, appams, and specialty snacks",
        "Theme-based wedding setups with customized decorative backdrops",
        "Outdoor catering with complete mandapam & lawn coordination",
        "Fresh seasonal fruit juice corners and artisanal beverage counters",
        "Special paan (beeda), beetle seeval & churuvan counters",
      ],
      tag: "Luxury Reception",
      eventType: "Reception / Theme Wedding",
    },
    {
      id: "corporate",
      title: "Corporate & Social Gatherings",
      subtitle: "Executive Luncheons, Annual Meets & Institutional Dining",
      image: "/images/corporate-spread.jpg",
      description:
        "From high-level executive board luncheons to grand corporate galas and community assemblies, Pavithram Caterers & Wedding Planners provides professional, punctual, and impeccable food services.",
      offerings: [
        "Executive lunch & dinner buffets with tailored multi-course menus",
        "Hygienic, uniformed staff wearing gloves and hairnets",
        "Packaged mineral water & hot/cold dispenser stations",
        "Punctual scheduling and rapid turnaround for large attendee counts",
        "Customizable continental, North & South Indian business menus",
        "Clean, eco-friendly disposable tumblers, cups, and paper rolls",
      ],
      tag: "Professional Events",
      eventType: "Corporate Event",
    },
    {
      id: "all-inclusive",
      title: "End-to-End Event Arrangements",
      subtitle: "All Wedding & Mandapam Services Under One Trusted Banner",
      image: "/images/mandap-decor.jpg",
      description:
        "True to our Kumbakonam heritage, we provide complete, all-inclusive event coordination so host families can be fully present with their guests without administrative burden.",
      offerings: [
        "Mangala Vadhyam (Nadaswaram & Thavil artists)",
        "Mandapam & stage backdrop floral decoration, Oonjal/swing decor",
        "Plantain trees for pandal, Janavasam vehicle & Flower Pallaku",
        "Vegetable carving & ice sculpture centerpieces",
        "Kalyana Kolu set & Fireworks with special festive effects",
        "Live Kumbakonam degree filter coffee stalls & Beeda counters",
      ],
      tag: "Turnkey Coordination",
      eventType: "All-Inclusive Planning",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A2923] text-[#F8F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C5A46D] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
            <span>Comprehensive Catering & Event Services</span>
            <span className="w-6 h-[1.5px] bg-[#C5A46D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4EA] leading-[1.15]">
            Crafted for Meaningful Occasions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F4EA]/75 leading-relaxed font-normal">
            Whether an intimate family milestone or a thousand-guest wedding feast, our end-to-end culinary and mandapam arrangements ensure complete peace of mind.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {serviceCategories.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#C5A46D] text-[#0A2923] shadow-lg scale-105"
                  : "bg-[#123D32]/60 hover:bg-[#123D32] text-[#F8F4EA]/70 hover:text-white border border-white/10"
              }`}
            >
              {service.title.split(" ")[0]} {service.title.split(" ")[1] || ""}
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        {serviceCategories.map((service, index) => {
          if (activeTab !== index) return null;

          return (
            <div
              key={service.id}
              className="bg-[#123D32]/90 rounded-3xl border border-[#C5A46D]/30 overflow-hidden shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-400"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left: Photographic Showcase */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D32] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#123D32]" />
                  <div className="absolute top-6 left-6 bg-[#0A2923]/90 text-[#C5A46D] border border-[#C5A46D]/40 text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    {service.tag}
                  </div>
                </div>

                {/* Right: Detailed Content & Offerings */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-medium">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F4EA] mt-1 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#F8F4EA]/80 leading-relaxed font-normal mb-8">
                      {service.description}
                    </p>

                    {/* Offerings Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.offerings.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8F4EA]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#F8F4EA]/60">
                      Tailored packages available for any guest capacity
                    </div>
                    <Link
                      href={`#enquiry?type=${encodeURIComponent(service.eventType)}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#C5A46D] hover:bg-[#DFC79B] text-[#0A2923] text-xs font-bold uppercase tracking-[0.15em] px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Enquire For This Event</span>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

        {/* Bottom Banner: "All Arrangements - One Place" Highlights */}
        <div className="mt-16 p-8 rounded-2xl bg-[#061A16] border border-[#C5A46D]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="w-10 h-10 mx-auto rounded-full bg-[#123D32] flex items-center justify-center text-[#C5A46D] mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#F8F4EA]">Vedic Precision</h4>
            <p className="text-[11px] text-[#F8F4EA]/65 mt-1">Pooja samangal, Kasi Yatra & Seer</p>
          </div>

          <div>
            <div className="w-10 h-10 mx-auto rounded-full bg-[#123D32] flex items-center justify-center text-[#C5A46D] mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#F8F4EA]">Fresh Live Stalls</h4>
            <p className="text-[11px] text-[#F8F4EA]/65 mt-1">Live tawa dosas & fresh juice bars</p>
          </div>

          <div>
            <div className="w-10 h-10 mx-auto rounded-full bg-[#123D32] flex items-center justify-center text-[#C5A46D] mb-3">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#F8F4EA]">Kumbakonam Coffee</h4>
            <p className="text-[11px] text-[#F8F4EA]/65 mt-1">Authentic brass davarah degree coffee</p>
          </div>

          <div>
            <div className="w-10 h-10 mx-auto rounded-full bg-[#123D32] flex items-center justify-center text-[#C5A46D] mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#F8F4EA]">Turnkey Mandapam</h4>
            <p className="text-[11px] text-[#F8F4EA]/65 mt-1">Decor, music, cleaning & service</p>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  FileText, 
  Send, 
  CheckCircle, 
  MessageSquare,
  AlertCircle,
  Loader2,
  Sparkles,
  Crown,
  Check
} from "lucide-react";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceScope: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  weddingArrangements: string[];
  additionalNotes: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  eventLocation?: string;
  guestCount?: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceScope: "Catering + Complete Wedding Arrangements (Turnkey)",
    eventType: "Traditional South Indian Wedding",
    eventDate: "",
    eventLocation: "Chennai",
    guestCount: "250 - 500 Guests",
    weddingArrangements: [
      "Mandapam & Stage Floral Decor",
      "Artisanal Seer Bakshanam",
      "Live Kumbakonam Filter Coffee Stall"
    ],
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Min date set to today
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const serviceScopeOptions = [
    "Catering + Complete Wedding Arrangements (Turnkey)",
    "Traditional Catering Feasts Only",
    "Wedding Arrangements & Mandapam Decor Only",
    "Artisanal Seer Bakshanam Bulk Orders",
  ];

  const eventTypeOptions = [
    "Traditional South Indian Wedding",
    "Nichayathartham / Engagement",
    "Sashtiaptha Poorthi (60th Birthday)",
    "Sadabishekam (80th Birthday)",
    "Upanayanam (Sacred Thread Ceremony)",
    "Seemantham (Baby Shower / Valaikappu)",
    "Grahapravesam (Housewarming)",
    "Wedding Reception & Dinner Buffet",
    "Corporate Banquet & Conference",
    "Other Special Occasion",
  ];

  const guestCountOptions = [
    "50 - 100 Guests",
    "100 - 250 Guests",
    "250 - 500 Guests",
    "500 - 1,000 Guests",
    "1,000 - 2,500 Guests",
    "2,500+ Guests",
  ];

  const arrangementChecklistOptions = [
    "Mandapam & Stage Floral Decor",
    "Artisanal Seer Bakshanam",
    "Vedic Ritual Samangal & Kasi Yatra",
    "Live Kumbakonam Filter Coffee Stall",
    "Mangala Vadhyam (Nadaswaram / Thavil)",
    "Silk-Saree Reception Hostesses",
  ];

  const handleArrangementToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.weddingArrangements.includes(item);
      const updated = exists
        ? prev.weddingArrangements.filter((i) => i !== item)
        : [...prev.weddingArrangements, item];
      return { ...prev, weddingArrangements: updated };
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    // Phone number: Indian 10-digit mobile regex
    const cleanPhone = formData.phoneNumber.replace(/\D/g, "");
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    const isValidIndian =
      indianPhoneRegex.test(cleanPhone) ||
      (cleanPhone.length === 12 && cleanPhone.startsWith("91") && indianPhoneRegex.test(cleanPhone.slice(2)));

    if (!cleanPhone) {
      newErrors.phoneNumber = "Phone number is required for booking confirmation.";
    } else if (!isValidIndian) {
      newErrors.phoneNumber = "Please enter a valid 10-digit Indian phone number (starting with 6, 7, 8, or 9).";
    }

    // Email (optional, but validate format if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Event type
    if (!formData.eventType) {
      newErrors.eventType = "Please select the event type.";
    }

    // Event date
    if (!formData.eventDate) {
      newErrors.eventDate = "Please choose the anticipated event date.";
    }

    // Event location
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = "Please specify the event city or mandapam location.";
    }

    // Guest count
    if (!formData.guestCount) {
      newErrors.guestCount = "Please estimate your guest count.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message with verified business number (+91 95000 20547)
    const verifiedWhatsAppNumber = "919500020547";
    const textLines = [
      `*NEW EVENT ENQUIRY — PAVITHRAM CATERERS AND WEDDING PLANNERS*`,
      `---------------------------------`,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phoneNumber}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Scope:* ${formData.serviceScope}`,
      `*Event Type:* ${formData.eventType}`,
      `*Date:* ${formData.eventDate}`,
      `*Location / Mandapam:* ${formData.eventLocation}`,
      `*Guest Count:* ${formData.guestCount}`,
      formData.weddingArrangements.length > 0
        ? `*Wedding Arrangements Requested:* ${formData.weddingArrangements.join(", ")}`
        : null,
      formData.additionalNotes
        ? `*Requirements / Notes:* ${formData.additionalNotes}`
        : null,
      `---------------------------------`,
      `_Enquiry prepared via Pavithram Caterers & Wedding Planners Concept Demo by Lumer Labs_`,
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(textLines.join("\n"));
    const finalWhatsAppUrl = `https://wa.me/${verifiedWhatsAppNumber}?text=${encodedMessage}`;
    setWhatsappUrl(finalWhatsAppUrl);

    // Simulate front-end packaging
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Auto open WhatsApp in new tab
      window.open(finalWhatsAppUrl, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <section id="enquiry" className="py-24 sm:py-32 bg-[#F8F4EA] text-[#20211E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D32]/10 border border-[#C5A46D]/40 text-[#123D32] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Turnkey Catering & Wedding Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A2923] leading-[1.15]">
            Plan Your Auspicious Celebration.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#20211E]/75 leading-relaxed font-normal">
            Whether you need authentic Kumbakonam feast catering, full mandapam arrangements, or our complete turnkey wedding package, share your date and preferences below.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#C5A46D]/30 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123D32] via-[#C5A46D] to-[#123D32]" />

          {isSubmitted ? (
            /* Success State */
            <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#123D32] text-[#C5A46D] flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2923] mb-3">
                Enquiry Successfully Prepared!
              </h3>
              <p className="text-sm sm:text-base text-[#20211E]/80 max-w-lg mx-auto leading-relaxed mb-8">
                Your event details for <strong>{formData.fullName}</strong> ({formData.eventType} on {formData.eventDate}) have been pre-formatted for direct transmission to <strong>PAVITHRAM CATERERS AND WEDDING PLANNERS</strong> via WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      phoneNumber: "",
                      email: "",
                      serviceScope: "Catering + Complete Wedding Arrangements (Turnkey)",
                      eventType: "Traditional South Indian Wedding",
                      eventDate: "",
                      eventLocation: "Chennai",
                      guestCount: "250 - 500 Guests",
                      weddingArrangements: [
                        "Mandapam & Stage Floral Decor",
                        "Artisanal Seer Bakshanam",
                        "Live Kumbakonam Filter Coffee Stall"
                      ],
                      additionalNotes: "",
                    });
                  }}
                  className="text-xs font-semibold uppercase tracking-wider text-[#0A2923] hover:text-[#C5A46D] py-3 px-5 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 text-xs text-stone-500">
                Direct phone: <a href="tel:+919500020547" className="text-[#0A2923] font-bold">+91 95000 20547</a> · Pallikaranai, Chennai
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              
              {/* Service Scope Radio Switcher */}
              <div className="bg-[#FAF6ED] p-4 sm:p-5 rounded-2xl border border-[#C5A46D]/30">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-3 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#C5A46D]" />
                  <span>What Services Are You Looking For?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceScopeOptions.map((scope) => {
                    const isSelected = formData.serviceScope === scope;
                    return (
                      <button
                        type="button"
                        key={scope}
                        onClick={() => setFormData((prev) => ({ ...prev, serviceScope: scope }))}
                        className={`p-3 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between border ${
                          isSelected
                            ? "bg-[#0A2923] text-[#F8F4EA] border-[#C5A46D] shadow-md"
                            : "bg-white text-[#20211E]/80 border-stone-200 hover:border-[#C5A46D]/50"
                        }`}
                      >
                        <span>{scope}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#C5A46D] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sundaram"
                      aria-invalid={errors.fullName ? "true" : "false"}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border bg-stone-50/50 text-[#20211E] placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.fullName ? "border-red-500 focus:border-red-600" : "border-stone-300 focus:border-[#C5A46D]"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Phone Number (India) <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. 98401 23456"
                      aria-invalid={errors.phoneNumber ? "true" : "false"}
                      aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border bg-stone-50/50 text-[#20211E] placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.phoneNumber ? "border-red-500 focus:border-red-600" : "border-stone-300 focus:border-[#C5A46D]"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p id="phoneNumber-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Email Address <span className="text-stone-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@example.com"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border bg-stone-50/50 text-[#20211E] placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.email ? "border-red-500 focus:border-red-600" : "border-stone-300 focus:border-[#C5A46D]"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Event Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 text-[#20211E] transition-colors focus:bg-white focus:border-[#C5A46D] focus:outline-none"
                  >
                    {eventTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date, Location, Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Event Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      min={minDate}
                      value={formData.eventDate}
                      onChange={handleChange}
                      aria-invalid={errors.eventDate ? "true" : "false"}
                      aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
                      className={`w-full px-4 py-3.5 text-sm rounded-xl border bg-stone-50/50 text-[#20211E] transition-colors focus:bg-white focus:outline-none ${
                        errors.eventDate ? "border-red-500 focus:border-red-600" : "border-stone-300 focus:border-[#C5A46D]"
                      }`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p id="eventDate-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.eventDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="eventLocation" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Location / Mandapam <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      placeholder="e.g. Chennai (Pallikaranai)"
                      aria-invalid={errors.eventLocation ? "true" : "false"}
                      aria-describedby={errors.eventLocation ? "eventLocation-error" : undefined}
                      className={`w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border bg-stone-50/50 text-[#20211E] placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none ${
                        errors.eventLocation ? "border-red-500 focus:border-red-600" : "border-stone-300 focus:border-[#C5A46D]"
                      }`}
                    />
                  </div>
                  {errors.eventLocation && (
                    <p id="eventLocation-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.eventLocation}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                    Guest Count <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-sm rounded-xl border border-stone-300 bg-stone-50/50 text-[#20211E] transition-colors focus:bg-white focus:border-[#C5A46D] focus:outline-none"
                    >
                      {guestCountOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Wedding Arrangements Checkbox Strip */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2.5">
                  Wedding Arrangements Required <span className="text-stone-400 font-normal lowercase">(select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {arrangementChecklistOptions.map((opt) => {
                    const checked = formData.weddingArrangements.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleArrangementToggle(opt)}
                        className={`px-3 py-2.5 rounded-xl text-left text-xs transition-all flex items-center gap-2.5 border ${
                          checked
                            ? "bg-[#123D32] text-white border-[#C5A46D]"
                            : "bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                            checked
                              ? "bg-[#C5A46D] border-[#C5A46D] text-[#0A2923]"
                              : "border-stone-400 bg-white"
                          }`}
                        >
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Requirements / Dietary Notes */}
              <div>
                <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-[#0A2923] mb-2">
                  Special Requirements & Preferences <span className="text-stone-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Tell us about specific Brahmin / traditional menu preferences, live filter coffee counters, Seer Bakshanams, mandapam flower arrangements, or timing details..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-stone-300 bg-stone-50/50 text-[#20211E] placeholder:text-stone-400 transition-colors focus:bg-white focus:border-[#C5A46D] focus:outline-none resize-y"
                />
              </div>

              {/* Submit CTA & WhatsApp Direct Action */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 text-center sm:text-left">
                  🔒 Enquiries are forwarded to verified WhatsApp: <strong className="text-[#0A2923]">+91 95000 20547</strong>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#DFC79B] via-[#C5A46D] to-[#A48348] hover:from-[#FFF1D0] hover:to-[#C5A46D] disabled:opacity-70 text-[#0A2923] text-xs font-bold uppercase tracking-[0.16em] px-9 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Preparing Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  delay: number;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: "01",
    quote: "The system is working fine and I’m extremely grateful. Take care",
    name: "Lawyer Kwame Agyeman",
    location: "Ashaley Botwe Sch junction",
    delay: 0,
  },
  {
    id: "02",
    quote: "Good evening. Yes, we are using the system as you advised. No problems at all and I’m enjoying it",
    name: "Madam Juliet",
    location: "Danfa",
    delay: 0.1,
  },
  {
    id: "03",
    quote: "BKC Engineering did an excellent job on my solar installation. The team was professional, punctual, and explained everything clearly...",
    name: "Mr. Kwadwo Doffour",
    location: "Kumawu (Omama Hotel & Apartment)",
    delay: 0.2,
  },
  {
    id: "04",
    quote: "BKC Engineering exceeded my expectations. Your workmanship is neat...",
    name: "DCOP David Amoako",
    location: "Nkansah Executive Lodge - Kumasi Oduom",
    delay: 0.3,
  },
  {
    id: "05",
    quote: "You responded quickly to my inquiry and delivered exactly what you promised...",
    name: "Mr. Enoch Bolfrey",
    location: "Cantoments",
    delay: 0.4,
  },
  {
    id: "06",
    quote: "I’m very impressed with the quality of work from you...",
    name: "Bismarck",
    location: "Dzemeni - Galilee Island",
    delay: 0.5,
  },
];

// --- Card Component ---
const TestimonialCard = ({ data, className = "" }: { data: Testimonial; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: data.delay, ease: "easeOut" }}
    className={`bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 w-full max-w-[350px] ${className}`}
  >
    <div className="flex gap-2">
      <span className="text-4xl font-serif text-slate-800 leading-none">“</span>
      <p className="text-slate-700 text-sm leading-relaxed pt-1">
        {data.quote}
      </p>
    </div>
    
    <div className="border-t border-slate-100 pt-4 flex flex-col gap-1.5 mt-auto">
      <span className="font-semibold text-slate-900 text-sm">By: {data.name}</span>
      <div className="flex items-center gap-1.5 text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span className="text-xs">{data.location}</span>
      </div>
    </div>
  </motion.div>
);

export default function CircularTestimonials() {
  return (
    <section className="w-full bg-[#344356] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center lg:text-left">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">What Our Clients Say</h2>
        </div>

        {/* ==========================================
            DESKTOP CIRCULAR VIEW (lg and up)
            ========================================== */}
        <div className="relative hidden lg:flex justify-center items-center h-[750px]">
          {/* Central Logo */}
          <div className="z-20 rounded-xl flex justify-center items-center text-white/90 font-bold text-4xl tracking-tighter">
            BKC<span className="text-yellow-400">.</span>
          </div>

          {/* Absolute Positioned Cards */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <TestimonialCard data={testimonials[0]} />
          </div>
          <div className="absolute top-24 right-0">
            <TestimonialCard data={testimonials[1]} />
          </div>
          <div className="absolute bottom-24 right-0">
            <TestimonialCard data={testimonials[2]} />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <TestimonialCard data={testimonials[3]} />
          </div>
          <div className="absolute bottom-24 left-0">
            <TestimonialCard data={testimonials[4]} />
          </div>
          <div className="absolute top-24 left-0">
            <TestimonialCard data={testimonials[5]} />
          </div>

          {/* Decorative faint circle lines */}
          <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none" />
        </div>

        {/* ==========================================
            MOBILE/TABLET GRID VIEW (below lg)
            ========================================== */}
        <div className="flex lg:hidden flex-col items-center gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
          
          {/* Mobile Central Brand Mark */}
          <div className="mt-8 text-white/20 font-bold text-5xl tracking-widest pointer-events-none">
            BKC
          </div>
        </div>

      </div>
    </section>
  );
}
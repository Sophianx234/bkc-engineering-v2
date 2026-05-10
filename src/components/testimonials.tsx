"use client";

import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  delay: number; // For staggered animation in circular path
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
const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: data.delay, ease: "easeOut" }}
    className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 w-[340px]"
  >
    <div className="flex gap-2">
      <span className="text-4xl font-serif text-slate-800">“</span>
      <p className="text-slate-700 text-sm leading-relaxed pt-2">
        {data.quote}
      </p>
    </div>
    
    <div className="border-t border-slate-100 pt-4 flex flex-col gap-1.5">
      <span className="font-semibold text-slate-900 text-sm">By: {data.name}</span>
      <div className="flex items-center gap-1.5 text-slate-500">
        {/* Map Pin Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span className="text-xs">Location: {data.location}</span>
      </div>
    </div>
  </motion.div>
);

export default function CircularTestimonials() {
  return (
    <section className="w-full bg-[#344356] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-white/70 uppercase">
            Testimonials
          </span>
        </div>

        <div className="relative flex justify-center items-center h-[700px]">
          
          {/* Central Logo */}
            <div className=" rounded-xl flex justify-center items-center text-white/80 font-bold text-3xl">
              BKC
            </div>

          {/* Testimonial Cards on Circular Path */}
          {/* Using CSS grid/absolute positioning to place cards around the center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <TestimonialCard data={testimonials[0]} />
          </div>
          <div className="absolute top-20 right-10">
            <TestimonialCard data={testimonials[1]} />
          </div>
          <div className="absolute bottom-20 right-10">
            <TestimonialCard data={testimonials[2]} />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <TestimonialCard data={testimonials[3]} />
          </div>
          <div className="absolute bottom-20 left-10">
            <TestimonialCard data={testimonials[4]} />
          </div>
          <div className="absolute top-20 left-10">
            <TestimonialCard data={testimonials[5]} />
          </div>

          {/* Decorative faint circle lines */}
          <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute w-[850px] h-[850px] border border-white/5 rounded-full pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: "01",
    quote: "BKC Engineering installed a 20kW solar system for our home, and the results have been excellent. We now have reliable power even during outages, and our electricity costs have reduced significantly.",
    author: "Homeowner, Cantonments",
  },
  {
    id: "02",
    quote: "The team delivered a complete solar and battery solution for our facility. Their professionalism and attention to detail ensured everything was completed on time and works perfectly.",
    author: "Operations Manager, Klagon",
  },
  {
    id: "03",
    quote: "Power outages used to disrupt our operations, but since installing the backup system from BKC Engineering, we've had consistent and uninterrupted power.",
    author: "Business Owner, Accra",
  },
  {
    id: "04",
    quote: "What stood out for us was their after-sales support. The team regularly checks the system and responds quickly whenever we need assistance.",
    author: "Facility Manager, East Legon",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

// --- Reusable Card Component ---
const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <motion.div 
    variants={cardVariants}
    className="flex flex-col justify-between rounded-[2rem] rounded-br-2xl bg-white p-8 shadow-xl md:p-10"
  >
    <div>
      {/* Heavy stylized quotation mark */}
      <span className="font-serif text-5xl font-black leading-none text-slate-800">
        “
      </span>
      <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
        {data.quote}
      </p>
    </div>
    
    <div className="mt-8 text-right">
      <span className="text-sm font-semibold text-slate-400">
        ~ {data.author}
      </span>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  // Split data into two columns for the staggered masonry effect
  const leftColumn = [testimonials[0], testimonials[2]];
  const rightColumn = [testimonials[1], testimonials[3]];

  return (
    <section className="w-full bg-white px-6 py-24 font-sans md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Deep Slate Background Container */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#344356] px-6 py-16 md:px-16 md:py-24 lg:px-20 lg:py-28 shadow-2xl">
          
          {/* Subtle Top-Left Section Header */}
          <div className="absolute left-8 top-8 md:left-12 md:top-12">
            <span className="text-xs font-bold tracking-widest text-white/80 md:text-sm">
              Testimonials
            </span>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 md:mt-0 md:grid-cols-2 md:gap-12"
          >
            
            {/* Left Column */}
            <div className="flex flex-col gap-8 md:gap-12">
              {leftColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.id} data={testimonial} />
              ))}
            </div>

            {/* Right Column (Staggered downwards via margin-top on desktop) */}
            <div className="flex flex-col gap-8 md:mt-24 md:gap-12">
              {rightColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.id} data={testimonial} />
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { 
  Banknote, 
  Fan, 
  Recycle, 
  ShieldCheck, 
  Wind, 
  Home, 
  ArrowUpRight 
} from "lucide-react";

// --- Types ---
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Data ---
const features: Feature[] = [
  {
    title: "Lower Your Electricity Bills",
    description: "Cut monthly power costs with efficient solar systems designed for homes and businesses.",
    icon: Banknote,
  },
  {
    title: "Achieve Energy Independence",
    description: "Reduce reliance on the grid with reliable solar power and backup energy solutions.",
    icon: Fan,
  },
  {
    title: "Sustainable & Eco-Friendly",
    description: "Switch to clean renewable energy and reduce your environmental impact long-term.",
    icon: Recycle,
  },
  {
    title: "Reliable Installation & Support",
    description: "Enjoy consistent power with expertly installed systems and ongoing maintenance support.",
    icon: ShieldCheck, 
  },
  {
    title: "Enjoy Low Maintenance",
    description: "Benefit from durable systems that require minimal upkeep over time.",
    icon: Wind,
  },
  {
    title: "Increased Property Value",
    description: "Boost your home or business value with modern solar installations.",
    icon: Home,
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Component ---
export default function FeaturesSection() {
  return (
    // 1. Added `min-h-dvh`, `flex`, and `items-center` to perfectly center it in the viewport
    // 2. Reduced vertical padding from `py-20` to `py-12`
    <section className="w-full min-h-dvh flex border-b-5 border-b-gray-50 items-center justify-center bg-white px-6 py-12 font-sans text-slate-900 md:px-12 lg:px-24">
      
      {/* 3. Replaced fixed margins with a flex column and a gap for balanced spacing */}
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-10 md:gap-12">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Why Choose Solar Energy in Ghana?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-sm font-medium text-slate-600 md:text-base"
          >
            Cut monthly power costs with efficient solar systems designed for homes and businesses.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {features.map((feature, index) => {
            // Logic for internal borders only (cross pattern on desktop)
            const isTopRow = index < 3;
            const isMidRow = index > 2;
            const isLeftOrMiddleCol = index % 3 !== 2;
            const isNotLastMobile = index !== features.length - 1;

            return (
              <motion.div
  key={index}
  variants={itemVariants}
  className={`flex flex-col items-center px-4 py-8 text-center
    ${isTopRow ? "md:border-b md:border-slate-200" : ""}
    ${isLeftOrMiddleCol ? "md:border-r  md:border-slate-200" : ""}
    ${isMidRow ? " md:border-t md:border-slate-200" : ""}
    ${isNotLastMobile ? "border-b  border-slate-200 md:border-b-0" : ""}
  `}
>
                <h3 className="mb-4 text-base font-semibold text-slate-600">
                  {feature.title}
                </h3>
                
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 shadow-sm">
                  <feature.icon strokeWidth={1.5} size={24} />
                </div>
                
                <p className="max-w-[250px] text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // 5. Removed `mt-20` because the parent wrapper's `gap-12` now handles this perfectly
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Smart Services Designed <br className="hidden md:block" />
            For A Sustainable Future
          </h2>
          
          <a 
            href="#services" 
            className="group flex items-center gap-4 rounded-full border border-slate-300 bg-white py-2 pl-6 pr-2 text-sm font-semibold text-slate-800 transition-all hover:border-slate-900 hover:bg-slate-50 shrink-0"
          >
            Learn More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:scale-105">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
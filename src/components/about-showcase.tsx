"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Lightbulb, Recycle, HeartHandshake } from "lucide-react";

// --- Data Models ---
const stats = [
  { value: "20+", label: "Solar Installations" },
  { value: "60+", label: "Energy Solutions" },
  { value: "100%", label: "Reliable Support" },
  { value: "100%", label: "Sustainable Impact" },
];

const statements = [
  {
    id: "mission",
    title: "Our Mission",
    text: "To deliver reliable, innovative, and sustainable energy solutions that power growth and reduce costs.",
    imageUrl: "/images/m-1.jpg",
  },
  {
    id: "vision",
    title: "Our Vision",
    text: "To lead the future of sustainable energy through innovation, excellence, and impact.",
    imageUrl: "/images/m-2.jpg",
  },
  {
    id: "goal",
    title: "Our Goal",
    text: "To expand access to clean energy solutions while continuously improving service delivery.",
    imageUrl: "/images/m-3.jpg",
  },
];

const values = [
  {
    id: "integrity",
    title: "Integrity",
    text: "At BKC, our integrity matters the most.",
    imageUrl: "/images/v-1.jpg",
    icon: ShieldCheck,
  },
  {
    id: "innovation",
    title: "Innovation",
    text: "Constantly pushing the boundaries of engineering to find smarter energy solutions.",
    imageUrl: "/images/v-2.jpg",
    icon: Lightbulb,
  },
  {
    id: "sustainability",
    title: "Sustainability",
    text: "Every project is designed with the long-term health of our planet in mind.",
    imageUrl: "/images/v-3.jpg",
    icon: Recycle,
  },
  {
    id: "customer",
    title: "Customer Commitment",
    text: "Your success is our priority. We deliver reliable support every step of the way.",
    imageUrl: "/images/v-4.jpg",
    icon: HeartHandshake,
  },
];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutShowcase() {
  // State to track which value card is currently hovered. Default to the first one.
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="w-full bg-white px-6 py-24 font-sans text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-24">
        
        {/* =========================================
            SECTION 1: HERO & STATS
        ========================================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.h2 variants={fadeUpVariant} className="mb-6 max-w-md text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              We Are More Than Energy Providers
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="max-w-md text-base leading-relaxed text-slate-600">
              BKC Engineering delivers innovative, efficient, and sustainable engineering solutions tailored to meet the energy needs of homes and businesses.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
              alt="Engineering team analyzing data"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Stats Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-8 pb-8 pt-32">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col text-white">
                    <span className="text-3xl font-bold tracking-tight md:text-4xl">{stat.value}</span>
                    <span className="mt-1 text-xs font-medium text-slate-300 md:text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            SECTION 2: MISSION, VISION, GOAL
        ========================================= */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {statements.map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeUpVariant}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-800 shadow-lg"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
              
              {/* Top Right Glass Icon */}
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                 <ArrowUpRight size={20} strokeWidth={2} />
              </div>

              {/* Bottom Text Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h3 className="mb-3 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-200">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================
            SECTION 3: OUR VALUES (Accordion Hover Effect)
        ========================================= */}
        <div>
          <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-slate-500">
            Our Values
          </span>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex w-full flex-col gap-4 lg:h-[280px] lg:flex-row"
          >
            {values.map((value, index) => {
              const isActive = hoveredIndex === index;

              return (
                <motion.div 
                  key={value.id}
                  variants={fadeUpVariant}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.5rem] bg-slate-800 shadow-md transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                    isActive ? "h-[280px] lg:h-full lg:w-[55%]" : "h-[120px] lg:h-full lg:w-[15%]"
                  }`}
                >
                  {/* Background Image */}
                  <Image
                    src={value.imageUrl}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes={isActive ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 15vw"}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 ease-out" />

                  {/* Absolute positioning container for fluid cross-animations */}
                  <div className="absolute inset-0 h-full w-full">
                    
                    {/* Top Right Arrow (Hidden when active) */}
                    <div 
                      className={`absolute right-4 top-4 text-white transition-opacity duration-300 ease-in-out md:right-6 md:top-6 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>

                    {/* Text Container: Moves from Bottom-Left to Middle-Left */}
                    <div 
                      className={`absolute left-4 w-3/4 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:left-6 ${
                        isActive ? "top-1/2 -translate-y-1/2" : "top-[calc(100%-1rem)] -translate-y-full md:top-[calc(100%-1.5rem)]"
                      }`}
                    >
                      <h3 className={`font-bold tracking-tight text-white transition-all duration-[600ms] ${
                        isActive ? "mb-2 text-2xl lg:text-3xl" : "text-base leading-tight lg:text-lg"
                      }`}>
                        {value.title}
                      </h3>
                      
                      {/* Subtext: Fades in and expands when active */}
                      <div className={`overflow-hidden transition-all duration-[600ms] ease-in-out ${
                        isActive ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <p className="text-xs font-medium text-slate-200 md:text-sm">
                          {value.text}
                        </p>
                      </div>
                    </div>

                    {/* Main Icon Badge: Moves from Bottom-Right to Top-Right */}
                    <div 
                      className={`absolute right-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:right-6 md:h-12 md:w-12 ${
                        isActive ? "top-4 md:top-6" : "top-[calc(100%-1rem-2.5rem)] md:top-[calc(100%-1.5rem-3rem)]"
                      }`}
                    >
                      <value.icon size={20} strokeWidth={2.5} />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data Models ---
const featuredFeatures = [
  "60kWh high-capacity battery storage",
  "Seamless backup power for uninterrupted supply",
  "Optimized for efficiency and long-term performance",
];

const otherProjects = [
  {
    id: 1,
    location: "East Legon",
    imageUrl: "/images/stock/w-1.jpeg", // Replace with actual project image URL
  },
  {
    id: 2,
    location: "Klagon",
    imageUrl: "/images/stock/w-2.jpeg", // Replace with actual project image URL
  },
  {
    id: 3,
    location: "Tema", // Added a 3rd location for the battery system image
    imageUrl: "/images/stock/w-3.jpeg", // Replace with actual project image URL
  },
  {
    id: 4,
    location: "Osu",
    imageUrl: "/images/stock/w-4.jpeg", // Replace with actual project image URL
  }
  ,
  {
    id: 5,
    location: "37 Area",
    imageUrl: "/images/stock/h-2.jpeg", // Replace with actual project image URL
  },
  {
    id: 6,
    location: "Tse Ado",
    imageUrl: "/images/stock/h-6.jpeg", // Replace with actual project image URL
  }
  ,
  {
    id: 7,
    location: "Police City",
    imageUrl: "/images/stock/w-11.jpeg", // Replace with actual project image URL
  }
  ,
  {
    id: 7,
    location: "Hatso",
    imageUrl: "/images/stock/w-13.jpeg", // Replace with actual project image URL
  }
];

// --- Animation Variants ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler for the carousel buttons
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -450 : 450;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="view-projects" className="w-full bg-white px-6 py-24 font-sans md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* =========================================
            COMPONENT 1: FEATURED PROJECT
        ========================================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col justify-center"
          >
            <motion.span variants={fadeUpVariant} className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Featured
            </motion.span>
            
            <motion.h2 variants={fadeUpVariant} className="mb-12 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              20kW Hybrid Solar System Installation
            </motion.h2>

            <div className="flex flex-col gap-8">
              {featuredFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeUpVariant} className="flex items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <Sun size={20} className="text-slate-700" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-100 lg:aspect-auto lg:h-[500px]"
          >
            <Image
              src="/images/stock/w-19.jpeg"
              alt="Workers installing solar panels on a roof"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Location Badge */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-black/50 py-2 pl-3 pr-4 text-sm font-medium text-white backdrop-blur-md">
              <MapPin size={16} className="text-yellow-400" strokeWidth={2.5} />
              Cantonments
            </div>
          </motion.div>
        </div>

        {/* =========================================
            COMPONENT 2: OTHER PROJECTS CAROUSEL
        ========================================= */}
        <div className="mt-32">
          
          {/* Carousel Header & Controls */}
          <div className="mb-8 flex items-end justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Other Projects
            </span>
            
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                aria-label="Previous projects"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                aria-label="Next projects"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Draggable/Scrollable Carousel Track */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {otherProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative aspect-[4/3] w-[85vw] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-slate-100 sm:w-[400px] lg:w-[480px]"
              >
                <Image
                  src={project.imageUrl}
                  alt={`Solar project in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 480px"
                />
                {/* Dark Gradient Overlay for readability on hover/always */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Location Badge */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 font-medium text-white">
                  <MapPin size={18} className="text-yellow-400" strokeWidth={2.5} />
                  {project.location}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
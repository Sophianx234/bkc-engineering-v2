"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Home, 
  Store, 
  Factory, 
  Hospital, 
  GraduationCap, 
  Landmark 
} from "lucide-react";

// --- Types ---
interface Industry {
  id: string;
  title: string;
  imageUrl: string;
  icon: React.ElementType;
  theme: "light" | "dark"; // Determines text and icon background color based on the image
}

// --- Data ---
const industries: Industry[] = [
  {
    id: "residential",
    title: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    icon: Home,
    theme: "dark", 
  },
  {
    id: "commercial",
    title: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    icon: Store,
    theme: "dark",
  },
  {
    id: "industrial",
    title: "Industrial",
    imageUrl: "https://images.unsplash.com/photo-1601569205943-53aac3dcef67?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Factory,
    theme: "dark",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    icon: Hospital,
    theme: "light", // Needs white text for the dark hospital corridor
  },
  {
    id: "education",
    title: "Education",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop",
    icon: GraduationCap,
    theme: "dark",
  },
  {
    id: "government",
    title: "Government",
    // Placeholder resembling a monument/arch similar to the Independence Arch
    imageUrl: "https://images.unsplash.com/photo-1594581979864-36977b15d0dc?q=80&w=656&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    icon: Landmark,
    theme: "dark",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-white px-6 py-24 font-sans md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-3xl font-semibold tracking-tight text-[#1a2332] md:text-4xl"
        >
          Industries We Serve
        </motion.h2>

        {/* CSS Grid for Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {industries.map((industry) => {
            // Dynamically set text and background colors based on the theme prop
            const isDarkTheme = industry.theme === "dark";
            const textColor = isDarkTheme ? "text-slate-900" : "text-white";
            const iconBg = isDarkTheme 
              ? "bg-white/40 border-white/50 text-slate-800" 
              : "bg-white/10 border-white/20 text-white";

            return (
              <motion.div
                key={industry.id}
                variants={cardVariants}
                className="group relative aspect-square w-full overflow-hidden rounded-[2rem] bg-slate-100 sm:aspect-[4/5] md:aspect-square"
              >
                {/* Background Image */}
                <Image
                  src={industry.imageUrl}
                  alt={`${industry.title} industry sector`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay (Optional, ensures text readability) */}
                <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-white/10' : 'from-black/40'} to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30`} />

                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-row items-start justify-between p-6 md:p-8">
                  {/* Title */}
                  <h3 className={`text-lg font-medium tracking-wide md:text-xl ${textColor}`}>
                    {industry.title}
                  </h3>

                  {/* Glassmorphism Icon Container */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300 ${iconBg}`}>
                    <industry.icon size={20} strokeWidth={2} />
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
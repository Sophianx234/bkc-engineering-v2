"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import ProjectItem from "./project-item";

// --- Types ---
interface Project {
  id: string;
  systemSize: string;
  location: string;
  imageUrl: string;
}

// --- Data Generation ---
// This generates the 23 projects. You can easily override the placeholders
// by adding the specific project number to the 'customData' object below.
const customData: Record<number, { size: string; loc: string }> = {
  1: { size: "20kW system", loc: "Danfa" },
  2: { size: "20kW system", loc: "East Legon" },
  3: { size: "60kW system", loc: "Klagon" },
  4: { size: "15kW system", loc: "Cantonments" },
  5: { size: "30kW system", loc: "Kumawu Bodomase" }, 
  6: { size: "30kW system", loc: "Dansoman" },
  
  // --- Accra: Prime & High-Growth Residential ---
  7: { size: "15kW system", loc: "Airport Residential Area" },
  8: { size: "10kW system", loc: "Ashaley Botwe" },
  9: { size: "25kW system", loc: "Labone" },
  10: { size: "12kW system", loc: "Oyarifa" },
  11: { size: "15kW system", loc: "East Legon Hills" },
  12: { size: "20kW system", loc: "Tse Addo" },
  13: { size: "10kW system", loc: "Dzorwulu" },
  14: { size: "15kW system", loc: "Roman Ridge" },
  
  // --- Accra: Commercial/Industrial & Suburban ---
  15: { size: "50kW system", loc: "Tema Community 25" },
  16: { size: "40kW system", loc: "Spintex" },
  17: { size: "100kW system", loc: "North Industrial Area" },

  // --- Kumasi: Prime Executive & High-End Residential ---
  18: { size: "15kW system", loc: "Nhyiaeso" },
  19: { size: "20kW system", loc: "Ahodwo" },
  20: { size: "25kW system", loc: "Danyame" },
  
  // --- Kumasi: Middle-Class & Emerging Suburbs ---
  21: { size: "10kW system", loc: "Santasi" },
  22: { size: "35kW system", loc: "Asokwa" },
  23: { size: "8kW system", loc: "Kwadaso" },
};

const allProjects: Project[] = Array.from({ length: 14 }, (_, i) => {
  const num = i + 1;
  const custom = customData[num];
  
  return {
    id: num.toString().padStart(2, "0"),
    systemSize: custom?.size || "Solar Installation",
    location: custom?.loc || "Ghana",
    imageUrl: `/images/stock/w-${num}.jpeg`,
  };
});

// --- Animation Variants ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsGallery() {
  // State to handle the "See All" functionality
  // Starts by showing the first 4 projects (change 4 to 2 if you only want 2 initially)
  const initialCount = 2; 
  const [showAll, setShowAll] = useState(false);

  // Determine which projects to render based on the state
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, initialCount);

  return (
    <section className="w-full bg-[#0B1121] px-6 py-24 font-sans text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-6 text-3xl font-medium tracking-wide md:text-4xl"
          >
            Explore Our Projects
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            {/* Swapped <Link> for a <button> to handle state changes */}
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-[#0B1121]"
            >
              {showAll ? "Show Less" : "See All"}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0B1121] transition-transform group-hover:scale-110 group-hover:bg-[#0B1121] group-hover:text-white">
                {showAll ? (
                  <ArrowUpLeft size={14} strokeWidth={2.5} />
                ) : (
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                )}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Staggered Masonry-style Grid */}
        <div className="w-full">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  index={index}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Optional: Second button at the bottom if the list gets too long */}
        {showAll && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="mt-16 flex justify-center"
           >
             <button 
                onClick={() => {
                  setShowAll(false);
                  // Optional: Smooth scroll back up to the gallery
                  window.location.hash = "projects"; 
                }}
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-[#0B1121]"
              >
                Show Less
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0B1121] transition-transform group-hover:scale-110 group-hover:bg-[#0B1121] group-hover:text-white">
                  <ArrowUpLeft size={14} strokeWidth={2.5} />
                </span>
              </button>
           </motion.div>
        )}
        
      </div>
    </section>
  );
}
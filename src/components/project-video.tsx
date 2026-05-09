"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

// --- Solar Project Data ---
const solarProjects = [
  {
    id: 1,
    title: "Commercial Rooftop Installation",
    location: "Industrial Park, Greater Accra",
    description: "A 500kWp solar array providing 40% energy cost reduction for a manufacturing facility using high-efficiency bifacial modules.",
    // Valid ID: Commercial Solar Panel Installation Guide
    youtubeId: "2c3QHuF6HWY", 
  },
  {
    id: 2,
    title: "Off-Grid Residential Solution",
    location: "Eco-Village, Kumasi",
    description: "Complete energy independence for a luxury estate featuring lithium-ion storage and smart load management systems.",
    // Valid ID: Residential Solar Panel Installation Drone Video
    youtubeId: "VPofVCwn_CM", 
  },
  {
    id: 3,
    title: "Sustainable Agriculture Powering",
    location: "Green Farms, Northern Region",
    description: "Solar-powered irrigation system allowing for year-round farming and automated water distribution.",
    // Valid ID: How to Build a Solar-Powered Irrigation System
    youtubeId: "vgwsF1DQIU8",
  },
];

export default function ProjectVideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % solarProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + solarProjects.length) % solarProjects.length);
  };

  const activeProject = solarProjects[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    // Switched to h-[100dvh] to lock perfectly to the screen height
    <section className="flex h-[100dvh] w-full flex-col justify-center overflow-hidden bg-slate-50 p-4 font-sans md:p-8 lg:p-12">
      {/* Added h-full and flex-col to allow inner content to stretch */}
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        
        {/* Header - shrink-0 guarantees this doesn't compress */}
        <div className="mb-4 flex shrink-0 items-end justify-between md:mb-8">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs">
              Project Showcase
            </span>
            <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">Featured Installations</h2>
          </div>
          
          <div className="flex gap-2 pb-1 md:gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-400 hover:text-slate-600 active:scale-90 md:h-12 md:w-12"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-400 hover:text-slate-600 active:scale-90 md:h-12 md:w-12"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Dynamic Container: min-h-0 and flex-1 force it to fill exact remaining space perfectly */}
        <div className="relative min-h-0 w-full flex-1">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              // Removed absolute gap values, using percentages/flex to scale
              className="absolute inset-0 flex flex-col gap-4 md:flex-row md:gap-8"
            >
              {/* The Video Box - Scaled for aspect-ratio on mobile, flex-height on desktop */}
              <div className="relative w-full shrink-0 overflow-hidden rounded-2xl bg-black md:h-full md:w-3/5 md:rounded-3xl lg:w-2/3">
                {/* Fallback aspect ratio for mobile view */}
                <div className="absolute inset-0 pb-[56.25%] md:pb-0">
                  <iframe
                    className="absolute inset-0 h-full w-full object-cover"
                    src={`https://www.youtube.com/embed/${activeProject.youtubeId}?rel=0&modestbranding=1`}
                    title={activeProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Project Details - Allowed to fill remaining space */}
              <div className="flex flex-1 flex-col justify-center px-2 py-2 md:px-6 md:py-4">
                <div className="mb-2 flex items-center gap-2 text-slate-600 md:mb-4">
                  <PlayCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-xs font-bold uppercase tracking-tight md:text-sm">{activeProject.location}</span>
                </div>
                
                <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 md:mb-4 md:text-3xl lg:text-3xl">
                  {activeProject.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-600 md:text-base lg:text-sm">
                  {activeProject.description}
                </p>

                <div className="mt-4 flex items-center gap-3 md:mt-8 md:gap-4">
                    <span className="font-mono text-xs font-bold text-slate-400 md:text-sm">
                      0{currentIndex + 1} / 0{solarProjects.length}
                    </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
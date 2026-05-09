"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Sample Data ---
const teamMembers = [
  {
    id: 1,
    name: "ANDREW DABO",
    role: "MANAGING DIRECTOR",
    description:
      "Leads the company's strategic direction and oversees the delivery of reliable, high-quality solar energy solutions across residential, commercial, and industrial sectors.",
    image:
      "/images/t-1.jpg",
  },
  {
    id: 2,
    name: "DERRICK OSEI BONSU",
    role: "PROJECT MANAGER",
    description:
      "Manages solar installation projects from inception to completion, ensuring timely delivery, strict quality control, and complete client satisfaction.",
    image:
      "/images/t-2.jpg",
  },
  {
    id: 3,
    name: "KINGSLEY OSEI",
    role: "DIRECTOR, FINANCE",
    description:
      "Oversees financial strategy, budgeting, and corporate investments to ensure sustainable growth and operational stability.",
    image:
      "/images/t-3.jpg",
  },
  {
    id: 4,
    name: "SARAH MENSAH",
    role: "HEAD OF ENGINEERING",
    description:
      "Directs the engineering team in designing efficient, scalable, and innovative solar solutions tailored for complex requirements.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "MICHAEL TETTEH",
    role: "LEAD TECHNICIAN",
    description:
      "Heads the on-site technical operations, ensuring all solar hardware is installed safely and optimized for peak performance.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next (slide left), -1 for Prev (slide right)

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Keep 1 item completely unmounted at all times to trigger the exit animation cleanly.
  // This prevents the active card from flying to the right edge of the queue.
  const maxVisible = Math.max(1, teamMembers.length - 1); 
  const visibleMembers = Array.from({ length: maxVisible }).map((_, i) => {
    return teamMembers[(currentIndex + i) % teamMembers.length];
  });

  return (
    <section className="flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-white px-6 py-6 font-sans ">
      <div className="mx-auto flex w-full  flex-col justify-center gap-6 md:gap-8">
        
        {/* Header Section */}
        <div className="  flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase md:text-sm">
            Our Team
          </span>
          
          {/* Navigation Controls */}
          <div className="flex gap-3 md:gap-4 z-10">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 active:scale-90 md:h-12 md:w-12"
              aria-label="Previous Team Member"
            >
              <ChevronLeft size={20} strokeWidth={2} className="md:h-6 md:w-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 active:scale-90 md:h-12 md:w-12"
              aria-label="Next Team Member"
            >
              <ChevronRight size={20} strokeWidth={2} className="md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex h-[60vh] min-h-[500px] max-h-[600px] w-full items-end gap-3 overflow-hidden md:gap-5">
          {/* popLayout mode instantly removes exiting items from the document flow, allowing remaining elements to snap into layout effortlessly */}
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleMembers.map((member, index) => {
              const isActive = index === 0;

              return (
                <motion.div
                  key={member.id}
                  layout
                  // Slides out of viewport (-400px or +400px) instead of jumping to the queue end
                  initial={{ opacity: 0, x: direction === 1 ? 200 : -200, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction === 1 ? -400 : 400, scale: 0.9 }}
                  transition={{ type: "spring", damping: 28, stiffness: 200 }}
                  onClick={() => {
                    if (!isActive) {
                      const originalIndex = teamMembers.findIndex((m) => m.id === member.id);
                      setDirection(1); 
                      setCurrentIndex(originalIndex);
                    }
                  }}
                  className={`group relative shrink-0 origin-bottom overflow-hidden rounded-[1.5rem] shadow-xl md:rounded-[2rem] ${
                    isActive 
                      ? "h-full w-full cursor-default md:w-[35%]" 
                      : "hidden h-[75%] w-[25%] cursor-pointer md:block opacity-90 transition-opacity hover:opacity-100" 
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover object-[center_15%] transition-all duration-700 ease-out ${
                      !isActive ? "group-hover:scale-105 saturate-50 group-hover:saturate-100" : "scale-100 saturate-100"
                    }`}
                    priority={isActive}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                    isActive 
                      ? "from-black/90 via-black/20 to-transparent opacity-100" 
                      : "from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100"
                  }`} />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 text-white md:p-8">
                    <motion.h3 
                      layout="position"
                      className={`font-semibold tracking-wide ${
                        isActive ? "text-xl md:text-2xl lg:text-3xl" : "text-base md:text-lg"
                      }`}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      layout="position"
                      className={`mt-1 font-medium text-white/80 ${
                        isActive ? "text-xs md:text-sm" : "text-[11px]"
                      }`}
                    >
                      {member.role}
                    </motion.p>
                    
                    {/* Detailed Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl text-[13px] leading-relaxed text-slate-200 md:text-base">
                            {member.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
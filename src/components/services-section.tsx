"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// --- Data ---
const services: Service[] = [
  {
    id: "01",
    title: "Solar System Design & Consultation",
    description: "Tailored solar solutions built around your energy needs, budget, and environment. We analyze your infrastructure to design the most efficient array possible.",
    imageUrl: "/images/stock/w-14.jpeg",
  },
  {
    id: "02",
    title: "Energy Audits",
    description: "Comprehensive energy audits to identify waste, project potential savings, and optimize your overall power consumption architecture.",
    imageUrl: "/images/stock/w-2.jpeg",
  },
  {
    id: "03",
    title: "Backup Power Solutions",
    description: "Robust battery storage and hybrid inverter setups ensuring zero downtime and complete energy independence during grid failures.",
    imageUrl: "/images/stock/w-16.jpeg",
  },
  {
    id: "04",
    title: "Solar Installation",
    description: "Expert deployment by certified engineers, ensuring optimal panel placement, secure mounting, and seamless grid integration.",
    imageUrl: "/images/stock/w-1.jpeg",
  },
  {
    id: "05",
    title: "Maintenance & Repairs",
    description: "Ongoing monitoring, preventative maintenance, and rapid-response repair services to keep your system operating at peak efficiency year-round.",
    imageUrl: "/images/stock/w-9.jpeg",
  },
  {
    id: "06",
    title: "Electrical Engineering Services",
    description: "End-to-end electrical design, load balancing, and custom circuitry planning for complex commercial and residential energy networks.",
    imageUrl: "/images/stock/w-20.jpeg",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="w-full bg-white px-6 py-24 font-sans text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:grid md:grid-cols-[.5fr_2fr] md:gap-16 lg:gap-24">
        
        {/* Left Column: Number Indicator */}
        <div className="hidden md:block w-12 pt-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeService.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-medium text-slate-800"
            >
              {activeService.id}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Right Column: Main Content */}
        <div className="flex flex-1 flex-col">
          
          {/* Dynamic Section Header */}
          <div className="mb-8 min-h-[40px]">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeService.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-2xl font-medium tracking-tight text-slate-900 md:text-3xl"
              >
                {activeService.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Hero Image Container */}
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm lg:aspect-[21/9]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                // Premium easing curve for a polished, professional feel
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
                className="absolute inset-0"
              >
                <Image
                  src={activeService.imageUrl}
                  alt={activeService.title}
                  fill
                  priority
                  className="object-cover object-[center_30%]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Interactive Area */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left: Interactive List */}
            <div className="flex flex-col lg:col-span-7">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-center justify-between border-b py-4 transition-all duration-300 ease-out focus:outline-none ${
                      isActive 
                        ? "border-slate-800 text-slate-900" 
                        : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700"
                    }`}
                    aria-expanded={isActive}
                  >
                    <span className={`text-base tracking-tight transition-all ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}>
                      {service.title}
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`transition-all duration-300 ${
                        isActive 
                          ? "translate-x-1 -translate-y-1 text-slate-900" 
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Description */}
            <div className="pt-2 lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-sm leading-relaxed text-slate-600"
                >
                  {activeService.description}
                </motion.p>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
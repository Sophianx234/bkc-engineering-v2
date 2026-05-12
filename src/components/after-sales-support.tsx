"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SupportTab {
  id: string;
  title: string;
  description: string;
  image: string;
}

const supportTabs: SupportTab[] = [
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Real-time performance tracking to detect and resolve issues quickly.",
    image: "/images/stock/w-5.jpeg",
  },
  {
    id: "repairs",
    title: "Repairs",
    description: "On-site technical support and hardware replacement to minimize downtime.",
    image: "/images/stock/h-2.jpeg",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Scheduled cleaning and system health checks to ensure peak efficiency.",
    image: "/images/stock/w-20.jpeg",
  },
  {
    id: "warranty",
    title: "Warranty",
    description: "Comprehensive coverage for panels and inverters with hassle-free claims.",
    image: "/images/stock/h-1.jpeg",
  },
  {
    id: "support",
    title: "Customer Support",
    description: "Dedicated account managers available 24/7 for all your energy queries.",
    image: "https://images.pexels.com/photos/7689735/pexels-photo-7689735.jpeg?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function AfterSalesSupport() {
  const [activeTab, setActiveTab] = useState(supportTabs[0]);

  return (
    <section className="w-full overflow-hidden bg-[#0B1121] px-6 py-20 md:py-24 font-sans text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col items-start justify-between gap-4 md:flex-row">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            After Installation, <br className="hidden sm:block" /> We Don’t Disappear
          </motion.h2>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-slate-500 shrink-0">
            After-sales Support
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Navigation List & Mobile Accordion */}
          <div className="flex flex-col lg:col-span-4">
            {supportTabs.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <div key={tab.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`group flex items-center justify-between border-b py-4 sm:py-5 text-left transition-all duration-300 ${
                      isActive ? "border-white text-white" : "border-slate-800 text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-medium">{tab.title}</span>
                    <ArrowUpRight 
                      size={20} 
                      className={`transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "translate-x-[-10px] opacity-0 group-hover:opacity-50"}`} 
                    />
                  </button>

                  {/* MOBILE ONLY: Accordion Description */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden"
                      >
                        <p className="py-4 text-[15px] leading-relaxed text-slate-300">
                          {tab.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Content & Stacked Image Gallery */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-8 sm:gap-10">
              
              {/* DESKTOP ONLY: Description */}
              <div className="hidden lg:block min-h-[60px]">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-md text-lg text-slate-300"
                  >
                    {activeTab.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Image Stack Effect */}
              {/* Scaled height for mobile (280px) up to desktop (400px) */}
              <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] w-full">
                
                {/* Background Stacked Images (Blurred) */}
                <div className="absolute right-0 top-6 sm:top-10 h-[200px] sm:h-[300px] w-[180px] sm:w-[250px] translate-x-4 overflow-hidden rounded-3xl opacity-20 blur-sm grayscale transition-opacity duration-500">
                  <Image src={supportTabs[(supportTabs.indexOf(activeTab) + 1) % supportTabs.length].image} alt="Next support" fill className="object-cover" />
                </div>
                <div className="absolute right-6 sm:right-10 top-3 sm:top-5 h-[220px] sm:h-[320px] w-[200px] sm:w-[280px] translate-x-8 overflow-hidden rounded-3xl opacity-40 blur-[2px] grayscale transition-opacity duration-500">
                  <Image src={supportTabs[(supportTabs.indexOf(activeTab) + 2) % supportTabs.length].image} alt="Future support" fill className="object-cover" />
                </div>
                
                {/* Main Focused Image Box */}
                <div className="relative z-10 h-full w-full max-w-[500px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl bg-slate-900">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeTab.id}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <Image 
                        src={activeTab.image} 
                        alt={activeTab.title} 
                        fill 
                        priority
                        className="object-cover" 
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
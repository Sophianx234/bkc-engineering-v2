"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  // Framer Motion variants for staggered text reveal
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative flex min-h-[100dvh] sm:pt-24 w-full flex-col justify-between overflow-hidden bg-zinc-950 font-sans text-white pt-24 ">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/h-1.jpg" // TODO: Add your image to the /public folder
          alt="Solar panel array at sunset"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-grow flex-col justify-center px-6 md:px-12 lg:px-16 mt-8 md:mt-0">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
          }}
          className="max-w-4xl"
        >
          {/* Responsive Typography: Scales from 4xl on mobile to 7xl on desktop */}
          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-6xl  font-bold leading-[1.1] tracking-tight">
            We Are More Than <br className="hidden md:block" />
            Energy Providers. <span className="text-yellow-400">We <br className="hidden md:block" />
            Are Your Power Partner!</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="mt-4 md:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            Reliable solar energy systems that reduce costs, ensure energy independence, 
            and support sustainable growth.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-8 sm:mb-3 ">
             <Link 
              href="/services" 
              className="group inline-flex  items-center gap-4 rounded-full border border-white/30 bg-white/20 py-2 pl-6 pr-2 text-sm font-semibold backdrop-blur-lg transition-all hover:bg-white/30"
            >
              Our Services
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Stats Section (Bottom Left Anchor) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="relative z-10 self-start w-full sm:w-auto rounded-tr-none sm:rounded-tr-[2.5rem] bg-white px-6 py-8 md:px-10 md:py-8 text-black"
      >
        <div className="flex flex-row  gap-3 sm:gap-10 md:flex-nowrap md:items-center md:gap-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black tracking-tight">6+</span>
            <span className="mt-1 md:mt-2 text-[10px] md:text-sm font-medium text-gray-600">Core Solar Services</span>
          </div>
          
          {/* Divider */}
          <div className="hidden h-14 w-px bg-gray-300 md:block"></div>
          
          {/* Stat 2 */}
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl font-black tracking-tight">60kW+</span>
            <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-600">Systems Installed</span>
          </div>

          {/* Divider */}
          <div className="hidden h-14 w-px bg-gray-300 md:block"></div>
          
          {/* Stat 3 */}
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black tracking-tight">100kWh+</span>
            <span className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-gray-600">Energy Storage</span>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
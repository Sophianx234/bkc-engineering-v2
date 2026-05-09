"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



type heroxProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  titleSecondary?: string;
}


function HeroX({ backgroundImage, title, subtitle, titleSecondary }: heroxProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };


  return (
    <div className="relative pt-28 flex h-dvh w-full overflow-hidden flex-col justify-between overflow-hidden  font-sans text-white ">
      
      {/* Background Image & Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Dark solar panel array"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        {/* Radial gradient creates the centered spotlight effect over the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50  to-black/50" />
      </div>

      

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-grow flex-col items-center justify-center px-6 text-center md:px-12 lg:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col items-center"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-6xl"
          >
            {title}
            <br />
            {titleSecondary && <span className="text-yellow-400">{titleSecondary}</span>}
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants} 
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            {subtitle}
          </motion.p>

          {/* Action Buttons */}
          {!titleSecondary && (
            <motion.div 
              variants={itemVariants} 
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            >
              {/* Primary Solid Button */}
              <Link 
              href={`#view-${title.split(" ")[1].toLowerCase()}`} 
              className="group flex items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
            >
              View {title.split(" ")[1]} {/* Extracts the first word for a more dynamic button label */}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:scale-105">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>

            {/* Secondary Glass Button */}
            <Link 
              href="#get-quote" 
              className="group flex items-center gap-4 rounded-full border border-white/30 bg-white/5 py-2 pl-6 pr-2 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Get a Quote
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 transition-transform group-hover:scale-105">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>)}
        </motion.div>
      </main>
      
      {/* Spacer to push content exactly to the center */}
      <div className="h-24 md:h-32" />
    </div>
  );
}
 

export default HeroX

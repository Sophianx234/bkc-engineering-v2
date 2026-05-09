"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Settings } from "lucide-react";

const tags = [
  "#TimelyDelivery",
  "#TailoredSystems",
  "#ReliableSupport",
  "#QualitySolutions",
  "#SustainabilityFocus",
  "#Expertise&Professionalism",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function BenefitsSection() {
  return (
    // min-h-[100dvh] + flex col centering ensures it fits the screen height perfectly
    <section className="flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-white px-6 py-8 font-sans text-slate-900 md:px-12 lg:px-24">
      
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col gap-2 md:grid md:grid-cols-[1.2fr_2fr] md:items-end md:gap-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-widest text-slate-400 md:text-xs"
          >
            Your Benefits
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-3xl"
          >
            We promote environmentally responsible solutions that support a sustainable and <br className="hidden lg:block" /> energy-secure future.
          </motion.h2>
        </div>

        {/* Cards Grid - Bounded height so it doesn't break the viewport */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid min-h-[350px] grid-cols-1 gap-4 md:grid-cols-[1.2fr_2fr] md:gap-6 lg:h-[45vh]"
        >
          
          {/* Left Card: Our Vision */}
          <motion.div 
            variants={itemVariants}
            className="group relative  w-full overflow-hidden rounded-[2rem] bg-slate-800 shadow-xl md:h-full"
          >
            <Image
              src="/images/e-1.png"
              alt="Engineer overlooking a modern solar farm"
              fill
              sizes=""
              className="object-cover transition-transform duration-1000 ease-out "
            />
            
            {/* Top Right Glass Icon */}
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10  backdrop-blur-md transition-all group-hover:bg-white/20">
              <Eye className="text-white" size={18} />
            </div>

            {/* Bottom Glass Text Panel */}
            <div className="absolute bottom-4 left-6  ">
              <h3 className="mb-1.5 text-xl font-bold text-white lg:text-3xl">Our Vision</h3>
              <p className="max-w-[280px] text-lg leading-relaxed text-white/90">
                To lead the future of sustainable energy through innovation, excellence, and impact.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Technical Expertise */}
          <motion.div 
            variants={itemVariants}
            className="relative flex h-full flex-col justify-between rounded-[2rem] bg-[#0B1121] p-6 shadow-xl lg:p-10"
          >
            {/* Top Right Glass Icon */}
            <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] backdrop-blur-md">
              <Settings className="text-white/60" size={18} />
            </div>

            <div className="mt-8 lg:mt-6">
              <p className="max-w-xl text-lg font-medium leading-relaxed text-white lg:text-2xl lg:leading-snug">
                Combined technical expertise, innovation, and customer commitment for delivering solar solutions you can rely on.
              </p>
            </div>

            {/* Glass Hashtag Pills */}
            <div className="mt-6 flex flex-wrap gap-2 lg:mt-8">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium tracking-wide text-slate-300 shadow-sm backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white lg:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Partners Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-6 lg:gap-8"
        >
          <div className="hidden h-px flex-1 bg-slate-200 md:block" />
          
          <div className="flex flex-wrap items-center justify-center gap-8  transition-all duration-500  lg:gap-12">
             
             {/* Logo 1 */}
             <div className="relative size-40 transition-transform  ">
                <Image src="/images/jinko.png" alt="Jinko Solar Logo" fill className="object-contain"  />
             </div>
             
             {/* Logo 2 */}
             <div className="relative size-40 transition-transform ">
                <Image src="/images/deye.png" alt="Deye Logo" fill className="object-contain" sizes="" />
             </div>
             
             {/* Logo 3 */}
             <div className="relative size-40 transition-transform  ">
                <Image src="/images/galaxy.jpg" alt="Galaxy Energy Logo" fill className="object-contain"  />
             </div>

          </div>

          <div className="hidden h-px flex-1 bg-slate-200 md:block" />
        </motion.div>

      </div>
    </section>
  );
}
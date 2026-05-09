"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const features = [
  "Collaborative Energy Planning",
  "Flexible Systems Tailored to Growth",
  "Transparent, Data-Driven Results",
];

// --- Animation Variants ---
const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ApproachSection() {
  return (
    // subtle off-white background matching the image
    <section className="w-full bg-[#FAFAFC] px-6 py-20 font-sans md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Right "Our Approach" Label */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-end lg:mb-16"
        >
          <span className="text-sm font-semibold tracking-wide text-slate-500">
            Our Approach
          </span>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Content */}
          <motion.div 
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.h2 
              variants={fadeUpItem}
              className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl"
            >
              Smart Energy Solutions <br className="hidden md:block" />
              Built Around Your Needs
            </motion.h2>
            
            <motion.p 
              variants={fadeUpItem}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-600 md:text-base"
            >
              We combine technical expertise, collaboration, and long-term planning
              to deliver reliable solar systems that create measurable impact.
            </motion.p>

            {/* Feature List */}
            <motion.div variants={fadeUpContainer} className="mt-10 flex flex-col gap-5">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeUpItem}
                  className="flex items-center gap-4 group"
                >
                  {/* Icon Box */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <Sun size={20} className="text-slate-700" strokeWidth={1.5} />
                  </div>
                  {/* Text */}
                  <span className="text-sm font-medium text-slate-600 md:text-[15px]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            {/* The wrapper handles the rounded corners and aspect ratio */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xs md:aspect-[16/11]">
              <Image
                src="/images/e-6.jpg"
                alt="Engineers reviewing plans at construction site"
                fill
                
                className="object-cover transition-transform duration-[1.5s] ease-out "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1121] px-6 pb-8 pt-12 font-sans text-white md:px-12 lg:px-24 lg:pt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Top CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16 flex w-full flex-col justify-center overflow-hidden rounded-[2rem] bg-slate-800 px-6 py-12 shadow-2xl md:px-16 md:py-20 lg:py-32"
        >
          {/* Background Image */}
          <Image
            src="/images/e-2.jpg"
            alt="Engineer inspecting solar panels"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121]/95 via-[#0B1121]/70 to-[#0B1121]/30 sm:to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s Power Your Future
            </h2>
            <p className="mb-8 text-sm text-slate-300 sm:text-base md:text-lg">
              Allow us to set you on a path of renewable energy!
            </p>
            <Link 
              href="#contact" 
              className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 py-2 pl-6 pr-2 text-sm font-medium backdrop-blur-md transition-all hover:bg-white hover:text-[#0B1121] active:scale-95"
            >
              Get Started
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1121] transition-transform group-hover:scale-110">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Footer Navigation Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* Column 1: Brand & Mission - Full width on mobile */}
          <motion.div variants={itemVariants} className="flex flex-col col-span-2 lg:col-span-4">
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
              Expanding access to clean energy solutions while continuously improving service delivery and adopting advanced technologies.
            </p>
            <div className="relative flex h-20 w-36 items-center justify-center rounded-xl overflow-hidden bg-white p-2">
                <Image 
                  src='/images/logo.jpg' 
                  alt="BKC Logo" 
                  fill 
                  className="object-contain p-2"
                />
            </div>
          </motion.div>

          {/* Column 2: Company Links - Half width on mobile */}
          <motion.div variants={itemVariants} className="flex flex-col lg:col-span-2 lg:col-start-6">
            <h3 className="mb-6 text-base font-medium tracking-wide text-white uppercase opacity-80">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><Link href="#home" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link href="#about" className="transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="#projects" className="transition-colors hover:text-white">Projects</Link></li>
              <li><Link href="#services" className="transition-colors hover:text-white">Services</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Support Links - Half width on mobile */}
          <motion.div variants={itemVariants} className="flex flex-col lg:col-span-2">
            <h3 className="mb-6 text-base font-medium tracking-wide text-white uppercase opacity-80">Support</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><Link href="#story" className="transition-colors hover:text-white">Our Story</Link></li>
              <li><Link href="#team" className="transition-colors hover:text-white">Our Team</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Info - Full width on mobile to prevent email overflow */}
          <motion.div variants={itemVariants} className="flex flex-col col-span-2 lg:col-span-3">
            <h3 className="mb-6 text-base font-medium tracking-wide text-white uppercase opacity-80">Reach Us</h3>
            <ul className="flex flex-col gap-5 text-sm text-slate-400">
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-white shrink-0" />
                <a href="tel:+233547957459" className="transition-colors hover:text-white">(+233) 54 795 7459</a>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-white shrink-0 mt-0.5" />
                {/* break-all prevents the long email from pushing the footer width */}
                <a href="mailto:kcengineering10@gmail.com" className="transition-colors hover:text-white break-all">
                  kcengineering10@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={18} className="text-white shrink-0" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Legal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center justify-between border-t border-slate-800/50 pt-8 text-xs text-slate-500 md:flex-row md:text-sm"
        >
          <p className="mb-4 md:mb-0 text-center">BKC Engineering Co. &copy; 2026</p>
          <div className="flex gap-6">
            <Link href="#terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="#privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
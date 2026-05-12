"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, ArrowUpRight } from "lucide-react";

// --- Types ---
interface CoreService {
  id: string;
  title: string;
  overlayText: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  features: string[];
}

// --- Data Parsed Directly From Your Images ---
const servicesData: CoreService[] = [
  {
    id: "01",
    title: "Solar Design & Consultation",
    overlayText: "Tailored solar solutions built around your energy needs, budget, and environment.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "/images/stock/h-4.jpeg",
    features: [
      "Energy needs assessment",
      "Site evaluation & feasibility analysis",
      "System sizing and optimisation",
      "Cost estimation and planning",
    ],
  },
  {
    id: "02",
    title: "Energy Audits",
    overlayText: "We analyze your energy consumption to identify inefficiencies and reduce costs.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "/images/stock/w-16.jpeg",
    features: [
      "Energy usage analysis",
      "Identification of energy waste",
      "Efficiency improvement recommendations",
      "Cost-saving strategies",
    ],
  },
  {
    id: "03",
    title: "Backup Power Solutions",
    overlayText: "Ensure uninterrupted power supply with reliable backup systems for homes and businesses.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "/images/stock/w-10.jpeg",
    features: [
      "Battery storage solutions",
      "Hybrid inverter systems",
      "Power outage protection",
      "Seamless system integration",
    ],
  },
  {
    id: "04",
    title: "Solar Installation",
    overlayText: "Professional installation of high-quality solar systems for maximum efficiency and durability.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Residential & commercial installations",
      "High-performance solar panels",
      "Safe and compliant setup",
      "End-to-end system deployment",
    ],
  },
  {
    id: "05",
    title: "Electrical Engineering Services",
    overlayText: "Comprehensive electrical solutions delivered to meet industry standards and client requirements.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    features: [
      "Electrical system design",
      "Installation and wiring",
      "System upgrades",
      "Safety and compliance checks",
    ],
  },
  {
    id: "06",
    title: "Maintenance & Repairs",
    overlayText: "We keep your system operating at peak performance with regular maintenance and fast repairs.",
    ctaText: "Request Service",
    ctaLink: "/contact",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Routine system inspections",
      "Preventive maintenance",
      "Fault detection and repair",
      "Performance optimization",
    ],
  },
];

// --- Reusable Child Component ---
const ServiceRow = ({ service, index }: { service: CoreService; index: number }) => {
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 md:mb-24 flex flex-col w-full"
    >
      {/* 
          Top Header: ID & Title 
          Typographic Fix: Left-aligned stack on mobile, horizontal split on desktop.
          This creates a strong, readable margin line.
      */}
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row md:items-center justify-start md:justify-between text-slate-900 gap-2 md:gap-4 text-left">
        <span className="text-sm font-bold tracking-widest  uppercase lg:text-base shrink-0">
          Service {service.id}
        </span>
        <h3 className="text-2xl font-bold lg:text-3xl text-slate-900 leading-tight md:text-right">
          {service.title}
        </h3>
      </div>

      {/* Two-Column Body Layout */}
      <div className={`grid grid-cols-1 gap-8 md:gap-12 ${isImageLeft ? "lg:grid-cols-[2fr_1fr]" : "lg:grid-cols-[1fr_2fr]"} lg:gap-16`}>
        
        {/* Features List Column */}
        <div className={`flex flex-col justify-center ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <ul className="flex flex-col gap-4 sm:gap-6 w-full">
            {service.features.map((feature, i) => (
              <li 
                key={i} 
                // Typographic Fix: Strict flex-row alignment so the icons act as perfect bullet points.
                className="flex flex-row items-center gap-4 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100  shadow-sm">
                  {/* Brand color added to the icon for premium feel */}
                  <Sun size={18} className=" text-slate-600" strokeWidth={2} />
                </div>
                <span className="text-[15px] font-medium text-slate-600 md:text-base leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Display Column */}
        <div className={`relative w-full h-[280px] sm:h-[350px] lg:h-[380px] overflow-hidden rounded-[2rem] bg-slate-800 shadow-lg ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
          />
          
          {/* Dark Overlay for Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 sm:p-8 text-center transition-colors duration-500 hover:bg-black/40">
            <p className="mb-6 max-w-sm text-sm sm:text-[15px] font-medium leading-relaxed text-slate-200">
              {service.overlayText}
            </p>
            
            <Link 
              href={service.ctaLink} 
              className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              {service.ctaText}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-black group-hover:text-white shrink-0">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// --- Main Exported Component ---
export default function CoreServicesSection() {
  return (
    <section id="view-services" className="w-full bg-[#FAFAFA] px-6 py-20 md:py-24 font-sans md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header with flanking lines */}
        <div className="mb-16 md:mb-20 flex items-center justify-center gap-4 sm:gap-6">
          <div className="h-[1px] flex-grow bg-slate-200" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2B3544] md:text-4xl whitespace-nowrap">
            Our Core Services
          </h2>
          <div className="h-[1px] flex-grow bg-slate-200" />
        </div>

        {/* Map through the data and call the reusable component exact number of times */}
        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
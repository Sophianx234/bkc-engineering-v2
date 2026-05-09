"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import ProjectItem from "./project-item";

// --- Types ---
interface Project {
  id: string;
  systemSize: string;
  location: string;
  imageUrl: string;
}

// --- Data ---
const projects: Project[] = [
  {
    id: "01",
    systemSize: "20kW system",
    location: "East Legon",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "02",
    systemSize: "60kW system",
    location: "Klagon",
    imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
  },
];

// --- Animation Variants ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsGallery() {
  return (
    <section className="w-full bg-[#0B1121] px-6 py-24 font-sans text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-6 text-3xl font-medium tracking-wide md:text-4xl"
          >
            Explore Our Projects
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <Link 
              href="#projects" 
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-[#0B1121]"
            >
              See All
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0B1121] transition-transform group-hover:scale-110 group-hover:bg-[#0B1121] group-hover:text-white">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Staggered Masonry-style Grid */}
        <div className="w-full">
          {projects.map((project, index) => {
            return (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
              />
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

// --- Sample Data ---
const teamMembers = [
  {
    id: 1,
    name: "ANDREW DABO",
    role: "MANAGING DIRECTOR",
    description: `Andrew Dabo is a dynamic and results-driven leader with a strong passion for renewable energy and sustainable development. As Managing Director of BKC Engineering, he provides strategic direction and oversees the company's growth and operations.\n\nWith extensive experience in solar power systems and energy solutions, Andrew has successfully led the delivery of high quality installations across residential, commercial, and industrial sectors. His leadership ensures that every project meets the highest standards of quality, safety, and efficiency.\n\nKnown for his vision and commitment to excellence, he drives innovation within the company while maintaining a strong focus on customer satisfaction. Andrew continues to position BKC Engineering as a trusted provider of reliable and sustainable energy solutions, contributing to a cleaner and more energy-secure future.`,
    image: "/images/prof-1.jpeg",
  },
  {
    id: 2,
    name: "DERRICK OSEI BONSU",
    role: "PROJECT MANAGER",
    description: `Derrick Osei Bonsu plays a key role in delivering BKC Engineering's solar projects from concept to completion. He is responsible for planning, coordinating, and overseeing all project activities to ensure successful execution.\n\nWith a strong understanding of solar technologies, project management, and budgeting, Derrick ensures that each installation is delivered safely, on time, and within scope. He works closely with engineers, technicians, suppliers, and clients to maintain seamless communication throughout every stage of the project.\n\nHis attention to detail, professionalism, and commitment to quality enable the company to consistently meet client expectations. Derrick's leadership supports BKC Engineering's mission to provide reliable, efficient, and sustainable energy solutions.`,
    image: "/images/prof-5.jpeg",
  },
  {
    id: 3,
    name: "KINGSLEY OSEI",
    role: "DIRECTOR, FINANCE AND ADMINISTRATION",
    description: `Kingsley Osei Bobie is a seasoned finance and administrative professional with a strong track record in financial planning, organizational management, and operational efficiency. He plays a critical role in ensuring the financial health and sustainability of BKC Engineering.\n\nKingsley oversees financial planning, budgeting, forecasting, and reporting to ensure all projects remain cost-effective and financially viable. Through careful analysis of costs, revenues, and investments, he supports strategic decision making and drives growth in the renewable energy sector.\n\nHe works closely with management, project teams, and stakeholders to maintain strong financial controls, ensure compliance, and manage risks effectively. With solid expertise in finance and the solar industry, Kingsley plays a key role in improving profitability and supporting BKC Engineering’s mission to deliver reliable, sustainable, and cost-effective energy solutions.`,
    image: "/images/prof-2.jpeg",
  },
  {
    id: 4,
    name: "JAMES BROWN ABROKWAH",
    role: "CHIEF ENGINEER",
    description: `James Brown Abrokwah serves as the technical lead at BKC Engineering, overseeing the design, development, and implementation of advanced solar energy systems. With deep expertise in photovoltaic systems, energy storage, and hybrid solutions, he ensures the delivery of efficient and high-performing installations.\n\nHe is responsible for all engineering processes, including system design, feasibility analysis, installation, and performance optimization. James ensures that all projects comply with both local and international engineering standards, guaranteeing safety, reliability, and durability.\n\nIn addition to technical oversight, he leads and mentors the engineering team, fostering a culture of innovation and continuous improvement. His ability to develop tailored energy solutions helps clients achieve maximum efficiency and long-term value from their systems.`,
    image: "/images/prof-4.jpeg",
  },
  {
    id: 5,
    name: "MICHAEL TETTE YEBOAH",
    role: "ENGINEER",
    description: `Michael Tetteh Yeboah is a dedicated engineer with a strong background in solar energy systems. He is responsible for the design, installation, and maintenance of our solar installations, ensuring they meet the highest standards of quality and performance.\n\nHis expertise in electrical systems and renewable energy technologies enables him to deliver innovative solutions that maximize efficiency and minimize environmental impact.`,
    image: "/images/prof-3.jpeg",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Lock body scroll when the modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const maxVisible = Math.max(1, teamMembers.length - 1);
  const visibleMembers = Array.from({ length: maxVisible }).map((_, i) => {
    return teamMembers[(currentIndex + i) % teamMembers.length];
  });

  return (
    <section className="flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-white px-6 py-16 font-sans">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-center gap-6 md:gap-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-2 text-xs font-bold tracking-widest text-yellow-400 uppercase md:text-sm">
              Our Team
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Meet The Engineers
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="z-10 flex gap-3 md:gap-4">
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
        <div className="relative flex h-[60vh] min-h-[500px] max-h-[650px] w-full items-end gap-3 overflow-hidden md:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleMembers.map((member, index) => {
              const isActive = index === 0;

              return (
                <motion.div
                  key={member.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: direction === 1 ? 200 : -200,
                    scale: 0.9,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction === 1 ? -400 : 400,
                    scale: 0.9,
                  }}
                  transition={{ type: "spring", damping: 28, stiffness: 200 }}
                  onClick={() => {
                    if (!isActive) {
                      const originalIndex = teamMembers.findIndex(
                        (m) => m.id === member.id,
                      );
                      setDirection(1);
                      setCurrentIndex(originalIndex);
                    } else {
                      setSelectedMember(member);
                    }
                  }}
                  className={`group relative shrink-0 origin-bottom overflow-hidden rounded-[1.5rem] shadow-xl md:rounded-[2rem] ${
                    isActive
                      ? "h-full w-full cursor-pointer md:w-[35%]"
                      : "hidden h-[75%] w-[25%] cursor-pointer md:block opacity-90 transition-opacity hover:opacity-100"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover object-[center_15%] transition-all duration-700 ease-out ${
                      !isActive
                        ? "group-hover:scale-105 saturate-50 group-hover:saturate-100"
                        : "scale-100 saturate-100 group-hover:scale-105"
                    }`}
                    priority={isActive}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                      isActive
                        ? "from-black/95 via-black/40 to-transparent opacity-100"
                        : "from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100"
                    }`}
                  />

                  {/* Content on Card */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 text-white md:p-8">
                    <motion.h3
                      layout="position"
                      className={`font-semibold tracking-wide ${
                        isActive
                          ? "text-2xl md:text-3xl lg:text-4xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.p
                      layout="position"
                      className={`mt-1 font-medium text-yellow-400 ${
                        isActive ? "text-sm tracking-wider uppercase md:text-sm" : "text-[11px]"
                      }`}
                    >
                      {member.role}
                    </motion.p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 16,
                          }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mb-6 line-clamp-2 text-[14px] leading-relaxed text-slate-300">
                            {member.description}
                          </p>
                          <button className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-[#04c453]">
                            Read Portfolio <ArrowRight size={16} />
                          </button>
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

      {/* ==========================================
          BIOGRAPHY SPLIT MODAL
          ========================================== */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 lg:p-8">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#020b14]/80 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex h-full w-full max-w-[1100px] flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-[24px] lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:text-slate-800 focus:outline-none md:right-6 md:top-6"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="relative h-[300px] w-full shrink-0 bg-slate-100 sm:h-[400px] lg:h-auto lg:w-[45%]">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              </div>

              {/* Right Side: Biography Text */}
              <div className="flex w-full flex-col overflow-y-auto p-6 sm:p-8 lg:w-[55%] lg:p-12 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-track]:bg-transparent">
                
                <span className="mb-2 w-fit rounded-sm bg-[#04c453] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
                  {selectedMember.role}
                </span>
                
                <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
                  {selectedMember.name}
                </h2>

                <div className="flex flex-col gap-5 text-slate-600">
                  {/* Clean up the text data by splitting double newlines into clean paragraphs */}
                  {selectedMember.description.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className={`text-[15px] leading-[1.8] md:text-[16px] ${
                        index === 0 
                          ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[54px] first-letter:font-black first-letter:leading-[0.8] first-letter:text-[#04c453]" 
                          : ""
                      }`}
                    >
                      {paragraph.replace(/\n/g, " ")}
                    </p>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
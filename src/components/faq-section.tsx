"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much can I save with solar energy?",
    answer: "Solar systems help reduce electricity bills significantly by generating your own power. Savings depend on your energy usage and system size, but over time, solar can lead to substantial cost reductions and long-term financial benefits.",
  },
  {
    question: "What happens if there is no sunlight or during power outages?",
    answer: "During cloudy days, panels still produce energy at lower efficiency. For power outages, a battery backup system (like our hybrid solutions) ensures your home remains powered even when the grid is down.",
  },
  {
    question: "How long does installation take?",
    answer: "Typical residential installations take 2-4 days. Commercial projects vary based on scale, but we provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide maintenance and after-installation support?",
    answer: "Yes, we offer comprehensive 24/7 monitoring and scheduled maintenance packages to ensure your system continues to operate at peak performance for decades.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-6 py-24 font-sans text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
        
        {/* Left Column */}
        <div className="lg:col-span-5">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">FAQs</span>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Your Questions, <br /> Our Answers
          </h2>
          <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#0B1121] py-3 pl-8 pr-3 text-sm font-medium text-white transition-all hover:bg-slate-800">
            Ask More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1121]">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7">
          <div className="flex flex-col border-t border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-slate-600"
                  >
                    <span className={`text-lg font-semibold tracking-tight transition-colors ${isOpen ? "text-slate-900" : "text-slate-600"}`}>
                      {faq.question}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center">
                      {isOpen ? <Minus size={20} className="text-slate-900" /> : <Plus size={20} className="text-slate-400" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-base leading-relaxed text-slate-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
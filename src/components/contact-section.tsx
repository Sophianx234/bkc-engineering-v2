"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted", formData);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 font-sans text-slate-900 md:px-12 lg:px-24">
      
      {/* Background Lighting Effect (Subtle for light mode) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 opacity-70 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mb-16 flex flex-col items-center text-center lg:mb-24"
        >
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            Get in Touch
          </span>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Let's Power Your Next <br className="hidden md:block" /> Project Together
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Whether you need a full solar installation, an energy audit, or a complex electrical engineering solution, our team is ready to help you transition to sustainable energy.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Contact Cards */}
            <motion.div variants={fadeUpVariant} className="flex items-start gap-6 rounded-[2rem] bg-slate-50 p-8 border border-slate-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-slate-700">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-slate-900">Call Us</h3>
                <p className="mb-3 text-sm text-slate-500">Speak directly with our engineering consultants.</p>
                <a href="tel:+233547957459" className="text-base font-semibold text-slate-900 transition-colors hover:text-blue-600">
                  (+233) 54 795 7459
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex items-start gap-6 rounded-[2rem] bg-slate-50 p-8 border border-slate-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-slate-700">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-slate-900">Email Us</h3>
                <p className="mb-3 text-sm text-slate-500">We typically respond within 24 hours.</p>
                <a href="mailto:kcengineering10@gmail.com" className="text-base font-semibold text-slate-900 transition-colors hover:text-blue-600">
                  kcengineering10@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex items-start gap-6 rounded-[2rem] bg-slate-50 p-8 border border-slate-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-slate-700">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-slate-900">Visit Us</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  BKC Engineering Co.<br />
                  Accra, Greater Accra Region<br />
                  Ghana
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:col-span-7 lg:p-12 border border-slate-100"
          >
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-600">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-slate-900 focus:bg-white"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-600">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-slate-900 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-600">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+233 54 000 0000"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-slate-900 focus:bg-white"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-600">Service of Interest</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white appearance-none"
                  >
                    <option value="" disabled className="text-slate-400">Select a service</option>
                    <option value="Solar Installation">Solar Installation</option>
                    <option value="Energy Audit">Energy Audit</option>
                    <option value="Backup Power">Backup Power Solutions</option>
                    <option value="Maintenance">Maintenance & Repairs</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-600">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your energy needs..."
                  className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-slate-900 focus:bg-white"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to our privacy policy.
                </p>
                <button 
                  type="submit"
                  className="group flex items-center gap-4 rounded-full bg-[#0B1121] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                >
                  Send Message
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1121] transition-transform group-hover:scale-105">
                    <Send size={14} strokeWidth={2.5} className="-ml-0.5" />
                  </span>
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

// Centralized navigation data for clean mapping
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="absolute left-0 right-0 top-0 z-50">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex w-full items-center justify-between px-6 py-6 md:px-12 lg:px-16"
      >
        {/* Logo Glassmorphism Pill */}
        <Link 
          href="/" 
          className="relative z-50 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-lg transition-colors hover:bg-white/20"
        >
          <span className="font-bold tracking-widest text-white">BKC.</span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden items-center gap-10 text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 ${
                  isActive 
                    ? "font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                    : "font-medium text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Contact CTA & Mobile Toggle */}
        <div className="relative z-50 flex items-center gap-4">
          <Link 
            href="/contact" 
            className="group hidden items-center gap-3 rounded-full border border-white/40 bg-white/10 py-1.5 pl-6 pr-1.5 text-xs font-medium text-white backdrop-blur-lg transition-all hover:bg-white hover:text-black sm:flex"
          >
            Contact Us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-0 flex h-screen w-full flex-col bg-[#0B1121]/95 px-6 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`text-2xl tracking-tight transition-all ${
                      isActive 
                        ? "font-semibold text-white" 
                        : "font-medium text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Button */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-black transition-all hover:bg-gray-200"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
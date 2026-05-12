'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  X,
  BadgeCheck,
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

// --- HELPER FUNCTION TO RANDOMIZE IMAGES ---
const getRandomImages = (count: number) => {
  const allImages = [
    "/images/stock/p-1.jpeg", "/images/stock/p-2.jpeg", "/images/stock/p-3.jpeg", 
    "/images/stock/p-4.jpeg", "/images/stock/p-5.jpeg", "/images/stock/p-6.jpeg", 
    "/images/stock/p-7.jpeg", "/images/stock/p-8.jpeg"
  ];
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// --- MOCK PRODUCT DATA (25 Items - PRICES REMOVED) ---
// --- MOCK PRODUCT DATA (Your Official Portfolio) ---
const PRODUCTS = [
  {
    id: 1, 
    title: "Solar Panels", 
    category: "Solar Panels",
    shortDesc: "High-efficiency panels that capture sunlight from both the front and back for maximum yield.",
    description: "Our advanced solar panels are engineered to capture photons of suitable sunlight from both the front and back surfaces, significantly increasing your overall energy output. We offer a versatile range of capacities from 180W up to 615W to perfectly match the energy requirements of any residential, commercial, or industrial project.",
    features: [
      "180W to 615W capacity options", 
      "Bifacial technology for increased energy output", 
      "High photon capture efficiency", 
      "Durable design for extreme weather conditions"
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1677993355347-92715eae6806?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1614366502473-e54666693b44?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 2, 
    title: "Smart Hybrid Inverters", 
    category: "Inverters",
    shortDesc: "Advanced hybrid inverters ranging from 3.6KW to 100KW with smart load management.",
    description: "Our Hybrid Inverters (available in 3.6KW up to 100KW) are the brain of your energy system. They feature a battery-independent design, dual MPPT for maximum power point tracking, and built-in Wi-Fi so you can monitor your grid in real-time via Android or iOS. Engineered with strong protection features and a wide input voltage range.",
    features: [
      "Capacities from 3.6KW to 100KW", 
      "Dual outputs for smart load management", 
      "Built-in Wi-Fi for Android/iOS monitoring", 
      "Battery equalization and compatibility"
    ],
    images: [
      "/images/stock/p-3.jpeg",
      "/images/products/p-in-1.jpeg", 
      "/images/products/p-in-2.jpeg", 
    ]
  },
  {
    id: 3, 
    title: "Solar Batteries", 
    category: "Batteries",
    shortDesc: "High-efficiency, space-saving lithium-ion batteries with a 12-15 year lifespan.",
    description: "Experience reliable backup power with our advanced Lithium-Ion Technology. Offering 85%-95% efficiency with minimal energy loss, these batteries support a safe 70%-90% Depth of Discharge. The built-in Battery Management System (BMS) automatically protects against overcharging, short circuits, and temperature issues, ensuring improved safety and thermal stability.",
    features: [
      "3000-6000+ charge cycles (12-15 year lifespan)", 
      "Fast charging & space-saving design", 
      "85%-95% high efficiency storage", 
      "Built-in BMS (Battery Management System)"
    ],
    images: [
      "/images/products/p-b-3.jpeg", 
      "/images/products/p-b-2.jpeg", 
    ]
  },
  {
    id: 4, 
    title: "Solar Water Heaters", 
    category: "Thermal Solar",
    shortDesc: "Eco-friendly, cost-saving solar water heating systems available in multiple capacities.",
    description: "Drastically reduce your energy bills with our highly durable and low-maintenance solar water heaters. Designed to be eco-friendly and cost-saving, these systems feature backup heating compatibility ensuring you have a continuous hot water supply no matter the weather conditions.",
    features: [
      "100L, 150L, and 200L capacity options", 
      "Eco-friendly and cost-saving", 
      "Backup heating compatibility", 
      "High durability & low maintenance"
    ],
    images: [
      "/images/products/p-w.jpeg", 
    ]
  },
  
];

const ITEMS_PER_PAGE = 8;

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Pagination Logic
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = PRODUCTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (sectionRef.current) {
      const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  // Lock body scroll when the modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  // Image Slider Controls
  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1));
  };

  return (
    <section id='view-products' ref={sectionRef} className="w-full bg-[#f8f9fa] font-sans py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061d38] leading-[1.1] tracking-tight mb-4">
            Premium Solar Products
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[16px] max-w-2xl font-medium leading-relaxed">
            We partner with the world's leading manufacturers to bring you Tier-1 solar panels, intelligent inverters, and high-capacity storage.
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          <AnimatePresence mode="wait">
            {currentProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-[#061d38]">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-[#061d38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-[#061d38] rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Text Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[18px] sm:text-xl font-bold text-[#061d38] mb-2 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed mb-4 line-clamp-2">
                    {product.shortDesc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[14px] font-bold text-[#04c453] uppercase tracking-wider group-hover:text-[#061d38] transition-colors">
                      View Details
                    </span>
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-[#04c453] transition-colors" />
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="mt-auto flex items-center justify-center gap-2 sm:gap-4">
            
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors bg-white shadow-sm"
              aria-label="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#04c453] text-white shadow-md' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors bg-white shadow-sm"
              aria-label="Next Page"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        )}

      </div>

      {/* ==========================================
          PRODUCT QUICK-VIEW MODAL
          ========================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 lg:p-8">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#020b14]/80 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full sm:h-auto max-w-[1100px] sm:max-h-[90vh] bg-white sm:rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row z-10"
            >
              
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 hover:bg-gray-100 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-all duration-300 shadow-sm focus:outline-none"
              >
                <X size={20} />
              </button>

              {/* FIX: Added shrink-0 and border-b for mobile so the image slider doesn't absorb the scrolling space */}
              <div className="w-full lg:w-[50%] shrink-0 bg-[#f8f9fa] flex flex-col p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-200 mb-4 group shadow-sm shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <img 
                        src={selectedProduct.images[currentImageIndex]} 
                        alt={`${selectedProduct.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#04c453] hover:text-white"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#04c453] hover:text-white"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden shrink-0">
                    {selectedProduct.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative shrink-0 w-20 h-20 rounded-[8px] overflow-hidden border-2 transition-all duration-300 ${
                          currentImageIndex === index ? 'border-[#04c453] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* FIX: Added flex-1 and min-h-0 so the description perfectly scrolls on mobile */}
              <div className="w-full lg:w-[50%] p-6 sm:p-8 lg:p-12 flex flex-1 flex-col overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200">
                <span className="text-[#04c453] text-[12px] font-bold tracking-widest uppercase mb-2">
                  {selectedProduct.category}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061d38] tracking-tight mb-8 pb-6 border-b border-gray-100">
                  {selectedProduct.title}
                </h2>

                <h3 className="text-[16px] font-bold text-[#061d38] mb-3">Product Overview</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                <h3 className="text-[16px] font-bold text-[#061d38] mb-4">Key Specifications</h3>
                <ul className="flex flex-col gap-3 mb-10">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 text-[#04c453]">
                        <BadgeCheck size={18} />
                      </div>
                      <span className="text-gray-600 text-[15px] font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className="mt-auto w-full shrink-0 flex items-center justify-center gap-3 bg-[#061d38] hover:bg-[#04c453] text-white py-4 sm:py-5 px-8 font-bold text-[15px] uppercase tracking-wider transition-colors duration-300 rounded-sm shadow-md"
                >
                  <ShoppingCart size={20} />
                  Request Product
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
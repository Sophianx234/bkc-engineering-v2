'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Swapped to Lucide React icons
import { 
  ArrowRight, 
  ArrowLeft, 
  X,
  BadgeCheck,
  ShoppingCart
} from 'lucide-react';

// --- MOCK PRODUCT DATA ---
// --- MOCK PRODUCT DATA ---
const PRODUCTS = [
  {
    id: 1,
    title: "SunMax Pro 500W Panel",
    category: "Commercial Solar",
    price: "Request Quote",
    shortDesc: "High-efficiency monocrystalline panel designed for large-scale commercial roofs.",
    description: "The SunMax Pro 500W utilizes advanced half-cut cell technology to maximize energy output even in partially shaded conditions. Built with a robust aerospace-grade aluminum frame, it withstands extreme wind and snow loads, ensuring a 25-year lifespan of reliable energy generation.",
    features: [
      "21.5% Maximum Module Efficiency",
      "Half-cut cell architecture for shade tolerance",
      "PID Resistant & Salt-mist certified",
      "25-year linear power output warranty"
    ],
    images: [
      "/images/stock/p-4.jpeg",
      "/images/stock/p-1.jpeg",
      "/images/stock/p-7.jpeg"
    ]
  },
  {
    id: 2,
    title: "EcoGrid Smart Inverter",
    category: "Power Conversion",
    price: "$1,250.00",
    shortDesc: "Intelligent string inverter with real-time grid monitoring and app integration.",
    description: "Convert DC power to AC with industry-leading 99% efficiency. The EcoGrid Smart Inverter seamlessly integrates with your home Wi-Fi, allowing you to track energy production, grid export, and battery storage levels in real-time via our mobile application.",
    features: [
      "99% Peak Conversion Efficiency",
      "IP65 rated for outdoor installation",
      "Integrated Wi-Fi & Bluetooth monitoring",
      "Seamless battery storage integration"
    ],
    images: [
      "/images/stock/p-5.jpeg",
      "/images/stock/p-2.jpeg"
    ]
  },
  {
    id: 3,
    title: "Aura Home Battery 10kWh",
    category: "Energy Storage",
    price: "$5,400.00",
    shortDesc: "Sleek, wall-mounted lithium-ion battery to keep your home powered through the night.",
    description: "Store your excess solar energy during the day and power your home at night or during grid outages. The Aura Home Battery features a modular design, allowing you to stack up to 3 units for a massive 30kWh of backup power.",
    features: [
      "10kWh usable capacity per unit",
      "10-year unlimited cycle warranty",
      "Liquid thermal control system",
      "Automatic grid-outage switchover"
    ],
    images: [
      "/images/stock/p-8.jpeg",
      "/images/stock/p-3.jpeg"
    ]
  },
  {
    id: 4,
    title: "Titan Mounting Array",
    category: "Hardware",
    price: "Variable",
    shortDesc: "Heavy-duty ground and roof mounting brackets engineered for maximum stability.",
    description: "The foundation of any great solar system. Our Titan arrays are forged from galvanized steel and anodized aluminum, designed to tilt panels to the optimal sun angle while resisting corrosion for decades.",
    features: [
      "Adjustable tilt angles (15° to 45°)",
      "Anodized aluminum & galvanized steel",
      "Pre-assembled components for fast setup",
      "Wind load rating up to 150 mph"
    ],
    images: [
      "/images/stock/p-6.jpeg"
    ]
  }
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when the modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset image index when a new product is opened
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
    <section className="w-full bg-[#f8f9fa] font-sans py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#061d38] leading-[1.1] tracking-tight mb-4">
            Premium Solar Products
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[16px] max-w-2xl font-medium leading-relaxed">
            We partner with the world's leading manufacturers to bring you Tier-1 solar panels, intelligent inverters, and high-capacity storage.
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#061d38]">
                  {product.category}
                </div>
                {/* Overlay Hover Icon */}
                <div className="absolute inset-0 bg-[#061d38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-[#061d38] rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#061d38] mb-2 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4 line-clamp-2">
                  {product.shortDesc}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-extrabold text-[#04c453] text-[16px]">
                    {product.price}
                  </span>
                  <span className="text-[12px] font-bold text-[#061d38] uppercase tracking-wider group-hover:text-[#04c453] transition-colors">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ==========================================
          PRODUCT QUICK-VIEW MODAL
          ========================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 lg:p-8">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#020b14]/80 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              // Prevent clicks inside the modal from closing it
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full sm:h-auto max-w-[1100px] sm:max-h-[90vh] bg-white sm:rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row z-10"
            >
              
              {/* Close Button (Absolute Top Right) */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 hover:bg-gray-100 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-all duration-300 shadow-sm focus:outline-none"
              >
                <X size={20} />
              </button>

              {/* --- LEFT SIDE: IMAGE SLIDER --- */}
              <div className="w-full lg:w-[50%] bg-[#f8f9fa] flex flex-col p-4 sm:p-6 lg:p-8 border-r border-gray-100">
                
                {/* Main Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-200 mb-4 group shadow-sm">
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

                  {/* Slider Navigation Arrows (Only show if more than 1 image) */}
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

                {/* Thumbnails Row */}
                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
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

              {/* --- RIGHT SIDE: PRODUCT DETAILS --- */}
              <div className="w-full lg:w-[50%] p-6 sm:p-8 lg:p-12 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200">
                
                <span className="text-[#04c453] text-[12px] font-bold tracking-widest uppercase mb-2">
                  {selectedProduct.category}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061d38] tracking-tight mb-4">
                  {selectedProduct.title}
                </h2>
                
                <div className="text-2xl font-black text-[#04c453] mb-6 pb-6 border-b border-gray-100">
                  {selectedProduct.price}
                </div>

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

                {/* Call to Action Button */}
                <button className="mt-auto w-full flex items-center justify-center gap-3 bg-[#061d38] hover:bg-[#04c453] text-white py-4 sm:py-5 px-8 font-bold text-[15px] uppercase tracking-wider transition-colors duration-300">
                  <ShoppingCart size={20} />
                  Add to Quote Request
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
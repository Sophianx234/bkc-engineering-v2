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
// Randomizes your local images for a realistic product feel
const getRandomImages = (count: number) => {
  const allImages = [
    "/images/stock/p-1.jpeg", "/images/stock/p-2.jpeg", "/images/stock/p-3.jpeg", 
    "/images/stock/p-4.jpeg", "/images/stock/p-5.jpeg", "/images/stock/p-6.jpeg", 
    "/images/stock/p-7.jpeg", "/images/stock/p-8.jpeg"
  ];
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// --- MOCK PRODUCT DATA (25 Items) ---
const PRODUCTS = [
  {
    id: 1, title: "SunMax Pro 500W Panel", category: "Commercial Solar", price: "Request Quote",
    shortDesc: "High-efficiency monocrystalline panel designed for large-scale commercial roofs.",
    description: "The SunMax Pro 500W utilizes advanced half-cut cell technology to maximize energy output even in partially shaded conditions.",
    features: ["21.5% Maximum Efficiency", "Half-cut cell architecture", "PID Resistant", "25-year warranty"],
    images: ["/images/stock/p-1.jpeg", "/images/stock/p-4.jpeg"]
  },
  {
    id: 2, title: "EcoGrid Smart Inverter", category: "Power Conversion", price: "$1,250.00",
    shortDesc: "Intelligent string inverter with real-time grid monitoring and app integration.",
    description: "Convert DC power to AC with industry-leading 99% efficiency. Seamlessly integrates with your home Wi-Fi.",
    features: ["99% Peak Conversion Efficiency", "IP65 rated", "Wi-Fi & Bluetooth monitoring", "Seamless battery integration"],
    images: ["/images/stock/p-2.jpeg", "/images/stock/p-8.jpeg"]
  },
  {
    id: 3, title: "Aura Home Battery 10kWh", category: "Energy Storage", price: "$5,400.00",
    shortDesc: "Sleek, wall-mounted lithium-ion battery to keep your home powered through the night.",
    description: "Store your excess solar energy during the day and power your home at night or during grid outages.",
    features: ["10kWh usable capacity", "10-year cycle warranty", "Liquid thermal control", "Grid-outage switchover"],
    images: ["/images/stock/p-3.jpeg", "/images/stock/p-7.jpeg"]
  },
  {
    id: 4, title: "Titan Mounting Array", category: "Hardware", price: "Variable",
    shortDesc: "Heavy-duty ground and roof mounting brackets engineered for maximum stability.",
    description: "The foundation of any great solar system. Forged from galvanized steel and anodized aluminum.",
    features: ["Adjustable tilt angles", "Galvanized steel", "Pre-assembled components", "150 mph wind load rating"],
    images: ["/images/stock/p-4.jpeg"]
  },
  {
    id: 5, title: "Solar Edge Optimizer", category: "Power Conversion", price: "$180.00",
    shortDesc: "Module-level DC power optimizer to mitigate shading losses.",
    description: "Connects to each individual panel to maximize power output and provide module-level monitoring.",
    features: ["99.5% peak efficiency", "Mitigates all shading losses", "Module-level voltage shutdown", "25-year warranty"],
    images: ["/images/stock/p-5.jpeg", "/images/stock/p-1.jpeg"]
  },
  {
    id: 6, title: "Lumina 400W Residential", category: "Residential Solar", price: "$290.00",
    shortDesc: "All-black aesthetic panel designed specifically for modern residential roofs.",
    description: "Combines high power density with a sleek, all-black design that blends seamlessly into any roof type.",
    features: ["All-black aesthetic", "20.1% Efficiency", "Advanced snow load resistance", "25-year performance guarantee"],
    images: ["/images/stock/p-6.jpeg", "/images/stock/p-2.jpeg"]
  },
  {
    id: 7, title: "GridTie Charge Controller", category: "Power Conversion", price: "$850.00",
    shortDesc: "Advanced charge controller for off-grid and hybrid solar installations.",
    description: "Manages the power going into the battery bank from the solar array to prevent overcharging.",
    features: ["MPPT Technology", "Compatible with Lithium & Lead Acid", "LCD Display", "Built-in fault protection"],
    images: ["/images/stock/p-7.jpeg"]
  },
  {
    id: 8, title: "VoltX Industrial Battery 50kWh", category: "Energy Storage", price: "Request Quote",
    shortDesc: "Massive scale storage solution for commercial and industrial facilities.",
    description: "Designed for peak shaving and load shifting in high-demand commercial environments.",
    features: ["50kWh capacity per cabinet", "Scalable to 2MWh", "Advanced BMS", "NEMA 3R enclosure"],
    images: ["/images/stock/p-8.jpeg", "/images/stock/p-3.jpeg"]
  },
  {
    id: 9, title: "Aero Tracker Single-Axis", category: "Hardware", price: "Variable",
    shortDesc: "Automated solar tracking system that follows the sun to increase yield by up to 25%.",
    description: "Motorized single-axis tracker designed for utility-scale solar farms. Maximizes daily energy production.",
    features: ["Up to 25% yield increase", "Self-calibrating algorithms", "Low maintenance AC motors", "Extreme weather stow mode"],
    images: ["/images/stock/p-1.jpeg", "/images/stock/p-5.jpeg"]
  },
  {
    id: 10, title: "Nexus Hybrid Inverter", category: "Power Conversion", price: "$1,800.00",
    shortDesc: "The ultimate all-in-one inverter for solar, battery, and grid integration.",
    description: "Seamlessly manages power from solar panels, battery storage, and the utility grid simultaneously.",
    features: ["8kW continuous output", "Built-in generator support", "0-millisecond transfer time", "Mobile app control"],
    images: ["/images/stock/p-2.jpeg", "/images/stock/p-6.jpeg"]
  },
  {
    id: 11, title: "FlexiPanel 150W Portable", category: "Portable Solar", price: "$220.00",
    shortDesc: "Lightweight, foldable solar panel for RVs, camping, and off-grid living.",
    description: "Highly durable, flexible solar mat that can be draped over tents or mounted on curved RV roofs.",
    features: ["Ultra-lightweight (4.5 lbs)", "Waterproof ETFE coating", "MC4 Connectors", "Folds into a briefcase size"],
    images: ["/images/stock/p-3.jpeg"]
  },
  {
    id: 12, title: "SolarGuard Bird Netting", category: "Accessories", price: "$85.00",
    shortDesc: "Protective mesh to prevent birds and pests from nesting under your solar array.",
    description: "Heavy-duty PVC coated galvanized steel wire mesh designed to protect roof-mounted panels.",
    features: ["100 ft roll", "UV resistant", "Does not void panel warranties", "Easy clip installation"],
    images: ["/images/stock/p-4.jpeg"]
  },
  {
    id: 13, title: "SunMax Bifacial 540W", category: "Commercial Solar", price: "Request Quote",
    shortDesc: "Captures sunlight from both sides, generating up to 30% more energy.",
    description: "Dual-glass module that utilizes reflected light from the ground to boost overall energy yield.",
    features: ["Up to 30% backside yield", "Dual-glass durability", "Zero Light Induced Degradation", "30-year warranty"],
    images: ["/images/stock/p-5.jpeg", "/images/stock/p-8.jpeg"]
  },
  {
    id: 14, title: "EcoMeter Energy Monitor", category: "Accessories", price: "$150.00",
    shortDesc: "Real-time consumption monitor to track your entire home's energy usage.",
    description: "Installs in your electrical panel to provide second-by-second data on what your home is consuming.",
    features: ["Tracks usage by appliance", "Real-time cost tracking", "Wi-Fi enabled", "iOS & Android compatible"],
    images: ["/images/stock/p-6.jpeg"]
  },
  {
    id: 15, title: "AquaSun Solar Water Heater", category: "Thermal Solar", price: "$1,400.00",
    shortDesc: "Evacuated tube solar collector for highly efficient domestic water heating.",
    description: "Uses the sun's thermal energy to heat your home's water, drastically reducing gas or electric heating bills.",
    features: ["Heats water even in winter", "Corrosion resistant", "80-gallon capacity", "Reduces water heating costs by 70%"],
    images: ["/images/stock/p-7.jpeg", "/images/stock/p-1.jpeg"]
  },
  {
    id: 16, title: "ChargePro EV Station", category: "Accessories", price: "$650.00",
    shortDesc: "Level 2 Electric Vehicle charger designed to sync with your solar production.",
    description: "Charge your EV using only excess solar energy, ensuring you drive on 100% clean power.",
    features: ["48 Amp charging", "Solar-only charging mode", "Universal J1772 connector", "Indoor/Outdoor rated"],
    images: ["/images/stock/p-8.jpeg", "/images/stock/p-2.jpeg"]
  },
  {
    id: 17, title: "Lumina Mini 50W", category: "Portable Solar", price: "$75.00",
    shortDesc: "Compact solar charger for keeping tools and devices powered on job sites.",
    description: "Ruggedized mini-panel with integrated USB-C and standard DC outputs.",
    features: ["Integrated USB-C PD", "Impact resistant", "Built-in kickstand", "Direct device charging"],
    images: ["/images/stock/p-1.jpeg"]
  },
  {
    id: 18, title: "Aura Stack Expansion", category: "Energy Storage", price: "$4,200.00",
    shortDesc: "Add-on battery module to expand your existing Aura Home Battery system.",
    description: "Easily expand your storage capacity as your energy needs grow. Plugs directly into the main Aura hub.",
    features: ["Adds 10kWh capacity", "Plug-and-play installation", "Auto-balancing", "Space-saving stackable design"],
    images: ["/images/stock/p-2.jpeg", "/images/stock/p-4.jpeg"]
  },
  {
    id: 19, title: "Titan Roof Hooks", category: "Hardware", price: "$12.00",
    shortDesc: "Tile-roof specific mounting hooks that eliminate the need for drilling.",
    description: "Designed to slide under standard curved tiles to anchor the racking system without compromising roof integrity.",
    features: ["Stainless steel", "No drilling required", "Fits Spanish and flat tiles", "Load tested"],
    images: ["/images/stock/p-3.jpeg"]
  },
  {
    id: 20, title: "SolarEdge Hub", category: "Power Conversion", price: "$2,100.00",
    shortDesc: "Centralized power hub for managing complex multi-array solar deployments.",
    description: "The brain of a large-scale residential system, handling multiple inverter strings and battery banks.",
    features: ["Manages up to 3 inverters", "Integrated backup gateway", "EV charger ready", "12-year warranty"],
    images: ["/images/stock/p-4.jpeg"]
  },
  {
    id: 21, title: "MicroGrid Control Unit", category: "Commercial Solar", price: "Request Quote",
    shortDesc: "Industrial controller for creating localized, self-sustaining microgrids.",
    description: "Disconnects commercial facilities from the main grid during outages and balances local generation and storage.",
    features: ["Seamless islanding", "Generator synchronization", "Phase balancing", "Utility-grade switchgear"],
    images: ["/images/stock/p-5.jpeg", "/images/stock/p-7.jpeg"]
  },
  {
    id: 22, title: "SunMax Flex 300W", category: "Commercial Solar", price: "Request Quote",
    shortDesc: "Lightweight, flexible panel for commercial buildings with weight-restricted roofs.",
    description: "Adheres directly to TPO and membrane roofs without the need for heavy metal racking.",
    features: ["No racking required", "70% lighter than standard panels", "Peel-and-stick backing", "Walkable surface"],
    images: ["/images/stock/p-6.jpeg"]
  },
  {
    id: 23, title: "VoltX Rack Mount 5kWh", category: "Energy Storage", price: "$2,800.00",
    shortDesc: "Server-rack style battery module for DIY off-grid enthusiasts.",
    description: "Standard 19-inch rack mountable lithium iron phosphate (LiFePO4) battery.",
    features: ["LiFePO4 chemistry", "Fits standard server racks", "Built-in breaker", "Parallel up to 16 units"],
    images: ["/images/stock/p-7.jpeg", "/images/stock/p-1.jpeg"]
  },
  {
    id: 24, title: "EcoGrid Microinverter", category: "Power Conversion", price: "$145.00",
    shortDesc: "Panel-level AC inverter for complex residential roofs with multiple angles.",
    description: "Converts DC to AC directly beneath the panel, ensuring one shaded panel doesn't affect the rest of the array.",
    features: ["Panel-level conversion", "No high-voltage DC on roof", "25-year warranty", "Plug-and-play trunk cable"],
    images: ["/images/stock/p-8.jpeg"]
  },
  {
    id: 25, title: "SolarGuard Cleaning Kit", category: "Accessories", price: "$120.00",
    shortDesc: "Extendable water-fed pole and soft-bristle brush for safe panel maintenance.",
    description: "Keep your array operating at peak efficiency by safely removing dust, pollen, and bird droppings from the ground.",
    features: ["24ft carbon fiber pole", "Scratch-free bristles", "Inline soap dispenser", "Standard hose attachment"],
    images: ["/images/stock/p-1.jpeg", "/images/stock/p-3.jpeg"]
  }
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
    // Smooth scroll back to the top of the product section when changing pages
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
    <section ref={sectionRef} className="w-full bg-[#f8f9fa] font-sans py-20 lg:py-32">
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

        {/* --- PRODUCT GRID (Animated on page change) --- */}
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
                  {/* Overlay Hover Icon */}
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
                    <span className="font-extrabold text-yellow-400 text-[16px]">
                      {product.price}
                    </span>
                    <span className="text-[12px] font-bold text-[#061d38] uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
                      View Details
                    </span>
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

              <div className="w-full lg:w-[50%] bg-[#f8f9fa] flex flex-col p-4 sm:p-6 lg:p-8 border-r border-gray-100">
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

              <div className="w-full lg:w-[50%] p-6 sm:p-8 lg:p-12 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200">
                <span className="text-[#04c453] text-[12px] font-bold tracking-widest uppercase mb-2">
                  {selectedProduct.category}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061d38] tracking-tight mb-4">
                  {selectedProduct.title}
                </h2>
                
                <div className="text-2xl font-black text-yellow-400 mb-6 pb-6 border-b border-gray-100">
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

                <Link href="/contact"
                className="mt-auto w-full flex items-center justify-center gap-3 bg-[#061d38] hover:bg-amber-400 text-white py-4 sm:py-5 px-8 font-bold text-[15px] uppercase tracking-wider transition-colors duration-300 rounded-sm shadow-md">
                  <ShoppingCart size={20} />
                  Contact Us now
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
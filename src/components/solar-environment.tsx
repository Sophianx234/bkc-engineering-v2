import React from 'react';
import { HandCoins, SunMedium, TrendingDown, Leaf } from 'lucide-react';

export default function SolarEnvironmentFeatures() {
  const features = [
    {
      title: "Increasing Energy Needs",
      icon: <HandCoins className="w-6 h-6 text-slate-600" />,
      description: "Rapid urbanization and industrial growth continue to increase demand for dependable electricity solutions."
    },
    {
      title: "Year-Round Solar Potential",
      icon: <SunMedium className="w-6 h-6 text-slate-600" />,
      description: "Ghana's high solar radiation levels create ideal conditions for efficient and reliable solar energy generation."
    },
    {
      title: "Cost-Effective Alternative",
      icon: <TrendingDown className="w-6 h-6 text-slate-600" />,
      description: "Solar energy helps homes and businesses reduce long-term electricity expenses and improve energy stability."
    },
    {
      title: "Renewable Energy Growth",
      icon: <Leaf className="w-6 h-6 text-slate-600" />,
      description: "Policies and clean energy initiatives continue to support investment and innovation in solar technology."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 max-w-2xl mx-auto leading-tight">
          Why Ghana Is the Perfect Environment for Solar Energy
        </h2>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => {
            // Logic to apply borders only on the inside of the grid (the "cross" shape)
            const isLeftCol = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-8 md:p-12
                  ${index<=1 ? 'md:border-b border-slate-200' : ''} 
                  ${isLeftCol ? 'md:border-r border-r-slate-200' : ''}
                `}
              >
                {/* Small Subheading */}
                <h3 className="text-sm font-semibold text-slate-500 tracking-wide mb-6">
                  {feature.title}
                </h3>

                {/* Icon inside a subtle circle */}
                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center mb-6 bg-slate-50">
                  {feature.icon}
                </div>

                {/* Main Description */}
                <p className="text-slate-900 font-medium leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import { Shield, Award, Sparkles } from 'lucide-react';

const standards = [
  {
    icon: Shield,
    text: '100% Sterile Single-Use Tools',
  },
  {
    icon: Award,
    text: 'Anatomy-Certified Experts',
  },
  {
    icon: Sparkles,
    text: 'Clinical-Grade Protocols',
  },
];

const WestendStandards = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <h2 className="text-base md:text-lg font-bold text-[#2c3e50] shrink-0 whitespace-nowrap">
            Westend Standards:
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-8 lg:gap-12">
            {standards.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#13aea1] flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-[#2c3e50] text-base md:text-lg">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WestendStandards;

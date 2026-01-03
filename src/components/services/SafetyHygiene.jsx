import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SafetyHygiene = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#13aea1] to-[#0e8c81]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Safety & <span className="text-white/90">Hygiene First</span>
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Your safety is our top priority. We maintain the highest standards of hygiene 
              and follow strict sterilization protocols for all our treatments.
            </p>
            <div className="space-y-4">
              {[
                'Single-use sterile cups and equipment',
                'Certified and trained practitioners',
                'Clean and sanitized treatment rooms',
                'Proper disposal of medical waste',
                'Regular health and safety audits'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check size={20} className="text-white flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img  
              className="w-full h-auto rounded-2xl shadow-2xl" 
              alt="Sterile hijama equipment and clean treatment room"
             src="https://images.unsplash.com/photo-1563932127565-699eeea1e17a" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetyHygiene;
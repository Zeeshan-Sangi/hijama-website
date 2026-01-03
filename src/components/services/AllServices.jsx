import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AllServices = () => {
  const allServicesList = [
    'Light Cupping',
    'Medium Cupping',
    'Strong Cupping',
    'Moving Cupping & Massage Cupping',
    'Needle Cupping',
    'Hot Cupping',
    'Flash Cupping',
    'Bleeding Cupping (Hijama)',
    'Herbal Cupping',
    'Water Cupping',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Full Range of <span className="gradient-text">Cupping Techniques</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide variety of cupping methods to address your specific health concerns and wellness goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {allServicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#13aea1]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#13aea1]" />
                </div>
                <span className="text-lg text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServices;